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
      const { photo_manifest } = response.data;
      const {
        landing_date: landDate,
        launch_date: laucDate,
        max_sol: maxSol,
        photos,
        status,
        total_photos: totalPhotos,
      } = photo_manifest;
      // const lastPhoto = photos[photos.length - 1];
      setData({ landDate, laucDate, maxSol, status, totalPhotos });
    } catch (error) {
      console.log(error);
    }
  };

  const { landDate, laucDate, maxSol, status, totalPhotos } = data;
  return (
    <Wrapper>
      <button onClick={() => fetchRover()}>Get Data</button>
      <div className="status">
        Status: {status}
        <span
          className={`status-icon ${
            status === 'active' ? 'active' : 'inactive'
          }`}
        ></span>
      </div>
      <img src={curiosity2} alt="curiosity name" />
      <div className="dates">
        <h3>Landing Date: {landDate}</h3>
        <h3>Launch Date: {laucDate}</h3>
      </div>
      <div className="stats">
        <h2>Most recent martian Sol: {maxSol}</h2>
        <h2>Number of photos: {totalPhotos}</h2>
      </div>
    </Wrapper>
  );
};
export default Curiosity;

const Wrapper = styled.section`
  position: relative;
  margin-top: 20%;

  button {
    background: #597492;
    color: white;
    border: 1px solid lightskyblue;
    font-size: 15px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
  }

  img {
    display: block;
    width: 500px;
    height: 400px;
    filter: contrast(100%) brightness(70%);
  }
  .status {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    color: white;
    z-index: 1;
    padding: 30px;
  }
  .status-icon {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-top: 2px;
    animation: bouncing 1.5s infinite;
  }
  .active {
    background: green;
  }
  .inactive {
    background: red;
  }

  .dates {
    position: absolute;
    right: 0;
    top: 20%;
    font-size: 14px;
    color: lightskyblue;
    padding: 30px;
  }
  .stats {
    position: absolute;
    bottom: 0;
    font-size: 12px;
    color: lightgoldenrodyellow;
    padding: 30px;
  }

  @keyframes bouncing {
    0% {
      transform: scale(0.6);
    }
    70% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.6);
    }
  }
`;
