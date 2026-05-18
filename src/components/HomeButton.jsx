import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <div className="home-btn-container" onClick={() => navigate('/main')}>
      {/* Empty div for Home Icon Image */}
      <div className="image-placeholder home-icon-placeholder"></div>
    </div>
  );
}