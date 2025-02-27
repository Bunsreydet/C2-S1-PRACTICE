export default function Flower({flower}) {
    return (
        <p key="the place id" className="flower-item">
          <img src={flower.image.src} alt={flower.image.alt}/>
          <h3>{flower.title}</h3>
        </p>
    );
  }  