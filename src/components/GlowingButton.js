import styled from 'styled-components';

const GlowingButton = () => {
  return (
    <>
      <p>SwipeButton</p>
      <StyledSwipeButton>Hover me</StyledSwipeButton>
      <Overlay />
    </>
  );
};

const StyledSwipeButton = styled.a`
  color: white;
  font-family: sans-serif;
  font-size: 40px;
  border: 3px solid white;
  padding: 40px 80px;
  position: relative;
  transition: all 0.3s;
  overflow: hidden;

  &:hover {
    background-color: #f44336;
  }

  &:before {
    content: '';
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  &:hover:before {
    transform: translate(100%) rotate(45deg);
  }
`;
const Overlay = styled.div`
  position: relative;
  width: 30rem;
  height: 11rem;
  background-color: black;
  top: -10rem;
  /* top: 1rem; */
  z-index: -2;
`;

export default GlowingButton;
