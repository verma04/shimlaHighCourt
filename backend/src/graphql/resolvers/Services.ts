const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');
const checkAuth = require('../../util/checkAuth');
const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const { Member } = require('../../models/Member');
const { Servcies } = require('../../models/Services');
const { v4: uuidv4 } = require('uuid');
var mongoose = require('mongoose');
function generateToken(user:any) {
  return jwt.sign(
    {
      id: user.id,
   
    },
    `"sddsdds"`,
    { expiresIn: '1h' }
  );
}

const ServicesResolvers = {
  Query: {
    async getServices(_:any, { body }:any, context:any) {
     
     
      // const user = checkAuth(context);

      try {
        const services = await Servcies.find().sort({ createdAt: -1 });
        return services;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getChamber(_:any, { body }:any, context:any) {
     
     
      // const user = checkAuth(context);

      try {
        const services = await Servcies.findOne({servicesName: "Chambers"})
        
         
        const data = services.servcieList;
        const  data2 = await Member.find({})
       

        const final:any = []
       await  data.forEach( async  (element:any) => {
         
                 

  if(data2.find((element2:any) => element2.id === element.member)){

            const found = data2.find((element2:any) => element2.id === element.member );
          
       
            const   arr = await {  
               "username" : found.username  ,
             "email": found.email ,
               "avatar":  found.avatar ,
                   "id" : element.id ,
                      "chamberId":  element.chamberId ,
          
            }

          


         final.push(arr)

          }

          else if ( data2.find((element2:any) => element2.id !== element.member   )) {
            const   arr = await {  
              "username" : "empty"  ,
            "email": "empty" ,
              "avatar":  "empty",
                  "id" : element.id ,
                     "chamberId":  element.chamberId ,
         
           }

         


        final.push(arr)
          }
           
        });

   return final
 
      } catch (err) {
        throw new Error(err);
      }
    },

    async deleteServices(_:any, { id }:any, context:any) {
      

      // const user = checkAuth(context);
      try {
           
      const data  = Servcies.findOneAndDelete({_id:id})
     
      return data
    
     
    
    }
    catch (err) {
      console.log(err)
    }
    
    }
    },
  Mutation: {
    async createServices(_:any, { servicesName , servicesItems ,servicesPrice, servicesInterval,servicesDescription}:any, context:any) {
      
  console.log(servicesName)

        try {
             
            const ser = await  Servcies.findOne({servicesName})
              
            

            if(ser) {
                return   new UserInputError('Service Exist')
                
            }

        const newUser = new  Servcies({
         servicesName,
         servicesItems ,
         servicesPrice, 
         servicesInterval,
         servicesDescription,
         uniq:'id' + (new Date()).getTime(),
         createdAt: new Date().toISOString()
          });
    
          // save the user to the DB
          const res = await newUser.save();
  
          console.log(res)

          return    res
          
 
    }
    catch (err) {
        console.log(err)
    }

},


async addChambers(_:any, { id, price }:any, context:any) {
      
  

  try {

   const ser = await Servcies.findOne({servicesName: "Chambers"})
  
  
   const found = ser.servcieList.find((element:any )=> element.chamberId === id);

   if (found) {
    return new UserInputError('Chamber unique_id already found')
  }

  var _id = mongoose.Types.ObjectId();
      
        const data = {
          createdAt: new Date().toISOString(),
          chamberId:id,
          price,
          _id
        }
   
   
      Servcies.findOneAndUpdate({servicesName: "Chambers"},{ $push:{ "servcieList": data }} , {new: true}, (err:any, doc:any) => {
        if (err) {
           console.log(err)
        }
    
        
    });
  
  //   Member.findOneAndUpdate({_id: member},{ "$set":{ "Chamber": data }} , {new: true}, (err:any, doc:any) => {
  //     if (err) {
  //         console.log("Something wrong when updating data!");
  //     }
  
      
  // });

  const send = {
  "username" : "empty"  ,
  "email": "empty" ,
    "avatar":  "empty",
        "id" : _id ,
           "chamberId":  id ,
  }
    return send
    

}
catch (err) {
  console.log(err)
}

},

   
  },
}

export { ServicesResolvers }

