import styled from "styled-components";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";
import ChatBot from "../components/ChatBot";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: url("../assets/images/hero.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 2rem;
  position: relative;
  isolation: isolate;
  margin-top: 90px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin-bottom: 2rem;
  }

  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #ff4b4b;
    }
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 1rem;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Section = styled.section`
  padding: 4rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
`;
const ImpactSection = styled.section`
  background: linear-gradient(to right, #fdfbfb, #ebedee);
  padding: 5rem 2rem;
  text-align: center;
  color: #333;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #222;
  }

  p {
    font-size: 1.1rem;
    max-width: 800px;
    margin: 1rem auto;
    line-height: 1.7;
  }

  button {
    margin-top: 2rem;
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background-color: #ff4b4b;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 4px solid #ff6b6b;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  blockquote {
    font-style: italic;
    opacity: 0.85;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    color: #444;
  }
`;

const Testimonials = () => (
  <Section style={{ background: "#fdfdfd" }}>
    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
      Stories from Our Supporters
    </h2>
    <GridContainer>
      <TestimonialCard>
        <img src="../assets/images/orph7.jpg" alt="Supporter 1" />
        <blockquote>
          "Supporting this orphanage has brought me so much joy. These kids are
          full of life and dreams."
        </blockquote>
        <h3>Avery Monroe </h3>
      </TestimonialCard>
      <TestimonialCard>
        <img src="../assets/images/orph8.jpg" alt="Supporter 2" />
        <blockquote>
          "Every donation truly makes a difference. I’ve seen lives change
          here."
        </blockquote>
        <h3>Logan Pierc</h3>
      </TestimonialCard>
      <TestimonialCard>
        <img src="../assets/images/orph9.jpg" alt="Supporter 3" />
        <blockquote>
          "This place is full of hope and love. Proud to be part of it."
        </blockquote>
        <h3>Savannah Blake</h3>
      </TestimonialCard>
    </GridContainer>
    <ChatBot />
  </Section>
);

const Home = () => {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get(
          "https://dhl-server.onrender.com/api/auth/healthcheck"
        );
        console.log("Healthcheck successful:", response.data);
      } catch (error) {
        console.error("Healthcheck failed:", error);
      }
    };

    checkHealth();
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection>
        <h1>Bringing Hope to Every Child</h1>
        <p>
          Help us provide shelter, education, and love to orphans in need. Your
          kindness can change a life today.
        </p>
        <button onClick={() => (window.location.href = "/donate")}>
          Donate Now
        </button>
      </HeroSection>
      <ImpactSection>
        <h2>Every Day, 734 Children Become Orphans</h2>
        <p>
         Stars of hope Charity Foundation is a global non-profit committed to the
          well-being of orphans and abandoned children. We provide access to
          health and educational opportunities, safe housing, and adoption
          services.
        </p>
        <p>
          Through our charity programs, we've built orphanages, adoption
          centers, and schools in underserved areas of the Philippines, India,
          Colombia, and Africa—equipped with proper learning tools and support
          systems.
        </p>
        <p>
          Your donations directly improve the lives of orphans, giving them the
          chance to grow and thrive.
        </p>

        <button onClick={() => (window.location.href = "/")}>Learn More</button>
      </ImpactSection>

      <Section style={{ background: "#fff8f0" }}>
        <h2>Why Support Us</h2>
        <GridContainer>
          <ServiceCard>
            <h3>Safe Shelter</h3>
            <p>We provide a warm, loving home for children without families.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Quality Education</h3>
            <p>
              Every child deserves a chance to learn and grow into their
              potential.
            </p>
          </ServiceCard>
          <ServiceCard>
            <h3>Emotional Care</h3>
            <p>
              We nurture emotional wellbeing through mentorship, play, and
              counseling.
            </p>
          </ServiceCard>
        </GridContainer>
      </Section>

      <Section>
        <h2>Our Programs</h2>
        <GridContainer>
          <ServiceCard>
            <img src="../assets/images/orph3.jpg" alt="Education Program" />
            <h3>Education for All</h3>
            <p>
              School sponsorships, supplies, and tutoring for all children in
              our care.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src="../assets/images/orph1.jpg" alt="Nutrition Program" />
            <h3>Healthy Meals</h3>
            <p>
              Daily nutritious meals to support healthy growth and development.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src="../assets/images/orph2.jpg" alt="Community Engagement" />
            <h3>Community Building</h3>
            <p>
              We engage with local communities to ensure long-term care and
              support.
            </p>
          </ServiceCard>
        </GridContainer>
      </Section>

      <Testimonials />

      <Section style={{ background: "#fff8f0" }}>
        <h2>How You Can Help</h2>
        <GridContainer>
          <ServiceCard>
            <img src="../assets/images/orph5.jpg" alt="Volunteer" />
            <h3>Volunteer</h3>
            <p>
              Join our mission by volunteering your time, talent, or skills.
            </p>
          </ServiceCard>
          <ServiceCard>
            <img src="../assets/images/orph6.jpg" alt="Donate" />
            <h3>Donate</h3>
            <p>Every contribution counts—help us change lives today.</p>
          </ServiceCard>
        </GridContainer>
      </Section>

      <Footer />
    </>
  );
};

export default Home;
