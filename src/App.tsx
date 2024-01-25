import { Counter } from '@features/counter/Counter'
import { Quotes } from '@features/quotes/Quotes'
import Navbar from '@components/nav/Navbar'
import logo from '@resources/favicon.svg'

import '@style/custom.scss'
import '@routes'

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Counter />
        <Quotes />
      </header>
    </div>
  )
}

export default App

