import styles from './styles.css';

export enum character_props {
	'name' = 'name',
    'image' = 'image'
}

export default class Character extends HTMLElement {
	
        name?: string
        image?: string

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
                this.name = newValue
                break;

            case character_props.image:
                this.image = newValue
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
            <h3>${this.name}</h3>
            <img src="${this.image}" alt="${this.name}">
        `;
	}
}

customElements.define('app-character', Character);
