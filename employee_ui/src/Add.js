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
    child:[]
  };
  if(elements[4].value!==null&&elements[4].value!==""){
    var list=elements[4].value.split(",");
    for(var child in list){
      for(var key in store){
        console.log(store[key].empid+" "+parseInt(child));
        if(store[key].empid==parseInt(list[child])){
          params.child.push(store[key]);
          delete(store[key]);
        }
      }
  }
  }
  if(params.empid!=null&&params.empid!="")
  store.push(params);
   props.parent.setState({
    window:'view'
  });
 
}
function Add(props){
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