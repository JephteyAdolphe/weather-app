import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div className="results">
                   <h1><strong>{props.responseObj.name}</strong></h1>
                   <h2>Current Temp: {Math.round(props.responseObj.main.temp)}</h2>
                   <h2>Min Temp: {Math.round(props.responseObj.main.temp_min)} Max Temp: {Math.round(props.responseObj.main.temp_max)}</h2>
                   <h2>Humidity: {Math.round(props.responseObj.main.humidity)}%</h2>
                   <h2>{props.responseObj.weather[0].description}</h2>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;