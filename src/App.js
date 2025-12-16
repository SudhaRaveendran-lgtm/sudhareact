function App()
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



