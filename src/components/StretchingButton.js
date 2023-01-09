import styled from 'styled-components';

const StretchingButton = () => {
  return (
    <>
      <p>Streching Button</p>
      <StyledStretchingButton>Click me</StyledStretchingButton>
    </>
  );
};

const StyledStretchingButton = styled.a`
  padding: 40px 80px;
  color: #e1332d;
  border: 3px solid #e1332d;
  text-transform: uppercase;
  font-size: 40px;
  font-family: 'Open sans';
  font-weight: 300;
  letter-spacing: -2px;
  transition: all 0.5s;

  &:hover {
    font-weight: 900;
    letter-spacing: 10px;
    border: 7px solid #e1332d;
  }
`;

export default StretchingButton;
