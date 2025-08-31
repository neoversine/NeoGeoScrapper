import React, { useState } from "react";
import PlaceSearch from "./PlaceSearch";
import ListOfPlaces from "./ListOfPlaces";

const SearchSection = () => {
    const [places, setPlaces] = useState([]); // Store API results

    return (
        <section className="w-full min-h-screen bg-gray-50 py-12 px-4" >
            <div className="max-w-6xl mx-auto space-y-10">
                {/* Search Bar Section */}
                <PlaceSearch onResults={setPlaces} />

                {/* Results Section */}
                {places.length > 0 ? (
                    <ListOfPlaces data={places} />
                ) : (
                    <div className="text-center py-20 text-gray-500 font-medium">
                        🔍 Search for a place to see nearby results
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchSection;
