const bcrypt = require("bcryptjs")
const {getUser} = require("../../models/users/user.model.js")

async function httpGetUser(req, res) {
    
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
        console.log(error)
        return res.status(500).json({error: "Something happened on our end!"})
    }
}

async function httpGoogleSignIn(req, res){
    const {credential, clientId} = req.body
}

async function decodeGoogleToke(){
    const client = new 
}