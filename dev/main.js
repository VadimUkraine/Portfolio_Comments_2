import ReactDOM from 'react-dom';
import React from 'react';

import TodoApp from './components/TodoApp';
import firebase from 'firebase';

const config ={
	apiKey: "AIzaSyAuZuDA2Cbi_G1aqitb5URz5FyR9JJ4qao",
	databaseURL: "https://todo-9780c.firebaseio.com/"
}

firebase.initializeApp(config);

ReactDOM.render(
	<TodoApp />,
	document.getElementById('app')
);
                                                                                                                                                                       