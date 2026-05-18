import { useState, useRef } from 'react';

export default function Music() {
  // 1. هنعمل حالة (State) عشان نعرف الفيديو شغال ولا واقف
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 2. هنعمل Ref عشان نقدر نتحكم في تشغيل الفيديو من الزرار بتاعنا
  const videoRef = useRef(null);

  // 3. دالة التشغيل لما اليوزر يدوس على زرار الـ Play بتاعنا
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="music-page">
      <div className="music-col">
        <h2 className="section-title">Why This Song Is Ours</h2>
        <div className="music-text-box">
          <p>This song feels like us in the quiet moments...</p>
        </div>
      </div>
      
      <div className="music-col">
        <h2 className="section-title">A song that reminds me of us</h2>
        {/* ضفنا position: 'relative' هنا عشان الزرار يظبط في النص */}
        <div className="music-player-box" style={{ background: 'transparent', border: 'none', position: 'relative' }}>
          
         <video 
  ref={videoRef}
  src="/music2.mp4" 
  controls={true}
  playsInline={true}   /* ضروري جداً للموبايل */
  preload="auto"       /* بيجبر الموبايل يحمل الفيديو عشان يشتغل فوراً لما تدوس */
  onPlay={() => setIsPlaying(true)}   
  onPause={() => setIsPlaying(false)} 
  style={{ 
    width: '100%', 
    height: '100%', 
    maxHeight: '300px', 
    objectFit: 'contain',
    borderRadius: '15px',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.1)'
  }} 
/>

          {/* 4. تصميم زرار الـ Play الكبير في نص الفيديو */}
          {!isPlaying && (
            <div 
              onClick={handlePlay}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(212, 101, 133, 0.9)', /* لون بينك شفاف شيك */
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
                zIndex: 10,
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
            >
              <span style={{ fontSize: '35px', color: 'white', marginLeft: '6px' }}>▶</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}