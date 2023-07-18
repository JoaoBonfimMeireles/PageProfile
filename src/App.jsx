
import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Diego Fernandodes" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officiis rem ex soluta laborum est itaque, corporis velit dolores vitae praesentium non repudiandae reiciendis fugit dolor! Eum voluptate fugiat commodi?" 
          />
          <Post
          author="Gabriel Buzzi"
          content="Tentativa de novo testo" />
          <Post />
        </main>
      </div>
    </div>
  )
}

