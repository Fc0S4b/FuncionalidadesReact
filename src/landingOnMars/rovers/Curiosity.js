import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import curiosity2 from '../assets/curiosity2.jpg';
const Curiosity = () => {
  const [data, setData] = useState({});
  const fetchRover = async () => {
    try {
      const response = await axios.get(
        `https://mars-photos.herokuapp.com//api/v1/manifests/Curiosity?api_key=${process.env.REACT_APP_API_KEY_NASA}`
      );

      console.log(response);

      const { photo_manifest } = response.data;
      const {
        landing_date: landDate,
        launch_date: laucDate,
        max_sol: maxSol,
        photos,
        status,
        total_photos: totalPhotos,
      } = photo_manifest;
      const lastPhoto = photos[photos.length - 1];
      setData({ landDate, laucDate, maxSol, lastPhoto, status, totalPhotos });
    } catch (error) {
      console.log(error);
    }
  };

  const { landDate, laucDate, maxSol, status, totalPhotos, lastPhoto } = data;
  console.log(lastPhoto);
  return (
    <Wrapper>
      <img src={curiosity2} alt="curiosity name" />
      <button onClick={() => fetchRover()}>Curiosity</button>
      <h1>{landDate}</h1>
      <h1>{laucDate}</h1>
      <h1>{maxSol}</h1>
      <h1>{status}</h1>
      <h1>{totalPhotos}</h1>
    </Wrapper>
  );
};
export default Curiosity;

const Wrapper = styled.section`
  img {
    display: block;
    width: 300px;
    height: 200px;
  }
`;
