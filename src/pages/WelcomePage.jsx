import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import styles from './WelcomePage.module.css'

const CatSVG = () => (
  <svg viewBox="0 0 120 140" xmlns="https://www.pinterest.com/pin/231583605828918982/" className={styles.cat}>
    {/* Body */}
    <ellipse cx="60" cy="105" rx="32" ry="28" fill="#f5f5f0"/>
    {/* Head */}
    <ellipse cx="60" cy="62" rx="30" ry="28" fill="#f5f5f0"/>
    {/* Left ear */}
    <polygon points="34,42 28,20 48,38" fill="#f5f5f0"/>
    <polygon points="36,40 32,24 46,38" fill="#f9c6d0"/>
    {/* Right ear */}
    <polygon points="86,42 92,20 72,38" fill="#f5f5f0"/>
    <polygon points="84,40 88,24 74,38" fill="#f9c6d0"/>
    {/* Patches */}
    <ellipse cx="50" cy="58" rx="12" ry="10" fill="#d4b8b8" opacity="0.5"/>
    <ellipse cx="72" cy="72" rx="8" ry="7" fill="#d4b8b8" opacity="0.4"/>
    {/* Face */}
    <ellipse cx="50" cy="60" rx="6" ry="7" fill="#2d1f1f"/>
    <ellipse cx="70" cy="60" rx="6" ry="7" fill="#2d1f1f"/>
    <circle cx="52" cy="58" r="2" fill="white"/>
    <circle cx="72" cy="58" r="2" fill="white"/>
    {/* Nose */}
    <ellipse cx="60" cy="70" rx="3" ry="2" fill="#f9a8c0"/>
    {/* Mouth */}
    <path d="M57 72 Q60 76 63 72" stroke="#e07a93" strokeWidth="1.5" fill="none"/>
    {/* Whiskers */}
    <line x1="30" y1="68" x2="52" y2="70" stroke="#ccc" strokeWidth="1"/>
    <line x1="30" y1="72" x2="52" y2="72" stroke="#ccc" strokeWidth="1"/>
    <line x1="68" y1="70" x2="90" y2="68" stroke="#ccc" strokeWidth="1"/>
    <line x1="68" y1="72" x2="90" y2="72" stroke="#ccc" strokeWidth="1"/>
    {/* Blush */}
    <ellipse cx="44" cy="74" rx="7" ry="5" fill="#f9a8c0" opacity="0.5"/>
    <ellipse cx="76" cy="74" rx="7" ry="5" fill="#f9a8c0" opacity="0.5"/>
    {/* Paws */}
    <ellipse cx="40" cy="128" rx="12" ry="8" fill="#f5f5f0"/>
    <ellipse cx="80" cy="128" rx="12" ry="8" fill="#f5f5f0"/>
    {/* Tail */}
    <path d="M92 110 Q115 95 110 120" stroke="#f5f5f0" strokeWidth="10" fill="none" strokeLinecap="round"/>
    {/* Heart paws detail */}
    <text x="36" y="132" fontSize="8" fill="#f9a8c0">♥</text>
    <text x="76" y="132" fontSize="8" fill="#f9a8c0">♥</text>
  </svg>
)

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <div className={styles.container}>
        {/* Floating decorations */}
        {['♥','♡','✦','♥','♡'].map((s, i) => (
          <motion.span
            key={i}
            className={styles.floater}
            style={{ left: `${15 + i * 18}%`, top: `${10 + (i % 2) * 8}%`, fontSize: `${14 + i * 4}px` }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {s}
          </motion.span>
        ))}

        <motion.div
          className={styles.card}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CatSVG />
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            HAPPY BIRTHDAY<br />MY LOVE!
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Do you want to see your gift?
          </motion.p>

          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <button
              className={styles.btnYes}
              onClick={() => navigate('/home')}
            >
              YES PLEASE
            </button>
            <button
              className={styles.btnNo}
              onClick={() => navigate('/home')}
            >
              NO THANKS
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.bottomHeart}
            style={{ left: `${10 + i * 15}%` }}
            animate={{ y: [-100, -200], opacity: [0.7, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeOut',
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  )
}
