import styled from 'styled-components';

const SwipeButton = () => {
  return (
    <>
      <p>SwipeButton</p>
      <StyledSwipeButton>Hover me</StyledSwipeButton>
    </>
  );
};

const StyledSwipeButton = styled.a`
  color: #351435;
  font-family: sans-serif;
  font-size: 40px;
  border: 3px solid #351435;
  padding: 40px 80px;
  position: relative;
  transition: all 1s;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #351435;
    z-index: -1;
    transform: translateX(-100%);
    transition: all 1s;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &:hover {
    color: white;
  }
`;

export default SwipeButton;
