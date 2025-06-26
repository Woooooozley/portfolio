import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold tracking-tight">WOOJAE</h1>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <a href="#works" className="text-lg hover:text-gray-600 transition-colors duration-300">Works</a>
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
              WOOJAE
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hello, I'm a frontend developer specializing in modern web applications with 5 years of expertise — based in Seoul, working remote. Let's create!
            </p>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">work.</h2>
            <button className="text-lg text-gray-600 hover:text-black transition-colors duration-300">
              Show More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                image: "/next.svg",
                category: "Web Application"
              },
              {
                title: "Task Management App",
                image: "/vercel.svg",
                category: "Mobile App"
              },
              {
                title: "Portfolio Website",
                image: "/globe.svg",
                category: "Web Design"
              },
              {
                title: "Dashboard System",
                image: "/next.svg",
                category: "Web Application"
              },
              {
                title: "Social Media App",
                image: "/vercel.svg",
                category: "Mobile App"
              },
              {
                title: "Landing Page",
                image: "/globe.svg",
                category: "Web Design"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={120}
                      height={120}
                      className="opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">about.</h2>
            <button className="text-lg text-gray-600 hover:text-black transition-colors duration-300">
              Show More
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl leading-relaxed text-gray-600 mb-8">
                I collaborate with businesses of all sizes worldwide, using the latest technologies. My applications have also earned multiple recognitions.
              </p>
              <p className="text-xl leading-relaxed text-gray-600">
                I'm dedicated to crafting beautiful and highly functional web applications that seamlessly align with my clients' unique needs and long-term goals.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                WJ
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex space-x-8">
            <a href="#" className="text-lg text-gray-600 hover:text-black transition-colors duration-300">LinkedIn</a>
            <a href="#" className="text-lg text-gray-600 hover:text-black transition-colors duration-300">GitHub</a>
            <a href="#" className="text-lg text-gray-600 hover:text-black transition-colors duration-300">Behance</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Curious about what we can create together?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's bring something extraordinary to life!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
              Get in Touch
            </button>
            <button className="border border-black text-black px-8 py-4 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300">
              Available For Work
            </button>
          </div>
          
          <div className="space-y-4 text-lg">
            <p>+82 (0)10 1234 5678</p>
            <p className="text-gray-600">hello@woojae.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            Designed & Developed by Woojae
          </div>
          <div className="text-gray-500">
            All rights reserved, WOOJAE ©2024
          </div>
        </div>
      </footer>
    </div>
  );
}
