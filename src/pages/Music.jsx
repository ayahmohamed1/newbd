import { useState, useRef } from 'react';
// استيراد فيديو الأغنية من فولدر assets
import musicVideo from '../assets/music2.mp4';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
        <div className="music-player-box" style={{ background: 'transparent', border: 'none', position: 'relative' }}>
          
          <video 
            ref={videoRef}
            src={musicVideo} 
            controls={true}
            playsInline={true}
            preload="auto"
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

          {!isPlaying && (
            <div 
              onClick={handlePlay}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(212, 101, 133, 0.9)',
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
            >
              <span style={{ fontSize: '35px', color: 'white', marginLeft: '6px' }}>▶</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}