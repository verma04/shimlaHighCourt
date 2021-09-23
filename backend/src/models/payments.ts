const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({


     memberId: {
       type: String ,
      
      },
     
      createdAt: String,
    
  


  
});

const Member = model('Member', MemberSchema);

export { Member}