
import './App.css'

function Header({ name }) {
  return (
    <header className="header">
      <h1>{name}</h1>
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
  const name = 'Stephany Ann Dela Peña'
  const subjectCode = 'CPEITEL'

  return (
    <div className="App">
      <Header name={name} />
      <Box subjectCode={subjectCode} />
    </div>
  )
}

export default App
