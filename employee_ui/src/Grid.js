import React ,{Component} from 'react';
import Rows from './Rows';
import "./View.css";
import store from "./Store.js";

class Grid extends Component{

  constructor(){
    super();
    this.state={
      store:store
    }
  }

  render(){
    var parent= this.state.store.map( emp =><Rows parent={this.props.parent} data={emp} />);
    return (
      <table className="Row_all">
      <thead>
      <tr className="Row_all">
        <th className="Row_all">Emp Id</th> 
        <th className="Row_all">Name</th>
        <th className="Row_all">Email</th>
        <th className="Row_all">Department</th>
        </tr>
        </thead>
        {parent}
      </table>
    )
  }
}

export default Grid;