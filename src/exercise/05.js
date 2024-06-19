// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div className="box box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </div>
)

// extra 1
const Box = ({className, style, children}) => (
  <div className={`box ${className}`} style={style}>
    {children}
  </div>
)

// extra 2
const BoxTwo = ({size, style, children}) => (
  <div className={`box box--${size}`} style={style}>
    {children}
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <BoxTwo size="medium" style={{backgroundColor: 'purple'}}>
        medium purple box
      </BoxTwo>
    </div>
  )
}

export default App
