import styled from "styled-components";

interface Props {
  $isNew?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  padding: 0 2rem;
  border-radius: 10px;
  margin-bottom: 0.8rem;
  
  > input {
    height: 5.6rem;
    width: 100%;
    background: none;
    border: none;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    font-size: 2.4rem;
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
  }
`;
