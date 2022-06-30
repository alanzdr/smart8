import React from 'react';

import styled from './Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styled.container}>
      <div className={styled.spinner}></div>
    </div>
  );
};

export default Loading;
