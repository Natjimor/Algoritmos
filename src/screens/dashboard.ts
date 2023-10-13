import styles from './styles.css';
import {EpisodeData, CharacterData } from "../services/getData"
import {episode_props} from "../components/card/card"
import {character_props} from "../components/character/character"

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const episodeData = await EpisodeData ();
		this.render(episodeData.results);
	}

	render(episodeData?: any ) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			episodeData.forEach((e:any) => {
			const div = this.ownerDocument.createElement("div");
			const episode = this.ownerDocument.createElement('app-card');
			episode.setAttribute(episode_props.name, e.name)
			episode.setAttribute(episode_props.air_date, e.air_date)
			episode.setAttribute(episode_props.episode, e.episode)
			div.appendChild(episode);

				e.characters.forEach(async(characters:string) => {
				const characterData = await CharacterData (characters)
				const character = this.ownerDocument.createElement('app-character');
				character.setAttribute(character_props.name, characterData.name)
				character.setAttribute(character_props.image, characterData.image)
				div.appendChild(character);
			})
			this.shadowRoot?.appendChild(div);
			})
		}
			
	}
}

customElements.define('app-dashboard', Dashboard);
