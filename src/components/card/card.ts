export enum info {
    "name"="name",
    "status"="status",
    "species"="species",
    "image"="image"
}
export default class card extends HTMLElement {
    name?:string;
    status?:string;
    species?:string;
    image?:string;

    static get observedAttributes(){
        const attrs: Record <info,null> = {
            name:null,
            status:null,
            species:null,
            image:null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName: info,_:unknown,newValue : string){
        switch (propName) {

            default:
                this[propName] = newValue
                break;
        }
    }
    
    
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            const link = this.ownerDocument.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "./card_info.css");
            this.shadowRoot.appendChild(link);
  
            const section = this.ownerDocument.createElement("section");
            section.classList.add ("cards_section")

            const div = this.ownerDocument.createElement("div");
            div.classList.add ("card_div")

            const h1 = this.ownerDocument.createElement("h1")
            h1.innerHTML = `${this.name}`;

            const p = this.ownerDocument.createElement("p")
            p.innerHTML = `${this.status}`;

            const p2 = this.ownerDocument.createElement("p")
            p2.innerHTML = `${this.species}`;

            const img = this.ownerDocument.createElement("img")
            img.src = `${this.image}`;

            div.appendChild(p)
            div.appendChild(p2)
            div.appendChild(img)
            div.appendChild(h1)
            div.appendChild(div)

            this.shadowRoot.appendChild(section);
        }
    }
}
customElements.define("card-container", card)