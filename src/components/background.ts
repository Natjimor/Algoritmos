export enum attributesColor {
    "colorback" = "colorback"
}
class backgroundColor extends HTMLElement {
    
    colorback?:string;
    
    static get observedAttributes (){
        const attrs: Record <attributesColor,null> = {
            colorback:null
        }
        return Object.keys(attrs);
    };

    attributeChangedCallback ( propName:attributesColor, oldValue:string | undefined, newValue:string | undefined){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    };
    
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <link rel="stylesheet" href="./background.css">
            <div class="${this.colorback}"></div>
            `
        }
    }
}

customElements.define("color-background", backgroundColor)
export default backgroundColor;