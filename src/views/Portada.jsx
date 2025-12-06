import quince from '../assets/15.png'
const Portada = () => {
    return (
        <section className="portada img-fluid">
             <h1 className="enfoque">
        {"Maria Zoe".split("").map((letra, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {letra}
          </span>
        ))}
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

     
        </section>
    );
};

export default Portada;