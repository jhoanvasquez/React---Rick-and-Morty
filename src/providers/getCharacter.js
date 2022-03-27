export async function getCharacter() {
    const urlApi = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await urlApi.json();

    return characterApi
}

export default getCharacter;