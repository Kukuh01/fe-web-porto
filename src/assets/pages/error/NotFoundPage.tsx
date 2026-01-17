import { useEffect, useState } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 3,
    }));
    setStars(newStars);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 overflow-hidden relative flex items-center justify-center">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      {/* Floating Planets */}
      <div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-30 blur-2xl animate-bounce"
        style={{
          animationDuration: "6s",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div
        className="absolute bottom-32 left-32 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-30 blur-2xl animate-bounce"
        style={{
          animationDuration: "8s",
          animationDelay: "1s",
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Astronaut SVG */}
        <div
          className="mb-8 relative"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          }}
        >
          <div className="relative inline-block">
            {/* Astronaut Body */}
            <svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              className="animate-float"
            >
              {/* Helmet */}
              <circle cx="100" cy="80" r="40" fill="#E5E7EB" opacity="0.3" />
              <circle cx="100" cy="80" r="35" fill="#1F2937" />
              <circle cx="100" cy="80" r="28" fill="#60A5FA" opacity="0.4" />

              {/* Reflection on helmet */}
              <ellipse
                cx="90"
                cy="70"
                rx="12"
                ry="18"
                fill="white"
                opacity="0.6"
              />

              {/* Body */}
              <rect
                x="70"
                y="115"
                width="60"
                height="50"
                rx="10"
                fill="#E5E7EB"
              />

              {/* Arms */}
              <rect
                x="50"
                y="120"
                width="20"
                height="40"
                rx="10"
                fill="#E5E7EB"
                transform="rotate(-20 60 140)"
              />
              <rect
                x="130"
                y="120"
                width="20"
                height="40"
                rx="10"
                fill="#E5E7EB"
                transform="rotate(20 140 140)"
              />

              {/* Legs */}
              <rect
                x="75"
                y="160"
                width="18"
                height="35"
                rx="9"
                fill="#E5E7EB"
              />
              <rect
                x="107"
                y="160"
                width="18"
                height="35"
                rx="9"
                fill="#E5E7EB"
              />

              {/* Boots */}
              <ellipse cx="84" cy="195" rx="12" ry="6" fill="#1F2937" />
              <ellipse cx="116" cy="195" rx="12" ry="6" fill="#1F2937" />

              {/* Backpack */}
              <rect
                x="95"
                y="110"
                width="30"
                height="35"
                rx="8"
                fill="#9CA3AF"
              />
              <circle cx="105" cy="120" r="3" fill="#EF4444" />
              <circle cx="115" cy="120" r="3" fill="#10B981" />

              {/* Control panel on chest */}
              <rect
                x="85"
                y="130"
                width="30"
                height="20"
                rx="3"
                fill="#1F2937"
              />
              <circle cx="92" cy="137" r="2" fill="#EF4444" />
              <circle cx="100" cy="137" r="2" fill="#FBBF24" />
              <circle cx="108" cy="137" r="2" fill="#10B981" />
            </svg>

            {/* Floating animation for cable */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-400 to-transparent opacity-50 animate-swing origin-top" />
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-4 animate-pulse">
            404
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lost in Space
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Houston, we have a problem! The page you're looking for has drifted
            into a black hole.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-8 py-4 bg-orange-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center gap-3">
            <Home size={20} />
            <Link to={`/`}>Return to Earth</Link>
          </button>
        </div>

        {/* Error Code */}
        <div className="mt-12 text-gray-500 text-sm font-mono">
          ERROR_CODE: SPACE_404 | COORDINATES: UNKNOWN
        </div>
      </div>

      {/* Floating Particles */}
      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes swing {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
