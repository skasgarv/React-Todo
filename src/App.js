import React, { Component } from 'react';
import './App.css';
import DisplayTasks from "./displayTasks";

class App extends Component {
  constructor() {
    super();
    this.submitNewTask = this.submitNewTask.bind(this);
    this.state = {
      tasks: [],
      task: 'foobar'
    }
  }

  submitNewTask(e) {
    e.preventDefault();
    const tasks = [...this.state.tasks];
    tasks.push(this.state.task);
    this.setState({ tasks });
  }

  changeHandler = e => {
    this.setState({ task: e.target.value });
  }

  render() {
    return (
      <div>
        <form className="navbar-form navbar-center" role="addTask" onSubmit={this.submitNewTask}>
          <div className="form-group">
            <input
              onChange={this.changeHandler}
              value={this.state.task}
              name="task"
              type="text"
              className="form-control"
              placeholder="Add Task"
            />
          </div>
          <button type="submit" className="btn btn-default">Submit Task</button>
          <DisplayTasks tasks={this.state.tasks} />
        </form>
      </div>
    );
  }
}

export default App;
