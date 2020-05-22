import React from 'react'

import { useMessage } from '../../contexts/messages'

import { 
  Container,
  ScrollView,
  BotMessage,
  UserMessage,
  Text
} from './styles'

export default function Messages () {
  const { messages, loading } = useMessage()
  return (
    <Container>
      {messages.map(message => (
        <React.Fragment key={message.key}>
          {message.target === 'bot' ? (
            <BotMessage visible={message.status === 'visible'}>
              <Text color="#000">{message.text}</Text>
            </BotMessage>
          ) : (
            <UserMessage visible={message.status === 'visible'}>
              <Text color="#fff">{message.text}</Text>
            </UserMessage>
          )}
        </React.Fragment>
      ))}
      {loading ? (
        <BotMessage visible>
          <Text color="#000">...</Text>
        </BotMessage>
      ) : null}
    </Container>
  )
}
