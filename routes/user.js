const express = require("express");
const {uuid} = require("uuidv4");
const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
}); 

router.post('/', (req, res) => 
{
    const user = req.body;

    users.push({...user, id: uuid()});

    res.send('User with the name ${user.firstname} in database')
})


router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = user.find((user) => user.id == id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send('User with the id ${id} deleted from the database')
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { firstName, lastName, age } = req.body; 
    
    const user = users.find((user) => user.id == id)

    if(firstName) { 
        user.firstName = firstName;
    }

    if(lastName) { 
        user.firstName = lastName;
    }

    if(age) { 
        user.age = age;
    }   

    res.send('User with the id ${id} has been updated')

})

module.exports = router;
