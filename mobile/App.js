import React from 'react'
import { StatusBar } from 'react-native'
import AppContent from './src'
import { MessageProvider } from './src/contexts/messages'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#7b1fa2"/>
      <MessageProvider>
        <AppContent />
      </MessageProvider>
    </>
  )
}

export default App
