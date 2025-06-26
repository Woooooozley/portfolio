import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Woojae Portfolio</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                WJ
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                안녕하세요, <span className="text-blue-600 dark:text-blue-400">우재</span>입니다
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                프론트엔드 개발자로서 사용자 경험을 중시하는 웹 애플리케이션을 만드는 것을 좋아합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  프로젝트 보기
                </a>
                <a
                  href="#contact"
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  연락하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">개발자로서의 여정</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                안녕하세요! 저는 사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다. 
                React, Next.js, TypeScript 등의 최신 기술을 활용하여 직관적이고 반응형 웹사이트를 만드는 것을 좋아합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                지속적인 학습과 새로운 기술에 대한 호기심을 가지고 있으며, 
                팀과의 협업을 통해 더 나은 제품을 만들어가는 과정을 즐깁니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 관심사</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  사용자 경험(UX) 디자인
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  반응형 웹 디자인
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  성능 최적화
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  접근성(Accessibility)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React", level: 90, color: "bg-blue-500" },
              { name: "Next.js", level: 85, color: "bg-black dark:bg-white" },
              { name: "TypeScript", level: 80, color: "bg-blue-600" },
              { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
              { name: "JavaScript", level: 95, color: "bg-yellow-400" },
              { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
              { name: "Git", level: 85, color: "bg-red-500" },
              { name: "Node.js", level: 75, color: "bg-green-500" },
            ].map((skill) => (
              <div key={skill.name} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</div>
                  </div>
                  <div 
                    className={`absolute inset-0 rounded-full border-4 ${skill.color} border-t-transparent`}
                    style={{ transform: `rotate(${skill.level * 3.6}deg)` }}
                  ></div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "React와 Node.js를 사용한 풀스택 이커머스 플랫폼",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "/next.svg"
              },
              {
                title: "Task Management App",
                description: "드래그 앤 드롭 기능이 있는 태스크 관리 애플리케이션",
                tech: ["React", "TypeScript", "DND Kit", "Firebase"],
                image: "/vercel.svg"
              },
              {
                title: "Portfolio Website",
                description: "반응형 디자인의 개인 포트폴리오 웹사이트",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
                image: "/globe.svg"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="opacity-60"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:woojae@example.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              이메일 보내기
            </a>
            <a
              href="https://github.com/woojae"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Woojae Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
