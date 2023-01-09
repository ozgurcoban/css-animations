import styled from 'styled-components';

const SwipeFromBottom = () => {
  return (
    <>
      <p>Swipe from bottom</p>
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
  transition: all 1s;
  overflow: hidden;

  &:before {
    content: 'YEAH!';
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #351435;
    transform: translateY(100%);
    transition: all 1s;
    display: grid;
    place-items: center;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &:hover {
    color: white;
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

export default SwipeFromBottom;
