import React from 'react'

interface TextInputProps {
  text: string
  setText: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <textarea
      value={text}
      placeholder="Enter your text here or drop a .txt file..."
      rows={10}
      style={{ width: '80%', margin: '20px' }}
    />
  )
}

export default TextInput
