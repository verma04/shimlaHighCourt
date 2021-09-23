const { model, Schema } = require('mongoose');

const ActivitySchema = new Schema({
   
      message: {
        type: String ,
       },

    
     
      createdAt:  String,
    
   

  
});

const Activity = model('Activity', ActivitySchema);

export { Activity }