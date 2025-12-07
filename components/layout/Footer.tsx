"use client"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandDark text-gray-400 py-12 border-t-4 border-brandGold mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
        {/* Company */}
        <div>
          <h4 className="text-white font-serif text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brandGold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-serif text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brandGold">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-white font-serif text-lg mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brandGold">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brandGold">
                Store Locator
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-1">
          <h4 className="text-white font-serif text-lg mb-4">Newsletter</h4>
          <form
            className="flex flex-col space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Signup your newsletter"
              className="bg-transparent border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-brandGold text-white"
            />
            <button className="text-left text-xs uppercase tracking-wider text-brandGold hover:text-white transition-colors font-bold">
              Subscribe &rarr;
            </button>
          </form>
        </div>

        {/* Payment */}
        <div>
          <h4 className="text-white font-serif text-lg mb-4">Payment</h4>
          <div className="flex space-x-2">
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-full"
              />
            </div>
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-full"
              />
            </div>
            <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 text-xs text-center border-t border-gray-800 pt-8">
        &copy; 2024 Decent Men's Wear. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
