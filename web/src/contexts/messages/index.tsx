import React, { createContext, useState } from 'react'

import { IMessage, IMessageContext, IMessageProps } from './types'

const INITIAL_STATE = {
  messages: []
} as unknown as IMessageContext

const MessageContext = createContext<IMessageContext>(INITIAL_STATE)

export const MessageProvider: React.FC<IMessageProps> = ({ children }) => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [loading, setLoading] = useState(false)
  
  return (
    <MessageContext.Provider value={{
      messages,
      setMessages,
      loading,
      setLoading
    }}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageContext