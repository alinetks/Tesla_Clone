import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useAppSelector } from "../app/hooks";

interface StyleProps {
  show?: boolean;
}

const Header: React.VFC = () => {
  const [navState, setNavState] = useState(false);
  const cars = useAppSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
      {cars &&
          cars.map((car: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
            <a href="##" key={index}>
              {car}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <a href=''> Shop </a>
        <a href=''> Tesla Account</a>
        <CustomMenu onClick={() => setNavState(true) }/>
      </RightMenu>
      <Nav show={navState}>
        <CloseWrapper>
          <CustomClose onClick={() => setNavState(false) }/>
        </CloseWrapper>
        {cars &&
          cars.map((car: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
            <li key={index}>
              <a href="##">{car}</a>
            </li>
          ))}
        <li><a href=''> Solar Roof </a></li>
        <li><a href=''> Solar Panels </a></li>
        <li><a href=''> Existing Inventory </a></li>
        <li><a href=''> Use Inventory </a></li>
        <li><a href=''> Trade-In </a></li>
        <li><a href=''> Test Drive </a></li>
        <li><a href=''> Insurance </a></li>
        <li><a href=''> Powerwall </a></li>
        <li><a href=''> Commercial Energy </a></li>
        <li><a href=''> Utilities </a></li>
        <li><a href=''> Charging </a></li>
        <li><a href=''> Find Us </a></li>
      </Nav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;

`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
}

@media(max-width:768px){
  display: none;
}

`

const RightMenu = styled.div`
display: flex;
align-items: center;

a {
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;

`
const Nav = styled.div<StyleProps>`
position fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 10;
list-style: none;
padding: 20px;
display: flex;
flex-direction:column;
text-align: start;

transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
transition: transform 0.2s ;

li{
  padding: 15px 0;
  border-bottom: 1px solid #bebebe90;

  a{
    font-weight: 600;
  }
}

`

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;

`

const CustomClose = styled(CloseIcon)`
cursor: pointer;

`