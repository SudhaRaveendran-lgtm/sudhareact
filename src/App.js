import "./App.css"
function App()
{
  return(
    <div id="outer" align="center">
      <div id="inner">
      <font id="savi" size="7">🔑</font>
      <h2>ADMIN PANNEL</h2>
      <input type="text" placeholder="Enter user name here"></input>
      <input type="password" placeholder="Enter password"></input>
      <p align="right"><button>Login</button></p>
    </div>
    </div>
  )
}
export default App
/*import React from 'react'
function App()
{
  return(
    <div className="App">
      <div className="Login">
        <h1 className="login page">ADMIN PANEL</h1>
        <form>
          <input type="text" placeholder="UserName" className="login-input"></input><br></br>
          <input type="password" placeholder="password" className="login -input"></input><br></br>
          <button type="submit" className="login input-input"></button>
        </form>
  </div>
  </div>
  )
}
export default App
/*import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const[name,setName]=useState("sudha")
  useEffect(()=>{
    document.title=`Hello! ${name}`
  })
  const dis=()=>{
    setTimeout(()=>{
    setName("1.love 2.life")
  },3000)

  }
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={dis}>change Name</button>
      <br></br>
      {name}
    </div>
  )
}

export default App
import React from "react"
import { useState } from "react"
const App = () =>{

  const[val,setVal]=useState(0)
    const dis=(event)=>{
      setVal(parseInt(event.target.value)+1)
    }
  
return(
  <div>
  <button onClick={dis} value={val}> you clicked : {val} times</button>
  
    
  </div>
)
}
export default App*/

