const userModel = require('../models/user-schema');

const userSignup = async (req, res, next) => {
  try {

    const userExists =await userModel.findOne({username:req.body.username});

    if(userExists){
        return res.status(400).json({message:'User Already Exists!!!'});
    }
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(200).json({message:newUser});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

module.exports = userSignup;
