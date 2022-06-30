import React, { useState } from 'react'

import { useMessage } from '../../contexts/messages'

import './styles.css'
import sendIcon from '../../assets/icons/send-icon.svg'

export default function Input () {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = useMessage()

  const onSendMessage = (ev) => {
    if (ev) {
      ev.preventDefault()
    }
    if (!loading && message.length > 1) {
      sendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={onSendMessage} id='messages-input'>
      <input
        type="text"
        placeholder="Type text..."
        value={message}
        onChange={(ev) => setMessage(ev.target.value)}
      />
      <button
        type='button'
        onClick={onSendMessage}
      >
        <img src={sendIcon} alt="Send"/>
      </button>
    </form>
  )
}
