const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  avatar: String,
  gender: String,
  Chamber: String,
  notifcations: [
    {
     type: {
       type: String ,
      
      },
      message: {
        type: String ,
       
       },
      createdAt: String,
    },
  ],

  chamberDet: [
    {
     month: {
       type: String ,
      
      },
      payment: {
        type: String ,
      },
      status: {
        type: String,
      },
      chamberId: {
        type: String,
      },
      createdAt: String,
    
    },
  ],
  
});

const Member = model('Member', MemberSchema);

export { Member}