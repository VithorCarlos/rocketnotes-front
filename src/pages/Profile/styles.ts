import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    button {
      border: none;
      background: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin-top: 1.6rem;
  }

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  margin-top: -10.4rem;
  margin-bottom: 6.4rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    padding: 1.4rem;
    transition: filter 0.2s;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;

    input {
      display: none;
    }

    &:hover {
      filter: brightness(0.85);
    }
  }
`;
