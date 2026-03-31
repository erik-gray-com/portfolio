import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import html2canvas from "html2canvas";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Download,
  FileText,
  Users,
  Code,
  TestTube,
  Rocket,
  Target,
  TrendingUp,
  Award,
  Clock,
  GitBranch,
  Zap,
} from "lucide-react";

interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  completionDate: string;
  icon: any;
  metrics?: { label: string; value: string }[];
}

interface Strategy {
  id: string;
  name: string;
  description: string;
  icon: any;
  color: string;
}

type ApproachType = "agile" | "lean" | "design-thinking";

export function DevelopmentStrategy() {
  const [selectedApproach, setSelectedApproach] = useState<ApproachType>("agile");
  const [selectedStrategies, setSelectedStrategies] = useState<string[]>([
    "user-centered",
    "iterative",
    "data-driven",
  ]);
  const [isDownloading, setIsDownloading] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const approaches = {
    agile: {
      name: "Agile Development",
      description: "Iterative development with 2-week sprints, daily standups, and continuous feedback loops.",
      timeline: "6 months",
      color: "bg-blue-500",
    },
    lean: {
      name: "Lean UX",
      description: "Rapid prototyping and validation with minimal viable products, focusing on learning and adaptation.",
      timeline: "4 months",
      color: "bg-green-500",
    },
    "design-thinking": {
      name: "Design Thinking",
      description: "Human-centered approach with deep empathy, ideation workshops, and extensive user testing.",
      timeline: "8 months",
      color: "bg-purple-500",
    },
  };

  const strategies: Strategy[] = [
    {
      id: "user-centered",
      name: "User-Centered Design",
      description: "Continuous user research and testing throughout development",
      icon: Users,
      color: "bg-blue-100 border-blue-300 text-blue-700",
    },
    {
      id: "iterative",
      name: "Iterative Development",
      description: "Regular sprints with feedback loops and constant improvements",
      icon: GitBranch,
      color: "bg-green-100 border-green-300 text-green-700",
    },
    {
      id: "data-driven",
      name: "Data-Driven Decisions",
      description: "Analytics and metrics guide all design and development choices",
      icon: TrendingUp,
      color: "bg-purple-100 border-purple-300 text-purple-700",
    },
    {
      id: "rapid-prototyping",
      name: "Rapid Prototyping",
      description: "Quick mockups and prototypes for fast validation",
      icon: Zap,
      color: "bg-yellow-100 border-yellow-300 text-yellow-700",
    },
    {
      id: "collaborative",
      name: "Cross-Functional Teams",
      description: "Designers, developers, and stakeholders working together",
      icon: Users,
      color: "bg-pink-100 border-pink-300 text-pink-700",
    },
    {
      id: "quality-focused",
      name: "Quality Assurance",
      description: "Automated testing and continuous integration pipelines",
      icon: TestTube,
      color: "bg-orange-100 border-orange-300 text-orange-700",
    },
  ];

  const milestonesData: Record<ApproachType, Milestone[]> = {
    agile: [
      {
        id: 1,
        title: "Sprint 0: Foundation",
        description: "Initial setup, user research, and project planning",
        date: "Week 1-2",
        completionDate: "April 15, 2026",
        icon: Target,
        metrics: [
          { label: "User Interviews", value: "15" },
          { label: "Personas Created", value: "3" },
        ],
      },
      {
        id: 2,
        title: "Sprint 1-3: Core Features",
        description: "Developed login, dashboard, and course browsing functionality",
        date: "Week 3-8",
        completionDate: "May 27, 2026",
        icon: Code,
        metrics: [
          { label: "Features Delivered", value: "12" },
          { label: "Code Coverage", value: "87%" },
        ],
      },
      {
        id: 3,
        title: "Sprint 4-6: Advanced Features",
        description: "Progress tracking, assessments, and social learning features",
        date: "Week 9-14",
        completionDate: "July 8, 2026",
        icon: Rocket,
        metrics: [
          { label: "User Stories", value: "24" },
          { label: "Sprint Velocity", value: "42" },
        ],
      },
      {
        id: 4,
        title: "Sprint 7-8: Optimization",
        description: "Performance improvements, bug fixes, and UX refinements",
        date: "Week 15-18",
        completionDate: "August 5, 2026",
        icon: Zap,
        metrics: [
          { label: "Load Time", value: "1.2s" },
          { label: "Bugs Fixed", value: "56" },
        ],
      },
      {
        id: 5,
        title: "Launch & Iteration",
        description: "Public release with ongoing improvements based on user feedback",
        date: "Week 19-24",
        completionDate: "September 16, 2026",
        icon: Award,
        metrics: [
          { label: "Users Onboarded", value: "2,500" },
          { label: "Satisfaction Score", value: "4.7/5" },
        ],
      },
    ],
    lean: [
      {
        id: 1,
        title: "Problem Validation",
        description: "Validated learning problem through user interviews and surveys",
        date: "Week 1-2",
        completionDate: "April 8, 2026",
        icon: Target,
        metrics: [
          { label: "Survey Responses", value: "200" },
          { label: "Pain Points ID'd", value: "8" },
        ],
      },
      {
        id: 2,
        title: "MVP Development",
        description: "Built minimum viable product with core learning features",
        date: "Week 3-6",
        completionDate: "May 6, 2026",
        icon: Code,
        metrics: [
          { label: "Features Built", value: "5" },
          { label: "Dev Time", value: "4 weeks" },
        ],
      },
      {
        id: 3,
        title: "Beta Testing",
        description: "Released to 100 beta users for feedback and validation",
        date: "Week 7-10",
        completionDate: "June 3, 2026",
        icon: TestTube,
        metrics: [
          { label: "Beta Users", value: "100" },
          { label: "Feedback Items", value: "127" },
        ],
      },
      {
        id: 4,
        title: "Pivot & Enhance",
        description: "Adjusted features based on usage data and user feedback",
        date: "Week 11-14",
        completionDate: "July 1, 2026",
        icon: GitBranch,
        metrics: [
          { label: "Features Pivoted", value: "3" },
          { label: "Engagement +", value: "45%" },
        ],
      },
      {
        id: 5,
        title: "Scale & Launch",
        description: "Full launch with validated product-market fit",
        date: "Week 15-16",
        completionDate: "July 22, 2026",
        icon: Rocket,
        metrics: [
          { label: "Launch Users", value: "5,000" },
          { label: "Retention Rate", value: "68%" },
        ],
      },
    ],
    "design-thinking": [
      {
        id: 1,
        title: "Empathize Phase",
        description: "Deep user research including contextual inquiry and ethnographic studies",
        date: "Week 1-4",
        completionDate: "April 22, 2026",
        icon: Users,
        metrics: [
          { label: "Research Hours", value: "120" },
          { label: "User Sessions", value: "25" },
        ],
      },
      {
        id: 2,
        title: "Define Phase",
        description: "Synthesized insights and defined key problems to solve",
        date: "Week 5-8",
        completionDate: "May 20, 2026",
        icon: Target,
        metrics: [
          { label: "Key Insights", value: "18" },
          { label: "Problem Statements", value: "5" },
        ],
      },
      {
        id: 3,
        title: "Ideate Phase",
        description: "Brainstorming workshops generating hundreds of potential solutions",
        date: "Week 9-12",
        completionDate: "June 17, 2026",
        icon: Zap,
        metrics: [
          { label: "Ideas Generated", value: "240" },
          { label: "Workshop Sessions", value: "6" },
        ],
      },
      {
        id: 4,
        title: "Prototype Phase",
        description: "Created multiple prototypes from paper sketches to interactive designs",
        date: "Week 13-20",
        completionDate: "August 12, 2026",
        icon: Code,
        metrics: [
          { label: "Prototypes", value: "12" },
          { label: "Iterations", value: "8" },
        ],
      },
      {
        id: 5,
        title: "Test Phase",
        description: "Extensive usability testing with diverse user groups",
        date: "Week 21-26",
        completionDate: "September 23, 2026",
        icon: TestTube,
        metrics: [
          { label: "Test Sessions", value: "40" },
          { label: "Success Rate", value: "92%" },
        ],
      },
      {
        id: 6,
        title: "Implement & Launch",
        description: "Final development and public release with monitoring",
        date: "Week 27-32",
        completionDate: "November 4, 2026",
        icon: Rocket,
        metrics: [
          { label: "Features Live", value: "28" },
          { label: "User Satisfaction", value: "4.8/5" },
        ],
      },
    ],
  };

  const toggleStrategy = (strategyId: string) => {
    setSelectedStrategies((prev) =>
      prev.includes(strategyId)
        ? prev.filter((id) => id !== strategyId)
        : [...prev, strategyId]
    );
  };

  const handleDownloadTimeline = async () => {
    if (!timelineRef.current) return;

    setIsDownloading(true);

    try {
      // Wait a bit for the state to update
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = await html2canvas(timelineRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        logging: false,
        useCORS: true,
      });

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          const approachName = approaches[selectedApproach].name.replace(/\s+/g, "-").toLowerCase();
          link.download = `development-timeline-${approachName}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
        setIsDownloading(false);
      });
    } catch (error) {
      console.error("Error generating image:", error);
      setIsDownloading(false);
    }
  };

  const currentMilestones = milestonesData[selectedApproach];

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
            <button
              onClick={handleDownloadTimeline}
              disabled={isDownloading}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="hidden sm:inline">Generating...</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span className="hidden sm:inline">Download Timeline</span>
                </>
              )}
            </button>
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Development Strategy Map</h1>
          <p className="text-lg text-gray-600">
            Explore different development approaches and strategies that led to a 60% improvement in course completion rates.
          </p>
        </motion.div>

        {/* Approach Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Select Development Approach</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {Object.entries(approaches).map(([key, approach]) => (
              <button
                key={key}
                onClick={() => setSelectedApproach(key as ApproachType)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedApproach === key
                    ? "border-black bg-white shadow-lg scale-105"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`size-3 rounded-full ${approach.color}`} />
                  <h3 className="font-semibold">{approach.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">{approach.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={14} />
                  {approach.timeline}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Strategy Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Key Strategies (Toggle to Select)</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategies.map((strategy) => {
              const Icon = strategy.icon;
              const isSelected = selectedStrategies.includes(strategy.id);
              return (
                <button
                  key={strategy.id}
                  onClick={() => toggleStrategy(strategy.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left relative ${
                    isSelected
                      ? `${strategy.color} border-2`
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3">
                      <CheckCircle2 size={20} className="text-current" />
                    </div>
                  )}
                  <Icon size={24} className="mb-2" />
                  <h3 className="font-semibold mb-1 pr-8">{strategy.name}</h3>
                  <p className="text-xs opacity-80">{strategy.description}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline - This will be captured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Development Timeline</h2>
          <div ref={timelineRef} className="bg-white rounded-2xl p-8 border border-gray-200">
            {/* Timeline Header */}
            <div className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{approaches[selectedApproach].name}</h3>
                  <p className="text-gray-600">{approaches[selectedApproach].description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="text-lg font-semibold">{approaches[selectedApproach].timeline}</div>
                </div>
              </div>
              
              {/* Selected Strategies Display */}
              {selectedStrategies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600">Active Strategies:</span>
                  {strategies
                    .filter((s) => selectedStrategies.includes(s.id))
                    .map((strategy) => (
                      <span
                        key={strategy.id}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium"
                      >
                        {strategy.name}
                      </span>
                    ))}
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedApproach}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentMilestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={milestone.id} className="flex gap-4">
                      {/* Timeline Line */}
                      <div className="flex flex-col items-center">
                        <div className="size-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <Icon size={20} />
                        </div>
                        {index < currentMilestones.length - 1 && (
                          <div className="w-0.5 h-full min-h-[60px] bg-gray-200 my-2" />
                        )}
                      </div>

                      {/* Milestone Content */}
                      <div className="flex-1 pb-6">
                        <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                          <div>
                            <h3 className="font-semibold text-lg">{milestone.title}</h3>
                            <p className="text-sm text-gray-500">{milestone.date}</p>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            <Calendar size={14} />
                            {milestone.completionDate}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{milestone.description}</p>
                        {milestone.metrics && (
                          <div className="grid grid-cols-2 gap-3">
                            {milestone.metrics.map((metric, i) => (
                              <div key={i} className="p-3 bg-gray-50 rounded-lg">
                                <div className="text-xs text-gray-500">{metric.label}</div>
                                <div className="text-lg font-semibold">{metric.value}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-4 gap-4"
        >
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl font-bold mb-2">60%</div>
            <div className="text-sm text-gray-600">Course Completion Increase</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl font-bold mb-2">2,500+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl font-bold mb-2">4.7/5</div>
            <div className="text-sm text-gray-600">User Satisfaction</div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-3xl font-bold mb-2">92%</div>
            <div className="text-sm text-gray-600">Usability Success Rate</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
