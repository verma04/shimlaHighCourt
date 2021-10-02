import { useState, useEffect } from 'react';

import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { useNotifications } from '../../apollo/actions'
import  { Section  } from './Style';
import { Header } from '../ComanStyle/Header'
import ContentLoader, { Facebook } from 'react-content-loader'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useGetUser } from '../../apollo/actions';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Editor = dynamic(
    () => {
      return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
  );
 const  Dashboard = () => {

  const router = useRouter();
  
  const { data, loading, error } = useNotifications();


  console.log(data)
        return (
            <>
   
          <Section>
                 <div className="flex" >
                     
                     <Header>
                 <div className='flex-1' >
   
   <div onClick={()=>router.push("/admin/members")} className="flex-item" >
   <i className="fas fa-comments"></i>

   <h4>Notifications </h4>
   {data && data.notifcations === null ? (

 <span> {data && data.notifcations.length}</span>
   ):
   (
    <span>0</span>
   )
 }
  
   </div>
   <div className="flex-item" >
   <i className="fas fa-comments"></i>
   <h4>OurDue Payments</h4>

<span></span>
       </div>
    <div  onClick={()=>router.push("/admin/chambers")} className="flex-item" >
    <i className="fas fa-comments"></i>
    <h4> Chambers</h4>

<span>300</span>
       </div>

       <div className="flex-item" >
       <i className="fas fa-comments"></i>
       <h4>Parking Subscriptions</h4>

<span>200</span>
       </div>

                     </div>
                     </Header>
          

          <h1>Welcome To dashbaord</h1>
                     
                     </div> 


                     <Editor
          wrapperclassName="demo-wrapper"
          editorclassName="editor-class"
          toolbarClassName="toolbar-class"
          wrapperStyle={{ border: "2px solid ",  borderShadow:"rgb(0 0 0 / 10%) 0px 3px 30px, rgb(0 0 0 / 10%) 0px 3px 20px;" , borderRadius: "0.5rem" ,backgroundColor:'rgb(255,255,255)'  ,  marginBottom: "20px" }}
          editorStyle={{ height: "400px", padding: "10px"}}
          toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {  alt: { present: true, mandatory: true } },
        }}
        />
                     </Section>
            
            </>
        )
    
}

export default Dashboard;
