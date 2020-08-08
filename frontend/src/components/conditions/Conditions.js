import React from 'react';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
               <div className="results">
                   <h2><strong>{props.responseObj.name}</strong></h2>
                   <p>Current Temp: {Math.round(props.responseObj.main.temp)}</p>
                   <p>Min Temp: {Math.round(props.responseObj.main.temp_min)}           Max Temp: {Math.round(props.responseObj.main.temp_max)}</p>
                   <p>Humidity: {Math.round(props.responseObj.main.humidity)}%</p>
                   <p>{props.responseObj.weather[0].description}</p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;