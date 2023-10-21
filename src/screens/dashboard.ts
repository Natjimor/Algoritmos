import {EpisodeData, CharacterData } from "../services/getData"
import {episode_props} from "../components/card/card"
import {character_props} from "../components/character/character"
import { Action, ActionsList } from "../types/store";
import { dispatch, state, addObserver } from "../store/index";
import { addCharacter, addEpisodes } from "../store/actions";

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const episodeData = await EpisodeData ();
		dispatch(
			addEpisodes(JSON.stringify(episodeData))
		)
		this.render(episodeData.results);
	}

	render(episodeData?: any ) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const style = this.ownerDocument.createElement("link")
			style.setAttribute("rel", "stylesheet")
			style.setAttribute("href", "/src/screens/dashboard.css")
			this.shadowRoot.appendChild(style)
			
			episodeData.forEach((e:any) => {
			const div = this.ownerDocument.createElement("div");
			const episode = this.ownerDocument.createElement('app-card');
			episode.setAttribute(episode_props.name, e.name)
			episode.setAttribute(episode_props.air_date, e.air_date)
			episode.setAttribute(episode_props.episode, e.episode)
			div.appendChild(episode);
			const characterContainer = this.ownerDocument.createElement("section")
			div.appendChild(characterContainer)

				e.characters.forEach(async(characters:string) => {
				const characterData = await CharacterData (characters)
				dispatch(
					addCharacter(JSON.stringify(characterData))
				)
				const character = this.ownerDocument.createElement('app-character');
				character.setAttribute(character_props.name, characterData.name)
				character.setAttribute(character_props.image, characterData.image)
				characterContainer.appendChild(character);
			})
			this.shadowRoot?.appendChild(div);
			})
		}
			
	}
}

customElements.define('app-dashboard', Dashboard);
