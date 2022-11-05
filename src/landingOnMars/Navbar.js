import curiosity from './assets/curiosity.jpg';
import styled from 'styled-components';
const Navbar = () => {
  return (
    <Wrapper>
      <div className="select-rover">
        <img src={curiosity} alt="curiosity" />
        <h1 className="rover-title">curiosity</h1>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  margin-top: 30%;
  img {
    display: block;
    height: 150px;
    width: 100%;
  }
  .select-rover {
    position: relative;
    width: 200px;
    transition: transform 0.5s ease-in-out;
    margin: 10px;
  }
  .select-rover:hover {
    transform: scale(1.7);
    .rover-title {
      animation: backText 1s linear;
      animation-fill-mode: forwards;
    }
  }

  .rover-title {
    opacity: 0;
    position: absolute;
    bottom: 0;
    text-transform: uppercase;
    color: white;
    font-size: 27px;
    letter-spacing: 1px;
    width: 100%;
  }

  @keyframes backText {
    from {
      transform: scaleX(0);
      transform-origin: bottom left;
      background: black;
      opacity: 1;
    }
    to {
      transform: scaleX(1);
      transform-origin: bottom left;
      background: black;
      opacity: 0.7;
    }
  }
`;
