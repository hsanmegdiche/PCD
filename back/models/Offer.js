const mongoose = require("mongoose");
const OfferSchema = new mongoose.Schema({
  offer_title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  skills: {
    type: String,
    required: true,

    trim: true,
  },
Languages:{
    type: String,
    required: true,

    trim: true,
},

  pdf: {
    type: String,
    trim: true,
  },
 


duration:{
    type: String,
}
  ,
idrecruiter:{
    type: mongoose.Schema.Types.ObjectId,

},
}
);
module.exports = mongoose.model("Offer", OfferSchema);
