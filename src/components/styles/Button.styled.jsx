import styled from 'styled-components';

const Button = styled.button`
  background: ${({bg})=> bg || "white"};
  color: ${({bg}) => bg || "white"};
  border: 1px solid #a62440;



`;

export default Button;
