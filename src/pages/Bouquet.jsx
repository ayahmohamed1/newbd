// 1. استيراد صورة الورد من فولدر assets (تأكد من الامتداد بتاعك jpg ولا png)
import bouquetImg from '../assets/bouquet.jpg'; 

export default function Bouquet() {
  return (
    <div className="bouquet-page">
      <h1 className="stroke-title">BOUQUET FOR YOU</h1>
      <div className="bouquet-layout">
        
        {/* الكلام اللي على الشمال */}
        <div className="speech-col">
          <div className="speech-bubble">I wish I could give you<br />this for real...</div>
          <div className="speech-bubble">Every flower is a little<br />piece of my love</div>
          <div className="speech-bubble">If I were there,<br />I'd hold your hand</div>
          <div className="speech-bubble">This is my way of hugging<br />you from far away</div>
        </div>
        
        {/* بوكيه الورد في النص */}
        <div className="bouquet-center">
          {/* 2. شيلنا المربع الفاضي وحطينا الصورة */}
          <img 
            src={bouquetImg} 
            alt="My Bouquet" 
            className="bouquet-circle-placeholder" 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        
        {/* الكلام اللي على اليمين */}
        <div className="speech-col">
          <div className="speech-bubble">So I made this just<br />for you...</div>
          <div className="speech-bubble">A bouquet filled with<br />my feelings</div>
          <div className="speech-bubble">Close your eyes and<br />imagine me there</div>
          <div className="speech-bubble">This is my way of hugging<br />you from far away</div>
        </div>

      </div>
    </div>
  );
}