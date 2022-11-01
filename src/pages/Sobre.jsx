import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import siImg from '../assets/si.png'

import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
      <Header title="Minha história" image={sobreImg} />
      <div className={styles.sobreContainer}>
        <img className={styles.bioImage} src={siImg} />
        <div className={styles.bioContainer}>
        <h2 className={styles.bioTitle}>Simara Conceição, prazer!</h2>
        <p className={styles.bioText}>Sou baiana, moro em São Paulo, tenho 33 anos, meu background é em marketing digital, mas em 2019 fiz a migração de carreira para área de tecnologia. Sou desenvolvedora full stack na Thoughtworks. E instrutora de programação para iniciantes em instituições que visam reduzir o gap de gênero e raça no mercado de tecnologia.
        Criei o canal e o podcast quero ser dev, pois amo compartilhar conteúdos para ajudar e inspirar pessoas plurais que estão na transição de carreira para área de tecnologia. Dessa forma, ajudo a construir um futuro tecnológico com mais equidade.</p>
        </div>
      </div>
    </>
  )
}