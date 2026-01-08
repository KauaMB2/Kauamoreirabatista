import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo2.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Sincroniza o idioma atual
  useEffect(() => {
    const handleLangChange = (lng) => setCurrentLang(lng);
    i18n.on('languageChanged', handleLangChange);
    return () => {
      i18n.off('languageChanged', handleLangChange);
    };
  }, [i18n]);

  // Efeito de scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Função para obter o texto do idioma atual
  const getCurrentLanguageText = () => {
    switch(currentLang) {
      case 'pt': return 'PT';
      case 'en': return 'EN';
      case 'it': return 'IT';
      default: return 'PT';
    }
  };

  // Função para obter o nome completo do idioma
  const getFullLanguageName = () => {
    switch(currentLang) {
      case 'pt': return 'Português';
      case 'en': return 'English';
      case 'it': return 'Italiano';
      default: return 'Português';
    }
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logoDiv" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              {t('ui.navbar.home')}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              {t('ui.navbar.skills')}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              {t('ui.navbar.projects')}
            </Nav.Link>
            <Nav.Link
              href="#feedbacks"
              className={activeLink === 'feedbacks' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('feedbacks')}
            >
              {t('ui.navbar.feedbacks')}
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}>
              <Dropdown>
                <Dropdown.Toggle 
                  variant="light" 
                  id="dropdown-language"
                  style={{
                    padding: '5px 12px',
                    fontSize: '14px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: '#f8f9fa',
                    minWidth: '80px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#333',
                    fontWeight: 'bold'
                  }}
                >
                  <span>{getCurrentLanguageText()}</span>
                  <span style={{ marginLeft: '8px', fontSize: '10px' }}>▼</span>
                </Dropdown.Toggle>

                <Dropdown.Menu 
                  style={{
                    minWidth: '80px',
                    padding: '4px 0',
                    border: '1px solid #ddd',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  <Dropdown.Item 
                    onClick={() => switchLanguage('pt')}
                    style={{
                      backgroundColor: currentLang === 'pt' ? '#007bff' : 'transparent',
                      color: currentLang === 'pt' ? 'white' : '#333',
                      fontWeight: currentLang === 'pt' ? 'bold' : 'normal',
                      padding: '6px 12px',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: currentLang === 'pt' ? '#007bff' : '#f8f9fa',
                        color: currentLang === 'pt' ? 'white' : '#333'
                      }
                    }}
                  >
                    PT
                  </Dropdown.Item>
                  <Dropdown.Item 
                    onClick={() => switchLanguage('en')}
                    style={{
                      backgroundColor: currentLang === 'en' ? '#007bff' : 'transparent',
                      color: currentLang === 'en' ? 'white' : '#333',
                      fontWeight: currentLang === 'en' ? 'bold' : 'normal',
                      padding: '6px 12px',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: currentLang === 'en' ? '#007bff' : '#f8f9fa',
                        color: currentLang === 'en' ? 'white' : '#333'
                      }
                    }}
                  >
                    EN
                  </Dropdown.Item>
                  <Dropdown.Item 
                    onClick={() => switchLanguage('it')}
                    style={{
                      backgroundColor: currentLang === 'it' ? '#007bff' : 'transparent',
                      color: currentLang === 'it' ? 'white' : '#333',
                      fontWeight: currentLang === 'it' ? 'bold' : 'normal',
                      padding: '6px 12px',
                      textAlign: 'center',
                      '&:hover': {
                        backgroundColor: currentLang === 'it' ? '#007bff' : '#f8f9fa',
                        color: currentLang === 'it' ? 'white' : '#333'
                      }
                    }}
                  >
                    IT
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="social-icon">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kauamb2/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://wa.me/5535984714567">
                <img src={navIcon2} alt="WhatsApp" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kaua.moreira.batista/">
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/KauaMB2/">
                <img src={navIcon4} alt="GitHub" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};