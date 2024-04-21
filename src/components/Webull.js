import React from 'react';

function Webull() {
  return (
      <thead>
        <tr>
          <th>AAPL</th>
          <th colSpan="3">
            <select name="category1">
              <option value="CALLS">CALLS</option>
              <option value="PUTS">PUTS</option>
            </select>
          </th>
          <th colSpan="2">
            <select name="category2">
              <option value="1_DAY">1 DAY</option>
              <option value="1_MONTH">1 MONTH</option>
              <option value="3_MONTHS">3 MONTHS</option>
            </select>
          </th>
          <th>Strike</th>
        </tr>
      </thead>
  );
}

export default Webull;
