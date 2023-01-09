import styled from 'styled-components';

const CircularSwapButton = () => {
  return (
    <>
      <p>CircularSwapButton</p>
      <Button>Button</Button>
    </>
  );
};

const Button = styled.a`
  border: 2px solid tomato;
  margin-bottom: 2rem;
  background: none;
  color: tomato;
  padding: 20px 40px;
  font-size: 25px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  overflow: hidden;

  &:hover {
    color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: tomato;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0;
    transition: all 0.5s;
  }

  &:hover::before {
    height: 190%;
  }
`;

export default CircularSwapButton;
