import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import catVideo from '../assets/hbd.mp4';

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Step 1: Force muted BEFORE any play attempt (iOS requirement)
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    // Step 2: Try to play immediately
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Step 3: If autoplay blocked (Low Power Mode etc.),
          // wait for any user gesture on the document, then retry once
          const retryOnInteraction = () => {
            video.play().catch(() => {});
            document.removeEventListener('touchstart', retryOnInteraction);
            document.removeEventListener('click', retryOnInteraction);
          };
          document.addEventListener('touchstart', retryOnInteraction, { once: true });
          document.addEventListener('click', retryOnInteraction, { once: true });
        });
      }
    };

    // Step 4: If video metadata isn't loaded yet, wait for it
    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('loadeddata', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('loadeddata', attemptPlay);
    };
  }, []);

  return (
    <div className="home-page">
      <video
        ref={videoRef}
        src={catVideo}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'contain',
          pointerEvents: 'none',
          // Prevents iOS from showing the native video overlay
          WebkitMediaControlsPanel: 'none',
        }}
      />

      <h1 className="stroke-title">HAPPY BIRTHDAY<br />MY LOVE!</h1>
      <p className="subtitle">Do you want to see your gift?</p>
      <div className="button-group">
        <button className="pill-button" onClick={() => navigate('/main')}>YES PLEASE</button>
        <button className="pill-button" onClick={() => navigate('/no')}>NO THANKS</button>
      </div>
    </div>
  );
}