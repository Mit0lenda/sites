import logoPng from './assets/logo.png'
import xButtonPng from './assets/x.png'
import './App.css'

function App() {
  return (
    <main className="landing">
      <div className="top-block">
        <div className="logo-block">
          <img className="hero-logo-image" src={logoPng} alt="Daltro LLC" />
        </div>

        <div className="arrow-block" aria-hidden="true">
          <div className="arrow-gif" />
        </div>
      </div>

      <div className="link-block">
        <span className="link-label">Developer</span>
        <a
          className="x-link"
          href="https://x.com/seu_usuario"
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir perfil no X"
        >
          <img className="x-button" src={xButtonPng} alt="X / Twitter" />
        </a>
      </div>
    </main>
  )
}

export default App
