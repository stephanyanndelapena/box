
import './App.css'

function Header({ surname }) {
  return (
    <header className="header">
      <h1>{surname}</h1>
    </header>
  )
}
function Box({ subjectCode }) {
  return (
    <div className="box">
      <p>{subjectCode}</p>
    </div>
  )
}
function App() {

  return (
    <div className="App">
      <Header surname="DELA PEÑA" />
      <Box subjectCode="CPEITEL" />
    </div>
  )
}

export default App
