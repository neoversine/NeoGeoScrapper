import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand */}
                <div>
                    <img
                        src="/Neo-Geo-Logo-White.png"
                        alt="NeoGeo Logo"
                        className="w-14 h-14 rounded-full mb-4"
                    />
                    <h2 className="text-white font-bold text-xl">NeoGeo</h2>
                    <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                        One Search, Endless Possibilities. <br />
                        Find what you need, where you need it.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#features" className="hover:text-orange-400 transition-colors">Features</a></li>
                        <li><a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a></li>
                        <li><a href="#working-api" className="hover:text-orange-400 transition-colors">Search</a></li>
                        <li><a href="mailto:jyotirmoybaidya408@gmail.com" className="hover:text-orange-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/stylo.joti.3" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/Hyperbola_27" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/_java_doodle_/" className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} NeoGeo. All rights reserved.
            </div>
        </footer>
    );
}
