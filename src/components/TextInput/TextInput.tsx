import React from 'react'

interface TextInputProps {
  text: string
  setText: (text: string) => void
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value)
  }

  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      placeholder="Enter your text here or drop a .txt file..."
      rows={10}
      style={{ width: '80%', margin: '20px' }}
    />
  )
}

export default TextInput
