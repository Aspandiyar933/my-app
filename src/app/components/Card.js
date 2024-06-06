"use client";
import Link from "next/link";

 

const Card = ({ id, title, date, author, description }) => {
  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
        <span style={cardDateStyle}>{date}</span>
      </div>
      <p style={cardAuthorStyle}>By {author}</p>
      <p style={cardDescriptionStyle}>{description}</p>
      <Link href={`/blog/${id}`} legacyBehavior>
        <a style={cardLinkStyle}>View More →</a>
      </Link>
    </div>
  );
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  maxWidth: '400px',
  margin: '20px auto',
  fontFamily: 'Arial, sans-serif',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  margin: 0,
  color: '#000',
};

const cardDateStyle = {
  fontSize: '0.875rem',
  color: '#555',
};

const cardAuthorStyle = {
  fontSize: '1rem',
  color: '#777',
  margin: '10px 0',
};

const cardDescriptionStyle = {
  fontSize: '1rem',
  color: '#555',
  margin: '10px 0',
};

const cardLinkStyle = {
  fontSize: '1rem',
  color: '#000',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Card;
