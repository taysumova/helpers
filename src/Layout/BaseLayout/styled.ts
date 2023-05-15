import { styled } from '@core/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
`;
