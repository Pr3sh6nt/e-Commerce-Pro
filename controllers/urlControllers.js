const shortid = require('shortid');
const urlModel = require('./../models/url');

exports.createNanoDetails = async (req,res) => {
    try{
       const body = req.body;
       if(!body.url) return res.status(400).json({ error: "url is required" });
       const shortID = shortid(8);
       let data = await urlModel.create({
        shortId : shortID,
        redirectURL: body.url,
        visithistory: [],
       });
       res.status(200).json({ id : shortID });
    }catch(err){
        res.json({message: 'invalid credentials!'});
    }
}
