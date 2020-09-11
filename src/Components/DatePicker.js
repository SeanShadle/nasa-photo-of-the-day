import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
export default function DatePicker (props) {
    return (
      <ReactDatePicker
        selected={props.date}
        onChange={props.setDate}
      />
    );
}
