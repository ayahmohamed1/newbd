import { useNavigate } from 'react-router-dom';

// 1. استيراد الـ 4 صور من فولدر assets
import gift1 from '../assets/gift1.jpg'; // صورة الصور (الكاميرا)
import gift2 from '../assets/gift2.jpg'; // صورة الجواب
import gift3 from '../assets/gift3.jpg'; // صورة الأغنية (السماعات)
import gift4 from '../assets/gift4.jpg'; // صورة الورد

export default function MainUI() {
  const navigate = useNavigate();

  return (
    <div className="main-ui-page">
      <h1 className="stroke-title">SURPRISE GIFTS FOR YOU!</h1>
      <p className="subtitle">Tap to reveal your surprise gifts...</p>
      
      <div className="gifts-grid">
        
        {/* الهدية الأولى: الصور */}
        <div className="gift-box light-box" onClick={() => navigate('/photos')}>
          <img 
            src={gift1} 
            alt="Photos" 
            style={{ width: '148px', height: '157px', borderRadius:'32px' }} 
          />
        </div>
        
        {/* الهدية التانية: الجواب */}
        <div className="gift-box light-box" onClick={() => navigate('/letter')}>
          <img 
            src={gift2} 
            alt="Letter" 
            style={{ width: '148px', height: '157px', borderRadius:'32px' }} 
          />
        </div>
        
        {/* الهدية التالتة: الأغنية */}
        <div className="gift-box dark-box" onClick={() => navigate('/music')}>
          <img 
            src={gift3} 
            alt="Music" 
            style={{ width: '148px', height: '157px', borderRadius:'32px' }} 
          />
        </div>
        
        {/* الهدية الرابعة: الورد */}
        <div className="gift-box light-box" onClick={() => navigate('/bouquet')}>
          <img 
            src={gift4} 
            alt="Bouquet" 
            style={{ width: '148px', height: '157px', borderRadius:'32px' }} 
          />
        </div>

      </div>
    </div>
  );
}