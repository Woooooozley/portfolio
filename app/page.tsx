import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight">Pearl</h1>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#work" className="text-lg hover:text-gray-600 transition-colors duration-300">Work</Link>
              <Link href="#about" className="text-lg hover:text-gray-600 transition-colors duration-300">About</Link>
              <Link href="#contact" className="text-lg hover:text-gray-600 transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="mb-8">
              <span className="text-lg text-gray-600">Branding · Product Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Hello, I&apos;m Woojae Lee
            </h1>
            <div className="mt-12">
              <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Get for free
              </button>
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
                title: "Fintech Dello Banking App",
                client: "Booking Corp.",
                image: "/next.svg",
                category: "Main Project",
                href: "/work/dellobank"
              },
              {
                title: "Dazzle © Branding",
                client: "Dazzle Inc.",
                image: "/vercel.svg",
                category: "Branding",
                href: "/work/dazzle"
              },
              {
                title: "Healthcare Mobile App",
                client: "Your Client Name",
                image: "/globe.svg",
                category: "Mobile App",
                href: "/work/healthcare"
              },
              {
                title: "Technical Infographic",
                client: "Tech Bank Client",
                image: "/next.svg",
                category: "Design",
                href: "/work/infographic"
              },
              {
                title: "Extend & Support - App Plugin",
                client: "Client Name",
                image: "/vercel.svg",
                category: "Plugin",
                href: "/work/plugin"
              },
              {
                title: "E-commerce Platform",
                client: "Startup Client",
                image: "/globe.svg",
                category: "Web App",
                href: "/work/ecommerce"
              }
            ].map((project, index) => (
              <Link key={index} href={project.href} className="group cursor-pointer">
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
                  <p className="text-sm text-gray-500">{project.client}</p>
                </div>
                <p className="text-gray-600">{project.category}</p>
              </Link>
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our journey and learn what sets us apart in crafting impactful digital experiences.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">About Us</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate designers and developers dedicated to creating exceptional digital experiences. 
              Our mission is to transform ideas into reality through innovative design solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Let&apos;s start creating together</h2>
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
            2023 Pearl Framer template crafted with love by Dawid Pietrasiak
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
