
const Footer = () => {
    return (
      <footer style={footerStyle}>
        <p style={footerTextStyle}>Powered by ChatGPT and Next.js</p>
      </footer>
    );
  };
  
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px 0',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
  };
  
  const footerTextStyle = {
    margin: 0,
    fontSize: '1rem',
    color: '#333',
  };
  
  export default Footer;
  