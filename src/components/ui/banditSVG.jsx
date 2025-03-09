export default function BanditSVG({ className }) {
    return (
      <svg
        className={className}
        viewBox="0 0 200 250"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        {/* Machine Base */}
        <rect x="20" y="50" width="160" height="140" fill="gray" stroke="black" strokeWidth="3" />
        
        {/* Screen */}
        <rect x="40" y="70" width="120" height="60" fill="white" stroke="black" strokeWidth="2" />
        
        {/* Slots */}
        <rect x="50" y="80" width="30" height="40" fill="red" stroke="black" />
        <rect x="85" y="80" width="30" height="40" fill="blue" stroke="black" />
        <rect x="120" y="80" width="30" height="40" fill="green" stroke="black" />
        
        {/* Bottom Section */}
        <rect x="40" y="140" width="120" height="30" fill="darkgray" stroke="black" />
        
        {/* Coin Slot */}
        <circle cx="100" cy="155" r="5" fill="black" />
        
        {/* Lever */}
        <line x1="180" y1="70" x2="190" y2="30" stroke="black" strokeWidth="4" />
        <circle cx="190" cy="30" r="8" fill="red" stroke="black" strokeWidth="2" />
        
        {/* Base */}
        <rect x="10" y="190" width="180" height="30" fill="black" />
      </svg>
    );
  }
  