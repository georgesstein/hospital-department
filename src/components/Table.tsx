type Props = {
  columns: Array<string>;
  rows: Array<string[]>;
}

// type ROW = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   middleName: string;
//   birthDate: string;
// }

export default function Table(
  p: Props
  // renderCell = ({ value }) => value,
) {
  return (
    <table className="table">
      <thead>
        <tr>
          {p.columns.map(value => {
            return <th key={value}>{value}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {p.rows.map(cells => {
          const [rowId] = cells

          return (
            <tr key={rowId}>
              {cells.map((value, cellIndex) => {
                return (
                  <td key={`${rowId}${cellIndex}${value}`}>
                    {value}
                    {/* {renderCell({ value, cellIndex, rowId })} */}
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
