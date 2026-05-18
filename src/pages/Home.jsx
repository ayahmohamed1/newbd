import { useNavigate } from 'react-router-dom';
// 1. استيراد ملف الفيديو من فولدر assets بدل الصورة
import catVideo from '../assets/hbd.mp4'; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* 2. استخدام video بدل img مع إضافة الخصائص المهمة للتشغيل التلقائي */}
      <video 
        src={catVideo} 
        className="cat-home-placeholder" 
        autoPlay       /* بيخلي الفيديو يشتغل لوحده أول ما الصفحة تفتح */
        loop           /* بيخلي الفيديو يتعاد من الأول لما يخلص */
        muted          /* مهم جداً: المتصفحات بتمنع التشغيل التلقائي لأي فيديو ليه صوت، فلازم يكون صامت */
        playsInline    /* بيمنع الفيديو إنه يفتح في شاشة كاملة (Full Screen) على الموبايلات */
        style={{ objectFit: 'contain' }} 
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