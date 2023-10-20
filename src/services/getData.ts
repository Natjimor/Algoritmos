export const EpisodeData = async () => {
  try {
    const Episode = await fetch ('https://rickandmortyapi.com/api/episode').then(res=>res.json())
    console.log(Episode) 
    return Episode
    
  } catch (error) {
    console.log(error)
  }
}
export const CharacterData = async (src: string) => {
  try {
    const character = await fetch(`${src}`).then (res=>res.json())
    console.log(character)
    return character
  } catch (error) {
    console.log(error)
  }
}
