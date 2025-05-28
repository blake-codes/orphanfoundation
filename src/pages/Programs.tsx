import styled from "styled-components";
import { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

// Styled Components
const Wrapper = styled.div`
  background: #fff5f5;
  color: #2f2f2f;
  margin-top: 70px;
`;

const Hero = styled.div`
  background: linear-gradient(120deg, #b71c1c, #e53935);
  color: #fff;
  padding: 80px 6% 60px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const ProgramGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 60px 6%;
  background: #fff;
`;

const ProgramCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProgramImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ProgramContent = styled.div`
  padding: 20px;
`;

const ProgramTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #d32f2f;
`;

const ProgramDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const SectionDivider = styled.div`
  height: 60px;

  background: #ffeaea;
`;

const DetailSection = styled.section`
  padding: 60px 6%;
  background: #fdfdfd;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #b71c1c;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero>
          <HeroTitle>Our Programmes</HeroTitle>
          <HeroSubtitle>
            Empowering orphans and vulnerable children through targeted,
            sustainable, and deeply impactful programmes around the world.
          </HeroSubtitle>
        </Hero>

        <ProgramGrid>
          <ProgramCard>
            <ProgramImage
              src="/assets/images/orpha12.jpg"
              alt="Education Access"
            />
            <ProgramContent>
              <ProgramTitle>Education Access</ProgramTitle>
              <ProgramDescription>
                We provide school supplies, scholarships, uniforms, and
                after-school tutoring to help children stay in school and thrive
                academically.
              </ProgramDescription>
            </ProgramContent>
          </ProgramCard>

          <ProgramCard>
            <ProgramImage
              src="/assets/images/orpha16.jpg"
              alt="Healthcare Aid"
            />
            <ProgramContent>
              <ProgramTitle>Healthcare Aid</ProgramTitle>
              <ProgramDescription>
                Regular medical camps, mobile clinics, and mental health support
                help orphaned children receive essential healthcare.
              </ProgramDescription>
            </ProgramContent>
          </ProgramCard>

          <ProgramCard>
            <ProgramImage src="/assets/images/orph17.jpg" alt="Food Relief" />
            <ProgramContent>
              <ProgramTitle>Food Relief</ProgramTitle>
              <ProgramDescription>
                Our food programs offer daily meals, nutrition packs, and
                emergency rations for children suffering from hunger or
                malnutrition.
              </ProgramDescription>
            </ProgramContent>
          </ProgramCard>

          <ProgramCard>
            <ProgramImage src="/assets/images/orpha18.jpg" alt="Safe Shelter" />
            <ProgramContent>
              <ProgramTitle>Safe Shelter</ProgramTitle>
              <ProgramDescription>
                We build and maintain safe homes for orphans in crisis, offering
                stable housing, loving caretakers, and protection from abuse.
              </ProgramDescription>
            </ProgramContent>
          </ProgramCard>
        </ProgramGrid>

        <SectionDivider />

        <DetailSection>
          <SectionTitle>Why Our Programmes Matter</SectionTitle>
          <Paragraph>
            Children without parental support often lack access to life's basic
            needs: education, healthcare, nutrition, and security. Our
            programmes are designed not only to meet these needs but to uplift
            communities and restore dignity to every child we serve.
          </Paragraph>
          <Paragraph>
            Our team works with local governments, schools, health
            professionals, and communities to deliver effective, culturally
            respectful solutions. We continuously measure impact and adapt our
            strategies to ensure long-term results.
          </Paragraph>
        </DetailSection>

        <SectionDivider />

        <DetailSection>
          <SectionTitle>How You Can Help</SectionTitle>
          <Paragraph>
            You can become part of the solution. Sponsor a child’s education,
            donate medical supplies, fund a meal program, or help build a safe
            home. Every act of support creates a ripple of hope.
          </Paragraph>
          <Paragraph>
            Let’s work together to create a future where every child has the
            opportunity to learn, grow, and dream. Join our mission today.
          </Paragraph>
        </DetailSection>
      </Wrapper>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Programs;
