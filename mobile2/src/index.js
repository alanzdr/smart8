import React from 'react';

import Logo from './components/Logo'
import Input from './components/Input'
import Messages from './components/Messages'

import {
  SiteContainer
} from './styles'

export default function App() {
  return (
    <SiteContainer>
      {/* <SideView /> */}
      <Logo />
      <Messages />
      <Input />
    </SiteContainer>
  );
}