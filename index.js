import { LitElement, html} from 'lit-element' 
import './add-todo.js'
import './view-todo.js'

class App extends LitElement {
	createRenderRoot() {
		return this;
	}

	static get properties() {
		return {
			todos: Array
		}
	}

	constructor() {
		super();
		
		this.todos = [
			{ title: 'Buy Groceries', completed: false },
			{ title: 'Walk the dog', completed: true },
			{ title: 'Meal prep for the week', completed: false },
			{ title: 'Go to the gym', completed: true },
			{ title: 'Feed the dog', completed: false },
		]
		
	}

	render() {
		return html`
		<section class="todoapp">
			<header class="header">
				<h1>todosss</h1>
				<add-todo .addTodo="${(todo) => this.addTodo(todo)}"></add-todo>
			</header>
			<section class="main">
				<ul class="todo-list">
          ${this.todos.map((todo) => html`
            <view-todo .todo="${todo}" .toggleCompletion="${(todo) => this.toggleCompletion(todo)}" ></view-todo>
          `)}
				</ul>
			</section>
		</section>
		`
  }

  toggleCompletion (todo) { 
    this.todos = this.todos.map(t => {
        return (t !== todo) ? t : 
        {
          ...todo,
          completed: !todo.completed
        }
      })
      console.table(this.todos)
    }
    
    addTodo(todo) {
      this.todos = [...this.todos, todo]
      console.table(this.todos)
	}
}

window.customElements.define("todo-app", App)
