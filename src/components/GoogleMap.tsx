
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

// This component uses the Google Maps JavaScript API
const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Define the global callback function
    window.initMap = () => {
      // Create map centered on a location (this is Delhi, India)
      const map = new window.google.maps.Map(mapRef.current as HTMLElement, {
        center: { lat: 28.6139, lng: 77.2090 },
        zoom: 14,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ color: "#f8e6ea" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c6576f" }],
          },
        ],
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: 28.6139, lng: 77.2090 },
        map,
        title: "सारीKurta Headquarters",
      });
    };

    // Append the script to the DOM
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-[#c6576f]/20">
      <div 
        ref={mapRef} 
        className="h-[400px] w-full"
        aria-label="Google Map showing our location"
      />
    </div>
  );
};

export default GoogleMap;
