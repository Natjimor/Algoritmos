import styles from './styles.css';

export enum episode_props {
	'name' = 'name',
	'air_date' = 'air_date',
	'episode' = 'episode',
	'characters' = 'characters'
}

export default class Card extends HTMLElement {
	properties: Record<episode_props, string> = {
		name: '',
		air_date: '',
		episode:'',
		characters: ''
	}

	static get observedAttributes() {
		const attrs: Record<episode_props, null> = {
			name: null,
			air_date: null,
			episode:null,
			characters: null
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: episode_props, _: string, newValue: string) {
		switch (propName) {
			case episode_props.name:
				this.properties.name = newValue
				break;

			case episode_props.air_date:
				this.properties.air_date = newValue
				break;

			case episode_props.episode:
				this.properties.episode = newValue
				break;

			case episode_props.characters:
				this.properties.characters = newValue
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
			<h2>${this.properties.name}</h2>
			<p>${this.properties.air_date}</p>
			<p>${this.properties.episode}</p>
			<p>${this.properties.characters}</p>
        `;
	}
}

customElements.define('app-card', Card);
