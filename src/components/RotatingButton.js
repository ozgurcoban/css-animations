import styled from 'styled-components';

const RotatingButton = () => {
  return (
    <>
      <p>Rotating Button</p>
      <StyledRotatingButton href='#'>Hover moi</StyledRotatingButton>
    </>
  );
};

const StyledRotatingButton = styled.a`
  font-family: sans-serif;
  font-size: 45px;
  border: 5px solid #272727;
  padding: 40px 80px;
  position: relative;
  overflow: hidden;
  display: block;
  margin-top: 0.5rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff300;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 1s;
  }

  &:hover::before {
    transform: rotate(0deg);
  }
`;

export default RotatingButton;
