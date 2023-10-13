import styles from './styles.css';
import {episodeType} from "../types/episode"
import {characterType} from "../types/character"
import {EpisodeData , CharacterData} from "../services/getData"
import {episode_props} from "../components/card/card"
import {character_props} from "../components/card/character"

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const episodeData = await EpisodeData ();
		const characterData = await CharacterData();

		this.render(episodeData, characterData);
	}

	render(episodeData?: any , characterData?:any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			episodeData.forEach((e:episodeType) => {
			const card = this.ownerDocument.createElement('app-card');
			card.setAttribute(episode_props.name, e.name)
			card.setAttribute(episode_props.air_date, e.air_date)
			card.setAttribute(episode_props.episode, e.episode)
			card.setAttribute(episode_props.character, e.character)
			this.shadowRoot?.appendChild(card);
			})
			characterData.forEach((e:characterType) => {
			const character = this.ownerDocument.createElement('app-character');
			character.setAttribute(character_props.name, e.name)
			character.setAttribute(character_props.image, e.image)
			this.shadowRoot?.appendChild(character);
			})
		}
			
	}
}

customElements.define('app-dashboard', Dashboard);
