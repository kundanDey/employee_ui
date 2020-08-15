import React ,{Component} from 'react';


class Rows extends Component{

  constructor(){
    super();
    this.state={ withchild:false};
  }

 renderChildren(){
   console.log("render child");
   this.setState({
     withchild:!this.state.withchild
   })
 }
  render(){
    const style={
      backgroundColor: 'lightgreen'
    }
    var child=this.props.data.child.map( emp =><Rows 
    className={style} data={emp}/>);
    if(!this.state.withchild){
      child=[];
    }
    return [
      <tr className="Row_all" onDoubleClick={()=>{this.renderChildren();}} >
        <td className="Row_td" style={this.props.className}>{this.props.data.empid}</td>
        <td className="Row_td" style={this.props.className}>{this.props.data.name}</td>
        <td className="Row_td" style={this.props.className}>{this.props.data.email}</td>
        <td className="Row_td" style={this.props.className}>{this.props.data.department}</td>
      </tr>
      ,child];
  }
}

export default Rows;