import React from 'react'

import { useMessage } from '../../contexts/messages'

import './styles.css'

export default function Messages () {
  const { messages } = useMessage()
  return (
    <div id='messages-container'>
      {messages.map(message => (
        <div
          key={message.key}
          className={`message ${message.status} ${message.target}`}
        >
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  )
}
