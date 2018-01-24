import React, { Component } from "react";
 
class DisplayTasks extends Component {
  render() {
    return (
     <div>{this.props.tasks.length}</div>
    );
  }
};
 
export default DisplayTasks;
