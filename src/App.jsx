import { Post } from "./Post";
import { Header } from "./componentes/Header";
import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Myke Albuquerque"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos odit, repellat maiores libero velit explicabo. Sunt, adipisci soluta placeat quibusdam laboriosam minus totam voluptas eius iste iusto fugit maiores?"
      />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos odit, repellat maiores libero velit explicabo. Sunt, adipisci soluta placeat quibusdam laboriosam minus totam voluptas eius iste iusto fugit maiores?"
      />
    </div>
  )
}
