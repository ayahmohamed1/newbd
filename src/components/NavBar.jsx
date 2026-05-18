import { useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <div className={styles.navBar}>
      <button
        className={styles.homeBtn}
        onClick={() => navigate('/home')}
        aria-label="Go home"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </button>
    </div>
  )
}
