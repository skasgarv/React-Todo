import React, { Component } from 'react';
import './App.css';
import DisplayTasks from "./displayTasks";

class App extends Component {
  constructor() {
    super();
    //Register all the functions and bind it
    this.submitNewTask = this.submitNewTask.bind(this);
    // state variables for a component
    this.state = {
      taskName: []
    }
  }

  submitNewTask(e) {
    this.state.taskName.push(this._inputElement.value);
    this._inputElement.value = ""
    e.preventDefault();

  }
  render() {
    return (
      <div>
      <form className="navbar-form navbar-center" role="addTask" onSubmit = {this.submitNewTask}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Add Task" ref={(a) => this._inputElement = a} />
        </div>
        <button type="submit" className="btn btn-default">Submit Task</button>
        <DisplayTasks taskName = {this.state.taskName} />
      </form>
      </div>
    );
  }
}

export default App;
