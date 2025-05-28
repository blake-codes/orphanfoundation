import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

// Styled Components
const AboutContainer = styled.div`
  background: #fffaf4;
  color: #3a3a3a;
  padding: 60px 6% 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Section = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 60px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ff6b6b;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #b85c38;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #555;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: #7d3c1f;
  margin: 20px auto;
  border-left: 4px solid #ff6b6b;
  padding-left: 16px;
  max-width: 800px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  margin: 30px 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CTAButton = styled(Link)`
  background: #ff6b6b;
  color: #fff;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 25px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  display: inline-block;

  &:hover {
    background: #e53935;
  }
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <AboutContainer>
        <Section>
          <Title>Our Story</Title>
          <Paragraph>
            In May 2016, a member of the Stars of hope Charity Foundation visited a school
            in the village of Didyr, Burkina Faso — a school we had been
            supporting to improve education for orphaned children. During the
            visit, a young girl called him a <strong>"SAINT."</strong> Curious,
            he asked why. She explained she had been using the same pencil he
            had provided <strong>two years prior</strong> — a small gift that
            made a big difference in her life.
          </Paragraph>
          <Paragraph>
            Her words continue to inspire us. As <em>Meryl Streep</em> once
            said, “The great gift of human beings is that we have the power of
            empathy.” We invite you to use your power of empathy — along with
            your gratitude — to uplift the lives of orphans and vulnerable
            children around the world.
          </Paragraph>
          <Image
            src="/assets/images/orph10.jpg"
            alt="Volunteer with children"
          />
        </Section>

        <Section>
          <Subtitle>Your Gratitude</Subtitle>
          <Quote>
            "Inspired by the words of the little girl — and many like her — we
            bestow the same honor upon each and every generous donor, calling
            them a <strong>“SAINT.”</strong>"
          </Quote>
          <Paragraph>
            Many of our foundation members are military veterans who have served
            around the world, witnessing both the beauty and tragedy of life.
            Some have seen their comrades’ children left orphaned after making
            the ultimate sacrifice. This inspired them to take action: to create
            a foundation that helps orphans and vulnerable children reclaim
            their futures.
          </Paragraph>
          <Paragraph>
            At Stars of hope Charity Foundation, we believe gratitude should be{" "}
            <em>expressed through action</em>. As William Arthur Ward put it:
            “Feeling gratitude and not expressing it is like wrapping a gift and
            not giving it.”
          </Paragraph>
          <Image
            src="/assets/images/orph11.jpg"
            alt="Veterans supporting orphan causes"
          />
        </Section>

        <Section>
          <Subtitle>Our Mission</Subtitle>
          <Paragraph>
            Stars of hope Charity Foundation is a USA-based non-profit organization
            operating in the USA, India, and Burkina Faso (Africa). Our mission
            is to be an advocate for orphaned children and provide:
          </Paragraph>
          <ul
            style={{
              textAlign: "left",
              margin: "0 auto",
              maxWidth: "700px",
              paddingLeft: "20px",
            }}
          >
            <li>✔ Holistic care and emotional support</li>
            <li>✔ Access to quality education and school supplies</li>
            <li>✔ Health and wellness initiatives</li>
            <li>✔ Foster care and safe shelter</li>
            <li>✔ Adoption assistance and family placement services</li>
          </ul>
          <Paragraph>
            We are driven by compassion, integrity, and the belief that every
            child deserves a loving environment in which to thrive.
          </Paragraph>
          <CTAButton to="/donate">Donate Now</CTAButton>
        </Section>
      </AboutContainer>
      <ChatBot />
      <Footer />
    </>
  );
};

export default About;
