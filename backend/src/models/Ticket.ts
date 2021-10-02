const { model, Schema } = require('mongoose');

const TicketSchema = new Schema({
    ticketTitle: {
   type:   String,


  },

  status: String,



  createdAt: String,

  editedAt: {
  type: String,
  default:null
  }
  ,

  comment: [
    {
      name:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    answer: {
        type: Object,
required: true
      
     },
     status: String

},
{ minimize: false }
]
,

 
  // MongoDB is "schemaless"/NOsql, doesn't have relations, but the ORM itself lets us have relations between our models
  // this lets us automatically populate these fields later if we want using Mongoose methods
 
 
  member: {
    type: Schema.Types.ObjectId,
    ref: 'members',
  },
});

const Ticket = model('Ticket', TicketSchema);

export { Ticket }