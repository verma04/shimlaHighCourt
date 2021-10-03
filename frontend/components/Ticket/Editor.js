import React , {useState} from 'react'


import { convertFromRaw, convertToRaw } from 'draft-js';
import {EditorState} from "draft-js";
import dynamic from 'next/dynamic'; 

import 'draft-js/dist/Draft.css';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod)=> mod.Editor),
  { ssr: false }
)





const Editorr = ({onContentStateChange}) => {
 
    return (
      
             
        <Editor
        
          wrapperClassName="demo-wrapper"
     
          onContentStateChange={onContentStateChange}
          editorClassName="demo-editor"
      
          toolbarClassName="toolbar-class"
          wrapperStyle={{ border: "2px solid " , borderRadius: "0.5rem" ,backgroundColor:'rgb(255,255,255)'  ,  marginBottom: "20px" }}
          editorStyle={{ height:  "300px", padding: "10px"}}
          toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        
        }}
        />

        
    )
}

export default Editorr
