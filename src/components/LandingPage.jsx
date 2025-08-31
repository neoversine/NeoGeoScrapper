import { Mail } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="w-full">
            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why Choose <span className="text-orange-500">Neogeo</span>?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">One Search</h3>
                            <p className="text-gray-600">
                                Search across multiple platforms and get all results in one place instantly.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                            <p className="text-gray-600">
                                Use powerful filters to refine your search and save valuable time.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Endless Possibilities</h3>
                            <p className="text-gray-600">
                                Unlock new opportunities with deep insights from aggregated data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        How It <span className="text-orange-500">Works</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-500 font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Enter Your Query</h3>
                            <p className="text-gray-600">
                                Start with a single search input. No more switching between platforms.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-500 font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Neogeo Fetches Results</h3>
                            <p className="text-gray-600">
                                Our engine aggregates and organizes data from multiple trusted sources.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 text-orange-500 font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Get Actionable Insights</h3>
                            <p className="text-gray-600">
                                Explore insights, filter results, and discover endless opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
