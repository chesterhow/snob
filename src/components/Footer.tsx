import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 0 3rem;
  text-align: center;
`;

const Instructions = styled.p`
  margin: 1rem 0 0.9rem;
  font-family: ${(props) => props.theme.font.sansSerif};
`;

const Key = styled.kbd`
  display: inline-block;
  margin: 0 2px 4px;
  padding: 0.15rem 0.4rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontScale.sm};
  font-family: ${(props) => props.theme.font.sansSerif};
  font-weight: 500;
  vertical-align: middle;
  box-shadow: 0 3px 0 ${(props) => props.theme.colors.black};
  transition: 0.2s ease-out all;

  &:hover {
    box-shadow: 0 1px 0 ${(props) => props.theme.colors.black};
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

const Footer: React.FC = function () {
  return (
    <StyledFooter>
      <Instructions>
        Hit <Key>space</Key> to generate random tasting notes
      </Instructions>
    </StyledFooter>
  );
};

export default Footer;
