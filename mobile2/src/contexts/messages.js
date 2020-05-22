import React, {
  createContext,
  useState,
  useContext
} from 'react'

import api from '../services/api'

import { getRamdomMessage } from '../utils/message'

const INITIAL_STATE = {
  messages: []
}

export const MessageContext = createContext(INITIAL_STATE)

// eslint-disable-next-line react/prop-types
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([])
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

export const useMessage = () => {
  const {
    messages,
    setMessages,
    loading,
    setLoading
  } = useContext(MessageContext)

  const GenerateRandomKey = () => {
    return Math.random().toString(36).substring(7)
  }

  const getResponse = async (text) => {
    const result = await api.get('/', {
      params: { text }
    })

    const botResult = result.data.displayName
    const botMessage = getRamdomMessage(botResult)

    const exempleMessage = {
      key: GenerateRandomKey(),
      status: 'visible',
      target: 'bot',
      text: botMessage
    }

    return exempleMessage
  }

  const onUpdateMessages = (messages, newMessage) => {
    const { length } = messages
    const values = messages.map((item, i) => {
      if (length > 5 && i <= length - 6) {
        return { ...item, status: 'hidden' }
      }
      return item
    })
    return [...values, newMessage]
  }

  const sendMessage = async (text) => {
    const message = {
      key: GenerateRandomKey(),
      status: 'visible',
      target: 'user',
      text
    }
    setMessages((messages) => onUpdateMessages(messages, message))
    setLoading(true)
    const botResponse = await getResponse(text)
    setMessages((messages) => onUpdateMessages(messages, botResponse))
    setLoading(false)
  }

  return {
    loading,
    messages,
    sendMessage
  }
}
