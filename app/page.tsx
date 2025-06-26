import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight">LEEWOOJAE</h1>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#work" className="text-lg hover:text-gray-600 transition-colors duration-300">Work</a>
              <a href="#about" className="text-lg hover:text-gray-600 transition-colors duration-300">About</a>
              <a href="#contact" className="text-lg hover:text-gray-600 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tight mb-8">
              LEEWOOJAE
            </h1>
            <div className="space-y-6 max-w-4xl mx-auto">
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "마나부 ManaBoo",
                period: "2022.09 ~ present",
                image: "/next.svg",
                category: "Main Project"
              },
              {
                title: "Dazzle © Branding",
                period: "2023.01 ~ 2023.06",
                image: "/vercel.svg",
                category: "Dazzle Inc."
              },
              {
                title: "Healthcare Mobile App",
                period: "2023.03 ~ 2023.08",
                image: "/globe.svg",
                category: "Your Client Name"
              },
              {
                title: "Technical Infographic",
                period: "2023.06 ~ 2023.09",
                image: "/next.svg",
                category: "Tech Bank Client"
              },
              {
                title: "Extend & Support - App Plugin",
                period: "2023.09 ~ 2023.12",
                image: "/vercel.svg",
                category: "Client Name"
              },
              {
                title: "E-commerce Platform",
                period: "2024.01 ~ 2024.04",
                image: "/globe.svg",
                category: "Startup Client"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={120}
                      height={120}
                      className="opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.period}</p>
                </div>
                <p className="text-gray-600">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Designing Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve turned ideas into reality. Dive into the stories of successful product designs that make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Branding",
                services: ["Logo Design", "Brand Guidelines", "Collateral Design", "Rebranding Services"]
              },
              {
                title: "UX/UI Designs",
                services: ["User Research and Analysis", "Wireframing and Prototyping", "User Interface Design", "User Experience Testing", "Responsive Design Solutions"]
              },
              {
                title: "Motion & Animation",
                services: ["Motion Graphics Design", "Animated Explainer Videos", "Interactive Presentations"]
              },
              {
                title: "Mobile",
                services: ["iOS App Development", "Android App Development", "App Prototyping and Testing", "App Maintenance and Updates"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our journey and learn what sets us apart in crafting impactful digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Projects completed", description: "Over 250 successful projects delivered with quality and care" },
              { number: "100%", label: "Client satisfaction", description: "All of our clients are satisfied with our work and service" },
              { number: "30", label: "Skilled Tradespeople", description: "Our team of 30 experts ensures top-quality results" },
              { number: "3+", label: "Years experience", description: "Improving homes with expert craftsmanship for years" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Contact</h2>
            <div className="space-y-4 text-2xl">
              <p className="font-semibold">woojae0711@naver.com</p>
              <p className="font-semibold">+82 010 5236 0840</p>
              <p className="font-semibold">In Seoul, Korea</p>
            </div>
            <div className="mt-12">
              <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            2025 Portfolio by Lee Woojae
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Dribbble</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
