export async function searchHospitals(latitude: number, longitude: number) {
  const res = await fetch("/api/hospitals/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      latitude,
      longitude,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch hospitals");
  }

  return res.json();
}
