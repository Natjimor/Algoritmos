import cards, { info } from "./components/cards/card";
import { gdata, gdata2 } from "./components/cards/data";

export class section extends HTMLElement {
  create: cards[] = [];
  searchText = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    this.mount();
  }

  async mount() {
    await this.render("");
    this.test()
  }

  test() {
    const input = this.shadowRoot?.querySelector("input");
    const button = this.shadowRoot?.querySelector("button");
    input?.addEventListener("change", (e: any) => {
      const searchText = e.target?.value;
      button?.addEventListener("click", () => {
        this.render(searchText);
      });
    });
  }

  async render(searchText: string) {
    console.log(searchText);
    if (this.shadowRoot) {
      const data = await gdata();
      const data2 = await gdata2();
      const data3 = [...data,...data2]

      this.create = [];
      data3.forEach((e: any) => {
        if (e.name.includes(searchText)) {
          const character = this.ownerDocument.createElement("card-info") as cards;
          character.setAttribute(info.name, e.name);
          character.setAttribute(info.status, e.status);
          character.setAttribute(info.species, e.species);
          character.setAttribute(info.image, e.image);

          this.create.push(character);
        }
      });
      this.shadowRoot.innerHTML = ``;

      const link = this.ownerDocument.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./cards.css");
        this.shadowRoot.appendChild(link);

      const searchBar = this.ownerDocument.createElement("div");
      searchBar.setAttribute("id", "searchBar");
      const input = this.ownerDocument.createElement("input");
      input.setAttribute("type", "text");
      input.textContent = searchText;
      searchBar.appendChild(input);
      const button = this.ownerDocument.createElement("button");
      button.textContent = "search";
      searchBar.appendChild(button);
      this.shadowRoot.appendChild(searchBar);

      this.create.forEach((e: any) => {
        this.shadowRoot?.appendChild(e);
      });
      
      this.test()
    }
  }
}
customElements.define("sect-container", section);