import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 10.5rem auto;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
`;

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    h1 {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem;
    }
  }
`;
