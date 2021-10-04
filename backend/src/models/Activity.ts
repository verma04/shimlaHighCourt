const { model, Schema } = require('mongoose');

const ActivitySchema = new Schema({
   
      message: {
        type: String ,
     
       },

        topic: {
            type: String ,
        
       }
,
    
     
      createdAt:  String,


      activityId: {
            type: String ,
    
           },
    

           adminId: {
            type: String ,

           },
    
        
      

  
});

const Activity = model('Activity', ActivitySchema);

export { Activity }