import React from 'react'; 

import firebase from 'firebase';
import ReactMixin from 'react-mixin';
import reactfire from 'reactfire';

import TodoForm from './TodoForm';
import TodoList from './TodoList';


class TodoApp extends React.Component{
	constructor(){
		super();

		this.state={
			notes: []
		}
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
 		this.bindAsArray(firebase.database().ref().child('todo').orderByChild('text'), 'notes');
	}

	handleAdd(newTodo){
		firebase.database().ref().child('todo').push(newTodo);
		// this.setState({
		// 	notes: [newTodo, ...this.state.notes]
		// });
		
	}

	handleDelete(oldTodo){
		   firebase.database().ref().child('todo').child(oldTodo).remove();
		// this.setState({
		// 	notes: this.state.notes.filter(todo => todo.id !== oldTodo)
		// });
		
	}
	
	render() {
		// localStorage.setItem('notes', JSON.stringify(this.state.notes))
		return (
			<div className="todo">
				<TodoForm addTodo={this.handleAdd }  />
				<TodoList deleteTodoFromApp={this.handleDelete} list={this.state.notes} />
			</div>
			)
	}

}

ReactMixin(TodoApp.prototype, reactfire);

export default TodoApp;

