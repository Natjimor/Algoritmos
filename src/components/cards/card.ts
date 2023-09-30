export enum info {
    "name"="name",
    "status"="status",
    "species"="species",
    "image"="image"
}
export default class cards extends HTMLElement {
    name?:string;
    status?:string;
    species?:string;
    image?:string;

    static get observedAttributes(){
        const attrs: Record <info,null> = {
            name:null,
            status:null,
            species:null,
            image:null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback ( propName:info, oldValue:string | undefined, newValue:string | undefined){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    };
    
    
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="./cards.css">
            <section>
                <h1>${this.name}</h1>
                <img src="${this.image}"></mg>
                <p><b>status:</b> ${this.status}</p>
                <p><b>specie:</b> ${this.species}</p>
            </section>
            `;
        }
    }
}

customElements.define("card-info", cards);