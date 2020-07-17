const User = require("./../Model/User");
exports.homePage = (req,res) => {
    User.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Error fetching home!"
            })
        }
        return res.status(200).json(data);
    })
}

exports.getUser = (req,res) => {
    User.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Error fetching home!"
            })
        }
        return res.status(200).json(data);
    })
}

exports.createUser = (req,res) => {
    const user = new User(req.body);
    user.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:"Something went wrong!"
            })
        }
        return res.status(200).json(data);
    })
    
}