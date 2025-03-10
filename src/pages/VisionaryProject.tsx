import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHero from '../components/ProjectHero';
import ProjectSection from '../components/ProjectSection';
import ProjectTimeline from '../components/ProjectTimeline';
import { Lightbulb, Code, Compass, Users, Sparkles, Star } from 'lucide-react';
import ProjectNavigation from '../components/ProjectNavigation';

const VisionaryProject = () => {
  useEffect(() => {
    document.title = 'Visionary Project - Surya Singh';
    window.scrollTo(0, 0);
  }, []);

  const timelineSteps = [
    {
      title: "Recognizing the Challenge",
      image: "/images/visionary/1.jpg",
      imageAlt: "Visual representation of navigation challenges for visually impaired individuals",
      description: (
        <div className="space-y-4">
          <p>
            During a late-night hackathon brainstorming session, I couldn't shake a thought: How do visually impaired people 
            navigate a world built for sight? The answer wasn't comforting. They rely on canes, guide dogs, or basic apps 
            that beep for obstacles—but these tools felt like fragments of a solution.
          </p>
          <p>
            Real-time hazards like a speeding car or a cluttered sidewalk stayed invisible. Directions were vague, often useless 
            in unfamiliar places, and language barriers made many aids inaccessible.
          </p>
          <p>
            I saw a gap—a need for a smart, all-in-one assistant that could see, speak, and guide in real time, giving 
            visually impaired individuals the freedom to move confidently. That's when Visionary was born, a spark ignited 
            in the chaos of a five-person hackathon team.
          </p>
        </div>
      ),
      icon: <Lightbulb size={16} />
    },
    {
      title: "Assembling the Team",
      image: "/images/visionary/team.jpg",
      imageAlt: "Hackathon team collaborating on the Visionary project",
      description: (
        <div className="space-y-4">
          <p>
            With the clock ticking on our 48-hour hackathon, I quickly assembled a five-person team of talented developers, designers, 
            and ML enthusiasts. Our diverse backgrounds were our strength – we had expertise in computer vision, natural language processing, 
            mobile development, and accessibility design.
          </p>
          <p>
            I took on the role of project lead, outlining our vision and coordinating our efforts. Our first step was understanding 
            the real challenges faced by visually impaired individuals through research and interviews, which helped us prioritize features.
          </p>
        </div>
      ),
      icon: <Users size={16} />
    },
    {
      title: "Designing the Solution",
      image: "/images/visionary/3.jpg",
      imageAlt: "AI computer vision system design for object recognition and analysis",
      description: (
        <div className="space-y-4">
          <p>
            With caffeine-fueled determination, my team and I set out to create Visionary—an app that acts as eyes and ears 
            for its users. I took the lead, diving into a whirlwind of code and collaboration. We chose Gemini Flash LLM, a 
            lightning-fast AI model, to process live video feeds from a phone's camera, spotting objects and dangers in real time. 
            Think stairs, street signs, or a stray bike—Visionary would see it all.
          </p>
          <p>
            For the backbone, I picked FastAPI, its speed perfect for handling instant data flows. We wired in Google Cloud 
            Text-to-Speech, letting the app speak in over 20 languages, from Hindi to Spanish, so no one was left out.
          </p>
        </div>
      ),
      icon: <Code size={16} />
    },
    {
      title: "Building Navigation Capabilities",
      image: "/images/visionary/4.jpg",
      imageAlt: "GPS mapping system with step-by-step directional guidance",
      description: (
        <div className="space-y-4">
          <p>
            Navigation was a critical component of our solution. We added GPS and motion detection, tracking a user's 
            location and movement to offer step-by-step directions—like a friend saying, "Turn left in 10 steps."
          </p>
          <p>
            We implemented a detailed mapping system that not only provided directions but also identified landmarks and potential hazards along the route. 
            The app would proactively alert users about upcoming crosswalks, stairs, or construction areas, giving them time to prepare.
          </p>
          <p>
            Our navigation system was designed to work both outdoors and indoors, using a combination of GPS, WiFi positioning, and visual cues to maintain accuracy 
            even in areas with poor satellite reception.
          </p>
        </div>
      ),
      icon: <Compass size={16} />
    },
    {
      title: "Creating the User Interface",
      image: "/images/visionary/5.jpg",
      imageAlt: "Voice-based interface with audio cues and minimal visual elements",
      description: (
        <div className="space-y-4">
          <p>
            For visually impaired users, the interface needed to be primarily voice-driven, with clear audio cues and minimal reliance on visual elements. 
            We developed a simple set of voice commands that would trigger different functions – "What's around me?", "Navigate to [destination]", or "Read this text."
          </p>
          <p>
            We also included haptic feedback – different vibration patterns to signal directions or alerts without requiring audio in loud environments. 
            For users with partial vision, we implemented high-contrast visuals with large text and simple layouts.
          </p>
          <p>
            The entire interface was rigorously tested for accessibility, ensuring compatibility with screen readers and other assistive technologies.
          </p>
        </div>
      ),
      icon: <Sparkles size={16} />
    },
    {
      title: "Demonstrating Impact & Future Potential",
      image: "/images/visionary/6.jpg",
      imageAlt: "Mobile app detecting objects and providing audio guidance in real-time",
      description: (
        <div className="space-y-4">
          <p>
            When the hackathon clock hit zero, Visionary stood tall—a prototype with real promise. Point your phone, and it 
            whispers what's ahead: "Car approaching, 5 meters." Ask about your surroundings, and it answers in your language, 
            clear as day. Move forward, and it guides you: "Slight right, clear path." It's not just an app—it's a companion, 
            blending object detection, multilingual voice, and smart navigation into one seamless experience.
          </p>
          <p>
            The impact hit me hard. We'd built something that could warn someone about a curb or guide them through a busy street, 
            all in real time. No metrics yet—no user counts or accuracy percentages—but the potential was electric. Visionary laid 
            a foundation for independence, a proof that tech can bridge gaps we too often ignore.
          </p>
          <p>
            This journey taught me the power of teamwork under pressure and the thrill of solving a problem that matters. It's a starting point, and I'm itching to 
            refine it—maybe add more features or test it in the wild—because helping people see the world anew is a path worth walking.
          </p>
        </div>
      ),
      icon: <Star size={16} />
    }
  ];

  return (
    <div className="no-scroll-x">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <ProjectNavigation />
            
            <ProjectHero 
              title="The Visionary Journey"
              subtitle="Lighting the Way for the Visually Impaired"
              imageSrc="/images/visionary/7.jpg"
              fallbackImageSrc="/images/visionary/7.jpg"
              githubUrl="https://github.com/zeroinfinity03/visionary"
            />
            
            <ProjectSection title="Project Journey" delay={100}>
              <p className="mb-8 text-lg">
                The Visionary project was born during a hackathon to solve navigation challenges faced by visually impaired people. 
                What began as an idea evolved into a functioning prototype that could revolutionize independent mobility. 
                Follow our journey:
              </p>
              
              <ProjectTimeline steps={timelineSteps} />
            </ProjectSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisionaryProject;
