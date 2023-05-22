import React from 'react';

const SecondPage = () => {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyles = {
    display: 'block',
    margin: '0 auto',
    width: '100%',
  };

  const textBoxStyles = {
    textAlign: 'center',
    padding: '20px',
    width: '500px',
    height: '200px',
    borderRadius: '20px',
    border: '1px solid black',
    boxSizing: 'border-box',
    marginTop: '50px', 
    marginLeft: '22%'
  };

  return (
    <div style={containerStyles}>
      <div>
        <a href="/">
          <img style={imageStyles} src={`${process.env.PUBLIC_URL}/Photos/2.png`} alt="photo 2" />
        </a>
        <div style={textBoxStyles}>
          <h3 style={{ fontStyle: 'italic' }}>News</h3>
          <p>
            Lorem ipsum dolor sit amet. Et iusto error qui repellendus alias rem iste rerum id
            mollitia saepe et reiciendis facilis est recusandae accusamus. Aut nulla voluptatem
            est repellendus dolores in fugit vitae aut veniam atque! Ea consequatur rerum et
            placeat necessitatibus aut similique quae et inventore voluptas aut sunt dicta ut
            corrupti enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
