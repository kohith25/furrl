import './SplashScreen.css';

export default function SplashScreen() {
  return (
    <div className="splash-wrapper">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <img src="/logo.jpg" alt="logo" className="w-25 h-25 object-contain rounded-md" />
    </div>

      <div className="phone-frame">
        {<img src="/furrl.jpg" alt="furrl" className="furrl-img" />}
      </div>

      <div className="splash-text">
        <p className="headline">Wear Our<span className="highlight">Confidence</span>with US....</p>
        <p className="subtext">Scroll to open</p>
      </div>
    </div>
  );
}
