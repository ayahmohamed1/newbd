import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import catVideo from '../assets/hbd.mp4';

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // الكود ده بيجبر الموبايلات (خصوصاً الآيفون) إنها تشغل الفيديو تلقائي كإستيكر
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("في انتظار تفاعل المستخدم", e));
    }
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
        style={{ 
          width: '150px', 
          height: '150px', 
          objectFit: 'contain',
          pointerEvents: 'none'
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