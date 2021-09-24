const { model, Schema } = require('mongoose');

const ParkingSchema = new Schema({


     memberId: {
        type: Schema.Types.ObjectId,
        ref: 'members',
        
      },
     

      
      createdAt: String,
    
      parkingCharge: {
        type: String ,
       
       },


  
});

const Parking = model('Parking', ParkingSchema);

export { Parking}