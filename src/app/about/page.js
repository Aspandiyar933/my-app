import Navbar from '@/app/components/layouts/Navbar';
import Footer from '@/app/components/layouts/Footer';

const About = () => {
  return (
    <div>
      <main style={mainStyle}>
        <h1>About Us</h1>
        <p>
          Welcome to our blog! We are dedicated to providing you with the latest news, insights, and trends.
        </p>
        <p>
          Our team is passionate about delivering high-quality content that informs, inspires, and entertains.
        </p>
        <p>
          Powered by ChatGPT and Next.js, we strive to create an engaging and dynamic online experience for our readers.
        </p>
      </main>
      <Footer />
    </div>
  );
};

const mainStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  fontFamily: 'Arial, sans-serif',
};

export default About;
