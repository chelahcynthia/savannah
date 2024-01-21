const bcrypt = require("bcryptjs")
const {OAuth2Client} = require("google-auth-library")
const jwt = require("jsonwebtoken")

const {getUser, createUser} = require("../../models/users/user.model.js")
async function httpGetUser(req, res) {
    
}

async function httpCreateUser(req, res){
    const {email, username, password, name} = req.body

    if(!email || !username || !password || !name){
        return res.status(400).json({error: "missing credentials"})
    }
    try{
        const oldUser = await getUser({email})
        if(oldUser){
            return res.status(405).json({error: "User already exists!"})
        }
    
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await createUser({email, username, password: hashedPassword, name})
    
        const token = jwt.sign({user_id:user.id, email:user.email}, "token_secret_bana",{expiresIn: "14d"})
        delete user._doc.password
    
        return res.status(200).json({token, user})
    }catch(err){
        return res.status()
  .json({error: "Bad request!!"})  }
}

async function httpLogin(req, res){
    try{
        const {email, password} = req.body
         //no input
         if (!(email && password)) {
            return res.status(400).json({ error: "email and password are required" })
          }
    
          //get user
          const user = await getUser({ email })
      
          //user not found
          if (!user) {
            return res.status(404).json({ error: "no user with email found" })
          }

          console.log(user)    
          //compare passwords
          if(user && (await bcrypt.compare(password, user.password))){
            const token = jwt.sign({
                user_id: user._id, email: user.email
            }, "token_secret_bana", {expiresIn: "14d"}
            )
            delete user._doc.password
    
            return res.status(200).json({user, token})
          }else{
            return res.status(400).json({error: "wrong password!"})
          }
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Something happened on our end!"})
    }
}

async function httpGoogleSignIn(req, res){
    const {credential, clientId} = req.body
    const payload = await decodeGoogleToken(credential, clientId)

    const oldUser = await getUser({email: payload.email})

    if(oldUser){
        const token = jwt.sign({user_id: oldUser.id, email:oldUser.email},
            "token_secret_bana",
             {expiresIn:"14d"})
        delete oldUser._doc.password

        return res.status(200).json({token, user: oldUser})
    }

    const user = await createUser({
        email: payload.email,
        name: payload.name,
        username: payload.name,
    })

    const token = jwt.sign(
        {user_id: user._id, email: user.password},
        "token_secret_bana",
        {expiresIn: "14d"}
    )
    delete user._doc.password

    return res.status(200).json({token, user})
}

async function decodeGoogleToken(clientId,credential){
    const client = new OAuth2Client(clientId)

    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: clientId
    })

    return ticket.getPayload()
}

module.exports ={
    httpCreateUser,
    httpGoogleSignIn,
    httpGetUser,
    httpLogin
}

