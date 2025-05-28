import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

// Styled Components
const ProjectsContainer = styled.div`
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
  margin-bottom: 80px;
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
  color: #880e4f;
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
    background: #ca6f1e;
  }
`;

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ProjectsContainer>
        <Section>
          <Title>Our Projects</Title>
          <Paragraph>
            At Orphan Life Foundation, we create sustainable impact through a
            variety of targeted programs around the world. Explore some of our
            featured projects below.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>1. Education for Every Child</Subtitle>
          <Image src="/assets/images/orpha12.jpg" alt="Children in classroom" />
          <Paragraph>
            In partnership with local schools in Burkina Faso, we’ve distributed
            over 5,000 school supply kits and funded the construction of
            classrooms, ensuring that orphaned children have access to quality
            education.
          </Paragraph>
          <CTAButton to="/donate">Support This Project</CTAButton>
        </Section>

        <Section>
          <Subtitle>2. Safe Homes for Orphans</Subtitle>
          <Image src="/assets/images/orpha13.jpeg" alt="Orphanage building" />
          <Paragraph>
            This project focuses on building and renovating orphanages with safe
            shelter, clean water, and basic amenities. We’ve built three new
            homes that now house 120 children across India and Africa.
          </Paragraph>
          <CTAButton to="/donate">Support This Project</CTAButton>
        </Section>

        <Section>
          <Subtitle>3. Health & Nutrition Program</Subtitle>
          <Image
            src="/assets/images/orpha14.jpeg"
            alt="Child receiving medical care"
          />
          <Paragraph>
            Through mobile clinics and monthly health camps, we’re reaching
            underserved orphan communities with essential healthcare services,
            vaccinations, and nutritional support.
          </Paragraph>
          <CTAButton to="/donate">Support This Project</CTAButton>
        </Section>

        <Section>
          <Subtitle>4. Clean Water for Children (CWC)</Subtitle>
          <Image
            src="/assets/images/orpha15.jpg"
            alt="Child receiving medical care"
          />
          <Paragraph>
            In May 2016, one of Orphan Life Foundation’s members visited a
            school in the village of Didyr, Burkina Faso which we had been
            helping by contributing to the improvement of the orphan education
            environment present there. During the tour of the school, a child
            called him a “SAINT”. He asked as to why the little girl said that.
            She stated that she had been using the same pencil that had been
            given to her 2 years ago as part of Orphan Life Foundation’s
            efforts.
          </Paragraph>
          <CTAButton to="/donate">Support This Project</CTAButton>
        </Section>
      </ProjectsContainer>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Projects;
