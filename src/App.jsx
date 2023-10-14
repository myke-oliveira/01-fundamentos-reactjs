import { Header } from "./componentes/Header"
import { Post } from "./componentes/Post"
import { Sidebar } from "./componentes/Sidebar"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Myke Albuquerque"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos odit, repellat maiores libero velit explicabo. Sunt, adipisci soluta placeat quibusdam laboriosam minus totam voluptas eius iste iusto fugit maiores?"
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos odit, repellat maiores libero velit explicabo. Sunt, adipisci soluta placeat quibusdam laboriosam minus totam voluptas eius iste iusto fugit maiores?"
          />
        </main>
      </div>
    </div>
  )
}
