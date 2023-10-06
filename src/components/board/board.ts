import "../export"

const enum board_props {
    title = "title",
    grid = "grid"
}

export class Board extends HTMLElement {

    properties: Record<board_props, string> = {
        title: "",
        grid: ""
    }
    
    static get observedAttributes() {
        const properties: Record<board_props, null> = {
            title: null,
            grid: null
        }
        return Object.keys(properties); 
    }
    
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    attributeChangedCallback(propName: board_props, oldValue: string, newValue: string) {
        switch (propName) {
            case board_props.title:
                this.properties.title = newValue
                break;
            case board_props.grid: 
                this.properties.grid = newValue
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        console.log("Hola")
        const link = this.ownerDocument.createElement("link")
        link.setAttribute("rel", "stylesheet")
        link.setAttribute("href", "/src/components/board/board.css")

        const container = this.ownerDocument.createElement("div")
        container.classList.add("boardContainer")
        
        const title = this.ownerDocument.createElement("h1")
        title.textContent = this.properties.title

        const grid = this.ownerDocument.createElement("board-grid")
        grid.setAttribute("grid", `${this.properties.grid}`)
        
        container.appendChild(title)
        container.appendChild(grid)
        
        this.shadowRoot?.appendChild(link)
        this.shadowRoot?.appendChild(container)
    }
}

customElements.define("board-container", Board)