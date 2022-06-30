import { useCallback, useContext } from "react"

import MessageContext from "contexts/messages"
import { getRamdomMessage } from "utils/message"
import { IMessage } from "contexts/messages/types"
import api from 'services/api'

const useMessage = () => {
  const {
    messages,
    setMessages,
    loading,
    setLoading
  } = useContext(MessageContext)

  const GenerateRandomKey = useCallback(
    () => {
      return Math.random().toString(36).substring(7)
    },
    [],
  )

  const getResponse = useCallback(
    async (text: string) => {
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
    },
    [GenerateRandomKey],
  )
  

  const onUpdateMessages = useCallback(
    (messages: IMessage[], newMessage: IMessage) => {
      const { length } = messages
      const values = messages.map((item, i) => {
        if (length > 3 && i <= length - 4) {
          return { ...item, status: 'hidden' }
        }
        return item
      })
      return [...values, newMessage]
    },
    [],
  )

  const sendMessage = useCallback(
    async (text: string) => {
      const message = {
        key: GenerateRandomKey(),
        status: 'visible',
        target: 'user',
        text
      }
      const mensagesList = onUpdateMessages(messages, message)
      setMessages(mensagesList)
      setLoading(true)
      const botResponse = await getResponse(text)
      setMessages(onUpdateMessages(mensagesList, botResponse))
      setLoading(false)
    },
    [
      GenerateRandomKey, 
      getResponse, 
      messages, 
      onUpdateMessages, 
      setLoading, 
      setMessages
    ],
  )

  return {
    setMessages,
    setLoading,
    loading,
    messages,
    sendMessage
  }
}

export default useMessage