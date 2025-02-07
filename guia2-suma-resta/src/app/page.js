"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { IconPlus, IconMinus, IconX, IconDivide, IconEraser } from '@tabler/icons-react';


export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);

  const validarNumeros = () => {
    setError(null);
    if (numero1 === '' && numero2 === '') { 
      setError('Introduzca los números a operar');
      setResultado(null);
      return false;
    }
    else if (numero1 === '') {
      setError('Introduzca el primer número');
      setResultado(null);
      return false;
    }
    else if (numero2 === '') {
      setError('Introduzca el segundo número');
      setResultado(null);
      return false;
    }
    return true;
  }
  const validarDivision = () => {
    setError(null);
    if (numero2 === '0') {
      setError('No se puede dividir por cero');
      setResultado(null);
      return false;
    }
    return true;
  }

  //Operaciones 

  const sumar = () => {
    if (validarNumeros()) {
      const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
      setResultado(`Resultado de la suma: ${resultadoSuma}`);
      setError(null);
    }
  }

  const restar = () => {
    if (validarNumeros()) {
      const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
      setResultado(`Resultado de la resta: ${resultadoResta}`);
      setError(null);
    }
  }

  const multiplicar = () => {
    if (validarNumeros()) {
      const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
      setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
      setError(null);
    }
  }

  const dividir = () => { 
    if (validarDivision() && validarNumeros()) {  
      const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la división: ${resultadoDivision.toFixed(2)}`);
      setError(null);
    }
  }

  //Renderizado

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}> Número 1:
            <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
          </label>
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}> Número 2:
            <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
          </label>
        </div>
        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>Sumar <IconPlus size={20} /></button>
          <button className={styles.button} onClick={restar}>Restar <IconMinus size={20} /></button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar <IconX size={20} /></button>
          <button className={styles.button} onClick={dividir}>Dividir <IconDivide size={20} /></button>
          <button className={styles.buttonClean} onClick={() => {
            setNumero1('');
            setNumero2('');
            setResultado(null);
            setError(null);
          }}>Limpiar <IconEraser size={20} /></button>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
