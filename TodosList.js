TodoItem from "./TodoItem";
import React from "react";
class TodosList extends React.Component {
 render() {
 return (
 <div>
 handleChangeProps={this.props.handleChangeProps}  
 deleteTodoProps={this.props.deleteTodoProps}  
 {this.props.todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} />
 ))}
 </div>
 );
 }
}
