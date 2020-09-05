import React ,{Component} from 'react';
import store from "./Store.js";

function cancel(props){
  props.parent.setState({
    window:'view'
  })
}
function add(props){
  var elements =document.getElementById("add-form").elements;
  console.log(store);
  var params={
    empid:elements[0].value,
    name:elements[1].value,
    email:elements[2].value,
    department:elements[3].value,
    child:elements[4].value
  };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      store=JSON.parse(xhttp.responseText);
      props.parent.setState({
        window:'view'
      });
    }
  };
  console.log(params);
  xhttp.open("POST", "http://localhost:8080/addEmployee", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify(params)); 
}


function Delete(props){
  var elements =document.getElementById("add-form").elements;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      props.parent.setState({
        window:'view'
      });
    }
  };
  xhttp.open("POST", "http://localhost:8080/deleteEmployee", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(elements[0].value); 
}

function Add(props){
  console.log(props);
  if(props.parent.state.window=="edit"){
    return[<form id="add-form"><table>
  <tr><td>Employee Id :  </td><input type="text"  name="Id" value={props.parent.state.data.empid}/></tr>
  <tr><td>Employee Name :  </td><input type="text"  name="name" value={props.parent.state.data.name}/></tr>
  <tr><td>Email :  </td><input type="email"  name="email" value={props.parent.state.data.email}/></tr>
  <tr><td>Department :  </td><input type="text"  name="department" value={props.parent.state.data.department}/></tr>
  </table></form>,
  <center>
  <button onClick={()=>{add(props)}}>EDIT</button><span/>
  <button onClick={()=>{Delete(props)}}>Delete</button><span/>
  <button onClick={()=>{cancel(props)}}>Cancel</button>
  </center>];
  }
  return[<form id="add-form"><table>
  <tr><td>Employee Id :  </td><input type="text"  name="Id"/></tr>
  <tr><td>Employee Name :  </td><input type="text"  name="name"/></tr>
  <tr><td>Email :  </td><input type="email"  name="email"/></tr>
  <tr><td>Department :  </td><input type="text"  name="department"/></tr>
  <tr><td>Subordinates :  </td><input type="text"  name="child"/></tr>
  </table></form>,
  <center>
  <button onClick={()=>{add(props)}}>Add</button><span/>
  <button onClick={()=>{cancel(props)}}>Cancel</button>
  </center>];
}

export default Add;