import Dog from "./Dog";
import { useParams } from 'react-router-dom';

const DogDetails = ({ dogs }) => {

    const { name } = useParams();
    // strange behavior b/c we're using filter inside return block
    const dog = dogs.filter(dog => {
        if (dog.name === name) {
            return dog
        }
    })[0]

    return (
        <div className="App">
            <h1>Dog Details</h1>
            <Dog
                dogName={dog.name}
                dogFacts={dog.facts}
                dogAge={dog.age}
                dogSrc={dog.src}
            />



        </div>
    );
}

export default DogDetails;