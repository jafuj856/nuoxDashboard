
export const fetchCountries = async () => {
  const response = await fetch("https://countriesnow.space/api/v0.1/countries");
  if (!response.ok) throw new Error("Failed to fetch countries");
  const data = await response.json();
  return data.data;
};
