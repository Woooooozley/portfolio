import Image from "next/image";
import Link from "next/link";

export default function DelloBankPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold tracking-tight">Pearl</Link>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/#work" className="text-lg hover:text-gray-600 transition-colors duration-300">Work</Link>
              <Link href="/#about" className="text-lg hover:text-gray-600 transition-colors duration-300">About</Link>
              <Link href="/#contact" className="text-lg hover:text-gray-600 transition-colors duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Industry</h4>
                <p className="text-lg">Banking</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Client</h4>
                <p className="text-lg">Booking Corp.</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Fintech Dello Banking App. New Way to Empower Life
            </h1>
          </div>
          
          {/* Main Project Image */}
          <div className="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden mb-16">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Image
                src="/next.svg"
                alt="Dello Banking App"
                width={200}
                height={200}
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Revolutionizing Banking: Enhancing User Experience with the Dello Fintech Banking
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In an era where seamless digital experiences define user expectations, the Dello Fintech Banking App emerges as a beacon of innovation in the financial technology landscape. This case study delves into the user experience (UX) design journey undertaken to transform conventional banking interactions into intuitive, efficient, and user-centric experiences. As traditional banking institutions grapple with the evolving demands of a digital-savvy clientele, Dello steps forward with a visionary approach to redefine how users engage with their financial resources. The intersection of cutting-edge technology, user-centered design principles.
            </p>
            <div className="mt-12">
              <button className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Large Project Gallery Image #1 */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/vercel.svg"
                  alt="Project Gallery Image"
                  width={150}
                  height={150}
                  className="opacity-60"
                />
              </div>
            </div>
            {/* Large Project Gallery Image #2 */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/globe.svg"
                  alt="Project Gallery Image"
                  width={150}
                  height={150}
                  className="opacity-60"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Project Gallery Image for 50% width */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/next.svg"
                  alt="Project Gallery Image"
                  width={120}
                  height={120}
                  className="opacity-60"
                />
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/vercel.svg"
                  alt="Project Gallery Image"
                  width={120}
                  height={120}
                  className="opacity-60"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Project Gallery Image #3 */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/globe.svg"
                  alt="Project Gallery Image"
                  width={150}
                  height={150}
                  className="opacity-60"
                />
              </div>
            </div>
            {/* Large Project Gallery Image #4 */}
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/next.svg"
                  alt="Project Gallery Image"
                  width={150}
                  height={150}
                  className="opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Conclusion */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Elevating Financial Experiences: Dello Fintech Banking App&apos;s Impact and Future Endeavors
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As the financial technology sector continues to evolve, the Dello team remains committed to ongoing improvements and innovations. Learn about the future roadmap of the app, exploring upcoming features, integrations, and strategies to stay at the forefront of user-centric fintech solutions. The Dello Fintech Banking App serves not only as a testament to the power of thoughtful UX design but also as a harbinger of what the future holds for seamless, secure, and enjoyable financial interactions.
            </p>
            
            {/* Image Credits */}
            <div className="mt-12 p-6 bg-white rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Image Credits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• The image featured in the carousel #1</li>
                <li>• The image featured in the carousel #2</li>
                <li>• The image featured in the carousel #3</li>
                <li>• The image featured in the carousel #4</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-8">
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