import styled from '@emotion/styled';

import { LG } from '../../../src/helpers/fonts';
import { DarkBlue, Grey, GreyLight, WhiteLilac } from '../../../src/helpers/colors';

export const MediumHeading = styled.h3`
  color: ${Grey};
`;

export const ListItem = styled.li`
  color: ${DarkBlue};
  font-size: ${LG};
  margin: 2rem 0;
`;

export const Input = styled.input`
  margin: 0 1rem;
  background: ${WhiteLilac};
  border: 1px solid ${GreyLight};
  padding: 1rem;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;
