import React, { useState } from 'react'
import { Svg, Path } from 'react-native-svg'

import { useMessage } from '../../contexts/messages'

import { Container, TextInput, SendButton } from './styles'

const Input = () => {
  const [ message, setMessage ] = useState('')
  const { sendMessage, loading } = useMessage()

  const onSendMessage = () => {
    if (!loading && message.length > 1) {
      sendMessage(message)
      setMessage('')
    }
  }

  return (
    <Container>
      <TextInput
        placeholder="Type text..."
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={onSendMessage}
      />
      <SendButton
        type='button'
        onPress={onSendMessage}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24"
        >
          <Path 
            d="M21,3,3,10.53v.98l6.84,2.65L12.48,21h.98Z" 
            fill="#fff"
          />
        </Svg>
      </SendButton>
    </Container>
  )
}

export default Input