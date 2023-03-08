import './App.css'
import Head from './Componant/Head'
import Main from './Componant/Main'
import Buttons from './Componant/Buttons'
import Thanks from './Componant/Thanks'

function App() {
  return(
    <>
      <Thanks/>
      <div id='container'>
        <Head/>
        <Main/>
        <Buttons/>
      </div>
    </>
    
  )
}

export default App
