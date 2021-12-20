import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 0 3rem;
  text-align: center;
`;

const LargeScreenInstructions = styled.p`
  margin: 1rem 0 0.9rem;
  font-family: ${(props) => props.theme.font.sansSerif};

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
  }
`;

const SmallScreenInstructions = styled.div`
  display: none;
  margin: 0.8rem 0;

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    display: block;
  }
`;

const KeyStyles = css`
  display: inline-block;
  margin: 0 2px 4px;
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  font-family: ${(props) => props.theme.font.sansSerif};
  font-weight: 500;
  vertical-align: middle;
  box-shadow: 0 3px 0 ${(props) => props.theme.colors.black};
  transition: 0.2s ease-out box-shadow;

  &:hover {
    box-shadow: 0 1px 0 ${(props) => props.theme.colors.black};
  }
`;

const Key = styled.kbd`
  ${KeyStyles}
  padding: 0.15rem 0.4rem;
  font-size: ${(props) => props.theme.fontScale.sm};
`;

const Button = styled.button`
  ${KeyStyles}
  padding: 0.3rem 0.5rem;
  background: none;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontScale.md};
  cursor: pointer;
`;

interface Props {
  onRandomiseClick: () => void;
}

const Instructions: React.FC<Props> = function (props) {
  const { onRandomiseClick } = props;

  return (
    <Container>
      <LargeScreenInstructions>
        Hit <Key>space</Key> to generate random tasting notes
      </LargeScreenInstructions>
      <SmallScreenInstructions>
        <Button onClick={onRandomiseClick}>Randomise!</Button>
      </SmallScreenInstructions>
    </Container>
  );
};

export default Instructions;
