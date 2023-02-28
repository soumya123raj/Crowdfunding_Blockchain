import styled from 'styled-components';
const HeaderLogo = () => {
  return (
    <Logo>The Saviour</Logo>
  )
}
const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin-left: 10px;
  font-family: 'Poppins';
  letter-spacing: 3px;
  cursor: pointer;
`

export default HeaderLogo