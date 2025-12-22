import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var sobj=
    {
      rno: 100,
      sname:"sudha",
      mark:40,
      rank:37,
      issingle:"No",
      grade:"super",
      location:"karur",
      hobbies1:"cooking",
      hobbies2:"gardening"
    }
   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App data={sobj}/>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
