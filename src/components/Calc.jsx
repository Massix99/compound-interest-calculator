import React, { useState } from 'react';
import Chart from "react-apexcharts";
import './Calc.css'

const Calc = () => {
    const [startValue, setStartValue] = useState(0)
    const [monthly, setMonthly] = useState(0)
    const [years, setYears] = useState(0)
    const [zins, setZins] = useState(0)
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = 12; // monatliche Zinsperioden
        const r = zins / 100; // Zinssatz in Dezimalform umwandeln

        const calculatedAmount = startValue * Math.pow(1 + r / n, n * years) +
                          monthly * ((Math.pow(1 + r / n, n * years) - 1) / (r / n));
        
        setAmount(calculatedAmount.toFixed(2));
    }

    const chartOptions = {
        // Define your chart options here
          series: [{
            data: [{
              x: 'category A',
              y: 10
            }, {
              x: 'category B',
              y: 18
            }, {
              x: 'category C',
              y: 13
            }]
          }]
      };

    

    return (
      <div className='wrapper'>
        <h1>Zinseszins Rechner</h1>
        <form className='form' onSubmit={handleSubmit} >
            <label>
                Anfangswert:
            </label>
            <input type='number' className='input' value={startValue} onChange={(e) => setStartValue(parseFloat(e.target.value))} />
            <label>
                Monatliche Einzahlung:
            </label>
            <input type='number' className='input' value={monthly} onChange={(e) => setMonthly(parseFloat(e.target.value))}/>
            <label>
                Jahre:
            </label>
            <input type='number' className='input' value={years} onChange={(e) => setYears(parseFloat(e.target.value))}/>
            <label>
                Zinssatz
            </label>
            <input type='number' className='input' value={zins} onChange={(e) => setZins(parseFloat(e.target.value))}/>
            <button type='submit'>Berechnen</button>
        </form>
        {amount > 0 && <p>Nach {years} Jahren hast du {amount} Euro.</p>}
        {/* {amount > 0 && <Chart width="500" />} */}
        <Chart
        options={chartOptions}
        series={chartOptions.series}
        type='bar'
        height={350}
      />
      </div>
    );
};

export default Calc;
