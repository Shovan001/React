import { useState } from "react"

function App() {
  const [bgColor, setBgColor] = useState("olive")

  return (
    <>
       <div className="w-full h-screen duration-200" style={{ backgroundColor: bgColor }}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-8 shadow-2xl  px-3 py-2  rounded-2xl">
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
                    style={{ backgroundColor: "red" }}
                    onClick={() => setBgColor("red")}
                  >Red</button>
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
                    style={{ backgroundColor: "Green" }}
                    onClick={() => setBgColor("Green")}
                  >Green</button>
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
                    style={{ backgroundColor: "Blue" }}
                    onClick={() => setBgColor("Blue")}
                  >Blue</button>
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
                    style={{ backgroundColor: "Black" }}
                    onClick={() => setBgColor("Black")}
                  >Black</button>
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-black shadow-2xl"
                    style={{ backgroundColor: "White" }}
                    onClick={() => setBgColor("White")}
                  >White</button>
                  <button 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
                    style={{ backgroundColor: "Purple" }}
                    onClick={() => setBgColor("Purple")}
                  >Purple</button>
              </div>
          </div>
       </div>
      
    </>
  )
}

export default App
