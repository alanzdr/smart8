export interface IMessage {
  key: string,
  status: string,
  target: string,
  text: string
}

export interface IMessageContext {
  messages: IMessage[]
  setMessages: (message: IMessage[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export interface IMessageProps {
  children: React.ReactNode
}