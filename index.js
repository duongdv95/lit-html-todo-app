import { html, render } from './node_modules/lit-html/lit-html.js'

let todos = [
	{ title: 'test 1', completed: false },
	{ title: 'test 2', completed: true },
	{ title: 'test 3', completed: false },
	{ title: 'test 4', completed: true },
	{ title: 'test 5', completed: false },
];

let handleAddTodo = (e) => {
	if (e.key !== 'Enter') return
	todos = [...todos, {
		title: e.target.value,
		completed: false
	}]

	e.target.value = ''
	
	update()
}

let addTodo = () => html`
	<input 
		class="new-todo" 
		placeholder="What needs to be done?"
		autofocus="" 
		@keyup="${handleAddTodo}"
		/>
`

let handleToggleCompletion = (todo) => { 
	todos = todos.map(t => {
			return (t !== todo) ? t : 
			{
				...todo,
				completed: !todo.completed
			}
		})
}

let viewTodo = (todo) => html`
	<li>
		<div class="view">
			<input class="toggle" type="checkbox" ?checked="${todo.completed}" @click="${(e) => handleToggleCompletion(todo)}"/>
			<label>${todo.title}</label>
		</div>
	</li>
`

let app = () => html`
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			${addTodo()}
		</header>

		<section class="main">
			<ul class="todo-list">
				${todos.map((todo) => viewTodo(todo))}
			</ul>
		</section>
	</section>
`
let update = () => {
	render(app(), document.body) 
	console.log(todos);
}

update()
