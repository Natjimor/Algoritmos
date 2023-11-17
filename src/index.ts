import "./screens/dashboard"

export default class ChatContainer extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = ``;

        const chat = this.ownerDocument.createElement("dashboard-container")
        this.shadowRoot.appendChild(chat)
      }
    }
  }
customElements.define("app-container", ChatContainer);