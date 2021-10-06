const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Payments } = require('../../models/payments');

const { v4: uuidv4 } = require('uuid');
const {  PaymentSchedule } = require('../../models/PaymentSchedule')
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
   
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const paymentsResolvers = {

    Query: {
        async getpayments(_:any, body:any, context:any) {
          
    
    
            try {
                 
            
                return  Payments.find({});
              
               
    
        }
        catch (err) {
            console.log(err)
        }
    
    },
       



    async userAllPayments(_:any, body:any, context:any) {
          
   const {id} = checkAuth(context);
    
      try {
           
        const per = await  Payments.find({memberId:id}).sort({createdAt:-1});
      
         
     return per
         

  }
  catch (err) {
      console.log(err)
  }

},


      },

      Mutation: {
        async servicepayment(_:any, {payment_id , userid , serviceID}:any, context:any) {
          
    
          const Sch  = await PaymentSchedule.find({})
    
          try {
               
          
              console.log(payment_id, "payment" , userid , serviceID , "serie")
            
               
              


            

              const filter = Sch.find((element:any)=> element.id ===serviceID )

  
  
  const data = new Payments ({
    memberId :userid,
    paymentId:payment_id,
    status:"done",
    month:filter.month,
    createdAt: new Date().toISOString(),
    paymentBilling: filter.list,
   totalmoneny: filter.list.map((item:any) => item.price).reduce((prev:any, curr:any) => prev + curr, 0) 
  })
   

  const pay =   await data.save()
  
  




  const member =  await PaymentSchedule.findOneAndUpdate({_id: serviceID },{  $set: { "status": "done" }   },  { new: true, upsert: true }).exec()
  
  console.log(member)
  
pay.serviceID =serviceID


  return pay

      }
      catch (err) {
          console.log(err)
      }
  
  },
      },
}

export { paymentsResolvers }

