import React from 'react'

import Logo from './components/Logo'
import Messages from './components/Messages'
import Input from './components/Input'

import { MessageProvider } from './contexts/messages'

import './assets/fonts/GothamBook.ttf'
import './index.css'

export default function App () {
  return (
    <MessageProvider>
      <div id="site-container">
        <Logo />
        <Messages />
        <Input />
      </div>
    </MessageProvider>
  )
}
