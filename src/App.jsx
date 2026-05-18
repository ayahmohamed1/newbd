import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import MainUI from './pages/MainUi';
import Photos from './pages/Photos';
import Bouquet from './pages/Bouquet';
import Music from './pages/Music';
import Letter from './pages/Letter';
import MessagePage from './pages/MessagePage';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate(); 
  
  // الأزرار ستختفي فقط في صفحة البداية الرئيسية (/) وتظهر في كل الصفحات الأخرى بما فيها صفحة no
  const hideNavBtns = location.pathname === '/';

  return (
    <div className="app-wrapper">
      <div className="main-card">
        
        {/* صندوق المحتوى الداخلي مع تفعيل السكرول التلقائي */}
        <div className="card-content-scroll">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/no" element={<NoPage />} />
            <Route path="/main" element={<MainUI />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/bouquet" element={<Bouquet />} />
            <Route path="/music" element={<Music />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/messages" element={<MessagePage />} />
          </Routes>
        </div>

        {/* منطقة أزرار التحكم السفلية - منفصلة ومتباعدة بشكل إجباري */}
        {!hideNavBtns && (
          <div style={{
            position: 'absolute',
            bottom: '-8px',
            left: '0',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px', /* مسافة إجبارية تفصل الزرارين عن بعض */
            zIndex: 999
          }}>
            
            {/* زرار الرجوع خطوة لورا */}
            <button 
              onClick={() => navigate(-1)}
              style={{
                width: '55px', height: '55px', borderRadius: '50%',
                backgroundColor: '#fce1e7', border: '3px solid #fcb1c7',
                cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)', padding: 0
              }}
            >
              <span style={{ fontSize: '24px' }}>🔙</span>
            </button>

            {/* زرار البيت يرجع لأول صفحة خالص الـ فيها yes no */}
            <button 
              onClick={() => navigate('/')}
              style={{
                width: '55px', height: '55px', borderRadius: '50%',
                backgroundColor: '#fce1e7', border: '3px solid #fcb1c7',
                cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)', padding: 0
              }}
            >
              <span style={{ fontSize: '24px' }}>🏠</span>
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}