
import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JoaoBonfimMeireles.png',
      name: 'João Meireles',
      role: 'Desenvolvedor Júnior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisedAt: new Date('2023-09-26 23:57'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/WeslyBrandao.png',
      name: 'Wesly Brandão',
      role: 'Head'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publisedAt: new Date('2023-10-26 23:57'),
  }
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              author={post.author}
              content={post.content}
              publisedAt={post.publisedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

