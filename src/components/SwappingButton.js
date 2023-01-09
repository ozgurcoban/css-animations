import styled from 'styled-components';

const SwappingButton = () => {
  return (
    <>
      <p>SwappingButton</p>
      <StyledSwappingButton>Hover me</StyledSwappingButton>
    </>
  );
};

const StyledSwappingButton = styled.a`
  background-color: #262626;
  font-family: sans-serif;
  font-size: 40px;
  border: 4px solid #262626;
  padding: 40px 80px;
  position: relative;
  color: transparent;
  overflow: hidden;

  &:before {
    content: 'Hover Me';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }

  &:after {
    content: 'Hover Me';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fffa65;
    color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: translate(-100%, 100%);
  }
  &:hover:before {
    transform: translate(100%, -100%);
  }

  &:hover:after {
    transform: translate(0, 0);
  }
`;

export default SwappingButton;
