import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';
import ProjectHero from '../components/ProjectHero';
import ProjectSection from '../components/ProjectSection';
import ImageTextBlock from '../components/ImageTextBlock';
import FullWidthImage from '../components/FullWidthImage';
import ProjectNavigation from '../components/ProjectNavigation';
import ProjectTimeline from '../components/ProjectTimeline';
import { Lightbulb, Code, Server, Shield, Puzzle, Rocket, Globe } from 'lucide-react';

const KnowFlowProject = () => {
  useEffect(() => {
    document.title = 'KnowFlow Project - Surya Singh';
    window.scrollTo(0, 0);
  }, []);

  const timelineSteps = [
    {
      title: "Identifying the Problem",
      image: "/images/knowflow/1.jpg",
      imageAlt: "Visualization of fragmented AI tools landscape with multiple disconnected application interfaces",
      description: (
        <div className="space-y-4">
          <p>
            As a data scientist and AI enthusiast, I noticed a recurring frustration in the world of AI assistants. 
            Users like me—students, developers, and everyday explorers—were forced to juggle multiple platforms to 
            meet their needs. Want to chat with an AI? Use one tool. Need to generate an image? Switch to another. 
            Curious about web-based facts or document analysis? That's yet another app.
          </p>
          <p>
            This fragmentation came with a cost—literally. Many of these services hid behind paywalls, making powerful 
            AI inaccessible to those without deep pockets. Free alternatives existed, but they were limited, often harvesting 
            user data for training, raising privacy red flags.
          </p>
          <p>
            Worse still, most solutions demanded a constant internet connection, tethering users to the cloud and exposing them to latency, costs, and security risks. I asked myself: 
            Why can't there be one platform that does it all—for free, privately, and flexibly? That's when the seed for 
            KnowFlow was planted.
          </p>
        </div>
      ),
      icon: <Lightbulb size={16} />
    },
    {
      title: "Designing the Vision",
      image: "/images/knowflow/2.jpg",
      imageAlt: "Technical architectural diagram of a modular AI assistant system with connected components",
      description: (
        <div className="space-y-4">
          <p>
            I set out to build KnowFlow as a unified AI assistant that breaks down these barriers. My vision was clear: 
            combine text chat, web search, image generation, document analysis, live drawing assistance, and visual Q&A 
            into a single platform—accessible to anyone, anywhere, with or without an internet connection.
          </p>
          <p>
            The journey began with a modular architecture powered by FastAPI, a high-performance Python framework. I designed 
            specialized agents for each feature—TextAgent for chat, WebAgent for search, ImageGenAgent for visuals, and more—ensuring 
            the system was extensible and maintainable.
          </p>
        </div>
      ),
      icon: <Puzzle size={16} />
    },
    {
      title: "Building the Infrastructure",
      image: "/images/knowflow/3.jpg",
      imageAlt: "Modern cloud and API infrastructure visualization showing connections between AI services",
      description: (
        <div className="space-y-4">
          <p>
            For online capabilities, I integrated cutting-edge tools like Google's 
            Gemini 2.0 Flash for conversational AI, Tavily API for web search, and FLUX.1-schnell for image generation. These gave 
            KnowFlow the power to fetch real-time data, generate high-quality images, and deliver context-aware responses.
          </p>
          <p>
            The backend was built with scalability in mind, utilizing asynchronous processing to handle multiple requests simultaneously. 
            I designed a router system that directed different query types to the appropriate specialized agents, while maintaining a consistent 
            response format for the frontend.
          </p>
        </div>
      ),
      icon: <Server size={16} />
    },
    {
      title: "Implementing Privacy & Offline Features",
      image: "/images/knowflow/rag.jpg",
      imageAlt: "Retrieval-Augmented Generation (RAG) system for document analysis with privacy protection",
      description: (
        <div className="space-y-4">
          <p>
            To tackle privacy and accessibility, I added offline functionality using Meta's Llama 3.2 3B 
            model via Ollama. With 4-bit quantization, I optimized it to run locally on modest hardware, cutting cloud reliance by 
            100%. For document analysis, I implemented Retrieval-Augmented Generation (RAG) with ChromaDB and LlamaIndex, supporting 
            six file formats and enabling semantic search—all offline if needed.
          </p>
          <p>
            Privacy was non-negotiable: offline interactions stayed local, with no data leaving the user's device. I built in simple toggles 
            to switch between online and offline modes, giving users complete control over their data.
          </p>
        </div>
      ),
      icon: <Shield size={16} />
    },
    {
      title: "Developing Real-time Capabilities",
      image: "/images/knowflow/4.jpg",
      imageAlt: "Real-time AI processing visualization with WebSocket connections and camera feed analysis",
      description: (
        <div className="space-y-4">
          <p>
            Real-time features like drawing assistance and visual Q&A came alive with WebSockets, Google Cloud Text-to-Speech, and camera integration, 
            offering voice feedback in 20+ languages. This enabled truly interactive experiences where users could sketch and receive guidance, 
            or point their camera at objects and get immediate information.
          </p>
          <p>
            The setup? One script. Whether on Windows, macOS, or Linux, users could clone the repo, run a single command, and have a 
            fully functional AI assistant. I even built in flexibility—toggle between online and offline modes, upload documents, or 
            sketch on a canvas with live AI guidance.
          </p>
        </div>
      ),
      icon: <Globe size={16} />
    },
    {
      title: "Launching & Measuring Impact",
      image: "/images/knowflow/5.jpg",
      imageAlt: "Dashboard showing impact metrics for an AI system with usage statistics and performance indicators",
      description: (
        <div className="space-y-4">
          <p>
            After months of coding, testing, and refining, KnowFlow emerged as more than just a project—it's a revolution in AI 
            accessibility. Users now have a single, free platform that blends seven powerful features: smart web search, text chat, 
            local AI, image generation, RAG-based document queries, live drawing assistance, and visual Q&A. It's deployed across 
            three operating systems, with a seamless one-script setup that's been tested on diverse hardware.
          </p>
          <p>
            The impact? Staggering. By optimizing the Llama 3.2 model, I slashed cloud dependency, making KnowFlow a privacy-first 
            solution that runs efficiently on local machines. The RAG system processes documents with precision, while real-time 
            features like voice-guided drawing and camera-based Q&A push the boundaries of multimodal AI.
          </p>
          <p>
            Users can ask questions in multiple languages, upload documents for analysis, or generate high-quality images—all without a subscription or data tradeoff.
            For me, KnowFlow is a testament to what's possible when you prioritize user needs over profit. It's not just an AI assistant; 
            it's a tool that empowers students, creators, and innovators to explore, learn, and build—on their terms.
          </p>
        </div>
      ),
      icon: <Rocket size={16} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col no-scroll-x">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ProjectNavigation />

          <div className="max-w-4xl mx-auto">
            <ProjectHero 
              title="The KnowFlow Journey"
              subtitle="Building a Unified, Accessible AI Assistant"
              imageSrc="/images/knowflow/1UI.jpeg"
              fallbackImageSrc="/images/knowflow/1UI.jpeg"
              githubUrl="https://github.com/zeroinfinity03/KnowFlow"
            />
            
            <ProjectSection title="Project Journey" delay={100}>
              <p className="mb-8 text-lg">
                The KnowFlow project evolved from identifying a fragmented AI landscape to creating a unified, 
                accessible AI assistant that combines multiple capabilities while prioritizing privacy and accessibility. 
                Follow the journey below:
              </p>
              
              <ProjectTimeline steps={timelineSteps} />
            </ProjectSection>
            
            <div className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 my-12">
                <div className="md:w-2/5 flex justify-center">
                  <div className="rounded-lg overflow-hidden shadow-md max-w-[350px]">
                    <img 
                      src="/images/knowflow/1UI.jpeg" 
                      alt="KnowFlow's user interface showing the unified AI assistant with multiple features in one platform"
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/images/knowflow/1UI.jpeg";
                      }}
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Result: Empowering Users with a Game-Changing Tool</h3>
                  <p className="mb-4">
                    After months of coding, testing, and refining, KnowFlow emerged as more than just a project—it's a revolution in AI 
                    accessibility. Users now have a single, free platform that blends seven powerful features: smart web search, text chat, 
                    local AI, image generation, RAG-based document queries, live drawing assistance, and visual Q&A. It's deployed across 
                    three operating systems, with a seamless one-script setup that's been tested on diverse hardware.
                  </p>
                  <p className="mb-4">
                    The impact? Staggering. By optimizing the Llama 3.2 model, I slashed cloud dependency, making KnowFlow a privacy-first 
                    solution that runs efficiently on local machines. The RAG system processes documents with precision, while real-time 
                    features like voice-guided drawing and camera-based Q&A push the boundaries of multimodal AI.
                  </p>
                </div>
              </div>
            </div>
            
            <FullWidthImage 
              imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
              fallbackImageSrc="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?auto=format&fit=crop&q=80"
              imageAlt="Multiple AI capabilities illustrated through digital interface"
              height="h-[350px]"
            />
            
            <ProjectSection title="Impact and Future Development">
              <p className="mb-4">
                Users can ask questions in multiple languages, upload documents for analysis, or generate a 1024x1024 image—all without a subscription or data tradeoff.
              </p>
              <p className="mb-4">
                For me, KnowFlow is a testament to what's possible when you prioritize user needs over profit. It's not just an AI assistant; 
                it's a tool that empowers students, creators, and innovators to explore, learn, and build—on their terms.
              </p>
              <p className="mb-4">
                This journey taught me how to balance complexity with simplicity, cloud with local, and ambition with practicality. 
                And it's just the beginning—I'm excited to see how KnowFlow evolves as I continue to push the limits of AI.
              </p>
            </ProjectSection>
            
            <div className="flex justify-center mt-12">
              <Link 
                to="/" 
                className="button-primary flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>Return to Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowFlowProject;
