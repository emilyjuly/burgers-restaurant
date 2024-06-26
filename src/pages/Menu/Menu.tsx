import Navbar from '../../components/navbar/Navbar';

const Menu = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        height: '100vh',
      }}
    >
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
          }}
          src="https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png"
          alt="Logo do restaurante"
        />
      </div>
    </div>
  );
};

export default Menu;
