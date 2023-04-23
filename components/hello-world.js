import { LitElement, html, css } from 'lit';

class HelloWorld extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid red;
      padding: 10px;
      background-color: blue;
    }
    h1 {
      color: white;
    }
    p {
      color: white;
    }
    span {
      color: white;
    }
  `;

  static properties = {
    title: { type: String },
    description: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.title = 'Hello world';
    this.description = 'Esto es un parrafo';
    this.counter = 0;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <p>${this.description}</p>
      <span>${this.counter}</span>
      <button @click=${this.addOneToCounter}>+</button>
    `;
  }

  addOneToCounter() {
    console.log('counter was call');
    this.counter++;
    console.log(this.counter);
  }
}

customElements.define('hello-world', HelloWorld);
