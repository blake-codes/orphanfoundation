import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaStar,
  FaUser,
  FaChevronDown,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../AuthContext";
import axios from "axios";

interface NavProps {
  $isOpen: boolean;
  $isDropdownOpen: boolean;
}

const NavBar = styled.nav<NavProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 70px;
  background: #ffffff;
  color: #333333;
  height: 90px;
  box-shadow: 0 2px 5px rgba(0, 0, 0.1, 0.1);
  position: fixed;
  width: 100%; /* Adjusted to leave space on both sides */
  box-sizing: border-box;
  z-index: 100;

  @media (max-width: 1100px) {
    margin: 0 0;
    width: 100%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 15px 20px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    color: #e53935;
    margin-left: 10px;

    @media (max-width: 1100px) {
      display: block;
    }
  }

  ul {
    display: flex;
    gap: 35px;
    list-style: none;

    @media (max-width: 1100px) {
      display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #ffffff;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }
  }

  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #e53935;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333333;
      font-size: medium;
      font-weight: 300;
      gap: 8px;

      &:hover {
        color: #e53935;
      }
    }
  }

  .dropdown {
    position: absolute;
    background: #ffffff;
    top: 60px;
    right: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? "block" : "none")};
    z-index: 1001;
  }

  .dropdown li {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 600px) {
    max-width: 70%;
  }
`;


const Logo = styled.div`
  img {
    height: 40px;
    width: 60px;
    object-fit: contain;
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: #e53935;
  font-size: 1.2rem;
  letter-spacing: 1px;
  white-space: nowrap; /* prevents multi-line stretching */
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    font-size: 1rem;
    font-weight: 500;
    color: #333333;
  }

  @media (max-width: 600px) {
    font-size: 1rem;

    span {
      font-size: 0.85rem;
    }
  }
`;


const SignUpContainer = styled.div`
  background-color: #e53935;
  color: #ffffff;
  display: flex;
  padding: 10px 20px;
  border: 1px solid #e53935;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    background-color: #ffffff;
    color: #e53935;
  }

  @media (max-width: 1100px) {
    font-size: 0.7rem;
    margin-right: 0;
    right: 0;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;
const ButtonText = styled.div`
  margin-left: 7px;
`;
const AdminDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: small;
  color: #333333;
  font-weight: 300;
  gap: 8px;

  &:hover {
    color: #e53935;
  }
`;
const LinkWithoutUnderline = styled(Link)`
  text-decoration: none; /* Removes the underline from the link */
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, username, logout } = useAuth();

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get(
          "https://orphan-server.onrender.com/api/auth/healthcheck"
        );
        console.log("Healthcheck successful:", response.data);
      } catch (error) {
        console.error("Healthcheck failed:", error);
      }
    };

    checkHealth();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <NavBar $isOpen={isOpen} $isDropdownOpen={isDropdownOpen}>
        <LogoContainer to="/">
          <Logo>
            <img src="/assets/images/orphan_logo.jpg" alt="Logo" />
          </Logo>
        <LogoText>
  Stars of hope
  <span>Charity Foundation</span>
</LogoText>

        </LogoContainer>

        <ul>
          {isOpen && isAuthenticated && username !== "admin" && (
            <li>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
          )}
       
       
          {isOpen && isAuthenticated && username === "admin" && (
            <li>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Messages
              </Link>
            </li>
          )}
          {isOpen && (
            <li>
              <Link to="/about-us" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          )}

          {isOpen && (
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
          )}

          {isOpen && (
            <li>
              <Link to="/programs" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
            </li>
          )}

          {isOpen && !isAuthenticated && (
            <li>
              <Link to="/media" onClick={() => setIsOpen(false)}>
                Media
              </Link>
            </li>
          )}

        

          {isOpen && (
            <li>
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <FaStar /> Donate Now
              </Link>
            </li>
          )}
     
          {!isOpen && (
            <li>
              <Link to="/about-us" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          )}
          {!isOpen && (
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
          )}
          {!isOpen && (
            <li>
              <Link to="/programs" onClick={() => setIsOpen(false)}>
                Programs
              </Link>
            </li>
          )}

          {!isOpen && !isAuthenticated && (
            <li>
              <Link to="/media" onClick={() => setIsOpen(false)}>
                Media
              </Link>
            </li>
          )}
       

          {/* Styled admin dropdown */}

       

          {isOpen && isAuthenticated && (
            <li style={{ marginBottom: "40px" }}>
              <Link to="/" onClick={logout}>
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          )}
        </ul>
        <IconsContainer>
          {!isAuthenticated && (
            <LinkWithoutUnderline
              to="/donate"
              onClick={() => setIsDropdownOpen(false)}
            >
              {" "}
              <SignUpContainer>
                <ButtonText>DONATE NOW</ButtonText>
              </SignUpContainer>
            </LinkWithoutUnderline>
          )}

          {!isOpen && isAuthenticated && (
            <li onClick={toggleDropdown}>
              <AdminDropdown>
                <FaUser /> {username} <FaChevronDown />
              </AdminDropdown>
              <ul className="dropdown">
                {username !== "admin" && (
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}

                {username === "admin" && (
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Messages
                    </Link>
                  </li>
                )}

                <li>
                  <Link to="/" onClick={logout}>
                    <FaSignOutAlt /> Logout
                  </Link>
                </li>
              </ul>
            </li>
          )}

          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </IconsContainer>
      </NavBar>
    </>
  );
};

export default Navbar;
