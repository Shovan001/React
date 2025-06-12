import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

const Element = (
  <a href="https://google.com" target="_blank">
    click me to use google
  </a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to use google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
