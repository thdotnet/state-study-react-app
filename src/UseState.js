import React, {useState} from 'react'

const UseStateBasics = () => {
    const [text, setText] = useState('1');
    const handleClick = () => {
        if(text === 'random title'){
            setText('hello world');
            return;
        }
        setText('random title');
    }


   return <React.Fragment>
       <h1>{text}</h1>
       <button className='btn' onClick={handleClick}>change title 2</button>
   </React.Fragment>
}

export default UseStateBasics;