import styled from 'styled-components';
import BgImg from '../../assets/images/bg.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > p {
    margin: 1rem 0 4.8rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 2.4rem;

    margin-bottom: 4.8rem;
  }

  > button {
    margin-top: 2.4rem;
  }

  > a {
    color: ${({theme}) => theme.COLORS.ORANGE};
    margin-top: 12.4rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BgImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.25;
`