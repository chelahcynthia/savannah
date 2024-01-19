const express = require('express');
const app = express();
const port = 3000;

const users = [
{ id: 1, name: 'John', username: 'john', email: 'john@gmail.com' },
{ id: 1, name: 'Sarah', username: 'sarah', email: 'sarah2@gmail.com' },
{ id: 1, name: 'Hannah', username: 'hannah', email: 'hannah@gmail.com' },
{ id: 1, name: 'Mike', username: 'mike', email: 'mike@gmail.com' },
]











app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);
})