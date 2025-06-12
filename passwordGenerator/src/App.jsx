import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current?.select();
    window.navigator.clipboard.writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch(err => console.error('Failed to copy: ', err));
  }

  const passwordGenerator = useCallback(() =>{
    let password = "";
    let  string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) {
      string += "0123456789";
    }
    if (includeChars) {
      string += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length);
      password += string[randomIndex];
    }
    setPassword(password);
  }, [length, includeNumbers,  includeChars, setPassword] )
 
  useEffect(() => {
    passwordGenerator();
  }
  , [length, includeNumbers, includeChars, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-6 my-8 text-red-500 bg-gray-800">
        <h1 className="text-center px-5 py-2 text-white my-3">Password Generator</h1>
        <div className="flex justify-center shadow-md rounded-lg overflow-hidden mb-4">
          <input type="text"
            value={password}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-amber-50"
            placeholder="Generated Password"
            ref={inputRef}
          />
          <button
            onClick={handleCopy}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600 cursor-pointer"
          >
            Copy
          </button>
          {copied && <span className="text-red-600 ml-2">Copied!</span>}
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-amber-50 cursor-pointer"
              placeholder="Password Length"
            />
            <label className="text-green-500">Length: {length}</label>

          </div>
            <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="cursor-pointer"
            />
            <label className="text-green-500">Include Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={includeChars}
              onChange={(e) => setIncludeChars(e.target.checked)}
              className="cursor-pointer"
            />
            <label className="text-green-500">Include Special Characters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
