import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;

  div:nth-child(2) {
    input {
      width: 6rem;
    }
  }

  div:nth-child(3) {
    input {
      width: 3rem;
    }
  }

  div:nth-child(4) {
    input {
      width: 7rem;
    }
  }

  div.select {
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
  }

  > button {
    height: 2.2rem;
    padding: 8px 10px;
    margin-top: 19px;
    background-color: red;
    border: none;
    border-radius: 4px;

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`
