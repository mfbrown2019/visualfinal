import React from 'react';

function My() {
  return (
      <thead>
        <tr>
              <th>AAPL</th>
              <th colspan="3">
                  <select name="category2">
                      <option value="">CALLS - NEED PRICE TO GO UP</option>
                      <option value="">PUTS - NEED PRICE TO GO DOWN</option>
                  </select>
              </th>

              <th colspan="2">
                  <select name="category2">
                      <option value="">1 DAY (April 2nd)</option>
                      <option value="">1 MONTH (April 25th)</option>
                      <option value="">3 MONTHS (July 25th)</option>
                  </select>
              </th>
              <th>
                  Strike
              </th>
          </tr>
      </thead>
  );
}

export default My;
