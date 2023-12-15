import React from 'react';
import { ImageForm } from "@/components/ImageForm";
import LazyMap, {LazyMarker} from "@/components/Map.lazy";

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

  //const session = await getServerSession();

    // const urlBase = process.env.NEXTAUTH_URL;

    // const directionResponse = await fetch(`${urlBase}api/directions/65787cd49324c963057952d2`);
    // if (directionResponse.status !== 200) {
    //     return <h1>Direction not found</h1>;
    // }
    // const direction = await directionResponse.json();

    // const mapResponse = await fetch(`${urlBase}api/map/direction/${direction._id}`);
    // if (mapResponse.status !== 200) {
    //     return <h1>Map not found</h1>;
    // }
    // const map = await mapResponse.json();

    const longitud = Number(36.72);
    const latitud = Number(-4.42);

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
            <ImageForm></ImageForm>

            <p>Aqui tienes la dirección:</p>

            <div style={{height: "500px"}}>
                <LazyMap center={[longitud, latitud]} zoom={15}>
                    <LazyMarker position={[longitud, latitud]}></LazyMarker>
                    <LazyMarker position={[longitud + 0.005, latitud]}></LazyMarker>
                </LazyMap>
            </div>
      </section>
    </div>
  );
}

export default HomePage;
