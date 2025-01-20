import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Paper, Button, IconButton, Link, Drawer, List, ListItem, ListItemText } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

// Lazy load CardMedia component
const CardMedia = React.lazy(() => import('@mui/material/CardMedia'));

function LoadingPlaceholder() {
  return <Box sx={{ height: 200, bgcolor: 'rgba(0, 0, 0, 0.5)' }} />;
}

function Home() {
  const [projectStartIndex, setProjectStartIndex] = useState(0);
  const [certStartIndex, setCertStartIndex] = useState(0);
  const [aiesecIndex, setAiesecIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = () => {
      if (isAutoPlaying) {
        setAiesecIndex((prev) => (prev + 1) % aiesecImages.length);
      }
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        autoPlayRef.current();
      } catch (error) {
        console.error('Error in autoplay:', error);
      }
    }, 3000);

    return () => {
      clearInterval(interval); // Clear interval on unmount
    };
  }, [isAutoPlaying]);

  const handlePrevClick = (type) => {
    if (type === 'certificates') {
      setCertStartIndex((prev) => (prev - 3 + certificates.length) % certificates.length);
    } else if (type === 'projects') {
      setProjectStartIndex((prev) => (prev - 3 + projects.length) % projects.length);
    } else if (type === 'aiesec') {
      setAiesecIndex((prev) => (prev - 1 + aiesecImages.length) % aiesecImages.length);
    }
  };

  const handleNextClick = (type) => {
    if (type === 'certificates') {
      setCertStartIndex((prev) => (prev + 3) % certificates.length);
    } else if (type === 'projects') {
      setProjectStartIndex((prev) => (prev + 3) % projects.length);
    } else if (type === 'aiesec') {
      setAiesecIndex((prev) => (prev + 1) % aiesecImages.length);
    }
  };

  const getVisibleItems = (items, startIdx) => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIdx + i) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const setCanvasSize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    setCanvasSize();
    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(canvas);

    class Particle {
      constructor() {
        this.characters = "01";
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.fontSize = 10;
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        this.speed = 0.5;
      }

      draw() {
        ctx.fillStyle = '#00ff9f10';
        ctx.font = this.fontSize + 'px monospace';
        ctx.fillText(this.text, this.x, this.y);
      }

      update() {
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        this.y += this.speed;
      }
    }

    // Reduce number of particles for better performance
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.draw();
        particle.update();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material-UI. Features smooth animations and dynamic content.',
      image: `${process.env.PUBLIC_URL}/logo512.png`,
      icon: <CodeIcon sx={{ color: '#00ff9f', fontSize: '2rem' }} />,
      link: 'https://github.com/daksh88/portfolio-website'
    },
    {
      title: 'Drum Machine',
      description: 'An interactive drum machine web application with customizable sound kits and recording functionality.',
      image: `${process.env.PUBLIC_URL}/logo512.png`,
      icon: <CodeIcon sx={{ color: '#00ff9f', fontSize: '2rem' }} />,
      link: 'https://github.com/daksh88/drum-machine'
    },
    {
      title: 'Random Quote Generator',
      description: 'A web application that displays inspirational quotes randomly. Features social media sharing and dynamic background colors.',
      image: `${process.env.PUBLIC_URL}/logo512.png`,
      icon: <CodeIcon sx={{ color: '#00ff9f', fontSize: '2rem' }} />,
      link: 'https://github.com/daksh88/random-quote-generator'
    },
    {
      title: 'Ecommerce Website',
      description: 'A full-featured ecommerce platform with product catalog, shopping cart, and secure checkout functionality. Built with React and integrated with a backend API.',
      image: `${process.env.PUBLIC_URL}/logo512.png`,
      icon: <StorageIcon sx={{ color: '#00ff9f', fontSize: '2rem' }} />,
      link: 'https://github.com/daksh88/ecommerce-website'
    }
  ];

  const certificates = [
    {
      title: 'Responsive Web Design',
      description: 'Mastery in HTML5, CSS3, and responsive design principles. Creating adaptive layouts and mobile-first websites.',
      image: `${process.env.PUBLIC_URL}/certificate1.png`
    },
    {
      title: 'Frontend Development Libraries',
      description: 'Proficiency in React, Bootstrap, jQuery, and SASS. Building dynamic user interfaces with modern frameworks.',
      image: `${process.env.PUBLIC_URL}/certificate2.png`
    },
    {
      title: 'Javascript Algorithm and Data Structures',
      description: 'Advanced JavaScript concepts, ES6+, algorithms, and data structures for efficient problem-solving.',
      image: `${process.env.PUBLIC_URL}/certificate3.png`
    },
    {
      title: 'Programming in Java',
      description: 'Core Java programming, OOP concepts, collections framework, and multithreading fundamentals.',
      image: `${process.env.PUBLIC_URL}/certificate4.png`
    },
    {
      title: 'Introduction to Networks',
      description: 'Understanding network protocols, TCP/IP, routing, and network security fundamentals.',
      image: `${process.env.PUBLIC_URL}/certificate5.png`
    },
    {
      title: 'Android Development',
      description: 'Building native Android applications using Java, Android SDK, and Material Design principles.',
      image: `${process.env.PUBLIC_URL}/certificate6.png`
    }
  ];

  const [aiesecImages, setAiesecImages] = useState([
   {
      image: `${process.env.PUBLIC_URL}/slide1.jpg`,
      alt: 'AIESEC Experience 1',
      description: 'Global Goal Runs'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide2.jpg`,
      alt: 'AIESEC Experience 2',
      description: 'Trekkers Local Conference'
    },
    {
      image: `${process.env.PUBLIC_URL}/slide3.jpg`,
      alt: 'AIESEC Experience 3',
      description: 'Global Village 2023'
    },
    {
      image: `${process.env.PUBLIC_URL}/slide4.jpg`,
      alt: 'AIESEC Experience 4',
      description: 'Global Goal Runs'
    },
    {
      image: `${process.env.PUBLIC_URL}/slide5.jpg`,
      alt: 'AIESEC Experience 5',
      description: 'Global Village 2024'
    },
    {
      image: `${process.env.PUBLIC_URL}/slide6.jpg`,
      alt: 'AIESEC Experience 6',
      description: 'Trekkers Local Conference'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide7.jpg`,
      alt: 'AIESEC Experience 7',
      description: 'IGV MB 2024'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide8.jpg`,
      alt: 'AIESEC Experience 8',
      description: 'Global Village OC 2023'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide9.jpg`,
      alt: 'AIESEC Experience 9',
      description: 'Global Village 2023'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide10.jpg`,
      alt: 'AIESEC Experience 10',
      description: 'Management Body Meet 2023'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide11.jpg`,
      alt: 'AIESEC Experience 11',
      description: 'GGR 2023 Recognition'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide12.jpg`,
      alt: 'AIESEC Experience 12',
      description: 'Business Development Manager 2023'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide14.jpg`,
      alt: 'AIESEC Experience 14',
      description: 'MB Andaaz 2023'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide15.jpg`,
      alt: 'AIESEC Experience 15',
      description: 'IGV CX Manager 2024'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide16.jpg`,
      alt: 'AIESEC Experience 16',
      description: 'GV 2024 EB x CC'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide17.jpg`,
      alt: 'AIESEC Experience 17',
      description: 'GV 2024 EBC x CC'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide18.jpg`,
      alt: 'AIESEC Experience 18',
      description: 'GV 2024 CCP x Interns'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide19.jpg`,
      alt: 'AIESEC Experience 19',
      description: 'Business Development Manager 2024'
    },    {
      image: `${process.env.PUBLIC_URL}/slide20.jpg`,
      alt: 'AIESEC Experience 20',
      description: 'Balkalaakar 2024'
    }, 
    {
      image: `${process.env.PUBLIC_URL}/slide21.jpg`,
      alt: 'AIESEC Experience 21',
      description: 'Global Village OC 2024'
    }
  ]);
  const [currentAiesecIndex, setCurrentAiesecIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentAiesecIndex((prevIndex) => (prevIndex + 1) % aiesecImages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentAiesecImage = aiesecImages[currentAiesecIndex];

  const visibleCertificates = certificates.slice(certStartIndex, certStartIndex + 3);
  const totalSlides = Math.ceil(certificates.length / 3);

  return (
    <Box>
      {/* Single Navbar */}
      <Box 
        component="nav"
        sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 255, 159, 0.2)',
          zIndex: 1000,
          height: '64px'
        }}
      >
        <Container>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#00ff9f',
                fontFamily: "'Fira Code', monospace",
                fontSize: { xs: '1.1rem', sm: '1.25rem' }
              }}
            >
              {'<DN />'}
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 4
            }}>
              {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#00ff9f',
                    textTransform: 'none',
                    fontFamily: "'Fira Code', monospace",
                    '&:hover': {
                      backgroundColor: 'rgba(0, 255, 159, 0.1)'
                    }
                  }}
                  onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: '#00ff9f'
              }}
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(0, 255, 159, 0.2)'
          }
        }}
      >
        <List sx={{ pt: 2 }}>
          {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <ListItem 
              button 
              key={item}
              onClick={() => {
                document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 255, 159, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  color: '#00ff9f',
                  '.MuiListItemText-primary': {
                    fontFamily: "'Fira Code', monospace"
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ pt: '6px', pb: 0, px: 0 }}>
        {/* Home Section */}
        <Box id="home" sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          position: 'relative',
          overflow: 'hidden',
          pt: 8
        }}>
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: 0.5
            }}
          />
          <Container sx={{ 
            position: 'relative', 
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 0 }
          }}>
            <Box sx={{ 
              flex: 1,
              pr: { md: 4 },
              textAlign: { xs: 'center', md: 'left' }
            }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: '#00ff9f',
                  fontFamily: "'Fira Code', monospace",
                  mb: 2,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }
                }}
              >
                {'// Hello World, I am'}
              </Typography>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  color: '#e6f1ff',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 3,
                  fontWeight: 'bold'
                }}
              >
                {'<Daksh Nautiyal />'}
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontFamily: "'Fira Code', monospace",
                  color: '#8892b0',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                  '& span': { color: '#00ff9f' }
                }}
              >
                const aboutMe = {'{'}
                <br />
                &nbsp;&nbsp;role: <span>"Computer Science Student"</span>,
                <br />
                &nbsp;&nbsp;passion: <span>"Developer"</span>
                <br />
                {'};'}
              </Typography>
            </Box>
            
            <Box sx={{ 
              position: 'relative',
              width: { xs: '280px', sm: '320px', md: '350px' },
              height: { xs: '320px', sm: '360px', md: '400px' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '-20px',
                bottom: '-20px',
                border: '2px solid #00ff9f',
                borderRadius: '10px',
                zIndex: 0,
                transition: 'all 0.3s ease-in-out',
                animation: 'borderPulse 3s infinite'
              },
              '&:hover::before': {
                top: '10px',
                left: '10px',
                right: '-10px',
                bottom: '-10px',
                borderColor: '#8a2be2'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.2), rgba(0, 255, 159, 0.2))',
                borderRadius: '10px',
                zIndex: 2,
                opacity: 0.5,
                transition: 'opacity 0.3s ease-in-out',
                boxShadow: '0 0 20px rgba(0, 255, 159, 0.3)'
              },
              '&:hover::after': {
                opacity: 0.2,
              },
              '@keyframes borderPulse': {
                '0%': {
                  boxShadow: '0 0 10px rgba(0, 255, 159, 0.2)',
                },
                '50%': {
                  boxShadow: '0 0 20px rgba(0, 255, 159, 0.4)',
                },
                '100%': {
                  boxShadow: '0 0 10px rgba(0, 255, 159, 0.2)',
                },
              }
            }}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/IMG_20250119_194625.jpg`}
                alt="Profile"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '10px',
                  filter: 'contrast(1.1) brightness(1.1)',
                  transition: 'all 0.5s ease-in-out',
                  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    transform: 'scale(1.02) translateY(-5px)',
                    boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.7)',
                    filter: 'contrast(1.2) brightness(1.1)',
                  }
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ 
          minHeight: '80vh', 
          py: 2, 
          mt: 2, 
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(rgba(0, 255, 159, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.5,
            pointerEvents: 'none'
          }
        }}>
          <Container sx={{ position: 'relative', zIndex: 2, mt: 2 }}>
            <Typography variant="h3" gutterBottom sx={{ 
              color: '#00ff9f',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              textAlign: 'center'
            }}>
              {'// About Me'}
            </Typography>
            <Paper elevation={3} sx={{ 
              p: 3, 
              backgroundColor: 'rgba(17, 34, 64, 0.8)',
              border: '1px solid rgba(0, 255, 159, 0.2)'
            }}>
              <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                👨‍💻 Passionate Computer Science student at Graphic Era Hill University, dedicated to advancing my skills and knowledge in the field of engineering. Proficient in C, C++, and Java, with additional expertise in HTML, CSS, and JavaScript.
                <br />
                🚀 Beyond technical proficiency, I excel in communication, networking, team management, and leadership. Committed to leveraging these skills to contribute effectively to collaborative projects and drive innovation in the tech industry.
              </Typography>
            </Paper>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ 
            textAlign: 'center', 
            color: '#00ff9f',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}>
            Mini Projects
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2, px: { xs: 2, sm: 3, md: 4 } }}>
            {getVisibleItems(projects, projectStartIndex).map((project, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 255, 159, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 20px rgba(0, 255, 159, 0.3)',
                    '& .MuiCardMedia-root': {
                      filter: 'brightness(1.1)'
                    }
                  }
                }}>
                  <Suspense fallback={<LoadingPlaceholder />}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      loading="lazy"
                      sx={{
                        height: { xs: 200, sm: 250, md: 200 },
                        objectFit: 'contain',
                        padding: '2rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        transition: 'all 0.3s ease-in-out',
                        filter: 'brightness(0.9)',
                      }}
                    />
                  </Suspense>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      {project.icon}
                      <Typography variant="h6" sx={{ 
                        color: '#00ff9f',
                        fontSize: { xs: '1.1rem', sm: '1.25rem' }
                      }}>
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{
                      color: '#8892b0',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      {project.description}
                    </Typography>
                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        mt: 'auto',
                        color: '#00ff9f',
                        borderColor: '#00ff9f',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 159, 0.1)',
                          borderColor: '#00ff9f'
                        }
                      }}
                      variant="outlined"
                      startIcon={<GitHubIcon />}
                    >
                      View Code
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button 
              onClick={() => handlePrevClick('projects')}
              sx={{ 
                color: '#00ff9f',
                '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
              }}
            >
              Previous
            </Button>
            <Button 
              onClick={() => handleNextClick('projects')}
              sx={{ 
                color: '#00ff9f',
                '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
              }}
            >
              Next
            </Button>
          </Box>
        </Box>

        {/* Certificates Section */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h3" gutterBottom sx={{ 
            textAlign: 'center', 
            color: '#00ff9f',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}>
            Certificates
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2, px: { xs: 2, sm: 3, md: 4 } }}>
            {visibleCertificates.map((cert, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 255, 159, 0.2)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 0 20px rgba(0, 255, 159, 0.3)'
                  }
                }}>
                  <Suspense fallback={<LoadingPlaceholder />}>
                    <CardMedia
                      component="img"
                      image={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${process.env.PUBLIC_URL}/logo512.png`;
                      }}
                      sx={{
                        height: { xs: 200, sm: 300, md: 200 },
                        objectFit: 'contain',
                        padding: '1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                      }}
                    />
                  </Suspense>
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ 
                      color: '#00ff9f',
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      {cert.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button 
              onClick={() => handlePrevClick('certificates')}
              sx={{ 
                color: '#00ff9f',
                '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
              }}
            >
              Previous
            </Button>
            <Button 
              onClick={() => handleNextClick('certificates')}
              sx={{ 
                color: '#00ff9f',
                '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
              }}
            >
              Next
            </Button>
          </Box>
        </Box>

        {/* AIESEC Section */}
        <Box sx={{ 
          py: { xs: 4, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'center'
        }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 2, 
              color: '#00ff9f'
            }}
          >
            AIESEC Experience
          </Typography>
          <Box sx={{ width: '100%', height: 'auto', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
            <Box sx={{ width: { xs: '100%', sm: '60%', md: '600px' }, height: { xs: '300px', sm: '400px' }, backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <Suspense fallback={<LoadingPlaceholder />}> 
                  <CardMedia
                    component="img"
                    image={aiesecImages[currentAiesecIndex].image}
                    alt={aiesecImages[currentAiesecIndex].alt}
                    loading="lazy"
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      filter: 'none',
                      transition: 'none'
                    }}
                    onMouseEnter={() => { setIsAutoPlaying(false); }}
                    onMouseLeave={() => { setIsAutoPlaying(true); }}
                  />
                </Suspense>
                <Box sx={{
                  position: 'absolute',
                  bottom: 16,
                  left: 16,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  backdropFilter: 'blur(4px)',
                  color: '#00ff9f',
                  textAlign: 'center'
                }}>
                  <Typography variant="subtitle1">
                    {aiesecImages[currentAiesecIndex].description}
                  </Typography>
                </Box>
              </Box>
            <Box sx={{ width: { xs: '100%', sm: '40%' }, textAlign: 'centre', mt: { xs: 2, sm: 0 }, ml: { sm: 2 }, padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
              <Typography variant="h7" sx={{ color: '#00ff9f', textAlign: 'center' }}>
                I embarked on my AIESEC journey on July 29, 2023, as a Team Member in the Business Development Department.
              </Typography>
              <Typography variant="h7" sx={{ color: '#00ff9f', textAlign: 'center' }}>
                This role became a turning point in my life, helping me develop leadership, communication, and management skills, along with the ability to perform under pressure.
              </Typography>
              <Typography variant="h7" sx={{ color: '#00ff9f', textAlign: 'center' }}>
                In my very first term, I was promoted to Manager of Business Development, and in the following term, I transitioned to IGV Customer Experience Manager, where my team and I were responsible for managing international interns arriving from different countries. Later, I took on the role of Senior Manager for Business Development, where I led and supervised two Team Leads and their respective teams.
              </Typography>
              <Typography variant="h7" sx={{ color: '#00ff9f', textAlign: 'center' }}>
                Through every transition and challenge, AIESEC transformed my personality and the way I connect with people, shaping me into a more dynamic and impactful individual.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box 
          component="footer" 
          sx={{ 
            mt: 6, 
            py: 4, 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderTop: '1px solid rgba(0, 255, 159, 0.2)'
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" gutterBottom sx={{ 
              textAlign: 'center', 
              color: '#00ff9f',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}>
              Contact Me
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: 2 
            }}>
              <Box sx={{ 
                display: 'flex', 
                gap: 3,
                mb: 2,
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <Link 
                  href="https://www.linkedin.com/in/dakshnautiyal/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#00ff9f',
                    '&:hover': { color: '#fff' }
                  }}
                >
                  <IconButton 
                    sx={{ 
                      color: 'inherit',
                      '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
                  </IconButton>
                </Link>
                <Link 
                  href="https://www.instagram.com/dakshnautiyal1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#00ff9f',
                    '&:hover': { color: '#fff' }
                  }}
                >
                  <IconButton 
                    sx={{ 
                      color: 'inherit',
                      '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
                  </IconButton>
                </Link>
                <Link 
                  href="https://github.com/daksh88" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#00ff9f',
                    '&:hover': { color: '#fff' }
                  }}
                >
                  <IconButton 
                    sx={{ 
                      color: 'inherit',
                      '&:hover': { backgroundColor: 'rgba(0, 255, 159, 0.1)' }
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
                  </IconButton>
                </Link>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                gap: 2
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: '#00ff9f',
                  textAlign: 'center'
                }}>
                  <EmailIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    <Link 
                      href="mailto:dakshnautiyal88@gmail.com"
                      sx={{ 
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: '#fff' }
                      }}
                    >
                      dakshnautiyal88@gmail.com
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: '#00ff9f',
                  textAlign: 'center'
                }}>
                  <PhoneIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    <Link 
                      href="tel:+918445603923"
                      sx={{ 
                        color: 'inherit',
                        textDecoration: 'none',
                        '&:hover': { color: '#fff' }
                      }}
                    >
                      +91 8445603923
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#00ff9f', 
                textAlign: 'center',
                mt: 4,
                opacity: 0.7,
                fontSize: { xs: '0.75rem', sm: '0.875rem' }
              }}
            >
              &copy; {new Date().getFullYear()} Daksh Nautiyal. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
