import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectHero from '../components/ProjectHero';
import ProjectSection from '../components/ProjectSection';
import ProjectTimeline from '../components/ProjectTimeline';
import { Lightbulb, Database, LineChart, BarChart, Code, Rocket } from 'lucide-react';
import ProjectNavigation from '../components/ProjectNavigation';

const StockForecastProject = () => {
  useEffect(() => {
    document.title = 'Stock Forecast Project - Surya Singh';
    window.scrollTo(0, 0);
  }, []);

  const timelineSteps = [
    {
      title: "Identifying Market Chaos",
      image: "/images/stock-forecast/1. Identifying market chaos.jpg",
      imageAlt: "Complex financial market data visualization showing overwhelming information and volatility",
      description: (
        <div className="space-y-4">
          <p>
            As someone fascinated by data and its power to reveal hidden patterns, I often found myself frustrated by the stock market's chaos. 
            Investors—whether novices like me or seasoned traders—faced a maze of tools that never quite fit together. Real-time stock prices? 
            One app. Historical trends? Another website. Predictions for tomorrow's moves? A paid service. News sentiment that might sway the 
            market? Good luck finding that in one place.
          </p>
          <p>
            The tools were scattered, often expensive, and left users piecing together insights like a jigsaw puzzle with missing pieces. 
            Worse, they were slow—relying on outdated data or clunky interfaces that couldn't keep up with the market's pace. I thought, 
            Why can't there be a single platform that lights the way with live data, predictions, and sentiment—all in real time, for free? 
            That's where the journey to build the Real-Time Stock Analysis and Prediction Platform (RTSP) began.
          </p>
        </div>
      ),
      icon: <Lightbulb size={16} />
    },
    {
      title: "Designing the Platform Architecture",
      image: "/images/stock-forecast/desiging the platform arch.avif",
      imageAlt: "Stock prediction platform architecture design showing data flow and system components",
      description: (
        <div className="space-y-4">
          <p>
            I envisioned RTSP as a one-stop solution—a lighthouse for investors navigating the stormy seas of the stock market. 
            My goal was to blend real-time data, predictive power, and sentiment analysis into a sleek, accessible web app.
          </p>
          <p>
            The architecture needed to be modular and responsive. I chose FastAPI as the backbone—a lightning-fast Python framework that could 
            handle the market's speed and constant data streams. For the frontend, I paired it with Jinja2 templates and Tailwind CSS, 
            creating a responsive, user-friendly interface that would work across devices.
          </p>
          <p>
            I designed the system with three core modules: data acquisition, analysis/prediction, and presentation. Each module was built to work 
            independently but communicate seamlessly, allowing for future expansion and refinement.
          </p>
        </div>
      ),
      icon: <Code size={16} />
    },
    {
      title: "Implementing Data Acquisition",
      image: "/images/stock-forecast/plementing data acusation.avif",
      imageAlt: "Real-time financial data feeds and API integrations for stock data acquisition",
      description: (
        <div className="space-y-4">
          <p>
            The data backbone came from yfinance, pulling live stock prices and historical trends from the S&P 500, 
            which I scraped from Wikipedia to give users a broad starting point. But raw stock data wasn't enough—I needed news and sentiment too.
          </p>
          <p>
            I integrated the NewsData.io API to fetch articles about specific stocks, implementing a filtering system to ensure 
            only the most relevant news was included. For each stock, the system would gather the 10 most recent and relevant articles, providing 
            crucial context for the price movements.
          </p>
          <p>
            To optimize performance and reduce API calls, I implemented cachetools.TTLCache with smart timeouts: 5 minutes for live data, 
            1 hour for history and sentiment, 24 hours for stock symbols. This kept the data fresh while keeping the system responsive.
          </p>
        </div>
      ),
      icon: <Database size={16} />
    },
    {
      title: "Building Predictive Models",
      image: "/images/stock-forecast/4 building predictive models.jpg",
      imageAlt: "Machine learning prediction model for stocks with forecasting curves and confidence intervals",
      description: (
        <div className="space-y-4">
          <p>
            To predict future stock movements, I turned to Facebook's Prophet, a powerful time series forecasting tool optimized with cmdstanpy for efficiency. 
            Prophet excels at capturing daily, weekly, and seasonal patterns in financial data, making it ideal for stock prediction.
          </p>
          <p>
            But numbers alone weren't enough—markets are swayed by human emotion, captured in news headlines. So I incorporated 
            FinBERT from Hugging Face, a specialized BERT model trained on financial text, to score the sentiment of each news article. 
            These sentiment scores were then used to adjust the predictions, adding a crucial human element to the purely statistical forecasts.
          </p>
          <p>
            To validate the models, I implemented backtesting capabilities, allowing the system to assess how accurate past predictions would have been 
            against actual market movements.
          </p>
        </div>
      ),
      icon: <LineChart size={16} />
    },
    {
      title: "Creating Interactive Visualizations",
      image: "/images/stock-forecast/inerative visulization.avif",
      imageAlt: "Interactive financial dashboard with candlestick charts and prediction overlays",
      description: (
        <div className="space-y-4">
          <p>
            Visualization was key to making the data accessible. I brought in Plotly to craft interactive charts—candlestick or line graphs, 
            adjustable from 1 day to 6 months—letting users see the market's pulse in real time.
          </p>
          <p>
            The dashboard was designed for clarity, with distinct sections for current data, historical trends, predictions, and news sentiment. 
            Each visualization was interactive, allowing users to hover for more details, zoom in on interesting periods, or toggle between different view modes.
          </p>
          <p>
            I also created a unified view that overlaid prediction bands on historical data, with sentiment indicators to show how news might 
            affect the stock's trajectory. All of this was designed to be intuitive, even for users with no technical background in finance or data science.
          </p>
        </div>
      ),
      icon: <BarChart size={16} />
    },
    {
      title: "Launching & Impact Assessment",
      image: "/images/stock-forecast/6, launhing imnpact.jpg",
      imageAlt: "Stock market data visualization dashboard with charts and analytics",
      description: (
        <div className="space-y-4">
          <p>
            After weeks of coding, tweaking, and testing, RTSP came to life—a tool that transforms stock market chaos into clarity. 
            Users can now pick a stock from a dropdown, watch its live price dance on a Plotly chart, dive into its history, 
            and peek at predictions with a single click.
          </p>
          <p>
            The "Show Predictions" button reveals Prophet's forecasts, adjusted by FinBERT's sentiment scores from the latest news—10 articles per stock, 
            processed in the background. It's fast, thanks to caching that cuts API calls, and it's free, leveling the playing field for anyone with a browser.
          </p>
          <p>
            The impact feels personal. I built RTSP to answer the questions I had as a curious investor: What's happening now? 
            What might happen next? How does the world feel about it? Now, users can explore all that in one place—whether 
            they're tracking Tesla's wild swings or Apple's steady climb. The platform's not just a project; it's a proof of 
            concept that data, when wielded right, can empower anyone. This journey taught me to blend speed with depth, 
            technical precision with user focus.
          </p>
        </div>
      ),
      icon: <Rocket size={16} />
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
              title="The RTSP Journey"
              subtitle="Illuminating the Stock Market with Data and Insight"
              imageSrc="/images/stock-forecast/1.avif"
              fallbackImageSrc="/images/stock-forecast/1.avif"
              githubUrl="https://github.com/zeroinfinity03/real-time-stock-prediction"
            />
            
            <ProjectSection title="Project Journey" delay={100}>
              <p className="mb-8 text-lg">
                The Real-Time Stock Prediction (RTSP) project evolved from frustration with fragmented financial tools to 
                a comprehensive platform combining live data, predictions, and sentiment analysis. Follow the development journey:
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

export default StockForecastProject;



