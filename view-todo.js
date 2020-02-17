import { LitElement, html } from 'lit-element'

class ViewTodo extends LitElement {
  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      todo: Object,
      toggleCompletion: Object
    }
  }

  render() {
    return html`
      <li>
          <div class="view">
              <input 
                class="toggle" 
                type="checkbox" 
                ?checked="${this.todo.completed}" 
                @click="${(e) => this.toggleCompletion(this.todo)}"/>
              <label>${this.todo.title}</label>
          </div>
      </li>
    `
  }

}

window.customElements.define("view-todo", ViewTodo)