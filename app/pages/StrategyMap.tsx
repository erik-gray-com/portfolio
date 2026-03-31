import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  Users,
  Target,
  Shield,
  Smartphone,
  Zap,
  TrendingUp,
  Lightbulb,
  FileText,
  Settings,
  Heart,
  Database,
  Lock,
  Clock,
  CheckCircle2,
  X,
  Eye,
  EyeOff,
} from "lucide-react";

interface Node {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  x: number;
  y: number;
  category: "research" | "strategy" | "design" | "development" | "testing";
}

interface Connection {
  id: string;
  from: number;
  to: number;
  label: string;
  pathway: string;
}

export function StrategyMap() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [activePathways, setActivePathways] = useState<Set<string>>(
    new Set(["research", "strategy", "design", "development", "testing"])
  );

  const nodes: Node[] = [
    // Research Pathway (Column 1)
    {
      id: 1,
      title: "User Research",
      description: "Conducted 15 user interviews to understand pain points in existing banking apps. Key insight: users felt overwhelmed by complex navigation.",
      icon: Users,
      color: "bg-blue-100 border-blue-400 text-blue-700",
      x: 50,
      y: 100,
      category: "research",
    },
    {
      id: 2,
      title: "Market Analysis",
      description: "Analyzed top 10 competitors. Identified opportunity: simplified transaction flow could reduce completion time by 40%.",
      icon: TrendingUp,
      color: "bg-blue-100 border-blue-400 text-blue-700",
      x: 50,
      y: 250,
      category: "research",
    },
    {
      id: 3,
      title: "User Personas",
      description: "Developed 3 core personas: Tech-savvy Millennial, Busy Professional, and Security-focused Senior.",
      icon: Users,
      color: "bg-blue-100 border-blue-400 text-blue-700",
      x: 50,
      y: 400,
      category: "research",
    },

    // Strategy Pathway (Column 2)
    {
      id: 4,
      title: "Define Goals",
      description: "Primary objective: Create an intuitive mobile banking experience that builds trust and increases daily active users.",
      icon: Target,
      color: "bg-purple-100 border-purple-400 text-purple-700",
      x: 250,
      y: 100,
      category: "strategy",
    },
    {
      id: 5,
      title: "Information Architecture",
      description: "Restructured navigation into 4 main sections: Home, Payments, Cards, and Profile. Reduced hierarchy depth from 4 to 2 levels.",
      icon: FileText,
      color: "bg-purple-100 border-purple-400 text-purple-700",
      x: 250,
      y: 250,
      category: "strategy",
    },
    {
      id: 6,
      title: "Security First",
      description: "Integrated biometric authentication and implemented secure transaction protocols while maintaining ease of use.",
      icon: Shield,
      color: "bg-purple-100 border-purple-400 text-purple-700",
      x: 250,
      y: 400,
      category: "strategy",
    },

    // Design Pathway (Column 3)
    {
      id: 7,
      title: "Wireframes",
      description: "Created low-fidelity wireframes for 12 key screens. Tested with 8 users, iterated based on feedback.",
      icon: Smartphone,
      color: "bg-green-100 border-green-400 text-green-700",
      x: 450,
      y: 50,
      category: "design",
    },
    {
      id: 8,
      title: "Design System",
      description: "Built comprehensive design system with 45 reusable components, ensuring consistency across all touchpoints.",
      icon: Settings,
      color: "bg-green-100 border-green-400 text-green-700",
      x: 450,
      y: 200,
      category: "design",
    },
    {
      id: 9,
      title: "Visual Design",
      description: "Designed high-fidelity mockups with modern, clean aesthetic. Focus on readability and clear visual hierarchy.",
      icon: Lightbulb,
      color: "bg-green-100 border-green-400 text-green-700",
      x: 450,
      y: 350,
      category: "design",
    },
    {
      id: 10,
      title: "Accessibility",
      description: "Ensured WCAG 2.1 AA compliance. Implemented screen reader support and keyboard navigation.",
      icon: Heart,
      color: "bg-green-100 border-green-400 text-green-700",
      x: 450,
      y: 500,
      category: "design",
    },

    // Development Pathway (Column 4)
    {
      id: 11,
      title: "Prototyping",
      description: "Created interactive prototypes with motion design. Included micro-interactions to enhance user delight.",
      icon: Zap,
      color: "bg-orange-100 border-orange-400 text-orange-700",
      x: 650,
      y: 100,
      category: "development",
    },
    {
      id: 12,
      title: "API Integration",
      description: "Collaborated with backend team to design RESTful APIs for real-time balance updates and transaction processing.",
      icon: Database,
      color: "bg-orange-100 border-orange-400 text-orange-700",
      x: 650,
      y: 250,
      category: "development",
    },
    {
      id: 13,
      title: "Performance",
      description: "Optimized app to load in under 2 seconds. Implemented lazy loading and efficient state management.",
      icon: Clock,
      color: "bg-orange-100 border-orange-400 text-orange-700",
      x: 650,
      y: 400,
      category: "development",
    },

    // Testing Pathway (Column 5)
    {
      id: 14,
      title: "Usability Testing",
      description: "Conducted moderated testing with 20 participants. Success rate improved from 65% to 94% after iterations.",
      icon: CheckCircle2,
      color: "bg-pink-100 border-pink-400 text-pink-700",
      x: 850,
      y: 100,
      category: "testing",
    },
    {
      id: 15,
      title: "A/B Testing",
      description: "Tested two onboarding flows. Version B with progressive disclosure increased completion rate by 28%.",
      icon: TrendingUp,
      color: "bg-pink-100 border-pink-400 text-pink-700",
      x: 850,
      y: 250,
      category: "testing",
    },
    {
      id: 16,
      title: "Security Audit",
      description: "Passed comprehensive security audit. Implemented additional encryption for sensitive data.",
      icon: Lock,
      color: "bg-pink-100 border-pink-400 text-pink-700",
      x: 850,
      y: 400,
      category: "testing",
    },
  ];

  const connections: Connection[] = [
    // Research Pathway
    { id: "c1", from: 1, to: 2, label: "Analyze findings", pathway: "research" },
    { id: "c2", from: 2, to: 3, label: "Create personas", pathway: "research" },
    
    // Research to Strategy
    { id: "c3", from: 3, to: 4, label: "Define objectives", pathway: "strategy" },
    
    // Strategy Pathway
    { id: "c4", from: 4, to: 5, label: "Structure content", pathway: "strategy" },
    { id: "c5", from: 5, to: 6, label: "Implement security", pathway: "strategy" },
    
    // Strategy to Design
    { id: "c6", from: 4, to: 7, label: "Sketch wireframes", pathway: "design" },
    { id: "c7", from: 5, to: 8, label: "Build components", pathway: "design" },
    { id: "c8", from: 6, to: 9, label: "Design interfaces", pathway: "design" },
    
    // Design Pathway
    { id: "c9", from: 7, to: 8, label: "Systematize design", pathway: "design" },
    { id: "c10", from: 8, to: 9, label: "Apply visuals", pathway: "design" },
    { id: "c11", from: 9, to: 10, label: "Ensure accessibility", pathway: "design" },
    
    // Design to Development
    { id: "c12", from: 7, to: 11, label: "Develop prototype", pathway: "development" },
    { id: "c13", from: 8, to: 12, label: "Integrate APIs", pathway: "development" },
    { id: "c14", from: 10, to: 13, label: "Optimize performance", pathway: "development" },
    
    // Development Pathway
    { id: "c15", from: 11, to: 12, label: "Connect backend", pathway: "development" },
    { id: "c16", from: 12, to: 13, label: "Enhance speed", pathway: "development" },
    
    // Development to Testing
    { id: "c17", from: 11, to: 14, label: "Test with users", pathway: "testing" },
    { id: "c18", from: 12, to: 15, label: "Run A/B tests", pathway: "testing" },
    { id: "c19", from: 13, to: 16, label: "Audit security", pathway: "testing" },
    
    // Testing Pathway
    { id: "c20", from: 14, to: 15, label: "Validate variants", pathway: "testing" },
    { id: "c21", from: 15, to: 16, label: "Verify security", pathway: "testing" },
  ];

  const pathwayConfig = {
    research: {
      name: "Research",
      color: "bg-blue-500",
      borderColor: "border-blue-500",
      textColor: "text-blue-700",
    },
    strategy: {
      name: "Strategy",
      color: "bg-purple-500",
      borderColor: "border-purple-500",
      textColor: "text-purple-700",
    },
    design: {
      name: "Design",
      color: "bg-green-500",
      borderColor: "border-green-500",
      textColor: "text-green-700",
    },
    development: {
      name: "Development",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      textColor: "text-orange-700",
    },
    testing: {
      name: "Testing",
      color: "bg-pink-500",
      borderColor: "border-pink-500",
      textColor: "text-pink-700",
    },
  };

  const togglePathway = (pathway: string) => {
    const newPathways = new Set(activePathways);
    if (newPathways.has(pathway)) {
      newPathways.delete(pathway);
    } else {
      newPathways.add(pathway);
    }
    setActivePathways(newPathways);
  };

  const isNodeVisible = (node: Node) => {
    return activePathways.has(node.category);
  };

  const isConnectionVisible = (connection: Connection) => {
    return activePathways.has(connection.pathway as any);
  };

  const getConnectionPath = (from: Node, to: Node) => {
    const fromX = from.x + 60; // Center of node
    const fromY = from.y + 60;
    const toX = to.x + 60;
    const toY = to.y + 60;

    // Create a curved path
    const midX = (fromX + toX) / 2;
    const controlOffset = Math.abs(toX - fromX) * 0.3;

    return `M ${fromX} ${fromY} Q ${midX} ${fromY}, ${midX} ${(fromY + toY) / 2} Q ${midX} ${toY}, ${toX} ${toY}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </Link>
            <div className="text-sm text-gray-500">Mobile Banking App / Strategy Map</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Strategic Planning Flowchart</h1>
          <p className="text-lg text-gray-600 mb-6">
            Interactive branching pathways showing the comprehensive strategic approach across research, strategy, design, development, and testing phases. Toggle pathways to explore different routes.
          </p>

          {/* Pathway Controls */}
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Pathway Controls</h3>
              <div className="text-sm text-gray-600">
                {activePathways.size} of {Object.keys(pathwayConfig).length} active
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {Object.entries(pathwayConfig).map(([key, config]) => {
                const isActive = activePathways.has(key);
                return (
                  <button
                    key={key}
                    onClick={() => togglePathway(key)}
                    className={`flex items-center justify-between gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                      isActive
                        ? `${config.color} border-transparent text-white shadow-md`
                        : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <span className="font-medium text-sm">{config.name}</span>
                    {isActive ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Strategy Map */}
        <div className="relative bg-white rounded-2xl p-8 border border-gray-200 overflow-x-auto mb-8">
          <div className="min-w-[1000px]" style={{ height: "600px", position: "relative" }}>
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
                </marker>
              </defs>

              {/* Draw connections */}
              {connections.map((connection) => {
                const fromNode = nodes.find((n) => n.id === connection.from);
                const toNode = nodes.find((n) => n.id === connection.to);
                if (!fromNode || !toNode) return null;
                if (!isConnectionVisible(connection)) return null;
                if (!isNodeVisible(fromNode) || !isNodeVisible(toNode)) return null;

                const path = getConnectionPath(fromNode, toNode);
                const pathwayColor = pathwayConfig[connection.pathway as keyof typeof pathwayConfig]?.color.replace('bg-', '');
                
                // Calculate label position
                const midX = (fromNode.x + toNode.x) / 2 + 60;
                const midY = (fromNode.y + toNode.y) / 2 + 60;

                return (
                  <g key={connection.id}>
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      d={path}
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      x={midX}
                      y={midY - 5}
                      textAnchor="middle"
                      className="text-xs fill-gray-600 font-medium pointer-events-none"
                    >
                      {connection.label}
                    </motion.text>
                  </g>
                );
              })}
            </svg>

            {/* Draw nodes */}
            <AnimatePresence>
              {nodes.map((node) => {
                if (!isNodeVisible(node)) return null;
                const Icon = node.icon;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      width: "120px",
                      height: "120px",
                    }}
                    onClick={() => setSelectedNode(node)}
                  >
                    <div
                      className={`relative ${node.color} border-2 rounded-xl p-4 h-full flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl z-10 bg-opacity-90 backdrop-blur-sm`}
                    >
                      <Icon size={32} className="mb-2" />
                      <div className="text-xs font-bold line-clamp-2">{node.title}</div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Details Panel */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="p-6 bg-white rounded-2xl border-2 border-gray-300 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`size-16 ${selectedNode.color} border-2 rounded-xl flex items-center justify-center`}
                  >
                    <selectedNode.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedNode.title}</h3>
                    <div className="flex items-center gap-2">
                      <div
                        className={`size-3 rounded-full ${pathwayConfig[selectedNode.category].color}`}
                      />
                      <span className="text-sm font-medium capitalize text-gray-600">
                        {selectedNode.category} Pathway
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedNode.description}</p>
              
              {/* Show connections */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3 text-sm text-gray-600 uppercase tracking-wide">
                  Connections
                </h4>
                <div className="space-y-2">
                  {connections
                    .filter((c) => c.from === selectedNode.id || c.to === selectedNode.id)
                    .filter((c) => isConnectionVisible(c))
                    .map((connection) => {
                      const isOutgoing = connection.from === selectedNode.id;
                      const linkedNode = nodes.find(
                        (n) => n.id === (isOutgoing ? connection.to : connection.from)
                      );
                      if (!linkedNode || !isNodeVisible(linkedNode)) return null;
                      
                      return (
                        <div
                          key={connection.id}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                          onClick={() => setSelectedNode(linkedNode)}
                        >
                          <div className={`size-2 rounded-full ${pathwayConfig[connection.pathway as keyof typeof pathwayConfig].color}`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium">
                              {isOutgoing ? "→" : "←"} {linkedNode.title}
                            </div>
                            <div className="text-xs text-gray-600">{connection.label}</div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              45%
            </div>
            <div className="text-gray-600 font-medium">Increase in user engagement</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              94%
            </div>
            <div className="text-gray-600 font-medium">Usability success rate</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              4.8/5
            </div>
            <div className="text-gray-600 font-medium">User satisfaction score</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
