import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { tab } from '@testing-library/user-event/dist/tab';

const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals();

const RenderButton = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [isOperatorPressed, setIsOperatorPressed] = useState(false);
    const [operator, setOperator] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [tableau, setTableau] = useState([]);
    const [result, setResult] = useState('');
    const [easterEgg, setEasterEgg] = useState(0);

    const CatchNumbers = (nbr) => {
        if (!isOperatorPressed) {
            setFirstNumber(prevFirstNumber => prevFirstNumber + nbr);
        } else if (isOperatorPressed) {
            setSecondNumber(prevSecondNumber => prevSecondNumber + nbr)
            
        }
    }

    const CatchOperators = (ope) => {
        setOperator(ope);
        if (!isOperatorPressed && firstNumber != null) {
            setTableau([firstNumber, ope]);
            setIsOperatorPressed(true);
        } else if (isOperatorPressed) {
            setTableau([firstNumber, ope, secondNumber]);
        }
    }

    const Calcul = () => {
        setEasterEgg(prevEasterEgg => prevEasterEgg + 1)

        

        if (operator === '+') {
            setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
        }
        else if (operator === '-') {
            setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
        }
        else if (operator === '*') {
            setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
        }
        else if (operator === '/') {
            setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
        }
    }

    const Clear = () => {
        setFirstNumber('');
        setIsOperatorPressed(false);
        setOperator('');
        setSecondNumber('');
        setTableau([]);
        setResult('');

    }

    useEffect(() => {
        if (isOperatorPressed && secondNumber !== '') {
            setTableau([firstNumber, operator, secondNumber]);
        }
    }, [firstNumber, operator, secondNumber, isOperatorPressed]);


    return (
        <div>
        {/* avec bootstrap */}
            <div className="calculator card">

                <input type="text" className="calculator-screen z-depth-1" value={!isOperatorPressed ? firstNumber : tableau.join(' ')} disabled />
                <input type="text" className="calculator-screen z-depth-1" value={result} disabled />

                <div className="calculator-keys">

                    <button onClick={() => CatchOperators('+')} type="button" className="operator btn btn-info" value="+">+</button>
                    <button onClick={() => CatchOperators('-')} type="button" className="operator btn btn-info" value="-">-</button>
                    <button onClick={() => CatchOperators('*')} type="button" className="operator btn btn-info" value="*">&times;</button>
                    <button onClick={() => CatchOperators('/')} type="button" className="operator btn btn-info" value="/">&divide;</button>

                    <button onClick={() => CatchNumbers('7')} type="button" value="7" className="btn btn-light waves-effect">7</button>
                    <button onClick={() => CatchNumbers('8')} type="button" value="8" className="btn btn-light waves-effect">8</button>
                    <button onClick={() => CatchNumbers('9')} type="button" value="9" className="btn btn-light waves-effect">9</button>

                    <button onClick={() => CatchNumbers('4')} type="button" value="4" className="btn btn-light waves-effect">4</button>
                    <button onClick={() => CatchNumbers('5')} type="button" value="5" className="btn btn-light waves-effect">5</button>
                    <button onClick={() => CatchNumbers('6')} type="button" value="6" className="btn btn-light waves-effect">6</button>

                    <button onClick={() => CatchNumbers('1')} type="button" value="1" className="btn btn-light waves-effect">1</button>
                    <button onClick={() => CatchNumbers('2')} type="button" value="2" className="btn btn-light waves-effect">2</button>
                    <button onClick={() => CatchNumbers('3')} type="button" value="3" className="btn btn-light waves-effect">3</button>

                    <button onClick={() => CatchNumbers('0')} type="button" value="0" className="btn btn-light waves-effect">0</button>
                    <button onClick={() => CatchNumbers('.')} type="button" className="decimal function btn btn-secondary" value=".">.</button>
                    <button onClick={Clear} type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear">AC</button>

                    <button onClick={Calcul} type="button" className="equal-sign operator btn btn-default" value="=">=</button>

                </div>
            </div>
            <p id="easterEgg" style={{ display: easterEgg > 10 ? "block" : "none"}}>Bravo tu as utilisé 10 fois la calculette, maintenant fait un don</p>
        </div>
    )
}

root.render(
    <>
        <RenderButton />
    </>
);
