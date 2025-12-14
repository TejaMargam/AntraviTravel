import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-warm-white">
      <title>About Antravi - Luxury Travel Specialists</title>
      <meta name="description" content="Learn about Antravi's passion for creating extraordinary luxury travel experiences. Discover our story and commitment to exceptional service." />
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-[#162660] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About Antravi
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wider">
              Creating Extraordinary Moments Since 2025
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-[#F1E4D1]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[#162660] mb-6">
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-8">
                Antravi was born from a simple belief: every journey should be extraordinary. 
                Founded by passionate travelers who understand the transformative power of exploration, 
                we specialize in crafting bespoke luxury experiences that go beyond the ordinary.
              </p>
              
              <p className="mb-8">
                Our name, Antravi, reflects our core philosophy - we believe in the power of travel 
                to create lasting memories and meaningful connections. From the pristine beaches of 
                the Maldives to hidden mountain retreats, we curate experiences that speak to your soul.
              </p>
              
              <p className="mb-8">
                What sets us apart is our commitment to personalization. Every detail matters, 
                from the moment you first contact us to long after you return home. Our team of 
                dedicated travel specialists works tirelessly to understand your preferences, 
                dreams, and desires, translating them into meticulously planned journeys.
              </p>
              
              <p>
                With Antravi, you're not just booking a trip - you're investing in memories that 
                will last a lifetime. Let us help you live your moments to the fullest.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#F1E4D1]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-[#162660] mb-6">
                Our Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-xl luxury-shadow">
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-heart text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Passion
                </h3>
                <p className="text-gray-600">
                  We're genuinely passionate about travel and creating extraordinary experiences 
                  that exceed expectations.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl luxury-shadow">
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-gem text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Every detail is carefully considered and executed to the highest standards 
                  of luxury and service.
                </p>
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl luxury-shadow">
                <div className="bg-[#162660] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-handshake text-2xl"></i>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#162660] mb-4">
                  Trust
                </h3>
                <p className="text-gray-600">
                  We build lasting relationships with our clients through transparency, 
                  reliability, and unwavering commitment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
