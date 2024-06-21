import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([]);

  const handleDigit = (digit) => {
    setCurrentNumber(currentNumber + digit);
  };

  const handleOperation = (op) => {
    setOperation(op);
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
  };

  const handleEqual = () => {
    try {
      const result = eval(`${previousNumber} ${operation} ${currentNumber}`);
      setPreviousNumber(result);
      setCurrentNumber(result.toString());
      setHistory([...history, `${previousNumber} ${operation} ${currentNumber} = ${result}`]);
    } catch (error) {
      setCurrentNumber('Error');
    }
  };

  const handleClear = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  };

  const handleMemory = (memOp) => {
    switch (memOp) {
      case 'mc':
        setPreviousNumber('');
        break;
      case 'm+':
        setPreviousNumber((prev) => (parseFloat(prev) + parseFloat(currentNumber)).toString());
        break;
      case 'm-':
        setPreviousNumber((prev) => (parseFloat(prev) - parseFloat(currentNumber)).toString());
        break;
      case 'mr':
        setCurrentNumber(previousNumber);
        break;
      default:
        break;
    }
  };

  const factorial = (n) => (n !== 1 ? n * factorial(n - 1) : 1);
  
  const handleScientific = (func) => {
    let num = parseFloat(currentNumber);
    let result;
    switch (func) {
      case 'x²':
        result = Math.pow(num, 2).toString();
        break;
      case 'x³':
        result = Math.pow(num, 3).toString();
        break;
      case 'xʸ':
        result = Math.pow(num, parseFloat(prompt('Enter the power'))).toString();
        break;
      case 'eˣ':
        result = Math.pow(Math.E, num).toString();
        break;
      case '10ˣ':
        result = Math.pow(10, num).toString();
        break;
      case '1/x':
        result = (1 / num).toString();
        break;
      case '²√x':
        result = Math.sqrt(num).toString();
        break;
      case '³√x':
        result = Math.cbrt(num).toString();
        break;
      case 'ʸ√x':
        const root = parseFloat(prompt('Enter the root'));
        result = Math.pow(num, 1 / root).toString();
        break;
      case 'ln':
        result = Math.log(num).toString();
        break;
      case 'log₁₀':
        result = Math.log10(num).toString();
        break;
      case 'x!':
        result = factorial(num).toString();
        break;
      case 'sin':
        result = Math.sin(num).toString();
        break;
      case 'cos':
        result = Math.cos(num).toString();
        break;
      case 'tan':
        result = Math.tan(num).toString();
        break;
      case 'e':
        result = Math.E.toString();
        break;
      case 'EE':
        result = prompt('Enter the number in scientific notation');
        break;
      case 'Rad':
        result = (num * (Math.PI / 180)).toString();
        break;
      case 'sinh':
        result = Math.sinh(num).toString();
        break;
      case 'cosh':
        result = Math.cosh(num).toString();
        break;
      case 'tanh':
        result = Math.tanh(num).toString();
        break;
      case 'π':
        result = Math.PI.toString();
        break;
      case 'Rand':
        result = Math.random().toString();
        break;
      default:
        break;
    }
    setCurrentNumber(result);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleConfetti = () => {
    if (currentNumber.includes('5') && currentNumber.includes('6')) {
      // Return confetti explosion component or handle confetti logic here
      return <div className="confetti"></div>;
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="display">
        <p id="result">{currentNumber}</p>
        {handleConfetti()}
      </div>
      <div className="keyboard">
        <div className="row">
          <button onClick={() => handleMemory('mc')}>mc</button>
          <button onClick={() => handleMemory('m+')}>m+</button>
          <button onClick={() => handleMemory('m-')}>m-</button>
          <button onClick={() => handleMemory('mr')}>mr</button>
        </div>
        <div className="row">
          <button onClick={() => handleScientific('²nd')}>2<sup>nd</sup></button>
          <button onClick={() => handleScientific('x²')}>x²</button>
          <button onClick={() => handleScientific('x³')}>x³</button>
          <button onClick={() => handleScientific('xʸ')}>xʸ</button>
          <button onClick={() => handleScientific('eˣ')}>eˣ</button>
          <button onClick={() => handleScientific('10ˣ')}>10ˣ</button>
        </div>
        <div className="row">
          <button onClick={() => handleScientific('1/x')}>1/x</button>
          <button onClick={() => handleScientific('²√x')}>²√x</button>
          <button onClick={() => handleScientific('³√x')}>³√x</button>
          <button onClick={() => handleScientific('ʸ√x')}>ʸ√x</button>
          <button onClick={() => handleScientific('ln')}>ln</button>
          <button onClick={() => handleScientific('log₁₀')}>log₁₀</button>
        </div>
        <div className="row">
          <button onClick={() => handleScientific('x!')}>x!</button>
          <button onClick={() => handleScientific('sin')}>sin</button>
          <button onClick={() => handleScientific('cos')}>cos</button>
          <button onClick={() => handleScientific('tan')}>tan</button>
          <button onClick={() => handleScientific('e')}>e</button>
          <button onClick={() => handleScientific('EE')}>EE</button>
        </div>
        <div className="row">
          <button onClick={() => handleScientific('Rad')}>Rad</button>
          <button onClick={() => handleScientific('sinh')}>sinh</button>
          <button onClick={() => handleScientific('cosh')}>cosh</button>
          <button onClick={() => handleScientific('tanh')}>tanh</button>
          <button onClick={() => handleScientific('π')}>π</button>
          <button onClick={() => handleScientific('Rand')}>Rand</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigit('7')}>7</button>
          <button onClick={() => handleDigit('8')}>8</button>
          <button onClick={() => handleDigit('9')}>9</button>
          <button onClick={() => handleOperation('/')}>÷</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigit('4')}>4</button>
          <button onClick={() => handleDigit('5')}>5</button>
          <button onClick={() => handleDigit('6')}>6</button>
          <button onClick={() => handleOperation('*')}>×</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigit('1')}>1</button>
          <button onClick={() => handleDigit('2')}>2</button>
          <button onClick={() => handleDigit('3')}>3</button>
          <button onClick={() => handleOperation('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigit('0')}>0</button>
          <button onClick={() => handleEqual()}>=</button>
          <button onClick={() => handleOperation('+')}>+</button>
          <button onClick={() => handleClear()}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
