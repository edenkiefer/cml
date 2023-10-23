import styled from 'styled-components'

export const Container = styled.div`
  table.AppTable {
    width: 100%;
    border-collapse: collapse;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    thead {
      background-color: ${({ theme }) => theme.colors.blue};

      tr th {
        color: ${({ theme }) => theme.colors.white};
        text-align: left;
        padding: 7px 10px;
        font-size: 0.8em;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.75px;

        &.right {
          text-align: right;
        }
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        td {
          padding: 7px 10px;

          &.right {
            text-align: right;
          }
        }
      }
    }

    .actions {
      > *:not(:last-child) {
        margin-right: 5px;
      }
    }
  }

  .Table__pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 7px;

    a {
      width: 25px;
      height: 25px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.blue};
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 12px;

      &:not(:last-child) {
        margin-right: 5px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.blue};
        box-shadow: 0 3px 6px rgb(0, 0, 0, 0.2);
      }
    }
  }
`
