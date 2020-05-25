import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  margin-top: auto;
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 40px 0;
`;

export const TextInput = styled.TextInput`
  height: 48px;
  flex: 1;
  background: #7B1FA2;
  font-size: 16px;
  font-family: Gotham;
  color: #fff;
  padding: 0 16px;
  border-radius: 24px;
`;

export const SendButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  background: #B0196C;
  border-radius: 24px;
`