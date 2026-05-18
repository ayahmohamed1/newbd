import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import NavBar from '../components/NavBar'
import styles from './SurprisePage.module.css'

const gifts = [
  {
    id: 0,
    icon: '📸',
    title: 'Our Memories',
    desc: 'Every photo we took, every moment we shared — I keep them all close to my heart.',
    catVariant: 'camera',
  },
  {
    id: 1,
    icon: '💌',
    title: 'Love Letters',
    desc: 'Every word I\'ve ever wanted to say to you — written in a letter just for you.',
    catVariant: 'letter',
  },
  {
    id: 2,
    icon: '🎵',
    title: 'Our Playlist',
    desc: 'Songs that remind me of us, for every quiet moment and every loud laugh.',
    catVariant: 'music',
  },
  {
    id: 3,
    icon: '💐',
    title: 'Virtual Bouquet',
    desc: 'Since I can\'t hand you flowers, I made this bloom just for you instead.',
    catVariant: 'flower',
  },
]

const CatCard = ({ variant, size = 80 }) => {
  const defs = {
    camera: { body: '#f5f5f0', accent: '#f9c6d0', item: '📷' },
    letter: { body: '#f5f5f0', accent: '#fce4ec', item: '💌' },
    music: { body: '#f5f5f0', accent: '#f8bbd0', item: '🎵' },
    flower: { body: '#f5f5f0', accent: '#fce4ec', item: '🌸' },
  }
  const d = defs[variant] || defs.camera

  return (
    <svg viewBox="0 0 90 100" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size * 1.1 }}>
      <ellipse cx="45" cy="60" rx="28" ry="25" fill={d.body}/>
      <polygon points="22,46 16,28 32,42" fill={d.body}/>
      <polygon points="23,45 18,30 31,42" fill={d.accent}/>
      <polygon points="68,46 74,28 58,42" fill={d.body}/>
      <polygon points="67,45 72,30 59,42" fill={d.accent}/>
      <ellipse cx="36" cy="58" rx="5.5" ry="6" fill="#2d1f1f"/>
      <ellipse cx="54" cy="58" rx="5.5" ry="6" fill="#2d1f1f"/>
      <circle cx="37.5" cy="56" r="1.8" fill="white"/>
      <circle cx="55.5" cy="56" r="1.8" fill="white"/>
      <ellipse cx="45" cy="66" rx="2.5" ry="2" fill="#f9a8c0"/>
      <ellipse cx="34" cy="69" rx="6" ry="4" fill="#f9a8c0" opacity="0.5"/>
      <ellipse cx="56" cy="69" rx="6" ry="4" fill="#f9a8c0" opacity="0.5"/>
      <text x="33" y="88" fontSize="18">{d.item}</text>
    </svg>
  )
}

export default function SurprisePage() {
  const [revealed, setRevealed] = useState({})

  const toggle = (id) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <PageWrapper>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          SURPRISE GIFTS FOR YOU!
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Tap to reveal your surprise gifts...
        </motion.p>

        <div className={styles.grid}>
          {gifts.map((gift, i) => (
            <motion.div
              key={gift.id}
              className={`${styles.card} ${revealed[gift.id] ? styles.revealed : ''}`}
              onClick={() => toggle(gift.id)}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.45, ease: 'backOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <AnimatePresence mode="wait">
                {!revealed[gift.id] ? (
                  <motion.div
                    key="hidden"
                    className={styles.hiddenContent}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <CatCard variant={gift.catVariant} size={80} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    className={styles.revealedContent}
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'backOut' }}
                  >
                    <span className={styles.giftIcon}>{gift.icon}</span>
                    <h3 className={styles.giftTitle}>{gift.title}</h3>
                    <p className={styles.giftDesc}>{gift.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <NavBar />
      </div>
    </PageWrapper>
  )
}
