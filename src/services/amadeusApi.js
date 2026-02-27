const API_KEY = "AINHLeoCTGagGWFuxPVDlbR8GAZq8MHF";
const API_SECRET = "EJ6aPvkj04LuAC7z";




// ✅ GET TOKEN
export const getAccessToken = async () => {
  const response = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
    }
  );

  const data = await response.json();
  return data.access_token;
};

// ✅ SEARCH DESTINATIONS
export const searchDestinations = async (keyword) => {
  const token = await getAccessToken();

  const response = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${keyword}&subType=CITY`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.data || [];
};

// ✅ SEARCH FLIGHTS
export const searchFlights = async (origin, destination, date) => {
  const token = await getAccessToken();

  const response = await fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1&max=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.data || [];
};

// ✅ SEARCH HOTELS
export const searchHotels = async (cityCode) => {
  const token = await getAccessToken();

  const response = await fetch(
    `https://test.api.amadeus.com/v3/shopping/hotel-offers?cityCode=${cityCode}&checkInDate=2025-04-15&checkOutDate=2025-04-17&adults=1&roomQuantity=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data.data || [];
};