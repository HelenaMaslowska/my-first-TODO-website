import React from 'react'
import classes from './Margin'
//import { Spring } from 'react-spring'


export default function Margin() {
  return (
    <div style={c1Style}>
      <h1> Welcome to my page!</h1>
      <p>Helena Masłowska 13.04.2022</p>
    </div>


/* 
    <Spring 
      from={{opacity: 0}}
      to={{opacity: 1}}
      >
      { props => (
        <div style={props}>

          <div style={c1Style}>
            <h1> Welcome to my page!</h1>
            <p>Helena Masłowska 12.04.2022</p>
          </div>

        </div>
      )}
    </Spring>
*/

  )
}

const c1Style = {
    fontSize: '12px',
    color: 'white',
    padding: '0rem',
}