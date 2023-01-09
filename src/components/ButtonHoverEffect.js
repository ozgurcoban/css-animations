import styled from 'styled-components';

const ButtonHoverEffect = () => {
  return (
    <>
      <p>ButtonHoverEffect</p>
      <StyledButtonHoverEffect>Hover me</StyledButtonHoverEffect>
    </>
  );
};

const StyledButtonHoverEffect = styled.a`
  padding: 40px 80px;
  font-family: sans-serif;
  color: #262626;
  font-size: 45px;
  letter-spacing: 2px;
  position: relative;
  border: 5px solid #262626;
  transition: 1s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626;
    transition: 1s;
    transform: rotateX(90deg);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #262626;
    transition: 1s;
    transform: rotateY(90deg);
    z-index: -1;
  }

  &:hover::before {
    transform: rotateX(0deg);
  }
  &:hover::after {
    transform: rotateY(0deg);
  }

  &:hover {
    color: white;
  }
`;

export default ButtonHoverEffect;
