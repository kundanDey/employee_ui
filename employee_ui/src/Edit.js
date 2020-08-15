import React ,{Component} from 'react';

function cancel(props){
  props.parent.setState({
    window:'view'
  })
}
function add(props){
  var elements =document.getElementById("edit-form").elements;
  var params={
    id:elements[0],
    name:elements[1],
    email:elements[2],
  };
   props.parent.setState({
    window:'view'
  })
  /*fetch('http://192.168.0.5:8080/Explorer/Add',params)
  .then(function(response){
    console.log(response);
     props.parent.setState({
    window:'view'
  })
  }).catch((error) => {
  console.error('Error:', error);
});*/
 
}
function Edit(props){
  return[<form id="add-form"><table>
  <tr><td>Employee Id :  </td><input type="text"  name="Id"/></tr>
  <tr><td>Employee Name :  </td><input type="text"  name="name"/></tr>
  <tr><td>Email :  </td><input type="email"  name="email"/></tr>
  
  </table></form>,
  <center>
  <button onClick={()=>{add(props)}}>Edit</button><span/>
  <button onClick={()=>{cancel(props)}}>Cancel</button>
  </center>];
}

export default Edit;