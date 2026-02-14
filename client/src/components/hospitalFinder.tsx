// import { useState } from "react";
// import { searchHospitals } from "@/lib/hospitalApi";

// export default function HospitalFinder() {
//   const [hospitals, setHospitals] = useState<any[]>([]);
//   const [recommended, setRecommended] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
//     null,
//   );

//   // Get user's real location
//   const getUserLocation = (): Promise<{ lat: number; lng: number }> => {
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           resolve({
//             lat: pos.coords.latitude,
//             lng: pos.coords.longitude,
//           });
//         },
//         () => reject("Location permission denied"),
//       );
//     });
//   };

//   // Estimate travel time (ETA)
//   const estimateETA = (distanceKm: number) => {
//     const avgSpeed = 40; // km/h (city traffic)
//     const hours = distanceKm / avgSpeed;
//     const minutes = Math.round(hours * 60);
//     return `${minutes} min`;
//   };

//   // Open Google Maps navigation
//   const navigateToHospital = (hospital: any) => {
//     if (!location) return;

//     const url = `https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${hospital.latitude},${hospital.longitude}&travelmode=driving`;
//     window.open(url, "_blank");
//   };

//   const findHospitals = async () => {
//     setLoading(true);

//     try {
//       const userLoc = await getUserLocation();
//       setLocation(userLoc);

//       const data = await searchHospitals(userLoc.lat, userLoc.lng);
//       setHospitals(data.hospitals);
//       setRecommended(data.recommended);
//     } catch (err) {
//       alert("Failed to fetch hospitals or location permission denied");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-6 border rounded-xl bg-card shadow-md mt-8">
//       <h2 className="text-xl mb-4">Hospitals near me</h2>

//       {/* Search Button */}
//       <button
//         onClick={findHospitals}
//         className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 text-lg shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
//       >
//         {loading ? "Finding Hospitals..." : "Find Nearby Hospitals"}
//       </button>

//       {/* Recommended Hospital */}
//       {recommended && (
//         <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg shadow">
//           <h3 className="font-bold text-lg mb-1">Recommended Hospital</h3>
//           <p className="font-semibold">{recommended.name}</p>
//           <p>Distance: {recommended.distance.toFixed(2)} km</p>
//           <p>ETA: {estimateETA(recommended.distance)}</p>

//           <button
//             onClick={() => navigateToHospital(recommended)}
//             className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 text-lg shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
//           >
//             Navigate
//           </button>
//         </div>
//       )}

//       {/* Hospital List */}
//       <div className="mt-6 space-y-3">
//         {hospitals.map((h: any, i: number) => (
//           <div
//             key={i}
//             onClick={() => navigateToHospital(h)}
//             className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 text-lg shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
//           >
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="font-semibold text-lg">{h.name}</p>
//                 <p className="text-sm text-muted-foreground">
//                   {h.address || "Address not available"}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-sm">{h.distance.toFixed(2)} km</p>
//                 <p className="text-xs text-muted-foreground">
//                   ETA: {estimateETA(h.distance)}
//                 </p>
//               </div>
//             </div>

//             <p className="text-xs text-green-600 mt-2">Click to navigate</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { searchHospitals } from "@/lib/hospitalApi";

export default function HospitalFinder() {
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [recommended, setRecommended] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [selectedHospitalIndex, setSelectedHospitalIndex] = useState<
    number | null
  >(null);

  // Get user's real location
  const getUserLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => reject("Location permission denied"),
      );
    });
  };

  // Estimate travel time (ETA)
  const estimateETA = (distanceKm: number) => {
    const avgSpeed = 40; // km/h (city traffic)
    const hours = distanceKm / avgSpeed;
    const minutes = Math.round(hours * 60);
    return `${minutes} min`;
  };

  // Open Google Maps navigation
  const navigateToHospital = (hospital: any) => {
    if (!location) return;

    const url = `https://www.google.com/maps/dir/?api=1&origin=${location.lat},${location.lng}&destination=${hospital.latitude},${hospital.longitude}&travelmode=driving`;
    window.open(url, "_blank");
  };

  const findHospitals = async () => {
    setLoading(true);
    setSelectedHospitalIndex(null);

    try {
      const userLoc = await getUserLocation();
      setLocation(userLoc);

      const data = await searchHospitals(userLoc.lat, userLoc.lng);
      setHospitals(data.hospitals);
      setRecommended(data.recommended);
    } catch (err) {
      alert("Failed to fetch hospitals or location permission denied");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 border rounded-xl bg-card shadow-md mt-8 font-bold">
      <h2 className="text-xl mb-4">Hospitals near me</h2>

      <button
        onClick={findHospitals}
        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 text-lg shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
      >
        {loading
          ? "Searching for Hospitals nearby..."
          : "Find Nearby Hospitals"}
      </button>

      {recommended && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-1">Recommended Hospital</h3>
          <p className="font-semibold">{recommended.name}</p>
          <p>Distance: {recommended.distance.toFixed(2)} km</p>
          <p>ETA: {estimateETA(recommended.distance)}</p>

          <button
            onClick={() => navigateToHospital(recommended)}
            className="mt-3 w-1/3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
          >
            Directions
          </button>
        </div>
      )}

      <div className="mt-6 space-y-3">
        {hospitals.map((h: any, i: number) => (
          <div
            key={i}
            onClick={() => setSelectedHospitalIndex(i)}
            className={`border rounded-lg p-4 shadow-sm transition-all duration-200 cursor-pointer
              ${
                selectedHospitalIndex === i
                  ? "border-primary shadow-lg"
                  : "border-border hover:shadow-md"
              }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{h.name}</p>
                <p className="text-sm text-muted-foreground">
                  {h.address || "Location not available"}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm">{h.distance.toFixed(2)} km</p>
                <p className="text-xs text-muted-foreground">
                  ETA: {estimateETA(h.distance)}
                </p>
              </div>
            </div>

            {selectedHospitalIndex === i && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateToHospital(h);
                }}
                className="mt-3 w-1/3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-3 shadow-lg transition-all duration-200 transform hover:scale-105 rounded-lg cursor-pointer"
              >
                Directions
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
