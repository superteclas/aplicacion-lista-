
import React from 'react';

export class Home extends React.Component {
    
    constructor(){
        super();
        
        this.state = { 
          todos: [
            {done: false, title: 'Hacer la cama', id: Math.random() * 10},
            {done: false, title: 'Vestir a los niños', id: Math.random() * 10},
            {done: false, title: 'Comer', id: Math.random() * 10},
            {done: false, title: 'Pasear al perro', id: Math.random() * 10}
          ],
          taskInput: ''
        };
    }
    
    handleFormSubmit(e) {
      console.log("Creating task with title: ", this.state.taskInput);
      e.preventDefault();
      this.setState({
        todos: this.state.todos.concat([{
            title: this.state.taskInput,
            done: false,
            id: Math.random() * 10
          }])
      });
      return false;
    }
    
    deleteTask(taskId){
        this.setState({
            todos: this.state.todos.filter((task) => task.id !== taskId)
        });
    }

  render() {
    var tasksToRender = this.state.todos.map((task) => {
	       return (<li key={task.id}>
                  <div className="view">
                    <label>{task.title}</label>
                    <button className="destroy" onClick={() => this.deleteTask(task.id)}></button>
                  </div>
                </li>);
	    });
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Lista de cosas pendientes</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input
              autoFocus={true}
              className="new-todo"
              placeholder="Que necesitas hacer?"
              value={this.state.taskInput}
              onChange={(evt) => this.setState({ taskInput: evt.target.value}) }
            />
          </form>
        </header>
        <section className="main">
              <ul className="todo-list">
              {tasksToRender}
              </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter(key => !key.done).length}
            </strong> cosas por hacer
          </span>
        </footer>
      </section>
    );
  }
}

export default Home;
