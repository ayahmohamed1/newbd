// 1. استيراد ملف الفيديو (الاستيكر) من فولدر assets
import noVideo from '../assets/no.mp4'; 

export default function NoPage() {
  return (
    <div className="no-page">
      <p>Why !!! Pleasssssee 😔</p>
      
      {/* 2. شيلنا الـ div الفاضي وحطينا الفيديو بالخصائص اللي بتشغله كاستيكر تلقائي */}
      <video 
        src={noVideo} 
        autoPlay       
        loop           
        muted          
        playsInline    
        style={{ 
          width: '300px', 
          height: '300px', 
          objectFit: 'contain' 
        }} 
      />
    </div>
  );
}