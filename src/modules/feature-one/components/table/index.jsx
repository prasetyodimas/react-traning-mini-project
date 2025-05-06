import PropTypes from 'prop-types';

/**
 * A reusable table component that takes in data and column names as props and renders a table
 * 
 * @param {Object} props Component props
 * @param {Array<Object>} props.data An array of objects to be rendered as table rows
 * @param {string[]} props.columns An array of strings representing the column names
 * @returns {ReactElement} A table React element
 */
const TableTraning = ({ data, columns }) => {
  if (data || data.length <= 0) return null

  return (
    <table style={{
      borderCollapse: 'collapse',
      width: '100%',
    }}>
      <thead style={{
        backgroundColor: '#f0f0f0',
        textAlign: 'left',
      }}>
        <tr>
          {columns?.map(column => (
            <th key={column} style={{
              padding: '8px',
              border: '1px solid #ddd',
            }}>{column.replace(/_/g, ' ')}</th>
          ))}
        </tr>
      </thead>
      <tbody style={{
        backgroundColor: '#ffffff',
      }}>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(column => (
              <td key={`${row.id}-${column}`} style={{
                padding: '8px',
                border: '1px solid #ddd',
              }}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TableTraning.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TableTraning

