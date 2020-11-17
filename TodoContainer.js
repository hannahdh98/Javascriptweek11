import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import React from "react";
class TodoContainer extends React.Component {
    state = {
        todos: [
         {
            id: uuidv1(), 
         title: "Setup development environment",
         completed: true
         },
         {
            id: uuidv2(), 
         title: "Develop website and add content",
         completed: false
         },
         {
            id: uuidv3(), 
         title: "Deploy to live server",
         completed: false
         }
        ]
        };
        addTodoItem = title => {
            const newTodo = {
                id: uuidv4(), 
           title: title,
           completed: false
            };
            this.setState({
            todos: [...this.state.todos, newTodo]
            });
           };

        render() {
            return (
                
            <div className="container">
                   <div>
     {this.state.todos.map(todo => (
       <li>{todo.title}</li>
     ))}
   </div>
            <Header /> 
            <InputTodo addTodoProps={this.addTodoItem}/> 
            <TodosList todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo} />
            
            </div>
            );
        }
    }
export default TodoContainer;
<React.Fragment>
 <h1>Hello from Create React App</h1>
 <p>I am in a React Component!</p>
</React.Fragment>
