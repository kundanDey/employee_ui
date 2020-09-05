var store=[];

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      store=JSON.parse(xhttp.responseText);
    }
  };
  xhttp.open("POST", "http://localhost:8080/getEmployees", false);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send();
export default store;