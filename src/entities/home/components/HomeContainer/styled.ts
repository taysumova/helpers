import { styled } from "@core/styled";

export const HomeContainerStyled = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 30px;
`;

export const Tag = styled.span`
  border-radius: 8px;
  padding: 2px 8px;
`;
