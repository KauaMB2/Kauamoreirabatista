import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { WebProjectCard } from "./WebProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { projects } from "./JSON/projects";
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState(1);
  const [category, setCategory] = useState('web_development');
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      backgroundColor: '#151515',
    },
    title: {
      fontSize: '45px',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '50px',
      color: '#fff',
    },
    navPillsContainer: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '0',
      marginBottom: '50px',
      padding: '0',
      listStyle: 'none',
      width: '100%',
    },
    navPillsContainerTabs: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: '0',
      marginBottom: '50px',
      padding: '0',
      listStyle: 'none',
      width: '60%',
      margin: '0 auto 50px auto',
    },
    navItem: {
      display: 'flex',
      flex: '1 1 0',
      minWidth: 0,
      margin: 0,
      padding: 0,
    },
    backgroundImage: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '40%',
      zIndex: -4,
    },
    tabContent: {
      minHeight: '400px',
    },
    comingSoon: {
      textAlign: 'center',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 600,
      marginTop: '50px',
    },
  };

  const getNavLinkBaseStyle = () => {
    let padding, fontSize, minHeight;
    
    if (windowWidth <= 400) {
      padding = '10px 6px';
      fontSize = '10px';
      minHeight = '50px';
    } else if (windowWidth <= 480) {
      padding = '12px 8px';
      fontSize = '11px';
      minHeight = '55px';
    } else if (windowWidth <= 600) {
      padding = '12px 12px';
      fontSize = '12px';
      minHeight = '58px';
    } else if (windowWidth <= 768) {
      padding = '14px 16px';
      fontSize = '13px';
      minHeight = '60px';
    } else if (windowWidth <= 992) {
      padding = '16px 24px';
      minHeight = '62px';
    } else if (windowWidth <= 1200) {
      padding = '18px 32px';
      fontSize = '15px';
      minHeight = '64px';
    } else {
      padding = '20px 42px';
      fontSize = '17px';
      minHeight = '66px';
    }
    
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding,
      fontSize,
      fontWeight: 500,
      letterSpacing: '0.8px',
      lineHeight: '1.3',
      color: '#fff',
      backgroundColor: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      minHeight,
      width: '100%',
      textAlign: 'center',
      textDecoration: 'none',
      boxSizing: 'border-box',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      hyphens: 'auto',
    };
  };

  const getCategoryStyle = (categoryKey, index, total) => {
    const baseStyle = getNavLinkBaseStyle();
    const isActive = category === categoryKey;
    const isHovered = hoveredCategory === categoryKey;
    
    let borderStyle = {
      borderRadius: '0',
    };
    
    if (index === 0) {
      borderStyle = {
        borderRadius: '55px 0 0 55px',
      };
    } else if (index === total - 1) {
      borderStyle = {
        borderRadius: '0 55px 55px 0',
      };
    }
    
    // Remove bordas adjacentes EXCETO quando ativo
    if (!isActive) {
      if (index > 0) {
        borderStyle.borderLeft = 'none';
      }
    }
    
    let stateStyle = {};
    if (isActive) {
      stateStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 1)',
        zIndex: 1,
      };
    } else if (isHovered) {
      stateStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      };
    }
    
    return {
      ...baseStyle,
      ...borderStyle,
      ...stateStyle,
    };
  };

  const getTabStyle = (tabValue, index, total) => {
    const baseStyle = getNavLinkBaseStyle();
    const isActive = tab == tabValue;
    const isHovered = hoveredTab === tabValue;
    
    let borderStyle = {
      borderRadius: '0',
    };
    
    if (index === 0) {
      borderStyle = {
        borderRadius: '55px 0 0 55px',
      };
    } else if (index === total - 1) {
      borderStyle = {
        borderRadius: '0 55px 55px 0',
      };
    }
    
    // Remove bordas adjacentes EXCETO quando ativo
    if (!isActive) {
      if (index > 0) {
        borderStyle.borderLeft = 'none';
      }
    }
    
    let stateStyle = {};
    if (isActive) {
      stateStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 1)',
        zIndex: 1,
      };
    } else if (isHovered) {
      stateStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      };
    }
    
    return {
      ...baseStyle,
      ...borderStyle,
      ...stateStyle,
    };
  };

  const categoriesList = [
    { key: 'web_development', label: t('projects.categories.web_development') },
    { key: 'computer_vision', label: t('projects.categories.computer_vision') },
    { key: 'mobile', label: t('projects.categories.mobile') },
    { key: 'eletronic', label: t('projects.categories.eletronic') },
    { key: 'GUI', label: t('projects.categories.GUI') },
  ];

  return (
    <section style={styles.section} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <h2 style={styles.title}>{t('projects.title')}</h2>
                
                <Tab.Container 
                  id="categories-tabs" 
                  defaultActiveKey={category} 
                  onSelect={(eventKey) => setCategory(eventKey)}
                >
                  <Nav style={styles.navPillsContainer} variant="pills">
                    {categoriesList.map((cat, index) => (
                      <Nav.Item key={cat.key} style={styles.navItem}>
                        <Nav.Link 
                          eventKey={cat.key}
                          style={getCategoryStyle(cat.key, index, categoriesList.length)}
                          onMouseEnter={() => setHoveredCategory(cat.key)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          {cat.label}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>

                  <Tab.Content>
                    {projects.categories.map((cat) => (
                      <Tab.Pane eventKey={cat} key={cat}>
                        <Tab.Container 
                          id="projects-tabs" 
                          defaultActiveKey={tab} 
                          onSelect={(eventKey) => setTab(eventKey)}
                        >
                          <Nav style={styles.navPillsContainerTabs} variant="pills">
                            {projects.divisions.map((division, index) => (
                              <Nav.Item key={division} style={styles.navItem}>
                                <Nav.Link 
                                  eventKey={division}
                                  style={getTabStyle(division, index, projects.divisions.length)}
                                  onMouseEnter={() => setHoveredTab(division)}
                                  onMouseLeave={() => setHoveredTab(null)}
                                >
                                  {t('projects.tab')} {division}
                                </Nav.Link>
                              </Nav.Item>
                            ))}
                          </Nav>

                          <Tab.Content 
                            id="slideInUp" 
                            className="animate__animated animate__slideInUp"
                            style={styles.tabContent}
                          >
                            {projects.divisions.map((division) => (
                              <Tab.Pane eventKey={division} key={division}>
                                <Row>
                                  {projects[cat][division].length > 0 ? (
                                    projects[cat][division].map((project, index) => (
                                      <WebProjectCard
                                        key={index}
                                        projectKey={project.key}
                                        category={cat}
                                        project={project} 
                                        {...project}
                                      />
                                    ))
                                  ) : (
                                    <h2 style={styles.comingSoon}>{t('projects.commingSoon')}</h2>
                                  )}
                                </Row>
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Tab.Container>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img style={styles.backgroundImage} alt="img" src={colorSharp2} />
    </section>
  );
};