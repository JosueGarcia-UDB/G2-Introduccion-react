import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-8xl font-bold mb-20 text-white">{count}</h1>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className="bg-red-500 text-white p-2 rounded-md cursor-pointer" onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  )
}

export default App
