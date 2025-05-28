import styled from "styled-components";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { useEffect } from "react";

// Styled Components
const Wrapper = styled.div`
  background: #fefefe;
  color: #333;
  margin-top: 70px;
`;

const Hero = styled.div`
  background: linear-gradient(120deg, #b71c1c, #d32f2f);
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

const Section = styled.section`
  padding: 60px 6%;
  background: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #c62828;
`;

const GalleryGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

const MediaItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MediaImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CTASection = styled.div`
  background: #fce4ec;
  padding: 60px 6%;
  text-align: center;
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #880e4f;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 30px;
  color: #444;
`;

const CTAButton = styled.a`
  background: #d32f2f;
  color: #fff;
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;

  &:hover {
    background: #b71c1c;
  }
`;

const Media = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <Hero>
          <HeroTitle>Media Gallery</HeroTitle>
          <HeroSubtitle>
            Discover the impactful stories, moments, and milestones from our
            work with orphans and vulnerable children.
          </HeroSubtitle>
        </Hero>

        <Section>
          <SectionTitle>Photos</SectionTitle>
          <GalleryGrid>
            <MediaItem>
              <MediaImage src="/assets/images/orph1.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph2.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph3.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph4.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph5.jpg" alt="orpha" />
            </MediaItem>

            <MediaItem>
              <MediaImage src="/assets/images/orph10.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph11.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha12.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha13.jpeg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha14.jpeg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha15.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha16.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orph17.jpg" alt="orpha" />
            </MediaItem>
            <MediaItem>
              <MediaImage src="/assets/images/orpha18.jpg" alt="opha" />
            </MediaItem>
          </GalleryGrid>
        </Section>

        <CTASection>
          <CTATitle>Share the Hope</CTATitle>
          <CTAText>
            Want to help us spread the word? Share our stories, download media,
            or contact us for partnership opportunities.
          </CTAText>
          <CTAButton href="/contact">Contact Us</CTAButton>
        </CTASection>
      </Wrapper>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Media;
