const messages = {
  affirmative: [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes – definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.'
  ],
  negative: [
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ],
  'non-committal': [
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.'
  ]
}

type MessageKey = 'affirmative' | 'negative' | 'non-committal'

export const getRamdomMessage = (key: MessageKey) => {
  const messageArray = messages[key]
  return messageArray[Math.floor(Math.random() * messageArray.length)]
}
