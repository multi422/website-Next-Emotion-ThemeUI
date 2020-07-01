import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const OpenMenuContainer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-row-gap: 30px;
  align-self: center;
  justify-self: flex-start;
`;

export const OpenMenuLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`;
