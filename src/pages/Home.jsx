import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      
      {/* الاستيكر مربوط مباشرة بفولدر public وجاهز للتشغيل التلقائي الإجباري */}
      <video 
        src="/hbd.mp4" 
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        style={{ 
          width: '150px', 
          height: '150px', 
          objectFit: 'contain',
          pointerEvents: 'none' /* عشان اليوزر معرفش يوقفه بالخطأ */
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