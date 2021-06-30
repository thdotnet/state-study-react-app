import React, {useState} from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const increment = () => { setValue(value+1)};
    const decrement = () => { setValue(value-1)};

    const complexIncrease = () => {
        setTimeout(()=>{
            setValue((prevState)=>{
                return prevState +1;
            })
        }, 2000);
    };
    
    return <>
        <div>{value}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={()=> setValue(0)}>Reset</button>

        <section>
            <h2>complex counter</h2>
            <button onClick={complexIncrease}>Complext Increment</button>
        </section>
    </>

};

export default UseStateCounter;