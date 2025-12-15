function App()
{
  if(true)
  {
    var v=10000
    let l=200
    const c=300
    v++;
    l++;
    console.log("Let:"+l);
    // c++
    console.log("const:"+c);
  }
  return(
    <>
    <h1>variable:Global:{v}</h1>
    <h1>does not work let const:beacause local</h1>

</>
  )
}
export default App
/*function App()
{
  let myfun=(a,b,c)=>{
    var tot=a+b+c
    // document.getElementById("res").innerHTML="congrtz you clicked the button";
     document.getElementById("res").innerHTML=`<h2>Total:${tot}</h2>`;
  }
  return(<>
  <h2>Arrow function without parameter</h2>
  <h3>Note:onClick C must be caps<br></br>don't use double quotes</h3>
  <h3>Note:in calling function don't use parenthesis when without passing args</h3>
  <button onClick={()=>myfun(10,40,50)}>clikme</button>
  <div id="res"></div>
  </>)
}
export default App
/*import myimg from './images/img2.jfif'
function App()
{
  return(<>
  <center>
  <h2>Image Demo using path Expression</h2>
  <img src={myimg} width="75%" height="auto" alt="path is wrong"></img>
  </center>
</>
  )

}
export default App
/*function App()
{
  var a=700
  var b=1000
  var c=200
  return(
    <>
    <h2>Biggest among 3nos using conditional or ternaray</h2>
    <h1>biggest number a or b:{a>b?a:b}</h1>
    <h2>biggest number a or b or c:{(a>b && a>c)?a:(b>c?b:c)}</h2>


    </>

  )
}
export default App
/*function App()
{
  var a=20
  var b=40
  var c="sudha"
  return(<>
  <h1>Total:{a+b}</h1>
  <marquee bgcolor='green'><font size='7'>{c}</font></marquee>
  </>)
}
export default App
/*import React from "react";
class Parent extends React.Component
{
  render()
  {
    return(<>
    <h1>welcome to components</h1>
    <h1>welcome to components</h1>
    <h1>welcome to components</h1>
    <h1>welcome to components</h1>
    <p>Elit ad ipsum officia magna. Id cillum do ex aliqua nulla occaecat eiusmod consequat ad. Reprehenderit cupidatat quis laborum nulla et dolor ex reprehenderit minim nisi ipsum.Quis id incididunt deserunt aute ex velit est veniam tempor. Veniam reprehenderit culpa voluptate voluptate. Et tempor labore incididunt laboris elit commodo do est eu sint cupidatat. Exercitation consequat fugiat do velit est nisi quis do minim.

Deserunt deserunt dolore irure Lorem tempor laboris tempor veniam officia nisi officia. Incididunt eiusmod commodo amet et incididunt enim deserunt ullamco sunt labore nostrud ea enim laboris. Anim mollit minim ex in sunt quis non aliquip adipisicing excepteur consectetur excepteur. Adipisicing pariatur velit veniam irure cillum id culpa eiusmod officia. Veniam ullamco ad Lorem velit laborum voluptate sint cillum.

Laboris in velit excepteur laborum velit est commodo exercitation commodo officia sunt veniam proident. Sit velit pariatur aliqua nulla exercitation sunt fugiat enim nostrud duis. Tempor esse quis incididunt ipsum in magna do officia voluptate quis.


</p>
    </>)
  }
}
class App extends Parent{
  render()
  {
    return(<>
    <Parent/>
      <h1>Welcome to class components</h1>
      <h1>Welcome to class components</h1>
      <h1>Welcome to class components</h1>
    </>)
  }
}
export default App
/*function App()
{
  return(
    <div>
     <h1>welcome to react</h1>
     <h1>welcome to react</h1>
     <h1>welcome to react</h1>
     </div>*/
   
    


// export default App
/*
import logo from './logo.svg';
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

export default App;
*/