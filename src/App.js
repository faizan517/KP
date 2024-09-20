import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components';
import { useMediaQuery } from 'react-responsive';

const styles = {
  containor: {
    backgroundImage: `url(${require("../src/assets/logo/gradient.png")})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '40%',
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    width: '100%', // Full width on smaller screens
    maxWidth: '450px', // Limit width on larger screens
    margin: 'auto',
  },
  formGroup: {
    width: '100%',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#333',
    marginBottom: '5px',
  },
  inputField: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '100%',
  },
  forgotPassword: {
    color: 'rgba(122, 166, 233, 1)',
    fontFamily: "Poppins",
    fontWeight: '500',
    // marginTop: '10px',
    // marginBottom: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    textAlign:'left',
    // paddingLeft:10,
    // backgroundColor:'red'    
  },
  submitButton: {
    backgroundColor: '#000',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    width: '100%',
    marginBottom: '20px',
  },
  registerText: {
    fontFamily: "Poppins",
    fontWeight: '500',
    fontSize: '14px',
    color: '#333',
    marginTop: '10px',
  },
  registerLink: {
    color: 'gray',
    textDecoration: 'none',
  },
  font: {
    fontFamily: "Poppins",
    fontWeight: '400',
    fontSize: '16px',
    textAlign: 'justify',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
};

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div style={{...styles.containor,height: isMobile ? '': "100vh",}}>
      <Header />
      <Container>
        <Row style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:100}}>
          {/* Left Column for Image and Text */}
          <Col xs={12} md={6} lg={6} xl={5} style={{ color: 'white' }}>
            <img src={require('../src/assets/logo/Kleiner_Perkins_logo_black2.svg 2.png')} style={styles.img} alt="Logo" />
            <p style={styles.font}>
              For over five decades, we have partnered with intrepid founders to build iconic companies that made history.
              Today, Kleiner Perkins continues that legacy, investing in founders with bold ideas that span industries and continents,
              partnering with them from inception to IPO and beyond to maximize the potential of their ideas and make history.
            </p>
          </Col>

          {/* Right Column for Form */}
          <Col xs={12} md={6} lg={6} xl={5} >
            <Form style={styles.formContainer}>
              <Form.Group controlId="formBasicEmail" style={styles.formGroup}>
                <Form.Label style={styles.label}>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  style={styles.inputField} 
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" style={styles.formGroup}>
                <Form.Label style={styles.label}>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  style={styles.inputField} 
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" style={styles.formGroup}>
              <Form.Label style={styles.forgotPassword}>Forgot Password</Form.Label>
              </Form.Group>
              <Button 
                variant="dark" 
                type="submit" 
                style={styles.submitButton}
              >
                Log In
              </Button>

              <p style={styles.registerText}>
                Don’t have an account? <a href="/register" style={styles.registerLink}>Register</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
