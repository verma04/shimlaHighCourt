import React from "react";


import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake'
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';

  const App = ({info , member}) => {

    const pdfDownload = e => {
        e.preventDefault()
        let doc = new jsPDF("landscape", 'pt', 'A4');
        const pdfTable = document.getElementById('pdf-view');
        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);
      
        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();

    }

  
    const data =  info.paymentBilling.map(t => ({ id:t.serviceId ,  description:"Month subscription" , name: t.serviceName, quantity: 1 , price:t.price})) 
   


  return (

    <>
    <th  onClick={pdfDownload} >
    <span style={{background:"#32CD32", cursor:"pointer"}}  className="open" >
    <i className="fas fa-file-invoice"></i>   Invoice
    </span>
        </th>
    <div  style={{display:"none" , padding: 20}} id="pdf-view">


      <Row>
        <Col>
          <Divider>Invoice</Divider>
        </Col>
      </Row>
      
      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>Amakein Technologies Pvt Ltda</h3>
          <div>Main Bus Stop BAROL, </div>
          <div>PO, Dari, Dharamshala,</div>
          <div> Himachal Pradesh 176057</div>
       
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>10-01-2018</td>
            </tr>
            <tr>
              <th>Due Date :</th>
              <td>10-01-2018</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <div>Bill To: <strong>{member.username}</strong></div>
        <div>{member.address}</div>
    
      </Row>


      <Row style={{ marginTop: 48 }}>

         
        <Table dataSource={
            data
    
    }
        pagination={false}
        >

            




          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Month subscription" dataIndex='description' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price" dataIndex='price' />
          <Table.Column title="Line Total" />
        </Table>
      </Row>

      <Row style={{ marginTop: 48 }}>
        <Col span={8} offset={16}>
          <table>
            <tr>
              <th>Gross Total :</th>
              <td>Rs. {info.paymentBilling.map(item =>    parseInt(item.price)).reduce((prev  , curr) => prev + curr, 0)}</td>
            </tr>
            <tr>
              <th>IGST @6% :</th>
              <td>Rs. 0</td>
            </tr>
            <tr>
              <th>CGST @6% :</th>
              <td>Rs. 0</td>
            </tr>
            <tr>
              <th>Nett Total :</th>
              <td>Rs. {info.paymentBilling.map(item =>  parseInt(item.price)).reduce((prev  , curr) => prev + curr, 0)}</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48, textAlign: 'center' }}>
        notes
      </Row>

      <Row style={{ marginTop: 48, textAlign: 'center' }}>
        Footer
      </Row>
    </div>
 
    </>
  );
};


export default App