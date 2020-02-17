import { LitElement, html} from 'lit-element' 

class AddTodo extends LitElement {
	createRenderRoot() {
		return this;
    }

    static get properties() {
		return {
			addTodo: Object
		}
    }

    handleAddTodo (e) {
        if (e.key !== 'Enter') return
        this.addTodo({
            title: e.target.value,
            completed: false     
        })
        e.target.value = ''
    }

    render () {
        return html`
        <input 
		class="new-todo" 
		placeholder="What needs to be done?"
		autofocus="" 
		@keyup="${(e) => this.handleAddTodo(e)}"
		/>
    `
    }
    
}

window.customElements.define("add-todo", AddTodo)