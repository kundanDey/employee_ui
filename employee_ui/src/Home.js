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

    var viewHolder=[<Grid/>,<span/>,
    <center>
    <button onClick={()=>{this.setState({window:"add"});}}>Add</button><span/>
    <button onClick={()=>{this.setState({window:"edit"});}}>Edit</button><span/>
    <button>Delete</button>
    </center>
    ];
    console.log(this.state.window);
    if(this.state.window=="add"){
      viewHolder=[<Add parent={this}/>];
    }
    if(this.state.window=="edit"){
      viewHolder=[<Edit parent={this}/>];
    }
    return viewHolder;
      
  }
}

export default Home;