import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.color.header};
  max-width: ${({ theme }) => theme["max-width"]};
  margin: auto;
  padding: 4rem 0;
`;

export default StyledHeader;

export const Logo = styled.img`
  width: 300px;
  padding: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive}){
  flex-direction: column;
  },
`;

export const Image = styled(Logo)`
@media (max-width: ${({ theme }) => theme.responsive}){
  margin: 2rem 0;
  

`;
