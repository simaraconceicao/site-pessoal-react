import { useState } from 'react'
import contatoImg from '../assets/contato.svg'
import { Header } from '../components/Header'

import styles from '../styles/pages/contato.module.css'

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

    console.log('mensagem enviada', nome, email, mensagem)

    setMensagem('')
    setNome('')
    setEmail('')
  }

  return (
    <>
      <Header title="Entre em contato" image={contatoImg} />
      <div >
        <form  className={styles.form} onSubmit={handleCreateMessage}>
          <input 
            onChange={handleInputValueNome} 
            placeholder="Digite seu nome"
            value={nome}
            className={styles.formInput}
          />
          <input 
            onChange={handleInputValueEmail} 
            placeholder="Digite seu email"
            value={email}
            className={styles.formInput}
          />
          <textarea 
            onChange={handleInputValueMensagem} 
            placeholder="Digite sua mensagem"
            value={mensagem}
            className={styles.formTextArea}
          />
          <button className={styles.formButton} type="submit">Enviar mensagem</button>
        </form>
      </div>
    </>
  )
}
