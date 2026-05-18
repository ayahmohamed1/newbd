import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function PageWrapper({ children, style = {} }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{
        minHeight: '100vh',
        background: 'var(--pink-bg)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
