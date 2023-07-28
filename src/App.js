import "./App.scss";
import Header from "./componenets/header/Header"
import Main from "./componenets/main/Main"
import Navbar from "./componenets/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
