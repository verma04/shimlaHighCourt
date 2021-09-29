const { model, Schema } = require('mongoose');

const MemberSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  avatar: String,
  gender: String,
  address: String,
  Chamber: String,
  role: {
    type: String ,
    default:"user"
   
   },
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
      price: {
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
  

  parkingBilling: [
    {  
    month: {
       type: String ,
      
      },
     
      price: {
        type: String ,
       
       },
      payment: {
        type: String ,
      },
      status: {
        type: String,
      },
      parkingId: {
        type: String,
      },
      createdAt: String,
    
    },
  ],
  
});

const Member = model('Member', MemberSchema);

export { Member}