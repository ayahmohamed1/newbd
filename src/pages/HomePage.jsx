import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="image-placeholder cat-home-placeholder"></div>
      <h1 className="stroke-title">HAPPY BIRTHDAY<br />MY LOVE!</h1>
      <p className="subtitle">Do you want to see your gift?</p>
      <div className="button-group">
        <button className="pill-button" onClick={() => navigate('/main')}>YES PLEASE</button>
        <button className="pill-button" onClick={() => navigate('/no')}>NO THANKS</button>
      </div>
    </div>
  );
}