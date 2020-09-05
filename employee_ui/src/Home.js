import React ,{Component} from 'react';
import Grid from './Grid';
import Add from "./Add.js";
import Edit from "./Edit.js";


class Home extends Component{

  constructor(){
    super();
    this.state={
      window:"view"
    }
  }

  render(){
    var viewHolder=[<Grid parent={this}/>,<span/>,
    <center>
    <button onClick={()=>{this.setState({window:"add"});}}>Add</button>
    </center>
    ];
    console.log(this.state.window);
    if(this.state.window=="add"){
      viewHolder=[<Add parent={this}/>];
    }
    if(this.state.window=="edit"){
      viewHolder=[<Add parent={this}/>];
    }
    return viewHolder;   
  }
}

export default Home;