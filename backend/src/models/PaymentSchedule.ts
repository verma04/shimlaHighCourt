const { model, Schema } = require('mongoose');

const PaymentScheduleSchema = new Schema({

    member: {
        type: Schema.Types.ObjectId,
        ref: 'members',
      },
    

    month: {
       type: String ,
      
      },
      status: {
        type: String,
      },
      uniq: {
        type: String,
      },
      createdAt: String,
      list: [
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

        }
      ],
     
    
  

  
});

const PaymentSchedule = model('PaymentSchedule', PaymentScheduleSchema);

export { PaymentSchedule}