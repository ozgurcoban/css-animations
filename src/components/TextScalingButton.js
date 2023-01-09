import styled from 'styled-components';

const TextScalingButton = () => {
  return (
    <>
      <p>Text scaling button</p>
      <StyledButton>Hover me</StyledButton>
    </>
  );
};

const StyledButton = styled.a`
  position: relative;
  color: #262626;
  font-size: 40px;
  border: 3px solid #262626;
  padding: 40px 80px;
  transition: all 0.5s;
  overflow: hidden;

  &::before {
    content: 'Hover me';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #262626;
    color: white;
    display: grid;
    place-items: center;
    transform: scale(5);
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
`;

export default TextScalingButton;
