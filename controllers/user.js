const {uuid} = require("uuidv4");

let users = [];

const getUsers = (req, res) => {
    res.send(users);
}; 

const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuid()});

    res.send('User with the name ${user.firstname} in database')
}

const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send('User with the id ${id} deleted from the database')
}

const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

const updateUser = (req, res) => {
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
}

module.exports = { updateUser, getUsers, getUser, deleteUser, createUser}
