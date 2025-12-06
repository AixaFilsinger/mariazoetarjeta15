import quince from '../assets/15.png'
import ReproductorMusic from './ReproductorMusic';


const Portada = () => {
    return (
        <section className="portada img-fluid">
             <h1 className="enfoque">
        {"Maria Zoe".split("").map((letra, i) =>{
                    
                    // Lógica para manejar el espacio:
                    const contenido = letra === ' ' ? '\u00A0' : letra; 
                    // '\u00A0' es el equivalente Unicode del &nbsp; (espacio de no separación)
                    // Usamos esto para que el espacio no se colapse.
                    
                    return (
                        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                            {contenido}
                        </span>
                    );
                })}
      </h1>
            <aside className="linea">
        <h2 className="enfoque mis">
          {"MIS".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
        <img src={quince} alt="" width={300} />
        <h2 className="enfoque años">
          {"AÑOS".split("").map((letra, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {letra}
            </span>
          ))}
        </h2>
      </aside>
      
     <ReproductorMusic></ReproductorMusic>
        </section>
    );
};

export default Portada;