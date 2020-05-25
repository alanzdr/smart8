import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  flex: 1;
  margin: 0 auto;
  justify-content: flex-end;
`;

const Message = styled.View`
  max-width: 80%;
  border-radius: 16px;
  margin-top: 16px;
  padding: 16px;
  font-family: Gotham;
  opacity: ${({visible}) => visible ? 1 : 0}
`;

export const BotMessage = styled(Message)`
  background: #fff;
  border-bottom-left-radius: 0;
  margin-right: auto;
`;

export const UserMessage = styled(Message)`
  background: #7B1FA2;
  margin-left: auto;
  border-bottom-right-radius: 0;
`;

export const Text = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${({color}) => color};
`;
