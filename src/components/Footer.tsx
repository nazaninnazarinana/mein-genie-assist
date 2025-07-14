
import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">MG</span>
              </div>
              <span className="text-xl font-bold text-white">Mein Genie</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your intelligent assistant for navigating bureaucracy with confidence and ease. 
              Eliminating complexity, one form at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/formino" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Formino - Form Assistant
                </Link>
              </li>
              <li>
                <Link to="/termino" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Termino - Appointment Booking
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:support@meingenie.de" className="text-gray-300 text-sm hover:text-cyan-400">
                  support@meingenie.de
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+4917686315894" className="text-gray-300 text-sm hover:text-cyan-400">
                  +49 176 86315894
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Mein Genie. All rights reserved. | Empowering people through intelligent automation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
