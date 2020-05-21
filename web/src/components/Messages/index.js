import React from 'react'

import { useMessage } from '../../contexts/messages'

import './styles.css'

export default function Messages () {
  const { messages, loading } = useMessage()
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
      {loading ? (
        <div
          className={'message bot'}
        >
          <p>...</p>
        </div>
      ) : null}
    </div>
  )
}
