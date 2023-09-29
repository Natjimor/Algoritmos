import { get_data } from "../services/data";
import { api_type } from "../types/api_type";
import card, { info } from "../components/card/card"

export class main extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: "open"});
    }
    async connectCallback(){
        const data = await get_data()
        this.render(data)
    }
    render(data:any){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML= ``;
            data.forEach((e:api_type) => {
                const card = this.ownerDocument.createElement("card-container")
                card.setAttribute(info.name, e.name)
                card.setAttribute(info.status, e.status)
                card.setAttribute(info.species, e.species)
                card.setAttribute(info.image, e.image)

                this.shadowRoot?.appendChild(card)
            });
        }
    }
}
customElements.define("main-container",main)