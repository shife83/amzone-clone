import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './Reducer/reducer.jsx';
import { StateProvider } from './StateProvider/StateProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
  
)
