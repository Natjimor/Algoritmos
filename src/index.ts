import "./components/export"
import { data } from "./services/data"
import { global_state } from "./store/index"
import { radialFunction } from "./types/radial_function"
import { addObserver } from "./store/index"

class AppContainer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        addObserver(this)

    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const link = this.ownerDocument.createElement("link")
            link.setAttribute("rel", "stylesheet")
            link.setAttribute("href", "/src/appContainer.css")

            const mainContainer = this.ownerDocument.createElement("section")
            mainContainer.classList.add("boardContainer")

            data.map((dataElement) => {
                const board = this.ownerDocument.createElement("board-container")
                board.setAttribute("title", `${dataElement.title}`)
                board.setAttribute("grid", `${dataElement.grid}`)
                mainContainer.appendChild(board)
            })

            this.shadowRoot?.appendChild(link)
            this.shadowRoot?.appendChild(mainContainer)
        }
    }
}

customElements.define("app-container", AppContainer)