/*import { useState } from "react"
function App()
{
  const[count,setCount]=useState(100)
  const show=(event)=>{
    if(event.target.id==="b1")
      setCount(count+1)
    if(event.target.id==="b2")
      setCount(count-1)
    if(event.target.id==="b3")
      setCount(count-5)
  }
  // const show1=()=>{
  //   setCount(count+1)
  // }
  // const show2=()=>{
  //   setCount(count-1)}
  
  return
    <>
    <button id="b1" onClick={show}>Increment by 1</button>
    <button id="b2" onClick={show}>Decrement by 1</button>
    <button id="b3" onClick={show}>Decrement by 5</button>
      // <buttom onClick={show1}>Increment By 1</buttom >
    <button onClick={show2}>Decrement By 1</button>  
    
    <br></br>
    <h2>{count}</h2>
    </>
  

}
export default App
/*import { useState } from 'react'
import React from 'react'
const App = () => {
  const[name,setName]=useState("----")

  const dis=(event)=>{  //dis= user defined functions//
setName(event.target.value)   //argument not passed//           
  }
  const show=(v)=>{
    console.log(v)      //argument passed//
  }
  const find=(v1,v2)=>{
    console.log(v1+v2)      // two argument passed//
  }


  return (
    <div>
      <form>
      <input type ="text" value={name} onChange={dis} placeholder='Enter user name'></input><br></br>
        <input type ="password"  onChange={()=>show("12345")} placeholder='Enter password'></input><br></br>
          <input type ="number"  onChange={()=>find(12,34)} placeholder='accno'></input><br></br>
            <input type ="email" placeholder='Enter mail id'></input><br></br>

            <label>Select Gender</label>
            <input type="radio" name="gender"></input>Male
            <input type="radio" name="gender"></input>Female
            <input type="radio" name="gender"></input>Others
            <br></br>

            <label>Select course</label>
            <input type="checkbox" name="C"></input>C
            <input type="checkbox" name="C1"></input>C++
            <input type="checkbox" name="C2"></input>Java
            <input type="checkbox" name="C3"></input>Pthyon
            <input type="checkbox" name="C4"></input>none of th above
            <br></br>
            
            <select>
              <option>Select Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <br></br>

            select color:<input type='color' name='col'></input>
            <br></br>
            Select DOB:<input type='date' name='dob'></input>
            <br></br>
            Select time:<input type='time' name="time"></input>
            <br></br>
            select week:<input type="week" name="week"></input>
            <br></br>
            select file:<input type='file' name="resume"></input>
            <br></br>


                    
          
          <label>Type address</label>
          <textarea rows="7" cols="24"></textarea>
          <br></br>

          <label>list box</label>
          <select size="4" multiple>
            <option>sunday</option>
            <option>monday</option>
            <option>tuesday</option>
            <option>wednesday</option>
            <option>thursday</option>
            <option>friday</option>
            <option>saturday</option>
          </select>
          <br></br>

      🟥🟨🟩🟫
          <label>volume:</label>
            <input type= "range"  min="0" max="6" ></input>
            <br></br>
<progress style={{background:"blue",border:"2px solid yellow"}} min="0" max="100" values="90"></progress>   


          <button><b><i>clickme</i></b></button><br></br>
          <input type ="submit"></input><br></br>
          <input type='button' value="clickme"></input><br></br>
          
          </form>
    </div>
  )
}

export default App
/*function App(props)
{
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
  <h3> Type of rno:{typeof(a)}</h3>
  <h3> Type of sname:{typeof(b)}</h3>
  <h3> Type of marital status:{typeof(c)}</h3>
  <h3>type of mark:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"It is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"It is array":"it is object json"}</h3>
</>)}
export default App
/*import parse from 'html-react-parser'
function App(props)
{
var ans=""
for(var s in props.data)
{
  ans=ans+`<li>${s}=${props.data[s]}</li>`
  console.log(s)
}
return(
  <>
  {
    parse("<ol>"+ans+"</ol>")}
    </>
)
}
export default App

/*import React from "react";
import parse from 'html-react-parser';
class App extends React.Component
{
  constructor(props)
  {
    var ans=""
    super(props)
    for(var s in props.data)
    {
      ans=ans+`<br>${s}=${props.data[s]}</br>`
      console.log(s)
    }
    this.state={
      res:ans
    }
  }
    render()
    {
    return(
    <>
    <h1>combine react state+properties</h1>
    {parse(this.state.res)}
    <div id="res"></div>
    </>)
 }
}
export default App
/*import React from "react";
class App extends React.Component
{
  constructor(props)
  {
  super(props)
  this.state={
    studentname:this.props.data.sname,
    studentmark:this.props.data.mark
  }
}
render()
{
  return(
    <>
    <h1>combine rest state+props</h1>
    <h2>studentname:{this.state.studentname}</h2>
    <h2>studentmark:{this.state.studentmark}</h2>
    </>
  )
}}
export default App
/*import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      sno:101,
      sname:"sudha",
      marks:[50,69,87]

    }
  }
  show=()=>
  {
    this.setState({sname:"sudha Raveendran"})
  }
  dis=()=>{
    this.setState({marks:[89,98,99]})

  }
  dis1=()=>{
    const newmarks=[...this.state.marks]
    newmarks[2]=100
    this.setState({marks:newmarks})
  }
render()
  {
    return(
    <>
    <h1>This is a class component</h1>
<h2>serial Number:{this.state.sno}</h2>
<h2>student Name:{this.state.sname}</h2>
<h2>student mark:{this.state.marks}</h2>
{this.state.marks.map((v,index)=><>Mark:{index+1} = {v}<br></br>
</>)}
<button onClick={this.show}>update name</button>
<button onClick={this.dis}>update all mark</button>
</>
)
  }
}
export default App

/*import { aadhar, accno, place, sname } from "./mycomponents/coomonvar"
import Sudha from "./mycomponents/Sudha"
function App()
{
  return(
    <>
    <Sudha/>
    <h1> This is default App Component</h1>
    <h2>my name is:{sname}</h2>
    <h3>mycity:{place}</h3>
    <h3>my aadhar:{aadhar}</h3>
    <h3>my accno:{accno}</h3> 
    </>
  )

}
export default App



/*function App()
{
  var arr=[11,22,33,44,55,66,77,88,99,100]
  var sum=0
  var max=arr[0]
return(

  <>
  <h1>React looping or map methos</h1>
  <h1>{arr[0]}
    {arr[1]}
    {arr[2]}
    {arr[3]}
{arr[4]}
{arr[5]}
{arr[6]}
{arr[7]}
{arr[8]}
  </h1>
  <h2>new model map (loop)</h2>
 {arr.map((v)=>v)}
 
 

 {arr.map((v)=><>
 {v}<br></br>
 </>)}

<ol type="1">
 {arr.map((v)=>
 <li>{v}</li>
)}</ol>

<div style={{display:"none"}}>

{arr.map((item)=><>{sum=sum+item}<br></br></>)}
</div>
<h1>Sum of array:{sum}</h1>
<div style={{display:"none"}}>
{arr.map((v)=><>{max<v&& <>{max=v}</>}



</>)}
</div>
<h1>biggest number in array:{max}</h1>

 </>)
 }
export default App



/*function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,,v2,...v3]=arr//(... =>spread operator=it takes balance values)
  //(,, it skips the value)
  return(
  <>
  <h1>Spread OPerator</h1>
  <h3>indexof 0:{v1}</h3>
    <h3>indexof 1:{v2}</h3>
 <h3>indexof 3:{v3}</h3>
   


  
  </>)
}
export default App




/*function App()
{
  var arr=[11,22,33,44,55,66]
  return(
  <>
  <h1>Spread OPerator</h1>
  <h3>indexof 0:{arr[0]}</h3>
    <h3>indexof 1:{arr[1]}</h3>
 <h3>indexof 3:{arr[3]}</h3>
   <h3>indexof 5:{arr[5]}</h3>
      <h3>indexof 6:{arr[6]}</h3>


  
  </>)
}
export default App



/*function App()
{
  var res="fail"
var average=85
  return(<>

  <h1>react nested if statement</h1>

  <h1>{
    (res==="pass"&&
  ((average>=85&&"Grade o")||
  (average>=75&&"Grade A")||
  (average>=65&&"Grade B")||
  (average>=55&&"Grade C")||
  (average>=45&&"Grade E")||
  "FAiR"))||
  "no  pass because of fail"}</h1>
  
  </>)
}
export default App






/*function App()
{
var unit=105


return(
  <>
  <h1>electicity Bill</h1>
  <h1>{(unit<=100&&"rupees 0")||
  (unit>=101&&unit<=125&&"rupees:50")||
  (unit>=126&&unit<=200&&"rupees:"+(unit-100)*2)||
  (unit>=201&&unit<=300&&"rupees:"+200+(unit-200)*3)||
  (unit<=301&&unit<=400&&"rupees:"+500+(unit-300)*4)|| //310=100+100+100+(unit-300)*4//0+
  ("rupees:"+(900+(unit-400)*5))}</h1>        
  
  
  </>
  )
}
export default App









/*function App()
{
var average=45
  return(<>
  <h1>react simple if else if statement</h1>
  <h1>{(average>=85&&"outstanding")||(average>=75&&"excellent")||(average>=65&&"very good")||(average>=55&&"good")||(average>=45&&"fair")}</h1>
  
  </>)
}
export default App
/*function App()
{
var year=2001
  return(
    <>
    <h1>year is leap year or not</h1>
    <h1>{year%4==0&&"leap year"||"non leapyear"}</h1>
    
    </>
  )
}
export default App



/*function App()
{
  var a=8
   return(<>
  <h1>given no is positive or negative or null</h1>
  <h1>{(a>0 &&"positive")||(a<0&&"negative")||(a==0&&"zero")}</h1>
  </>)
}
export default App




/*function App()
{
var age=25
  return(
    <>
    
    <h1>given age is eligible to vote or not</h1>
    <h1>{(age>18&&"eligible")||"not eligible"}</h1>
    </>
  )
}
export default App







/*function App()
{
  var num=9
  return(
  <>
  <h1>to find even or odd</h1>
  <h1>{((num%2==0) &&"even")||"odd"}</h1>
  
  
  
  </>)
}
export default App








/*function App()
{
var mark=35

return(
  <>
  <h2>React Simple if statement</h2>
  <h2>{(mark>45&&"pass")||"fail"}</h2>
  </>
)
}
export default App







/*function App()
{
var mark=89

return(
  <>
  <h2>React Simple if statement</h2>
  <h2>{mark>45&&"pass"}</h2>
  </>
)
}
export default App



/*function App()
{
  if(true)
  {
var v=100;
let l=200;
const c=300;
v++;
l++;
console.log("Let:"+l);
//c++
//console.log("const:"+c);


  }

  return(<>
  <h1> variable:global:{v}</h1>
  <h1> does not work let and const:because local</h1>
  
  
  </>)
}
export default App


/*function App()
{
  let myfun=(a,b,c)=>
  {
    var tot=a+b+c
document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }

  return(
    <>
    <h3>Arrow function with parameters</h3>
    <button onClick={()=>myfun(10,30,50)}>click it</button>
<div id="res"></div>
    </>
  )
}
export default App



/*function App()
{
  let myfun=()=>
  {
document.getElementById("res").innerHTML="congratulations";
  }

  return(
    <>
    <h3>Arrow function without using parameters</h3>
    <button onClick={myfun}>click it</button>
<div id="res"></div>
    </>
  )
}
export default App

/*import myimg from'./images/2.jpg'
function App()
{
  return(
    <>
    <h2>Image demo using path as expression</h2>
    <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
    </>
  )

}
export default App


/*function App()
{
  var a=290
  var b=900
  var c=700
  return(
    <>
    <h1>biggest among 3 no's using condition or teranary operator</h1>
    <h1>biggest number{(a>b&&a>c)?a:(b>a&&b>c)?b:c}</h1>
    
    </>
  )}
export default App







/*function App()

{
  var a=100
  var b=200
  return(
    <>
    <h1>Biggest among 2 no's using conditional or ternanary operator</h1>
    <h1>Biggest number:{a>b?a:b}</h1>
    </>
  )
}
export default App





/*function App()
{
  //javascript code here

  var a=20
  var b=50
var c="Brindha"
  return(
    <>
<h1>Total:{a+b}</h1>
<marquee bgcolor='lightgreen'><font size='9'>{c}</font></marquee>
    </>
  )

}
export default App*/



