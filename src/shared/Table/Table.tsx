/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import organizeData from '../../utils/organizeDataFromTable'
import { NavLink, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import paginate from '../../utils/paginate'
import { Container } from './styles'
export interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean

  itemsPerPage?: number

  onDelete?: (item: any) => void
  onDetail?: (item: any) => void
  onEdit?: (item: any) => void
}

const Table: React.FC<TableProps> = (props) => {
  const location = useLocation()

  const page = parseInt(queryString.parse(location.search).page as string) || 1

  const itemsPerPage = props.itemsPerPage || 5

  const [organizedData, indexedHeaders] = organizeData(
    props.data,
    props.headers,
  )
  const paginatedData = paginate(organizedData, itemsPerPage, page)

  const totalPages = Math.ceil(organizedData.length / itemsPerPage)
  return (
    <Container>
      <table className="AppTable">
        <thead>
          <tr>
            {props.headers.map((header) => (
              <th key={header.key} className={header.right ? 'right' : ''}>
                {header.value}
              </th>
            ))}
            {props.enableActions && <th className="right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== '$original' ? (
                    <td
                      key={row.$original._id + i}
                      className={indexedHeaders[item].right ? 'right' : ''}
                    >
                      {row[item]}
                    </td>
                  ) : null,
                )}
                {props.enableActions && (
                  <td className="actions right">
                    {props.onEdit && (
                      <button
                        onClick={() =>
                          props.onEdit && props.onEdit(row.$original)
                        }
                      >
                        Edit
                      </button>
                    )}
                    {props.onDetail && (
                      <button
                        onClick={() =>
                          props.onDetail && props.onDetail(row.$original)
                        }
                      >
                        Detail
                      </button>
                    )}
                    {props.onDelete && (
                      <button
                        onClick={() =>
                          props.onDelete && props.onDelete(row.$original)
                        }
                      >
                        Delete
                      </button>
                    )}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="Table__pagination">
        {Array(totalPages)
          .fill('')
          .map((_, i) => {
            return (
              <NavLink key={i + 1} to={`${location.pathname}?page=${i + 1}`}>
                {i + 1}
              </NavLink>
            )
          })}
      </div>
    </Container>
  )
}

export default Table
