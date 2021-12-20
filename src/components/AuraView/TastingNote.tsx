import React from 'react';
import styled from 'styled-components';

import { getColor } from '../../utils/getColor';

const Note = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
`;

interface Props {
  note: any;
}

const TastingNote: React.FC<Props> = function (props) {
  const { note } = props;

  return <Note $color={getColor(note.color)}>{note.name.toLowerCase()}</Note>;
};

export default TastingNote;
