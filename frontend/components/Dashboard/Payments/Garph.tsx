import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment'



interface garph {

  graph: payment[] | undefined; 
}

interface payment {
  memberId:String
  price:String
  createdAt:string
}



const Graph:React.FC<garph> = (graph) => {
   
  

  const data = [
    {
      name: moment().subtract(7, "days").format("MMM Do YY"),
     
      pv: 2400,
      
    },
    {
      name: moment().subtract(6, "days").format("MMM Do YY"),
     
      pv: 1398,
     
    },
    {
      name: moment().subtract(5, "days").format("MMM Do YY"),
  
      pv: 9800,
    
    },
    {
      name: moment().subtract(4, "days").format("MMM Do YY"),
     
      pv: 3908,
   
    },
    {
      name: moment().subtract(3, "days").format("MMM Do YY"),
  
      pv: 4800,
  
    },
    {
      name: moment().subtract(2, "days").format("MMM Do YY"),
  
      pv: 3800,
      
    },
    {
      name: moment().subtract(1, "days").format("MMM Do YY"),
     
      pv: 4300,
      
    },
    {
      name: "Today",
     
      pv: 4300,
      amt: 2100,
    },
  ];
 
    return (
        <>
           <ResponsiveContainer width="95%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
         
        </BarChart>
      </ResponsiveContainer>
        </>
    )
}

export default Graph
