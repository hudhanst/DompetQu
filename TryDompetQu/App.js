// import React from "react"

// import { Provider, useDispatch } from 'react-redux'
// import { API_URL, API_TOKEN } from '@env'

// import Store from './src/Store/Store'
// import BaseRouter from './src/Router'
// // import { Load_User } from './src/DB/CC'
// import {
//   LoadDB
// } from './src/Store/Reducers/todosSlice'
// class App extends React.Component {
//   componentDidMount() {
//     console.log(1)
//     // useDispatch(LoadDB)
//     // const {TESTAPI} = this.props
//     // TESTAPI()
//     this.useDispatch(LoadDB)
//   }
//   dispatch = () => {
//     useDispatch()
//   }
//   render() {
//     console.log(API_TOKEN, API_URL)
//     return (
//       <Provider store={Store}>
//         <BaseRouter />
//       </Provider>
//     )
//   }
// }

// export default App


import { Provider } from 'react-redux'
import { API_URL, API_TOKEN } from '@env'

import Store from './src/Store/Store'
import BaseRouter from './src/Router'


const App = () => {
  console.log(API_TOKEN, API_URL,process.env.API_TOKEN)
  console.log(process.env.API_TOKEN === 'abc123')
  return (
    <Provider store={Store}>
      <BaseRouter />
    </Provider>
  )
}

export default App
