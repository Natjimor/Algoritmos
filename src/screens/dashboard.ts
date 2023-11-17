import "../components/export"

export default class Dashboard extends HTMLElement {
    
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

        const chat = this.ownerDocument.createElement("my-messagge")

        this.shadowRoot.appendChild(chat)
      }
    }
  }
customElements.define("dashboard-container", Dashboard);