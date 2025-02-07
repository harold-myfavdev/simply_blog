import { createRoot } from 'react-dom/client';
import '/src/index.css'

createRoot(document.getElementById('root')).render(
  <>
    <header>
      <img src={"/public/react-logo.png" }alt="react-logo" width="40px;" height="40px"/>
      <h1>React Facts</h1>
    </header>
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walkie</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands enterprise apps, including mobile apps</li>
      </ul>
    </main>
  </>
)