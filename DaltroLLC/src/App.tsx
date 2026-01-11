import logoPng from './assets/logo.png'
import xButtonPng from './assets/x.png'
import giftGif from './assets/gift_.gif'
import './App.css'

function App() {
  return (
    <main className="landing">
      <div className="top-block">
        <div className="logo-block">
          <img className="hero-logo-image" src={logoPng} alt="Daltro LLC" />
        </div>

        <div className="gif-block">
          <img className="hero-gif" src={giftGif} alt="Cooking in progress" />
        </div>

        <div className="status-block">
          <p className="status-text">Still cooking. Not ready to serve yet.</p>
        </div>

        <div className="link-block">
          <span className="link-label">Developer</span>
          <a
            className="x-link"
            href="https://x.com/jvosz1"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir perfil no X"
          >
            <img className="x-button" src={xButtonPng} alt="X / Twitter" />
          </a>
          <span className="link-hint">Click me</span>
        </div>
      </div>
    </main>
  )
}

export default App
