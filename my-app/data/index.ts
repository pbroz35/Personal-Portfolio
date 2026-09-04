export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build production AI systems — from agent infrastructure to the interfaces on top of them",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Highly flexible and open to relocation",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI engineer with a focus on agent orchestration and LLM infrastructure.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working with LangGraph, MCP, and LLM observability",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Clinical Trials Matching Platform",
    des: "A full-stack trial-matching system pairing a deterministic rules engine with local LLM review to screen 108 patients against 7,964 recruiting trials — built on FastAPI, LangGraph, and Ollama, with a SHA-256 prompt-keyed cache that cut match latency from 140s to 25ms.",
    img: "/project-clinical-trials.svg",
    iconLists: ["/python.svg", "/fastapi.svg", "/re.svg", "/next.svg", "/ts.svg"],
    link: "https://github.com/pbroz35/clinical-trials-matching",
  },
  {
    id: 2,
    title: "MRI Brain Tumor Detection and Classification",
    des: "A machine learning system classifying brain tumors across 10,000+ MRI scans, combining ResNet-18 feature extraction with AdaBoost to improve accuracy on small clinical datasets where standalone CNNs underperform.",
    img: "/project-mri-classifier.svg",
    iconLists: ["/python.svg", "/tensorflow.svg", "/keras.svg"],
    link: "https://github.com/pbroz35/MRI-Tumor-Classification-Hybrid-ML-Model",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Piotr at the Electronic Visualization Lab, where he demonstrated exceptional skills in React, Node.js, Express, Docker, Next.js, Vite, and various web technologies. His expertise in building front-end components, developing back-end services, optimizing applications, and integrating APIs made him an invaluable asset to our team. Piotr's proactive nature and passion for innovation were evident in every project.",
    name: "Shrut Patel",
    title: "Software Engineer Intern at Electronic Visualization Lab",
  },
  {
    quote: "Piotr is an excellent worker and is always diligent in his tasks. He helps whenever he can, and never fails to show up on time, ready to work. He listens to others, and works with them to not only improve himself, but the group as a whole. He is an amazing friend, and a pleasure to work with!",
    name: "Adyan Khan",
    title: "Former Colleague",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer, AI/ML Platform - Tempus AI",
    desc: "Architected and deployed deep_agent_sdk, a production Python package wrapping LangChain/LangGraph with subagent tracing, semantic tool retrieval, memory, and human-in-the-loop interrupts, running on GCP/GKE backed by Postgres. Built the LLM observability layer with OpenTelemetry and OpenInference routing traces into Arize Phoenix, and cut tool-invocation latency 80% via MCP server pre-warming and cached node execution. Benchmarked 5+ agent frameworks across 12 dimensions and presented the findings to 200+ engineers and senior leadership.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Research Assistant / Software Engineer - Electronic Visualization Laboratory",
    desc: "Enhanced SAGE3, a collaborative whiteboard used by 5,000+ users across 800+ institutions, using TypeScript, React, and Docker-based cloud deployment in an Agile/Scrum team. Built a LangChain LLM pipeline integrating DeepPlot visualizations, speaker diarization, and Llama 3 summarization to improve transcription accuracy and reduce manual summarization by 50%, plus AI-powered export tools generating summaries as CSVs, PDFs, images, and sticky notes.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Developer Intern - Ingenio Care",
    desc: "Developed a cross-platform physician-finder tool with React, Redux, Node.js, and Material UI for locating providers and booking appointments. Built an AI-powered insurance authorization system using the OpenAI API with complex PostgreSQL database management, reducing processing time by 30%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "B.S. Computer Science - University of Illinois Chicago",
    desc: "Graduated Magna Cum Laude with a 3.87 GPA. Certified through the IBM Agentic AI, RAG & MCP Certification Series and Stanford University's AI in Healthcare program.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/pbroz35",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/1brozek/",
  },
];
