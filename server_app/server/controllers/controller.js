
const getallnews = async (req, res) => {
    res.json('news');
};

const add_contact = async (req, res) => {
    res.json('contac added');
};

const login = async (req, res) => {
    res.json('logged');
};

module.exports = {
    getallnews,
    add_contact,
    login
};