import { useState } from "react";
import { MapPin, Navigation, LayoutGrid, Table as TableIcon } from "lucide-react";

export default function ListOfPlaces({ data }) {
    const [view, setView] = useState("card"); // "card" | "table"

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Nearby Restaurants</h2>

                {/* Toggle Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => setView("card")}
                        className={`p-2 rounded-lg border ${view === "card"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                            }`}
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setView("table")}
                        className={`p-2 rounded-lg border ${view === "table"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                            }`}
                    >
                        <TableIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* View Switch */}
            {view === "card" ? (
                // --- Card Layout ---
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((place, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">{place.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                {place.address || "No address available"}
                            </p>

                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                    <span>{place.city}, {place.state}</span>
                                </div>
                                <span className="text-xs font-medium bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                    {place.distance_km.toFixed(2)} km
                                </span>
                            </div>

                            <div className="flex items-center justify-between mt-5">
                                <a
                                    href={place.osmLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-blue-600 hover:underline"
                                >
                                    <Navigation className="w-4 h-4 mr-1" />
                                    View on Map
                                </a>
                                <span className="text-xs text-gray-400 capitalize">
                                    {place.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // --- Table Layout ---
                <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-100">
                    <table className="min-w-full text-sm text-left">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Address</th>
                                <th className="px-4 py-3">City</th>
                                <th className="px-4 py-3">Distance</th>
                                <th className="px-4 py-3">Map</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((place, index) => (
                                <tr
                                    key={index}
                                    className="border-b last:border-none hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3 font-medium">{place.name}</td>
                                    <td className="px-4 py-3">{place.address || "N/A"}</td>
                                    <td className="px-4 py-3">{place.city}</td>
                                    <td className="px-4 py-3">{place.distance_km.toFixed(2)} km</td>
                                    <td className="px-4 py-3">
                                        <a
                                            href={place.osmLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline text-sm"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
