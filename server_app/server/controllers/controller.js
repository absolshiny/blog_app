const { User, Message, adminBlog } = require('../models/models');

const getallnews = async (req, res) => {
    res.json({news : req.data});
};

const add_contact = async (req, res) => {
    try{
        const user_obj = {
            email : req.body.email,
            cellphone : req.body.cellphone
        };
        console.log(user_obj);
        let UserFrDb = await User.getByEmail(user_obj.email);
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
        const response = await Message.insertMessage(messageObj);

        if (response.code == 201) {
            res.status(response.code).json({message: "Message send"});
        }else{
            throw new Error('Cant insert message');
        }
    }   
    catch (error){
        console.error(error);
        res.status(400).json({message: error.message})
    }
};

const login = async (req, res) => {
    try{
        const response = await adminBlog.ValidateUser(req.body);
        console.log(response);
        if (response.code == 200) {
            res.status(response.code).json({message: response.message});
        }else{
            throw new Error (response.message); 
        }
    }
    catch (error){
        console.log(error);
        if (error.message.includes('not found')) {
          res.status(404).json({message: error.message});
        } else {
          res.status(401).json({message: error.message});
        }    
    }
};

module.exports = {
    getallnews,
    add_contact,
    login
};