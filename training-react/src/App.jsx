import React from "react"
import FormLogin from "./components/Fragment/index.jsx";

// CLASS UTAMA
function App() {
  return (
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
          <p className="font-medium text-slate-600 mb-8">Welcome, Pleace enter your details</p>
          <FormLogin></FormLogin>
        </div>
      </div>
  )
}

export default App;