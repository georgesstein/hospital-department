export default function Table({
  columns /* Array<string> */,
  rows /* Array<string[]> */,
  renderCell = ({ value }) => value,
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map(value => {
            return <th key={value}>{value}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map(cells => {
          const [rowId] = cells

          return (
            <tr key={rowId}>
              {cells.map((value, cellIndex) => {
                return (
                  <td key={`${rowId}${cellIndex}${value}`}>
                    {renderCell({ value, cellIndex, rowId })}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}