import axios from 'axios';

const Curiosity = () => {
  const fetchRover = async () => {
    try {
      const response = await axios.get(
        `https://mars-photos.herokuapp.com//api/v1/manifests/Curiosity?photos&sol=3640&api_key=${process.env.REACT_APP_API_KEY_NASA}`
      );
      console.log(response.data.photo_manifest.photos[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchRover()}>Curiosity</button>
    </div>
  );
};
export default Curiosity;
