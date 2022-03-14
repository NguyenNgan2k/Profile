
import './App.css';
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from './pages/About'
import SkillsPage from './pages/Skills'
import EducationPage from './pages/Education'
import ExperiencePage from './pages/Experience'
import PortfolioPage from './pages/Portfolio'
import ContactPage from './pages/Contact'
function App() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/" >PROFILE</Navbar.Brand>
          <Nav className="justify-content-end" id="nav">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/edu">Education</Nav.Link>
            <Nav.Link href="/exp">Experience</Nav.Link>
            <Nav.Link href="/port">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/edu" element={<EducationPage />} />
        <Route path="/exp" element={<ExperiencePage />} />
        <Route path="/port" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
