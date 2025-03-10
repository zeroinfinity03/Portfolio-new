
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'KNOWFLOW',
      description: [
        'Developed a multimodal Conversational AI assistant with five key features: text chat, image generation, web search, product recognition, and real-time audio-video interaction via WebSocket.',
        'Integrated Retrieval-Augmented Generation (RAG) using ChromaDB and LlamaIndex for document comprehension across six formats, elevating user experience.',
        'Optimized a Llama3.2 3B-parameter model for local inference with 4-bit quantization, cutting cloud dependence by 100% and enabling efficient deployment on user devices across 3 Operating Systems.'
      ],
      link: 'https://github.com/zeroinfinity03/KnowFlow',
      detailLink: '/projects/knowflow'
    },
    {
      title: 'VISIONARY',
      description: [
        'Led a five-person hackathon team to build a blind assistance app, leveraging Gemini Flash LLM for real-time object detection and safety analysis from video feeds.',
        'Linked FastAPI with Google Cloud Text-to-Speech for voice interactions in 20+ languages, setting accessibility standards.',
        'Incorporated GPS and motion detection to enable automated, context-aware navigation prompts, laying groundwork for advanced assistive features.'
      ],
      link: 'https://github.com/zeroinfinity03/visionary',
      detailLink: '/projects/visionary'
    },
    {
      title: 'REAL-TIME STOCK FORECASTING',
      description: [
        'Built a platform fetching real-time stock data from yfinance, enabling predictive analysis for investment insights.',
        'Combined Prophet for time series forecasting with FinBERT for sentiment analysis, refining predictions using 10 news articles per stock.',
        'Optimized performance through asynchronous data retrieval and caching mechanisms, ensuring efficient, real-time visualization with Plotly for enhanced user experience.'
      ],
      link: 'https://github.com/zeroinfinity03/real-time-stock-prediction',
      detailLink: '/projects/stock-forecast'
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedText 
          text="Featured Projects" 
          className="section-title text-center mb-12"
          tag="h2"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              detailLink={project.detailLink}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
