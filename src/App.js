import React, { Component } from 'react';
import Overview from './components/Overview.js';
import uniqid from "uniqid";


/**
 Our application will be made of two components, App and Overview. 
 Your application should render an input field and a submit button. 
 With the submit button, you can add the content from your input to a “tasks array” 
 that is managed in state. (We will use class components for this example because 
  we haven’t introduced hooks in this section yet). 
  Finally, for each task in the tasks array, an HTML list element should be rendered.
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '',id: uniqid()},
      tasks: []
    };
  }


  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' , id: uniqid()},
    });
  };

  handleDeleteTask = (task) => {
    let oldState = this.state;
    oldState.tasks.splice(this.state.tasks.indexOf(task), 1);

    this.setState({
      tasks: oldState.tasks,
      task: { text: '' , id: uniqid()},
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput" onChange={this.handleChange} value={task.text}/>
          <button type="submit" onClick={this.onSubmitTask}>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks}
        handleDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
