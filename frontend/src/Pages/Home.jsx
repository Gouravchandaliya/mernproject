import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#D6D3D1]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            Welcome to
            <span className="block text-theme-100">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Experience culinary excellence in an elegant atmosphere
          </p>
          <button
            onClick={() => navigate('/customer/menu')}
            className="bg-theme-500 hover:bg-theme-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Book a Table
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-15"></div>
      </section>

      {/* Menu Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Signature Dishes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="bg-gradient-to-br from-theme-50 to-theme-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Grilled Salmon</h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Fresh Atlantic salmon with herbs and lemon butter sauce</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-theme-500" style={{ fontFamily: 'Poppins, sans-serif' }}>₹450</span>
                <button className="bg-theme-500 hover:bg-theme-600 text-white px-6 py-2 rounded-full transition-colors">
                  Order Now
                </button>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-gradient-to-br from-theme-50 to-theme-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1981&q=80')] bg-cover bg-center rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Beef Wellington</h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Tender beef wrapped in puff pastry with mushroom duxelles</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-theme-500" style={{ fontFamily: 'Poppins, sans-serif' }}>₹650</span>
                <button className="bg-theme-500 hover:bg-theme-600 text-white px-6 py-2 rounded-full transition-colors">
                  Order Now
                </button>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-gradient-to-br from-theme-50 to-theme-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1551782450-17144efb5723?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"></div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>Truffle Risotto</h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Creamy Arborio rice with black truffle and Parmesan</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-theme-500" style={{ fontFamily: 'Poppins, sans-serif' }}>₹380</span>
                <button className="bg-theme-500 hover:bg-theme-600 text-white px-6 py-2 rounded-full transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "An absolutely delightful dining experience. The ambiance is perfect for special occasions, and the food is simply exquisite."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Michael Chen</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "The service is impeccable and the wine selection is outstanding. Restaurant has become our go-to restaurant for celebrations."
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold">E</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Emma Rodriguez</h4>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                "Every dish tells a story of culinary mastery. The attention to detail and fresh ingredients make every meal memorable."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Restaurant</h3>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Experience culinary excellence in an elegant atmosphere. We serve the finest dishes with exceptional service.
              </p>
              <div className="space-y-2">
                <p className="flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="mr-2">📍</span> 123 Gourmet Street, Food City, FC 12345
                </p>
                <p className="flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="mr-2">📞</span> (555) 123-4567
                </p>
                <p className="flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="mr-2">✉️</span> reservations@jairaghunandan.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Hours</h4>
              <div className="space-y-2 text-gray-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <p>Monday - Thursday: 5:00 PM - 10:00 PM</p>
                <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                <p>Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Find Us</h4>
              <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>Interactive Map</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © 2024 Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
