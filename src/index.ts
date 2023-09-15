import objectWithImages from "./data";
import backgroundColor, {attributesColor} from "./components/background"

class PixelArt extends HTMLElement {
    colorDiv: any = [];

    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        
        objectWithImages.images.forEach((bigArray)=> {
            const arrayDiv = this.ownerDocument.createElement("div");
            arrayDiv.classList.add("arrayDiv");
            bigArray.forEach((line)=>{
                const lineDiv = this.ownerDocument.createElement("div");
                lineDiv.classList.add("lineDiv");
                line.forEach((number) => {
                    const divColor = this.ownerDocument.createElement("color-background");
                    if (number === 0) {
                        divColor.setAttribute(attributesColor.colorback, "white")
                    } else {
                        divColor.setAttribute(attributesColor.colorback, "black")
                    };
                    lineDiv.appendChild(divColor)
                });
                arrayDiv.appendChild(lineDiv)
            })
            this.colorDiv.push(arrayDiv)
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="./index.css">
            `
            this.colorDiv.forEach((div:HTMLDivElement) => {
                this.shadowRoot?.appendChild(div)
            });
        }
    }
}

customElements.define("pixel-container", PixelArt)
