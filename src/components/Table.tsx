type Props = {
  columns: Array<string> /* header cells */
  rows: Array<string[]> /* body cells; first cell of each row is used as unique row identifier */
  renderCell?: (p: { value: string; cellIndex: number; rowId: string }) => string | JSX.Element
}

export default function Table(p: Props) {
  const { renderCell = ({ value }) => value } = p

  return (
    <table className='table'>
      <thead>
        <tr>
          {p.columns.map(value => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {p.rows.map(cells => {
          const [rowId] = cells

          return (
            <tr key={rowId}>
              {cells.map((value, cellIndex) => (
                <td key={`${rowId}${cellIndex}${value}`}>{renderCell({ value, cellIndex, rowId })}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
