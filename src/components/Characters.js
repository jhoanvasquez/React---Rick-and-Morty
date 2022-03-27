function Characters(props) {
    const { characters,  setCharacter} = props;
    const reset = () => {
        setCharacter(null)
    }
    
  return (
    <div className="characters">
        <h1>Personajes</h1>
    <span className="back-home" onClick={reset}>Volver</span>
    <div className="container-characters">
        {characters.results.map((element, index) => (
            <div className="character-container" key={index}>
                <div>
                    <img src={element.image} alt = {element.name} />
                </div>
                <div>
                    <h3>{element.name}</h3>
                    <h6>{element.status === 'Alive' ? 
                        (
                            <>
                                <span className="alive"/>
                                Alive
                            </>
                        ):(
                            <>
                                <span className="dead"/>
                                Dead
                            </>
                        )}
                        </h6>
                        <p>
                            <span className="text-gray">Episodios: </span>
                            <span>{element.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-gray">Especie: </span>
                            <span>{element.species}</span>
                        </p>
                </div>
                
            </div>
        ))}
    </div>
    </div>
  )
}

export default Characters