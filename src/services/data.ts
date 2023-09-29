export async function get_data() {
    try {
        const data = await fetch('https://rickandmortyapi.com/api/character').then (res => res.json());
        console.log(data);
        return data.results
    } catch (error) {
       console.log(error); 
    }
}