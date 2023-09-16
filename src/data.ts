async function data(url: string) {
    const data = await fetch(url)
    const res = await data.json()
    console.log(res)
}

data("https://rickandmortyapi.com/api/episode");
data("https://rickandmortyapi.com/api/episode?page=2");
data("https://rickandmortyapi.com/api/episode?page=3");

export default data;