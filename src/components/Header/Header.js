import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <FrontFace>Sale</FrontFace>
            <BackFace>Sale</BackFace>
          </NavLink>
          <NavLink href="/new">
            <FrontFace>New&nbsp;Releases</FrontFace>
            <BackFace>New&nbsp;Releases</BackFace>
          </NavLink>
          <NavLink href="/men">
            <FrontFace>Men</FrontFace>
            <BackFace>Men</BackFace>
          </NavLink>
          <NavLink href="/women">
            <FrontFace>Women</FrontFace>
            <BackFace>Women</BackFace>
          </NavLink>
          <NavLink href="/kids">
            <FrontFace>Kids</FrontFace>
            <BackFace>Kids</BackFace>
          </NavLink>
          <NavLink href="/collections">
            <FrontFace>Collections</FrontFace>
            <BackFace>Collections</BackFace>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  /* Flipping de Navlink */
  perspective: 500px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
const FrontFace = styled.div`
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: ${WEIGHTS.medium};

  /* Flipping the Navlink */
  transition: transform 400ms;
  will-change: transform;
  backface-visibility: hidden;
  /* Vendor prefix for Safari */
  -webkit-backface-visibility: hidden;

`
const BackFace = styled(FrontFace)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateX(180deg);
  transform-origin: 0px bottom;
`
const NavLink = styled.a`
  /* Flipping de Navlink */
  position: relative;
  display: block;

  text-decoration: none;
  color: var(--color-gray-900);
  &:first-of-type{
    color: var(--color-secondary);
  }
  &:hover ${FrontFace},
  &:focus ${FrontFace} {
    transform: rotateX(-180deg);
    transform-origin: 0px bottom;
  }
  &:hover ${BackFace},
  &:focus ${BackFace} {
    transform: rotateX(0deg);
    transform-origin: 0px bottom;
  }
`;

export default Header;
