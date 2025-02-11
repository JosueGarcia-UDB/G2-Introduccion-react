import { useState } from "react";

function App() {
  const [grades, setGrades] = useState(0);
  const [convertedGradesCelsius, setConvertedGradesCelsius] = useState(0);
  const [convertedGradesFahrenheit, setConvertedGradesFahrenheit] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConvertedGradesCelsius(Math.round(grades * 1.8 + 32));
    setConvertedGradesFahrenheit(Math.round((grades - 32) / 1.8));
  };

  const handleChange = (e) => {
    setGrades(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold pb-4">Convertidor de Grados</h1>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="number"
        value={grades}
        onChange={handleChange}
      />
      <button
        className="bg-green-700 text-white px-2 py-2 mt-4 rounded-md cursor-pointer hover:bg-green-800"
        onClick={handleSubmit}
      >
        Convertir
      </button>
      <h2 className="text-2xl font-bold mt-4">
        {grades}° Celcius convertido a:{" "}
        <span className="text-green-900">
          {convertedGradesCelsius}° Fahrenheit
        </span>
      </h2>
      <h2 className="text-2xl font-bold mt-4">
        {grades}° Fahrenheit convertido a:{" "}
        <span className="text-green-900">
          {convertedGradesFahrenheit}° Celcius
        </span>
      </h2>
    </div>
  );
}

export default App;
