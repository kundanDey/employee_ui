import React from 'react';


function Submit(){
 var xttpRequest=new XMLHttpRequest();
  xttpRequest.open("POST",'Explorer/login',true);
  xttpRequest.send(null);
}

function Login(){
  return (
    <div>
      <center>
              <p for="user">User Name</p>
              <input type="text"  name="user"/>
              <p for="pass">Last name:</p>
              <input type="password"  name="pass"/><p/>
              <button onClick={Submit}>Submit</button>
      </center>
    </div>
  )
}

export default Login;
