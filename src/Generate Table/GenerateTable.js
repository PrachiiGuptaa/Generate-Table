import React, { useState } from 'react';
import './GenerateTable.css'

const TableGenerator = () => {
  const [number, setNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNumber(value);
    generateTable(value);
  };

  const generateTable = (num) => {
    const data = [];
    for (let i = 1; i <= num; i++) {
      data.push(<tr key={i}><td>{i}</td></tr>);
    }
    setTableData(data);
  };

  return (
    <div className='wrapper'>
        <h2>Table Generator</h2>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <table className="table">
        <tbody>
          {tableData}
        </tbody>
      </table>
    </div>
  );
};

export default TableGenerator;
