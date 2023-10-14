import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 0.8em;
    height: 15px;
    letter-spacing: 0.75px;
  }

  input {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 8px 10px;
    font-size: 1rem;
  }
`
