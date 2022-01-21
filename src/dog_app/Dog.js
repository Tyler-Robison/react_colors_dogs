const Dog = ({ dogName, dogFacts, dogAge, dogSrc }) => {
    return (
        <div>
            <p>Name: {dogName}</p>
            <p>Facts</p>
            <ol>
                {dogFacts.map(fact => {
                   return <li>{fact}</li>
                })}
            </ol>
            <p>Age: {dogAge}</p>
            <img src={`${dogSrc}`}></img>

        </div>
    );
}

export default Dog;