/*import React from "react";
class Parent extends React.Component
{
  render()
  {
    return(
      <>
      <h1>this is parent class</h1>
      <h1>this is parent class</h1>
      </>
    )
  }
}
class App extends React.Component


{
  render()
  {
    return (
      <>
      <Parent/>
      <center>
      <h1>HI Welcome</h1>
    <h1>  Learning React js</h1>
      <h1>thank you</h1></center>
      <p>Amet mollit consequat excepteurCillum magna voluptate tempor tempor sint mollit magna elit ea consequat ullamco. Sit eu deserunt cillum fugiat proident pariatur laboris. Commodo pariatur irure laborum culpa Lorem. Aliquip eu nisi qui dolore tempor. Incididunt aliqua id occaecat incididunt minim ea fugiat velit eiusmod est tempor aliquip est. Dolore proident exercitation irure eu incididunt ut.Reprehenderit sit ea excepteur voluptate. Veniam fugiat officia dolore commodo ullamco mollit consectetur aliqua magna aute nulla culpa sint. Minim tempor ex nisi pariatur quis culpa irure.Reprehenderit veniam cupidatat deserunt consequat duis eiusmod mollit. Enim ullamco consequat est officia Lorem. Minim nisi irure duis exercitation pariatur proident. Enim elit aute officia minim sit ullamco consequat tempor ex id nostrud.Do Lorem culpa id occaecat exercitation cillum ut. Enim mollit deserunt consectetur officia occaecat et reprehenderit esse sit. In consectetur consectetur sit deserunt ea Lorem do ex velit cupidatat veniam culpa ipsum dolor. Magna non nostrud velit laborum aliquip aliquip laboris. Ullamco velit do aliquip exercitation elit ullamco irure elit occaecat consectetur cillum ea. Est sint consectetur quis nulla ex.

Ut nisi magna excepteur ad laborum ea aliqua aute consectetur nostrud nostrud nisi Lorem deserunt. Ut fugiat et excepteupariatur nisi magna ipsum. Sit elit sunt laboris eiusmod ut veniam ea adipisicing cupidatat non consequat nostrud.

Occaecat incididunt Lorem nisi cupidatat nostrud enim sunt sint quis ut do aute voluptate. Adipisicing cupidatat sunt pariatur aute aliqua exercitation ad et anim fugiat. Velit sit ullamco excepteur. Exercitation adipisicing proident velit excepteur tempor consectetur irure. Esse qui id sit cillum eu sit dolor. Mollit ut pariatur labore est proident quis proident magna. Voluptate cillum laboris duis pariatur velit amet nisi magna ullamco. tempor nisi. Dolore est aliqua id tempor magna. Ullamco esse incididunt velit reprehenderit deserunt deserunt nulla laboris aliquip. Velit deserunt sint ut tempor veniam occaecat ea ut magna irure consectetur excepteur. Id pariatur officia nostrud laboris duis quis aute amet eiusmod magna minim quis. Do incididunt deserunt quis enim. Incididunt officia exercitation excepteur Lorem dolor velit cupidatat aliqua laborum minim anim.</p>
      </>
    )
  }
}
export default App
*/



