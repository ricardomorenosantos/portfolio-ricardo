import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Server, Wrench, User, GraduationCap, Briefcase, FolderOpen, Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { category: 'Linguagens & Frameworks', icon: Code, items: ['Python', 'Flask', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
    { category: 'Banco de Dados', icon: Database, items: ['SQL', 'MySQL', 'SQLite'] },
    { category: 'Ferramentas & Tecnologias', icon: Server, items: ['Git', 'GitHub', 'APIs REST', 'SaaS', 'Virtual Machines'] },
    { category: 'Automação & Scripts', icon: Wrench, items: ['Integrações com planilhas', 'Automações de rotina'] }
  ];

  const projects = [
    {
      title: 'Sistema Interno Financeiro – ETEC',
      description: 'Sistema interno em Python para controle de entradas e saídas financeiras, utilizando integração com planilhas e banco de dados.',
      tech: ['Python', 'SQL', 'Planilhas']
    },
    {
      title: 'Ferramenta de Integração Automatizada',
      description: 'Pipeline de automação com Python para tratamento e geração de relatórios integrados com Google Sheets.',
      tech: ['Python', 'Google Sheets API', 'Automação']
    },
    {
      title: 'Aplicativo de Edição de Vídeos com IA',
      description: 'Aplicativo de edição automática de vídeos utilizando IA para acelerar a produção de conteúdo.',
      tech: ['Python', 'IA', 'Processamento de Vídeo']
    }
  ];

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'education', label: 'Formação' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  // Classes reutilizáveis
  const sectionClass = "py-16 sm:py-20";
  const containerClass = "max-w-6xl mx-auto px-4 sm:px-6";
  const titleClass = "text-3xl sm:text-4xl font-bold mb-4 text-white";
  const cardClass = "p-4 sm:p-6 rounded-2xl bg-gray-800 border border-gray-700 transition-transform duration-300 hover:scale-105";
  const gradientLine = "w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto";

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="text-center mb-12 sm:mb-16">
      <Icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-blue-400" />
      <h2 className={titleClass}>{title}</h2>
      <div className={gradientLine}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className={containerClass}>
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ricardo Moreno
            </h1>
            <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Menu principal">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === id ? 'text-blue-400 font-medium' : 'text-gray-300'
                  }`}
                  aria-label={`Ir para seção ${label}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20" aria-hidden="true"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
            Ricardo Moreno Santos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 font-semibold">
            Desenvolvedor Python & Full Stack Júnior
          </p>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-400 max-w-2xl mx-auto">
            Apaixonado por tecnologia, automação e soluções criativas. 
            Pronto para contribuir com equipes inovadoras.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <a 
              href="https://www.linkedin.com/in/ricardo-moreno-82690a230" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              aria-label="Perfil no LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/ricardomorenosantos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              aria-label="Perfil no GitHub"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Ir para próxima seção"
          >
            <ChevronDown className="w-8 h-8 text-gray-500" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${sectionClass} bg-gray-800/50`}>
        <div className={containerClass}>
          <SectionHeader icon={User} title="Objetivo Profissional" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Conquistar uma posição como <strong className="text-blue-400">Desenvolvedor Python ou Full Stack Júnior</strong>, 
              contribuindo com soluções criativas, automações e sistemas funcionais enquanto desenvolvo 
              minhas habilidades técnicas e entrego valor prático às equipes de tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeader icon={GraduationCap} title="Formação" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className={cardClass}>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-400">Formação Acadêmica</h3>
              <p className="text-base sm:text-lg font-semibold mb-2 text-white">Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
              <p className="text-sm sm:text-base text-gray-400 mb-3">Faculdade Estácio</p>
              <span className="inline-block px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs sm:text-sm">
                Em andamento
              </span>
            </div>
            
            <div className={cardClass}>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-purple-400">Formação Complementar</h3>
              <p className="text-base sm:text-lg font-semibold mb-2 text-white">Desenvolvedor Full Stack Python</p>
              <p className="text-sm sm:text-base text-gray-400 mb-3">EBAC</p>
              <span className="inline-block px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs sm:text-sm">
                Em andamento
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${sectionClass} bg-gray-800/50`}>
        <div className={containerClass}>
          <SectionHeader icon={Briefcase} title="Skills Técnicas" />
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <div key={index} className={cardClass}>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-900/30 rounded-lg mr-3 text-blue-400">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={sectionClass}>
        <div className={containerClass}>
          <SectionHeader icon={FolderOpen} title="Projetos Pessoais" />
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={index} className={cardClass}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 sm:px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${sectionClass} bg-gray-800/50`}>
        <div className={containerClass}>
          <SectionHeader icon={Phone} title="Contato" />
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-300">
              Pronto para contribuir com sua equipe! Entre em contato para conversarmos sobre oportunidades.
            </p>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <a 
                href="mailto:rickmorenosan@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                aria-label="Enviar email"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">rickmorenosan@gmail.com</span>
              </a>
            </div>
            
            <div className="flex justify-center gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/in/ricardo-moreno-82690a230" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Perfil no LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://github.com/ricardomorenosantos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Perfil no GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800 bg-gray-900">
        <div className={containerClass}>
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © 2024 Ricardo Moreno Santos. Desenvolvido com React e muito ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;