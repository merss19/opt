import React from 'react';
import reactDOM from 'react-dom';
import classnames from 'classnames';
import  Btn  from 'mcn-ui-components/components/Btn';
//import './styles.css';
//import { Button } from "antd";
//import "antd/dist/antd.css";



export default function App(props) {
  return (
   <div>
   homeeee
   <Btn type="primary" >btn</Btn>
   </div>
  );
}

  reactDOM.render(
    // eslint-disable-next-line react/jsx-props-no-spreading
   <App  />, document.querySelector('.root'),
  );


