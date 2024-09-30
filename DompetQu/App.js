import { Provider } from 'react-redux'

import Store from './src/Store/Store'
import BaseRouter from './src/Router'

const App = () => {
  return (
    <Provider store={Store}>
      <BaseRouter />
    </Provider>
  )
}

export default App
