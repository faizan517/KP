import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    // backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color:'white'
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: "16px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    height: "200px",
    backgroundColor: "white",
  },
  toggleButton: {
    border: "none",
    background: "transparent",
    outline: "none",
    boxShadow: "none",
  },

};

const Header = (props) => {
  // const { sty } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section>
      <nav
        className={`navbar navbar-expand-lg `}
        style={{
          ...styles.navbar,
          height: isExpanded ? "auto" : "100px",
          justifyContent: "center",
          alignItems: isExpanded ? "flex-start" : "center",
        }}
      >
        <Container >
          <Navbar.Brand href="/">
              <img src={require('../assets/logo/images (2) 1.png')}/>
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isExpanded}
            onClick={handleToggle}
            aria-label="Toggle navigation"
            style={styles.toggleButton}
          >
            <span className="navbar-toggler-icon" style={{marginBottom:10}}></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
            id="navbarNav"
          >
            <Nav className="navbar-nav ms-md-auto gap-5" style={{marginTop:20}}>
              <Nav.Link
                // href={sty ? "/" : "#work"}
                // className="nav-item heading heading1"
              >
                <p
                  // className={sty ? "reverse-heading " : "heading "}
                  style={{
                    ...styles.heading,
                    color: "white",
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  Home
                </p>
              </Nav.Link>
              <Nav.Link href="about" className="nav-item">
                <p
                  // className={sty ? "reverse-heading " : "heading "}
                  style={{
                    ...styles.heading,
                    color: "white",
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  About
                </p>
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-item">
                <p
                  // className={sty ? "reverse-heading " : "heading "}
                  style={{
                    ...styles.heading,
                    color: "white",
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  People
                </p>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <p
                  href="#resume"
                  style={{
                    ...styles.heading,
                    color:  "white" ,
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  Partnerships
                </p>
              </Nav.Link>
              <Nav.Link className="nav-item">
                <p
                  href="#resume"
                  style={{
                    ...styles.heading,
                    color:  "white" ,
                    display: "flex",
                    alignItems: "center", // Center vertically
                  }}
                >
                  Perspectives
                </p>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      {/* <div style={{height:800}}></div> */}
      </nav>
    </section>
  );
};

export default Header;
