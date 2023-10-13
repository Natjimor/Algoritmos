import styles from './styles.css';

export enum character_props {
	'name' = 'name',
    'image' = 'image'
}

export default class Character extends HTMLElement {
	properties: Record<character_props, string>={
        name:"",
        image: ""
    }

	static get observedAttributes() {
		const attrs: Record<character_props, null> = {
			name: null,
            image: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: character_props, _: string, newValue: string) {
		switch (propName) {

            case character_props.name:
                this.properties.name = newValue
                break;

            case character_props.image:
                this.properties.image = newValue
                break;
        
            default:
                break;
        }
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
            <h3>${this.properties.name}</h3>
            <img src="${this.properties.image}" alt="${this.properties.name}">
        `;
	}
}

customElements.define('app-character', Character);
