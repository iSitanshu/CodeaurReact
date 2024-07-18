import './App.css'

function App() {


  return (
    <>
      <div className='nav'>
        <h1 className='heading'>Password Generator</h1>
        <div className="main">
          <div className="top">
            <input type="text" className='input' />
            <button>Copy</button>
          </div>
          <div className="bottom">
            <div>
              <input type="range" max={100} min={6}/>
              <label>Length : 8</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Number</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
