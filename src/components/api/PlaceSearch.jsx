import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Info } from "lucide-react";

export default function PlaceSearch({ onResults }) {
    const [location, setLocation] = useState("");
    const [type, setType] = useState("restaurant");
    const [limit, setLimit] = useState(10);
    const [radius, setRadius] = useState(5000);
    const [loading, setLoading] = useState(false);

    const [showFilters, setShowFilters] = useState(false);

    const fetchPlaces = async () => {
        if (!location) return;
        setLoading(true);
        try {
            const url = new URL("https://fasttools.neoversine.in/places");
            url.searchParams.append("location", location);
            url.searchParams.append("type", type);
            url.searchParams.append("limit", limit);
            url.searchParams.append("radius", radius);

            const res = await fetch(url.toString());
            const data = await res.json();

            const results = data.results || [];

            if (results.length === 0) {
                alert("No results found 🚫");
            }

            if (onResults) onResults(results);
        } catch (error) {
            console.error("Error fetching places:", error);
            alert("Something went wrong while fetching places ❌");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="w-full max-w-4xl mx-auto mt-10 space-y-6">
            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="w-full bg-white shadow-lg rounded-2xl flex items-center py-[10px] px-5 space-x-4 border-2 border-gray-400/20"
            >
                {/* Location Input */}
                <input
                    placeholder="Enter location e.g. Baguiati"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="z-10 flex-1 w-[60%] outline-none text-gray-800 placeholder-gray-400 focus:border-orange-400 transition-colors"
                />

                {/* Category Dropdown */}
                <select
                    className="z-10 w-[20%] outline-none text-gray-800 placeholder-gray-400 h-fit border border-gray-400/10 rounded-xl shadow px-3 py-3 focus:border-orange-400 transition-colors bg-white"
                    value={type}
                    onChange={(e) => {
                        const selected = e.target.value;
                        setType(selected);

                        if (selected !== "restaurants") {
                            alert("Only Restaurants is working in beta version 🚧");
                            // optional → reset back to restaurants
                            setType("restaurants");
                        }
                    }}
                >
                    <option value="restaurants">Restaurants</option>
                    <option value="cafes">Cafes</option>
                    <option value="salons">Salons</option>
                    <option value="gyms">Gyms</option>
                    <option value="shops">Shops</option>
                </select>


                {/* CTA Button */}
                <div className="z-10 p-1 rounded-xl bg-white shadow border border-gray-400/10">
                    <button
                        onClick={fetchPlaces}
                        disabled={loading}
                        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500
            text-white font-semibold tracking-wide hover:opacity-95 transition-all duration-200
            hover:shadow-lg hover:shadow-orange-500/50 hover:scale-[102%] active:scale-[98%]
            disabled:opacity-60"
                    >
                        {loading ? "Searching..." : "Find Places"}
                    </button>
                </div>
            </motion.div>

            {/* Additional Features */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow rounded-2xl p-5 border border-gray-200"
            >
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Additional Filters</h3>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span>{showFilters ? "Hide" : "Show"}</span>
                    </button>
                </div>

                {/* Collapsible Filters */}
                <AnimatePresence>
                    {showFilters && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-5 space-y-5"
                        >
                            {/* Radius */}
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 font-medium flex items-center space-x-2">
                                    <span>Search Radius (meters)</span>
                                    <Info
                                        className="w-4 h-4 text-gray-400 cursor-pointer"
                                        title="Defines how far (in meters) from the given location the search will look for places. Default is 5000 (5 km)."
                                    />
                                </label>
                                <input
                                    type="number"
                                    value={radius}
                                    onChange={(e) => setRadius(Number(e.target.value))}
                                    className="w-32 px-3 py-2 border rounded-lg text-gray-700 focus:border-orange-400 outline-none"
                                    min={1000}
                                    max={20000}
                                />
                            </div>

                            {/* Limit */}
                            <div className="flex items-center justify-between">
                                <label className="text-gray-700 font-medium flex items-center space-x-2">
                                    <span>Result Limit</span>
                                    <Info
                                        className="w-4 h-4 text-gray-400 cursor-pointer"
                                        title="The maximum number of results to return. Default is 10, maximum allowed is 50."
                                    />
                                </label>
                                <input
                                    type="number"
                                    value={limit}
                                    onChange={(e) => setLimit(Number(e.target.value))}
                                    className="w-32 px-3 py-2 border rounded-lg text-gray-700 focus:border-orange-400 outline-none"
                                    min={1}
                                    max={50}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
