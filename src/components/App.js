
import '../css/App.css';
import { useState, useEffect } from "react";

import Webull from './Webull';
import My from './My';

function App() {

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");
  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [value15, setValue15] = useState("");
  const [value16, setValue16] = useState("");
  const [value17, setValue17] = useState("");

  const data1My = [
    ["Loss / Day", "Open Contracts", "Contracts Bought", "P&L / $1 Change", "Sell", "Buy", "$100.34"],
    ["$16.00", "19,000", "20,000", "$70.00", "$200.00", "$199.00", "98"],
    ["$18.00", "500", "10,000", "$61.00", "$167.00", "$166.00", "99"],
    ["$19.00", "4,902", "500", "$50.00", "$138.00", "$136.00", "100"],
    ["$17.00", "5,222", "100,000", "$39.00", "$113.00", "$112.00", "101"],
    ["$15.00", "1,000", "3,000", "$28.00", "$99.00", "$98.00", "102"],
    ["$12.00", "100", "78,391", "$19.00", "$62.00", "$61.00", "103"]
  ];

  const data1W = [
    ["Theta", "Open Interest", "Volatility", "Delta", "Ask", "Bid", "$100.34"],
    [".16", "19,000", "20,000", ".70", "2.00", "1.99", "98"],
    [".18", "500", "10,000", ".61", "1.67", "1.66", "99"],
    [".19", "4,902", "500", ".50", "1.38", "1.36", "100"],
    [".17", "5,222", "100,000", ".39", "1.13", "1.12", "101"],
    [".15", "1,000", "3,000", ".28", ".99", ".98", "102"],
    [".12", "100", "78,391", ".19", ".62", ".61", "103"]
  ];

  // State to hold the timer value
  const [time, setTime] = useState(0);
  // State to control whether the timer is running
  const [isRunning, setIsRunning] = useState(false);
  // State to save all recorded times
  const [savedTimes, setSavedTimes] = useState([]);
  const [answer, setSavedAnswer] = useState([]);
  useEffect(() => {
    let interval;

    // If the timer is running, start counting
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100); // Increment the timer every 1 second
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = (rowIndex, colIndex) => {
    if (isRunning) {
      setIsRunning(false);
      // Save the current time and reset the timer
      setSavedTimes((prevTimes) => [...prevTimes, time]);
      setTime(0); // Reset the timer to zero

      setSavedAnswer((any) => [...any, rowIndex]);
      console.log(rowIndex, colIndex)
    }



  };

  const getRowClassMy = (index) => {
    if (index === 0) return "HEAD";
    if (index === 1 || index === 2 || index === 3) return "ITM";
    if (index === 4) return "ATM";
    if (index >= 5) return "OTM";
  };
  const getRowClassW = (index) => {
    if (index === 0) return "HEAD";
    if (index === 1 || index === 2 || index === 3) return "ITMW";
    if (index === 4) return "ATMW";
    if (index >= 5) return "OTMW";
  };


  return (
    <div className="App">

      <h3 className='rules'>Explain these terms in context of options trading.<br></br>If you do not know just say IDK.<br></br>Do not change your answers after progressing<br></br>Do not look below before answering</h3>

      <h3>What Does Theta Mean?</h3>
      <input className='long' onChange={e => setValue1(e.target.value)}></input>

      <h3>What Does Delta Mean?</h3>
      <input className='long' onChange={e => setValue2(e.target.value)}></input>

      <h3>What Does Bid Mean?</h3>
      <input className='long' onChange={e => setValue3(e.target.value)}></input>

      <h3>What Does Ask Mean?</h3>
      <input className='long' onChange={e => setValue4(e.target.value)}></input>

      <h3>What Does Volatility Mean?</h3>
      <input className='long' onChange={e => setValue5(e.target.value)}></input>

      <h3>What Does Call Mean?</h3>
      <input className='long' onChange={e => setValue6(e.target.value)}></input>

      <h3>What Does Put Mean?</h3>
      <input className='long' onChange={e => setValue7(e.target.value)}></input>


<div className='gap'></div>
      <h3>How much money does the $99 Strike Cost</h3>
      <table>
          <Webull />
          <tbody>
            {data1W.map((row, rowIndex) => (
            <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
      <input  onChange={e => setValue8(e.target.value)}></input>


      <h3>How much money do you lose everyday you have the $103 strike contract</h3>
      <table>
          <Webull />
          <tbody>
            {data1W.map((row, rowIndex) => (
            <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
      <input  onChange={e => setValue9(e.target.value)}></input>

      <h3>How much money do you lose if the $100 strike contract goes down $1</h3>
      <table>
          <Webull />
          <tbody>
            {data1W.map((row, rowIndex) => (
            <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
      <input  onChange={e => setValue10(e.target.value)}></input>

      <h3>How much money do you gain if the $103 strike contract goes up $1</h3>
      <table>
          <Webull />
          <tbody>
            {data1W.map((row, rowIndex) => (
            <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
      <input  onChange={e => setValue11(e.target.value)}></input>


      <h3>How many people are holding the $99 strike contract</h3>
      <table>
          <Webull />
          <tbody>
            {data1W.map((row, rowIndex) => (
            <tr key={rowIndex} className={getRowClassW(rowIndex)}>
                {row.map((cell, colIndex) => (
                    <td key={colIndex}>{cell}</td>
                ))}
            </tr>
            ))}
        </tbody>
      </table>
      <input  onChange={e => setValue12(e.target.value)}></input>

      <div className='gap'></div>
      <div className='HEAD rules'>Answer all questions as prompted.<br></br>After reading the question start the timer.<br></br>Once a cell is clicked the timer will stop.</div>

      <div></div>



      {/* Bid Cost Example Webull */}
      <h3>Click the contract that cost $166 to buy</h3>  
      <button className='btn' onClick={handleStart}>Start Timer</button>  
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


      {/* Bid Cost Example Webull */}
      <h3>Click the contract you could sell for the most money</h3>  
      <button className='btn' onClick={handleStart}>Start Timer</button>  
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

      <h3>Click the contract that has 1000 active contracts</h3>
      <button className='btn' onClick={handleStart}>Start Timer</button>
   
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

      

      <h3>Choose the contract that will lose $19 every day you own it</h3>
      <button className='btn' onClick={handleStart}>Start Timer</button>
   
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


      {/* Theta My Example */}
      <h3>Choose the contract that will lose $19 every day you own it</h3>
      <button className='btn' onClick={handleStart}>Start Timer</button>
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


      <h3>Click any of the In the Money contracts</h3>
      <button className='btn' onClick={handleStart}>Start Timer</button>
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



      <h3>Click the contract that makes the least amount of money if the stock goes up $3</h3>  
      <button className='btn' onClick={handleStart}>Start Timer</button>
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

      <h3>Click the contract that was bought the most today</h3>  
      <button className='btn' onClick={handleStart}>Start Timer</button>
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


      <h3 className='rules'>Now you will type your answer instead of clicking a contract<br></br>Remeber not to go back if a question changes your mind later</h3>

      

      {/*  */}
      <h3>How much money does the $99 Strike Cost</h3>
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
      <input onChange={e => setValue13(e.target.value)}></input>


      <h3>How much money do you lose everyday you have the $103 strike contract</h3>
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
      <input onChange={e => setValue14(e.target.value)}></input>

      <h3>How much money do you lose if the $100 strike contract goes down $1</h3>
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
      <input onChange={e => setValue15(e.target.value)}></input>

      <h3>How much money do you lose if the $103 strike contract goes up $1</h3>
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
      <input onChange={e => setValue16(e.target.value)}></input>


      <h3>How many people are holding the $99 strike contract</h3>
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
      <input onChange={e => setValue17(e.target.value)}></input>
          
      <div></div>



      <div></div>
      <h3 className='rules'>Take a photo of your answers and send them to me</h3>

      <div className='results'>

        <div>Problem 1 | {value1}</div>
        <div>Problem 2 | {value2}</div>
        <div>Problem 3 | {value3}</div>
        <div>Problem 4 | {value4}</div>
        <div>Problem 5 | {value5}</div>
        <div>Problem 6 | {value6}</div>
        <div>Problem 7 | {value7}</div>
        <div>Problem 8 | {value3}</div>
        <div>Problem 9 | {value4}</div>
        <div>Problem 10 | {value5}</div>
        <div>Problem 11 | {value6}</div>
        <div>Problem 12 | {value7}</div>
        {savedTimes.map((savedTime, index) => (
          <div key={index + 1}>Problem {index + 13} | {savedTime} | {answer[index]}</div>
        ))}

    
        <div>Problem 21 | {value8}</div>
        <div>Problem 22 | {value9}</div>
        <div>Problem 23 | {value10}</div>
        <div>Problem 24 | {value11}</div>
        <div>Problem 25 | {value12}</div>
      </div>

    </div>
  );
}

export default App;
