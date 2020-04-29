import React, { useState } from 'react';
import CalculatorTable from './CalculatorTable';

interface ICalculatorProps {

}

interface ICalculatorState {
  num1: string,
  num2: string,
  operator: string,
  text: string;
}

const Calculator = (props: ICalculatorProps, state: ICalculatorState) => {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [text, setText] = useState("0");

  const handleOperator = (event: React.MouseEvent<HTMLInputElement>) => {
    let value: string = (event.target as HTMLInputElement).value;
    if (operator && num2) {
      let newVal: string = eval(num1 + operator + num2);
      setNum1(newVal);
      setNum2("");
      setOperator(value);
      setText(newVal);
    } else if (!num2) {
      setOperator(value);
    }
  }

  const handleNumber = (event: React.MouseEvent<HTMLInputElement>) => {
    let value: string = (event.target as HTMLInputElement).value;
    if (num1 && operator) {
      let newVal: string = num2 + value;
      setNum2(newVal);
      setText(newVal);
    } else {
      let newVal: string = num1 + value;
      setNum1(newVal);
      setText(newVal);
    }
  }

  const handleCompute = (event: React.MouseEvent<HTMLInputElement>) => {
    let newVal: string = eval(num1 + operator + num2);
    setNum1(newVal);
    setNum2("");
    setOperator("");
    setText(newVal);
  }

  return (
    <div className="Calculator">
      <CalculatorTable handleOperator={handleOperator} handleNumber={handleNumber} handleCompute={handleCompute} text={text} />
    </div>
  );

}

export default Calculator;