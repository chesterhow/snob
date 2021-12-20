import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getColor } from '../../utils/getColor';
import TastingNote from './TastingNote';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 1rem 3rem;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    padding: 1rem 2rem;
  }
`;

const Text = styled.h4`
  margin: 0 0 1.5rem;
  font-weight: 400;
`;

const Frame = styled.div`
  position: relative;
  width: 400px;
  max-width: 100%;
  aspect-ratio: 3 / 4;
  margin: 0 auto;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.white};
  border-width: 0.7rem 0.7rem 3rem;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 10%);
  overflow: hidden;
`;

interface LayerProps {
  $hsl: string;
  $angle: number;
  $transparency: number;
}

// NOTE: Styling this using attrs to prevent a new class from being generated by styled components each time we randomise the props
const Layer = styled.div.attrs<LayerProps>((props) => ({
  style: {
    background: `linear-gradient(
      ${props.$angle}deg,
      hsla(${props.$hsl}, 1) ${props.$transparency - 50}%,
      hsla(${props.$hsl}, 0) ${props.$transparency}%
    )`,
  },
}))<LayerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  filter: blur(0.08rem);
`;

const stripHslWrapper = (color: string) => {
  return color.substring(4, color.length - 1);
};

interface Props {
  randomNotes: any[];
}

const AuraView: React.FC<Props> = function (props) {
  const { randomNotes } = props;
  const [randomAngles, setRandomAngles] = useState<number[]>([]);
  const stepSize = 50 / (randomNotes.length - 1);

  useEffect(() => {
    setRandomAngles([
      Math.floor(Math.random() * 360),
      Math.floor(Math.random() * 360),
      Math.floor(Math.random() * 360),
    ]);
  }, [randomNotes]);

  return (
    <Wrapper>
      <Text>
        Notes of <TastingNote note={randomNotes[0]} />,{' '}
        <TastingNote note={randomNotes[1]} /> and{' '}
        <TastingNote note={randomNotes[2]} />.
      </Text>
      <Frame>
        {randomNotes.map((note, idx) => (
          <Layer
            key={note.id}
            $hsl={stripHslWrapper(getColor(note.color))}
            $angle={randomAngles[idx]}
            $transparency={100 - idx * stepSize}
          />
        ))}
      </Frame>
    </Wrapper>
  );
};

export default AuraView;