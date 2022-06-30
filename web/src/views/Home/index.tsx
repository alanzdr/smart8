import React from 'react';

import { MessageProvider } from 'contexts/messages';
import SideView from './SideView';
import Logo from 'components/Logo';
import Input from 'components/Input';
import Messages from './Messages';

const Home: React.FC = () => {
  return (
    <MessageProvider>
      <div id="site-container">
        <SideView />
        <div className="chat-container">
          <Logo />
          <Messages />
          <Input />
        </div>
      </div>
    </MessageProvider>
  )
}

export default Home;