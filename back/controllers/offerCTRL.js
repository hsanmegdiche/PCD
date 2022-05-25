
const Offer = require("../models/Offer");
const jwt = require("jsonwebtoken");

const OfferCtrl = {
  Create: async (req, res) => {

    try {
      const token = req.header("Authorization");
      if (!token) return res.status(400).json({ msg: "Invalid Authentication" });
  
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Invalid Authentication" });
          
     idrecruiter = user.id;
      console.log(user)    
      
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
    
    

      const { offer_title,description,skills,Languages,pdf,duration } = req.body;

    
        const newOffer = new Offer({
            offer_title,description,skills,Languages,pdf,duration,idrecruiter
        });
        await newOffer.save();

      

      // Save mongodb
      return res.json({ msg: "mriguel" });
    } 
  }
  module.exports = OfferCtrl;
