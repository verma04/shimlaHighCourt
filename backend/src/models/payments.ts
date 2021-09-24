const { model, Schema } = require('mongoose');

const PaymentsSchema = new Schema({


     memberId: {
       type: String ,
      
      },
      price: {
        type: String ,
       
       },
       
     
      createdAt: String,
    
  


  
});

const Payments = model('Payments', PaymentsSchema);

export { Payments }