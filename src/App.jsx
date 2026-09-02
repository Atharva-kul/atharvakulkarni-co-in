import NavBar from "./components/navbar";
import Body from "./components/body";
import GlassCard from "./components/glassCard";

import "./App.css";

function App() {
  

  return (
    <>
      <div className="min-h-screen bg-[#EDF2FF]">
        <NavBar />
      
        <main className="flex w-fu">
          <Body />
          
        </main>

    </div>
    </>
  )
}

export default App
