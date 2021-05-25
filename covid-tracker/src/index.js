import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
const Index = () => {
    return(
        <div>
            <App />
        </div>
    )
}
ReactDom.render(<Index />,document.getElementById('root'))