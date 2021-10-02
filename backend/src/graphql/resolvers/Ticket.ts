const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Ticket } = require('../../models/Ticket');
const { Member } = require('../../models/Member');
const { v4: uuidv4 } = require('uuid');
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
   
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const ticketResolvers = {

    Query: {
        async getUserticket(_:any ,{ }:any, context:any) {

            const {id} = checkAuth(context);

            console.log(id)
   
            const ticket = await Ticket.find({member:id}).sort({createdAt:-1})
  
            console.log(ticket)
            return ticket
        
          
        
          },

          async getUserticketById(_:any , { id }:any, context:any) {


            const data = await Ticket.findOne({id})

          
         return data
          
        
          },
       
      },

      Mutation: {
    
        async addticket(_:any ,{ticketTitle , answer }:any, context:any) {

            const {id} = checkAuth(context);

const member = await Member.findOne({_id:id})

      



  
const data = new Ticket ({
    ticketTitle:ticketTitle,
    status:"open",
    createdAt:new Date().toISOString(),
    member:id,
    comment : [
        {
            name:member.username,
            time:new Date().toISOString(),
            answer
        }
    ]


})

const ticket = await data.save()

 return ticket
          
          
          
        
          },


          async getUserticketByIdComment(_:any ,{id:_id , answer }:any, context:any) {

            const {id} = checkAuth(context);
            const member = await Member.findOne({_id:id})
  
              
      const data =      {
              name:member.username,
              time:new Date().toISOString(),
              answer
          }
             
    const something =  await  Ticket.findOneAndUpdate({_id},{ $set:{editedAt:new Date().toISOString() }} , {new: true , upsert: true }).exec();
  
    const something2 =  await  Ticket.findOneAndUpdate({_id},{ $push:{ "comment": data}} , {new: true , upsert: true }).exec();
  

    return something2
        
          },

          async getUserticketByIdClose(_:any ,{id:_id , status }:any, context:any) {

            const {id} = checkAuth(context);     const member = await Member.findOne({_id:id})
  
            await  Ticket.findOneAndUpdate({_id},{ $set:{editedAt:new Date().toISOString() }} , {new: true , upsert: true }).exec();
        
                     
            const something =  await  Ticket.findOneAndUpdate({_id},{ $set:{status:status }} , {new: true , upsert: true }).exec();
          
           
          
        
             return something

           
   
        
          },
    },

 
}

export { ticketResolvers }

