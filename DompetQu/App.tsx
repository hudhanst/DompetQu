import { Provider } from 'react-redux'
// import { API_URL, API_TOKEN } from '@env'

import AppIndex from './src/Index'
import Store from './src/Store/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <AppIndex />
    </Provider>
  )
}

export default App