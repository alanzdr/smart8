import React, { useState, useEffect } from 'react'
import { StatusBar , View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font'

import AppContent from './src'
import { MessageProvider } from './src/contexts/messages'

const App = () => {
  const [loading, setloading] = useState(true)
  
  useEffect(() => {
    const LoadingContent = async () => {
      await Font.loadAsync({
        Gotham: require('./src/assets/fonts/GothamBook.ttf'),
      });
      setloading(false);
    }
    LoadingContent();
  }, [])

  if (loading) return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size='large' color='#999'/>
    </View>
  );

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
