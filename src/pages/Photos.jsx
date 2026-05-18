// 1. استيراد الـ 6 صور من فولدر assets
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';

export default function Photos() {
  return (
    <div className="photos-page">
      <h1 className="stroke-title absolute-title">OUR LITTLE MOMENTS</h1>
      
      {/* الصورة الأولى (أعلى الشمال) */}
      <div className="polaroid" style={{ top: '8%', left: '5%', transform: 'rotate(-10deg)' }}>
        <img src={pic1} className="polaroid-img-placeholder" alt="memory 1" style={{ objectFit: 'cover', width: '100%', height: '161px' }} />
      </div>

      {/* الصورة الثانية (أعلى المنتصف) */}
      <div className="polaroid" style={{ top: '6%', left: '38%', transform: 'rotate(5deg)' }}>
        <img src={pic2} className="polaroid-img-placeholder" alt="memory 2" style={{ objectFit: 'cover', width: '100%', height: '170px' }} />
      </div>

      {/* الصورة الثالثة (أعلى اليمين) */}
      <div className="polaroid" style={{ top: '8%', right: '5%', transform: 'rotate(8deg)' }}>
        <img src={pic3} className="polaroid-img-placeholder" alt="memory 3" style={{ objectFit: 'cover', width: '100%', height: '176px' }} />
      </div>

      {/* الصورة الرابعة (أسفل الشمال) */}
      <div className="polaroid" style={{ bottom: '2%', left: '8%', transform: 'rotate(12deg)' }}>
        <img src={pic4} className="polaroid-img-placeholder" alt="memory 4" style={{ objectFit: 'cover', width: '100%', height: '170px' }} />
      </div>

      {/* الصورة الخامسة (أسفل المنتصف) */}
      <div className="polaroid" style={{ bottom: '-1%', left: '38%', transform: 'rotate(-5deg)' }}>
        <img src={pic5} className="polaroid-img-placeholder" alt="memory 5" style={{ objectFit: 'cover', width: '100%', height: '170px' }} />
      </div>

      {/* الصورة السادسة (أسفل اليمين) */}
      <div className="polaroid" style={{ bottom: '1%', right: '5%', transform: 'rotate(-8deg)' }}>
        <img src={pic6} className="polaroid-img-placeholder" alt="memory 6" style={{ objectFit: 'cover', width: '100%', height: '180px' }} />
      </div>

      {/* الخلفيات الفاضية بتاعة القطط الصغيرة سبتها زي ما هي عشان تدي شكل شيك */}
      <div className="image-placeholder small-cat-placeholder" ></div>
      <div className="image-placeholder small-cat-placeholder" ></div>
      <div className="image-placeholder small-cat-placeholder" ></div>
      <div className="image-placeholder small-cat-placeholder" ></div>
      <div className="image-placeholder small-cat-placeholder" ></div>
    </div>
  );
}