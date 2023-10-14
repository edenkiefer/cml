import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.blue};

  img {
    width: 8rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }
`
