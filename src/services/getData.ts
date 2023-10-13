import { episodeType } from '../types/episode';
import { characterType} from '../types/character';
import {episode_props} from "../components/card/card"

export const EpisodeData = async () => {
  try {
    const Episode = await fetch ('https://rickandmortyapi.com/api/episode').then(res=>res.json())
    console.log(Episode) 
    return Episode.results
    
  } catch (error) {
    console.log(error)
  }
}
export const CharacterData = async () => {
  try {
    const character = await fetch(episode_props.character).then (res=>res.json())
    console.log(character)
    return character.results
  } catch (error) {
    console.log(error)
  }
}
