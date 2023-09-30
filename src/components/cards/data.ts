export async function gdata() {
    try {
        const data = await fetch("https://rickandmortyapi.com/api/character").then (res => res.json());
        console.log(data);
        return data.results
    } catch (error) {
       console.log(error); 
    }
}
export async function gdata2() {
    try {
        const data2 = await fetch("https://rickandmortyapi.com/api/character/?page=2").then (res => res.json());
        console.log(data2);
        return data2.results
    } catch (error) {
       console.log(error); 
    }
}