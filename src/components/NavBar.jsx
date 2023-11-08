import React, { useEffect } from 'react'
import styled from '@emotion/styled';

export default function NavBar() {

  const NavBarStyle = styled.div`
  div{
    position: absolute;
    right: 0;
  }
  
  `




  return (
    <>
      <NavBarStyle>
        <div>NavBar</div>
      </NavBarStyle>
    </>
  )
}
