import React from 'react'

const ButtonCount = ({props}) => {
    let [count, setCount] = React.useState(0);
    
    // function Increment() {
    //     setCount(count + 1);
    // }

    const incrementCount = () => {
        setCount(count + 1);
    }
    
  return (
    <div>
        <div>{props} Count : {count}</div>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default ButtonCount