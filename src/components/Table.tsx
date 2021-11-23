

export function Table(data: {
  columns: Array<string>
  rows: Array<{
    id: number
    firstName: string
    lastName: string
    middleName: string
    birthDate: string
    phone: string
  }>
}) {
  return (
    <table className="table">
      <thead>
        <tr>
          {data.columns.map(value => {
            return <th key={value}>{value}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {data.rows.map(cells => {
          const [rowId] = cells
        })}
      </tbody>
    </table>
  )
}
