// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below
  // extra 1
  const inputRef = React.useRef()
  const handleSubmit = event => {
    const inputElement = document.getElementById('usernameInput')
    // onSubmitUsername(inputElement.value)

    // extra 1
    onSubmitUsername(inputRef.current.value)
  }

  // extra 2 + 3
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState('')

  const validateInput = event => {
    setError('')
    const value = event.target.value;
    if (value === value.toLowerCase()) {
      setInputValue(value)
    } else {
      setError(`Username must be lower case, trying to input: ${value}`)
    }
  }

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={inputRef}
          onChange={validateInput}
          // extra 3
          value={inputValue}
        />
      </div>
      {error ?? <div>{error}</div>}
      <br/>
      <button type="submit" onClick={handleSubmit} disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
