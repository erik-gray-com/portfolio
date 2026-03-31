import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Mail, Linkedin, Github, ArrowRight, Sparkles, Users, Zap, Heart } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      id: 1,
      title: "Strategic Planning Flowchart",
      category: "Mobile App Design",
      description: "Redesigned mobile banking experience focusing on simplicity and security. Increased user engagement by 45%.",
      image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczNzg2MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["UX Research", "UI Design", "Prototyping"],
      link: "/project/mobile-banking",
    },
    {
      id: 2,
      title: "E-Learning Platform",
      category: "Web Design",
      description: "Created an intuitive learning management system that improved course completion rates by 60%.",
      image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc3MzgwNTYwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["User Testing", "Information Architecture", "Responsive Design"],
      link: "/project/development-strategy",
    },
    {
      id: 3,
      title: "Cryptographic Security",
      category: "Blockchain & Web3",
      description: "MetaMask-integrated airdrop platform with daily token distribution on Sepolia testnet. Features secure wallet connection and automated claiming.",
      image: "https://images.unsplash.com/photo-1635236066449-5b45769be233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBzZWN1cml0eXxlbnwxfHx8fDE3NzQwMzYzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Web3", "MetaMask", "Blockchain"],
      link: "/project/crypto-security",
    },
    {
      id: 4,
      title: "Inventory Management Dashboard",
      category: "SaaS Product",
      description: "Real-time inventory tracking system with advanced analytics, stock alerts, and data visualization for modern businesses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc0MjU4MDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Data Visualization", "Real-time Updates", "Analytics"],
      link: "/project/inventory-dashboard",
    },
  ];

  const skills = [
    { icon: Sparkles, title: "User Research", description: "Conducting interviews, surveys, and usability tests to understand user needs" },
    { icon: Users, title: "Interaction Design", description: "Creating intuitive and delightful user experiences through prototyping" },
    { icon: Zap, title: "Visual Design", description: "Crafting beautiful interfaces with attention to typography, color, and layout" },
    { icon: Heart, title: "Design Systems", description: "Building scalable component libraries and design documentation" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
              <span className="text-xl font-semibold">Erik Gray</span>
              <span className="text-sm text-gray-500">/ Portfolio</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["home", "work", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-black" : "text-gray-600 hover:text-black"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {["home", "work", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize ${
                    activeSection === section ? "text-black font-medium" : "text-gray-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm font-medium">UX Designer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creating meaningful digital experiences
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              I'm a UX designer passionate about solving complex problems through user-centered design.
              Currently designing products that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-gray-50 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              A selection of projects that showcase my approach to user experience design and problem-solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const ProjectWrapper = project.link ? Link : "div";
              const wrapperProps = project.link ? { to: project.link } : {};

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectWrapper {...wrapperProps} className="group cursor-pointer block">
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 uppercase tracking-wider">{project.category}</p>
                      <h3 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ProjectWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a UX designer with over 5 years of experience creating digital products that users love.
                  My approach combines strategic thinking with hands-on design, always keeping the user at the center.
                </p>
                <p>
                  I believe great design is invisible—it just works. Through research, iteration, and collaboration,
                  I create experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not designing, you can find me exploring new coffee shops, reading design books,
                  or contributing to open-source design communities.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="size-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="size-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="size-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbmVyJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NzM3ODQyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold mb-8">What I Do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl">
                  <div className="size-12 rounded-full bg-black text-white flex items-center justify-center mb-4">
                    <skill.icon size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="mailto:mail@erik-gray.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <Mail size={20} />
              mail@erik-gray.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2026 Erik Gray. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Dribbble
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}