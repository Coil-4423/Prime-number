import { useReducer, useState ,useEffect } from 'react'
import { judgePrimeNumber } from './components/judger';
import './App.css'


function App() {
  const [value, setValue] = useState<number>(0);
  const [inputError, setInputError] = useState('')
  const [numberList,setList] =useState<{number:number,result:boolean}>({number:0,result:false})
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(Number(e.target.value));
    setIsSubmit(false)
    if(e.target.value)setInputError(validate(Number(e.target.value)));
  }

  const handleSubmit =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    setInputError(validate(value));
    setIsSubmit(true);
    if(value<=9999999999)setList({number:value,result:judgePrimeNumber(value)});
  }

  const validate = (value:number) => {  
    if(value===0){return ''}
    else if(value>9999999999||!Number.isInteger(value)){
      return 'Input an integer less than 9999999999'
    }
    else return ''
  }

  const message =(result:boolean)=>{
  return (
    result? 'a prime number':'not a prime number'
  )
  }

  return (
    <div className='App'>
      <h1>primality test</h1>
      <p>Please input an integer less than 9999999999:</p>
      <div className='input' >
        <input type="number" name='number' onChange={e=>handleChange(e)}
        placeholder='0'/>
        <button onClick={e=>handleSubmit(e)}>test</button>
        </div>
        <p className='errorMessage'>{inputError}</p>
        <div>{inputError===''&& isSubmit ? (<div className='answer'>{`${numberList.number} is ${message(numberList.result)}`}</div>):true}</div>
    </div>
  )
}

export default App
