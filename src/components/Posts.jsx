import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/myposts.css';

const Posts = () => {
  const [dogData, setDogData] = useState([]);
  const apikey = process.env.REACT_APP_DOG_API_KEY;

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        // Step 1: Get all breeds
        const breedRes = await axios.get('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'x-api-key': apikey,
          },
        });

        // Step 2: Take first 40 breeds
        const selectedBreeds = breedRes.data.slice(0, 40);

        // Step 3: Fetch image for each breed
        const imagePromises = selectedBreeds.map(async (breed) => {
          const imageRes = await axios.get(
            `https://api.thedogapi.com/v1/images/search?breed_id=${breed.id}&limit=1`,
            {
              headers: {
                'x-api-key': apikey,
              },
            }
          );

          const image = imageRes.data[0];

          return {
            id: breed.id,
            name: breed.name,
            life_span: breed.life_span,
            temperament: breed.temperament,
            image: image?.url || '',
          };
        });

        const finalDogData = await Promise.all(imagePromises);
        setDogData(finalDogData);
      } catch (error) {
        console.error('Error fetching dog data:', error);
      }
    };

    fetchDogs();
  }, []);

  return (
    <div className="dog-container">
      {dogData.map((dog) => (
        <div className="dog-card" key={dog.id}>
          <img src={dog.image} alt={dog.name} />
          <h3>{dog.name}</h3>
          <h4>{dog.life_span}</h4>
          <p>{dog.temperament}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
