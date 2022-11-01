import { useState } from 'react'
import contatoImg from '../assets/contato.svg'
import { Header } from '../components/Header'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()

    console.log('mensagem enviada')

    setMensagem('')
    setNome('')
    setEmail('')
  }

  return (
    <>
      <Header title="Entre em contato" image={contatoImg} />
      <div>
        <form onSubmit={handleCreateMessage}>
          <input 
            onChange={handleInputValueNome} 
            placeholder="Digite seu nome"
            value={nome}
          />
          <input 
            onChange={handleInputValueEmail} 
            placeholder="Digite seu email"
            value={email}
          />
          <textarea 
            onChange={handleInputValueMensagem} 
            placeholder="Digite sua mensagem"
            value={mensagem}
          />
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}
