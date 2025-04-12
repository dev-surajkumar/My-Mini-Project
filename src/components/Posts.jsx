import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/myposts.css';

const Posts = () => {
  const [dogData, setDogData] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const apikey = process.env.REACT_APP_DOG_API_KEY;

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const breedRes = await axios.get('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'x-api-key': apikey,
          },
        });

        const selectedBreeds = breedRes.data.slice(0, 15);

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
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchDogs();
  }, []);

  return (
    <div className="dog-container">
      {loading ? (
        <div className="loading-message">Fetching data...
        <div className="spinner"></div>
        </div>  
        
      ) : (
        dogData.map((dog) => (
          <div className="dog-card" key={dog.id}>
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.name}</h3>
            <h4>{dog.life_span}</h4>
            <p>{dog.temperament}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
