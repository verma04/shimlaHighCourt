const { model, Schema } = require('mongoose');

const PaymentsSchema = new Schema({


     memberId: {
       type: String ,
      
      },
      paymentId: {
        type: String ,
        require: true
      },
      totalmoney: {
        type: String ,
       
       },
       status: {
        type: String,
      },
      month: {
        type: String ,
       
       },
       
     createdAt: String,
    
      paymentBilling: [
        {  
       price: {
            type: String ,
           
           },
        serviceName: {
            type: String,
          },
          serviceId: {
            type: String,
          },
         },
      ],


  
});

const Payments = model('Payments', PaymentsSchema);

export { Payments }