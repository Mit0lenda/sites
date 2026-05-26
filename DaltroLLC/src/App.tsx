import { Routes, Route, Link } from 'react-router-dom'
import logoPng from './assets/logo.png'
import newIconJpg from './assets/new_icon.jpg'
import googlePlayBadgeSvg from './assets/google-play-badge.svg'
import xButtonPng from './assets/x.png'
import PrivacyPolicy from './PrivacyPolicy'
import TermsConditions from './TermsConditions'
import './App.css'

const gameUrl =
  'https://play.google.com/store/apps/details?id=com.zubarev.boyboy&pcampaignid=web_share'
const developerUrl = 'https://x.com/jvosz1'

function Home() {
  return (
    <main className="landing">
      <div className="top-block">
        <div className="logo-block">
          <img className="hero-logo-image" src={logoPng} alt="Daltro LLC" />
        </div>

        <div className="game-block">
          <a
            className="game-icon-link"
            href={gameUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Daltro LLC on Google Play"
          >
            <img className="game-icon" src={newIconJpg} alt="Daltro LLC game icon" />
          </a>
        </div>

        <div className="status-block">
          <p className="status-text">Available to download now.</p>
        </div>

        <div className="download-block">
          <a
            className="play-badge-link"
            href={gameUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Download Daltro LLC on Google Play"
          >
            <img
              className="play-badge"
              src={googlePlayBadgeSvg}
              alt="Get it on Google Play"
            />
          </a>
        </div>

        <div className="link-block">
          <span className="link-label">Developer</span>
          <a
            className="x-link"
            href={developerUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open developer profile on X"
          >
            <img className="x-button" src={xButtonPng} alt="X / Twitter" />
          </a>
          <span className="link-hint">Click me</span>
        </div>
      </div>

      <footer className="site-footer">
        <p>Daltro's LLC copyright 2026</p>
        <div className="footer-links">
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
          <span className="footer-separator">|</span>
          <Link to="/terms-conditions" className="footer-link">
            Terms & Conditions
          </Link>
        </div>
      </footer>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
    </Routes>
  )
}

export default App
