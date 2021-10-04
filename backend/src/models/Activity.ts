const { model, Schema } = require('mongoose');

const ActivitySchema = new Schema({
   
      message: {
        type: String ,
        required:true,
       },

        topic: {
            type: String ,
            required:true,
       }
,
    
     
      createdAt:  String,


      activityId: {
            type: String ,
            required:true,
           },
    

           adminId: {
            type: String ,

           },
    
        
      

  
});

const Activity = model('Activity', ActivitySchema);

export { Activity }