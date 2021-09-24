const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({


     memberId: {
       type: String ,
      
      },
      price: {
        type: String ,
       
       },
       
     
      createdAt:  {
        type: String ,
       
       },
  


  
});

const Member = model('Member', MemberSchema);

export { Member}