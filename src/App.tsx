//components

import {AppHeader} from "./components/Header/AppHeader";

import './index.css'


//Possibilità di scrivere anche così
// const App = () => {
//   return (
//       <div>
//         <h1>Hello React</h1>
//       </div>
//   )
// }
function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
