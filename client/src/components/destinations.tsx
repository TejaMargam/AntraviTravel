export default function Destinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-black">
            Our Featured Destinations
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="aspect-[16/10] relative">
              <img 
                src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=750&fit=crop" 
                alt="The Maldives"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <h3 className="font-heading text-5xl font-bold mb-4">
                The Maldives
              </h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Paradise found in crystal-clear waters and pristine white sand beaches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}