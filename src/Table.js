import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const Table = props => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

class Table extends Component {
  render() {
    const { characterData } = this.props

    return (
	<tr key={index}>
	  <td>{row.name}</td>
	  <td>{row.job}</td>
	  <td>
	    <button onClick={() => props.removeCharacter(index)}>Delete</button>
	  </td>
	</tr>
    )
  }
}

export default Table
