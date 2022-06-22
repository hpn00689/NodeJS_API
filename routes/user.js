const express = require("express");

const router = express.Router();

const users = [
    {
        "firstname": "Hoang",
        "lastname": "Nguyen",
        "age": 23
    }, 
    {
        "firstname": "Thuy",
        "lastname": "Long",
        "age": 23
    }, 
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
}); 

router.post('/', (req, res) => 
{
    const user = req.body;
    users.push(user);

    res.send('User with the name ${user.firstname} in database')
})
module.exports = router;
