import React from 'react';

function My() {
  return (
    <div>
        <table>
            <My />
            <tbody>
                {data1My.map((row, rowIndex) => (
                <tr key={rowIndex} className={getRowClassMy(rowIndex)}>
                    {row.map((cell, colIndex) => (
                    <td key={colIndex} onClick={() => handleStop(rowIndex, colIndex)}>{cell}</td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>

        <table>
            <Webull />
            <tbody>
                {data1W.map((row, rowIndex) => (
                <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                    {row.map((cell, colIndex) => (
                        <td key={colIndex} onClick={() => handleStop(rowIndex, colIndex)}>{cell}</td>
                    ))}
                </tr>
                ))}
            </tbody>
    </table>
  </div>
  );
}

export default My;
