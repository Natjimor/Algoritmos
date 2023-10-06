import "../export"
import { global_state, addObserver } from "../../store/index";
import { radialFunction } from "../../types/radial_function";

const enum grid_props {
    grid = "grid"
}

export class Grid extends HTMLElement {

    grid?: string

    static get observedAttributes() {
        const properties: Record<grid_props, null> = {
            grid: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    attributeChangedCallback(propName: grid_props, oldValue: string, newValue: string) {
        switch (propName) {
            case grid_props.grid:
                this.grid = newValue
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""
            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "./css/grid.css")

            const pixelContainer = this.ownerDocument.createElement("div")
            pixelContainer.classList.add("gridContainer")

            const pixels = radialFunction(global_state.selected)
            pixels?.map((element) => {
                pixelContainer.appendChild(element)
            })

            this.shadowRoot?.appendChild(link)
            this.shadowRoot?.appendChild(pixelContainer)

        }
    }
}

customElements.define("board-grid", Grid)