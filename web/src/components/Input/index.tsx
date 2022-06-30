import React, { useState } from 'react'
import Image from 'next/image'

import useMessage from 'hooks/useMessage'

export default function Input () {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = useMessage()

  const onSendMessage = (ev: React.MouseEvent | React.FormEvent) => {
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
        <Image 
          src={require('assets/icons/send-icon.svg')} 
          alt="Send"
        />
      </button>
    </form>
  )
}
