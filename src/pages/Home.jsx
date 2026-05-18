import { useNavigate } from 'react-router-dom';
// استيراد الاستيكر من فولدر assets
import catVideo from '../assets/hbd.mp4';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <video 
        src={catVideo} 
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
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