import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'



// 3
const client = new ApolloClient({
     networkInterface
})

// 4
ReactDOM.render(
     <ApolloProvider client={client}>
          <App />
     </ApolloProvider>
     , document.getElementById('root')
)
registerServiceWorker()