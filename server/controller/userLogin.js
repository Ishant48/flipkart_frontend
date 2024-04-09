const userModel = require('../models/user-schema');

const userLogin = async (req, res, next) => {
  try {
    const userExists = await userModel.findOne({ username: req.body.username, password: req.body.password });

    if (userExists) {
      return res.status(200).json({ message: userExists });
    }
    else {
      return res.status(401).json({ message: "User doesn't exists!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = userLogin;