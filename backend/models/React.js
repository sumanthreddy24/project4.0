const {mongoose,Schema }= require("mongoose")




const reactSchema = new mongoose.Schema({

   

  react:{

    type : String,

    enum :["love","sad","angry","like","haha","wow"],

    required: true,

  },

  postRef:{

    type : Schema.Types.ObjectId,

    ref: "Post",

  },

  reactBy:{

    type :Schema.Types.ObjectId,

    ref: "User",

  }

},

{

  timestamps: true,

}

)




module.exports = mongoose.model("React", reactSchema);