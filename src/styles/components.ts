import { styled } from '@core/styled';
import { baseTheme } from './theme';

interface DividerProps {
  height?: number;
  heightMob?: number;
}

export const Divider = styled.div<DividerProps>`
  height: ${({ height = 8 }) => height}px;
`;

const TitleBase = `
  color: ${baseTheme.colors.font};
  font-family: ${baseTheme.fonts.main};
  font-weight: 400;
`;

export const Title1 = styled.h1`
  font-size: 32px;
  line-height: 115%;
  ${TitleBase};
`;

export const Title3 = styled.h3`
  font-size: 28px;
  line-height: 130%;
  ${TitleBase};
`;

export const Title4 = styled.h4`
  font-size: 20px;
  line-height: 115%;
  ${TitleBase};
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.decorations.borderRadius};
  color: ${({ theme }) => theme.colors.tagFont};
  font-size: 14px;
  line-height: 120%;
  padding: 6px 10px 3px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.font};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  line-height: 125%;
  padding: 0;
  margin: 0;

  & + & {
    margin-bottom: 14px;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.lightFont};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  line-height: 125%;
`;

interface OverflowTextProps {
  columns?: number;
  maxHeight?: number;
}

export const OverflowText = styled(Text)<OverflowTextProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ columns = 6 }) => columns};
  max-height: ${({ maxHeight = 120 }) => maxHeight}px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
