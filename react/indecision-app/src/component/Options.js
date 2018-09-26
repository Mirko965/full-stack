import Option  from './Option'
import React from 'react'

const Options = props => (
  <div>
    <button onClick={props.removeAll}>Remove All</button>
    {props.options.length === 0 && <p>Please add options to start</p>}
    <ol>
      {props.options.map((option, index) =>
        <Option key={index}
                option={option}
                deleteOption={props.deleteOption}
        />)
      }
    </ol>
  </div>
)
export default Options