/*function App()
{
  return(
    <div>
          <h1>Welcome to React js</h1>
    <h1>Welcome to React js</h1>
    <h1>Hello</h1>
    <h1>Good morning

    </h1>


    </div>
  )
}
export default App*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/





/*function App()
{
  var unit=500
  return(<>
 <center><h1>Electricity Bill Calculation</h1></center>
<h3>{(unit<=100 && "₹.0")||
(unit>=101 && unit<=200 && "₹."+(unit-100)*2)||
(unit>=201 && unit<=300 && "₹."+(200+(unit-200)*3))||
(unit>=301 && unit<=400 && "₹."+(500+(unit-300)*4))||
"₹ "+(900+(unit-400)*5)
}</h3>
</>)
}
export default App

/*function App()
{
  var num=9
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(num%2==0 && "even" )|| "odd"}</h2>
  </>)
}
export default App*/
/*function App()
{
  var m=2025
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(m%4==0 && "leap  year" )|| "Not leap year"}</h2>
  </>)
}
export default App*/
/*function App()
{
  var m=66
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(m>17&& "Eligible" )|| "not eligible"}</h2>
  </>)
}
export default App*/
/*function App()
{
  var mark=10
  return(<>
  <h1>React simple if statement</h1>
  <h2>{(mark>34 && "pass" )|| "fail"}</h2>
  </>)
}
export default App*/