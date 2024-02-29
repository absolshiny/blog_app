const { User, Message } = require('../models/models');

const getallnews = async (req, res) => {
    res.send(JSON.stringify(req.data));
};

const add_contact = async (req, res) => {
    try{
        const user_obj = {
            email : req.body.email,
            cellphone : req.body.cellphone
        };
        console.log(user_obj);
        var UserFrDb = await User.getByEmail(user_obj.email);
        if (!UserFrDb) {
            UserFrDb = await User.addUser(user_obj);
            console.log(`user ${UserFrDb.email} added`);
        } else {
            console.log(`user ${UserFrDb.email} found`);
        }
        console.log(UserFrDb);
        const messageObj = {
            contact_id: UserFrDb.id,
            message: req.body.message
        };
        const message = await Message.insertMessage(messageObj);

        if (message) {
            res.send('message added');
        }
    }   
    catch (error){
        console.error(error);
        // Handle other errors appropriately
        throw error; // Re-throw for potential error handling in caller
    }
};

const login = async (req, res) => {
    res.send('logged');
};

module.exports = {
    getallnews,
    add_contact,
    login
};