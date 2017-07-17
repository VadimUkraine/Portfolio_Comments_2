import React from 'react'; 

import TodoItem from './TodoItem';

class TodoList extends React.Component{
	render() {
			const {list} = this.props;
			return (
				<ul className="todo-list">
					{
						list.map((item)=> (
							<TodoItem 
								key={item['.key']}
								task={item['.key']}
								id={item.id}
								text={item.text}
								comment={item.comment}
								deleteTodoFromList={this.props.deleteTodoFromApp}
							/>

						))
					}
				</ul>
		)
	}
}

export default TodoList;
