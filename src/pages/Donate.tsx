import styled from "styled-components";
import { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import { FaHeadset } from "react-icons/fa";

const PageContainer = styled.div`
  margin-top: 70px;
  background-color: #fdfdfd;
  padding: 40px 6%;
  color: #2a2a2a;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  color: #b71c1c;
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-bottom: 60px;
`;

const PaymentCard = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
`;

const PaymentIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  color: #d32f2f;
`;

const PaymentMethod = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #c62828;
`;

const PaymentNote = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

const MessageBox = styled.div`
  background-color: #fff3f3;
  border: 1px dashed #d32f2f;
  padding: 30px;
  border-radius: 10px;
  max-width: 700px;
  margin: 0 auto 60px;
  text-align: center;
`;

const CTA = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #b71c1c;
`;

const CTAParagraph = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 20px;
`;

const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <PageContainer>
        <Heading>Donate to Support Our Cause</Heading>
        <SubHeading>
          We accept a variety of payment methods. Please contact our support
          team to receive the appropriate details before proceeding.
        </SubHeading>

        <Grid>
          <PaymentCard>
            <PaymentIcon>💳</PaymentIcon>
            <PaymentMethod>CashApp</PaymentMethod>
            <PaymentNote>Fast and easy mobile payments.</PaymentNote>
          </PaymentCard>

          <PaymentCard>
            <PaymentIcon>🎁</PaymentIcon>
            <PaymentMethod>Gift Cards</PaymentMethod>
            <PaymentNote>
              Amazon, Apple, or Visa gift cards are accepted.
            </PaymentNote>
          </PaymentCard>

              <PaymentCard>
            <PaymentIcon>₿</PaymentIcon>
            <PaymentMethod>Bitcoin</PaymentMethod>
            <PaymentNote>Send crypto donations securely via Bitcoin.</PaymentNote>
          </PaymentCard>


          <PaymentCard>
            <PaymentIcon>🌍</PaymentIcon>
            <PaymentMethod>PayPal</PaymentMethod>
            <PaymentNote>International donations made simple.</PaymentNote>
          </PaymentCard>
        </Grid>
        <MessageBox>
          <CTA>Need Payment Info?</CTA>
          <CTAParagraph>
            Please click the{" "}
            <FaHeadset
              style={{
                color: "#b71c1c",
                fontSize: "1.3rem",
                verticalAlign: "middle",
              }}
            />{" "}
            customer support icon at the bottom right to contact us to get
            payment details and make donations.
          </CTAParagraph>
        </MessageBox>
      </PageContainer>

      <ChatBot />
      <Footer />
    </>
  );
};

export default Donate;
