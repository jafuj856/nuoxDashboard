import React, { useEffect, useState } from "react";
import { fetchCountries } from "../../api/apiCall";
import Pagination from "../../components/countries/Pagenation";

const ITEMS_PER_PAGE = 10;

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (error) {
        console.error("Failed to load countries:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedCountries = countries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Countries & Cities
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <>
          <ul className="space-y-4">
            {selectedCountries.map((country, index) => (
              <li key={index} className="bg-white p-5 rounded shadow">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  {country.country}
                </h2>
                <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 md:grid-cols-3 gap-1">
                  {country.cities.map((city, i) => (
                    <li key={i}>{city}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default CountryList;
