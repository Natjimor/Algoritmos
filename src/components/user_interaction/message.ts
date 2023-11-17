import firebase, { escuchar } from "../../utils/firebase";

export const formComment = {
  text: "",
};

export default class Messagge extends HTMLElement {
  cardId?: string;

  constructor(cardId: string) {
    super();
    this.attachShadow({ mode: "open" });
    this.cardId = cardId;
    this.render();
  }

  connectedCallback() {
    escuchar((messages:any) => {
    this.render();
    })
    
    const cardId = this.getAttribute('cardId');

  }

  changePhase(e: any) {
    formComment.text = e.target.value;
  }

  async saveComment() {
    console.log(formComment)
    firebase.addText(formComment); 
  }

  async render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ``;

      const container = this.ownerDocument.createElement("section");

      const message = this.ownerDocument.createElement("input");
      message.placeholder = "Write your message...";
      message.value = formComment.text;
      message.addEventListener("change", this.changePhase);

      const save = this.ownerDocument.createElement("button");
      save.innerHTML = "Send";
      save.classList.add("comment-button");
      save.addEventListener("click", this.saveComment);

      this.shadowRoot?.appendChild(message);
      this.shadowRoot?.appendChild(save);
      this.shadowRoot?.appendChild(container);

      const messages = await firebase.getText();

      messages.forEach((message: any) => {
        const containermessage = this.ownerDocument.createElement("div");
        const phase = this.ownerDocument.createElement("h4");
        phase.innerHTML = message.text;
        
        containermessage.appendChild(phase);

        container.appendChild(containermessage);
      });
    }
  }
}

customElements.define("my-messagge", Messagge);