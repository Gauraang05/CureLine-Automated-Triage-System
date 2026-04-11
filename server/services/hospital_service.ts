export type Hospital = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  totalRatings: number;
};

export async function findNearbyHospitals(
  latitude: number,
  longitude: number,
  radius: number = 10000,
): Promise<Hospital[]> {
  try {
    // Convert radius to degrees (approx)
    const radiusKm = radius / 1000;

    const query = `
      [out:json];
      (
        node["amenity"="hospital"](around:${radius},${latitude},${longitude});
      );
      out;
    `;

    const url = "https://overpass-api.de/api/interpreter";

    const response = await fetch(url, {
      method: "POST",
      body: query,
    });

    const data: any = await response.json();

    if (!data.elements) return [];

    return data.elements.map((hospital: any) => ({
      name: hospital.tags?.name || "Unnamed Hospital",
      address: hospital.tags?.["addr:full"] || "",
      latitude: hospital.lat,
      longitude: hospital.lon,
      rating: 4, // Dummy value
      totalRatings: 100, // Dummy value
    }));
  } catch (error) {
    console.error("OSM hospital fetch error:", error);
    return [];
  }
}
