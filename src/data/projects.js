export const PROJECTS = [
  {
    title: "Set Card Recognition with CNN (VGG6)",
    description:
      "Developed and trained a VGG6-based computer vision model capable of identifying cards in the game Set and detecting valid sets on a game board. Conducted dataset preparation, model training, and performance evaluation using PyTorch and OpenCV.",
    proof:
      "Detects valid Set combinations from board images using a trained CNN model.",
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Computer Vision",
      "Machine Learning",
    ],
    github: "https://github.com/angelodeasis/setscv",
  },
  {
    title: "SoftView: Local Sensory Media Analysis ",
    description:
     "Developed a privacy-focused browser application that analyzes audio and video locally to identify potentially intense sensory events, including sudden volume increases and rapid visual changes. Implemented audio signal analysis, video frame sampling, heuristic event detection, and real-time mitigation during playback.",
    proof:
      "Identifies and timestamps potential audio and visual sensory events, then applies gradual audio reduction and visual dimming during Assisted Viewing.",
    stack: [
"JavaScript",
"React",
"Web Audio API",
"HTML5 Media",
"Signal Processing",
"Computer Vision",
"Accessibility",
],
    live: "https://soft-view-seven.vercel.app/",
  },
  {
  title: "Game of the Aeons: War of the Trailblazers",

  description:
    "Designed and developed a browser-based strategic auction game inspired by Honkai: Star Rail. Built a custom game engine with React and JavaScript featuring character auctions, resource management, random events, team building, and multi-stage Memory of Chaos progression.",

  proof:
    "A fully playable web application with a custom state-driven game engine, auction system, event system, and automated game-flow resolution.",

  stack: [
    "JavaScript",
    "React",
    "Vite",
    "Game Engine",
    "State Management",
    "Vercel",
  ],

  live: "https://auction-hsr-game.vercel.app/",
 },
  {
    title: "AI PDF-to-Flashcard Generator",
    description:
      "Built a full-stack web application that extracts content from uploaded PDF study materials and generates AI-assisted flashcards. Led a team to design the React frontend, integrated OpenAI-powered card generation, and implemented MongoDB storage for user-created study sets.",
    proof:
      "Generates structured flashcards from PDFs in seconds using LLM-based processing.",
    stack: [
      "Python",
      "TypeScript",
      "React",
      "PDF Processing",
      "OpenAI API",
      "MongoDB",
    ],
    live: "https://enhance-note-project-4pby5re68-angelodeasis-projects.vercel.app/",
  },
  {
    title: "Drone Collision Simulation System",
    description:
      "Developed simulation models to analyze drone-to-drone collision risks in autonomous delivery networks. Used Python to model delivery traffic patterns, evaluate edge-case scenarios, and generate data-driven insights for urban drone routing systems.",
    proof:
      "Simulated 1,000+ drone delivery paths to evaluate collision risk scenarios.",
    stack: [
      "Python",
      "NumPy",
      "Pandas",
      "Data Analysis",
      "Simulation Modeling",
    ],
    github: "https://github.com/angelodeasis/dronecollisionsimulation",
  },
];