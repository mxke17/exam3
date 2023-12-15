import React from 'react';

function HomePage() {
  const styles = {
    homePage: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      color: '#333', /* Texto gris oscuro */
    },
    welcomeSection: {
      marginBottom: '20px',
    },
    featuredContent: {
      marginTop: '20px',
    },
    aboutUs: {
      marginTop: '20px',
    },
    contact: {
      marginTop: '20px',
    },
    title: {
      color: '#333',
    },
  };

  return (
    <div style={styles.homePage}>
      <section style={styles.welcomeSection}>
        <h1 style={styles.title}>Bienvenidos a Eventual</h1>
        <p>
          Explora nuestro sitio para descubrir los mejores eventos.
        </p>
      </section>

      <section style={styles.featuredContent}>
        <h2 style={styles.title}>Encuentra tus eventos introduciento tu codigo postal</h2>
        {/* Puedes agregar más contenido destacado aquí */}
      </section>
    </div>
  );
}

export default HomePage;
