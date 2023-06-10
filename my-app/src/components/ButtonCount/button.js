import React from 'react'

function ParentComponent () {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount(count + 1 );

    }
  return (
    <div>
        <ChildComponent props={count} incrementCount={incrementCount}/>
    </div>
  )
}

function ChildComponent ({props}) {
    return(
        <div>
            <p>Count : {props.count}</p>
            <button onClick={props.incrementCount}>Increment</button>
        </div>
    )

}


export default ParentComponent