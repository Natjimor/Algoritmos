import "./screens/main";

export class screen extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    connectCallback(){ 
        this.render()
    }
    render(){
        const join = this.ownerDocument.createElement("main-container");
        this.shadowRoot?.appendChild(join);
    }
}
customElements.define("main-screen", screen )