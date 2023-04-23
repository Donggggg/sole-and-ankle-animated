import React from 'react';
import styled from 'styled-components/macro';
import {WEIGHTS} from "../../constants";
const NavLink = ({href, children}) => {
    return <Wrapper href={href}>
        <Text>{children}</Text>
        <BoldText>{children}</BoldText>
    </Wrapper>;
}


const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);   
`;

const Text = styled.span`
  display: block;
  transition: transform 200ms;
    
    ${Wrapper}:hover & {
      transform: translateY(-100%); 
      transition: transform 200ms;
    }
`;

const BoldText = styled.span`
  display: block;
    position: absolute;
    top: 0;
    font-weight: 700;
    transform: translateY(100%);
  transition: transform 200ms;

  ${Wrapper}:hover & {
    transform: translateY(0%);
    transition: transform 200ms;
  }
`;

export default NavLink;