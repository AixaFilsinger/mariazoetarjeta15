
import fiesta from "../assets/fiesta.png";
import dressCode from "../assets/dressCode.png";
import Notamusical from "../assets/notas.png";
import qr from "../assets/qr.jpeg"
import asistencia from "../assets/invitacionB.png";
import regalo from "../assets/regaloB.png";
import brillo from "../assets/brillos.png";
import disco from "../assets/boladisco1.png"

import { useState } from "react";
import { BiColor } from "react-icons/bi";

const Varios = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="m-0 p-0">
      <article className="varios0">
      <section className="container d-flex flex-column align-items-center varios">
      
      <article className="row">
        <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
          
          <img src={fiesta} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Fiesta
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            16 de Enero <br />
            21:30 hs<br/>
            Entrada de la quinciañera 22:30hs
          </p>
        </aside>
        <aside className="col-xs-12 text-center donde mb-4 position-relative">
          <img src={disco} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¿Dónde?
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Salón complejo now<br/>Leales
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open("https://maps.app.goo.gl/T1kNijP1hGqWWqWz7")
            }
          >
            CÓMO LLEGAR
          </button>
          
        </aside>
        <aside className="col-xs-12 text-center dressCode mb-4">
          <img src={dressCode} alt="" width={100} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            DressCode
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Elegante<br /> <span className="fw-semibold dres">Evitar</span> colores plateado y blanco
          </p>
           <div className="color-palette">
                <div className="color-circle celeste me-1" title="celeste"></div>
                <div className="color-circle plateado" title="plateado"></div>
              </div>
        </aside>
        <aside className="col-xs-12 text-center playlist mb-4">
          <img src={Notamusical} alt="" width={80} />
          <h4
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Playlist
          </h4>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            ¡Creemos la playlist de la noche juntos!
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() =>
              window.open(
                "https://open.spotify.com/playlist/11waPfZF4amWhwc9NL8Ajh?si=U_znH7c6SRmQc-XTMU-NiQ"
              )
            }
          >
            Sugerir canción
          </button>
        </aside>
        <aside className="col-xs-12 text-center asistencia mb-4">
          <img src={asistencia} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Para confirmar asistencia podes enviar un mensaje a:
          </p>
          <button
            className="btn-varios mt-3 mb-1"
            onClick={() => window.open("hhttps://wa.link/ks47h0")}
          >
            Maria Zoe
          </button>
          <p>Podes hacerlo hasta el 03/01</p>
        </aside>
        <aside className="col-xs-12 text-center regalo mb-5">
          <img src={regalo} alt="" width={100} />
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            El mejor regalo que pueda tener será tu presencia
          </p>
          <button
            className="btn-varios mt-3 mb-5"
            onClick={() => setShowModal(true)}
          >
            Enviar regalo
          </button>
          {/* Modal */}
          {showModal && (
            <div
              className="modal-custom position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow text-center"
              style={{
                zIndex: 9999, // 🔑 siempre arriba de todo
                width: "90%",
                maxWidth: "350px",
              }}
            >
              <h5 className="mb-3 fw-bold modalh5">Datos para el regalo</h5>

              {/* Los <p> ahora sí se ven */}
              <p className="mb-1">
                <strong>Alias:</strong> zo8011
              </p>
              <p className="mb-3">
                <strong>A nombre de:</strong><br/>Maria Zoe
              </p>
              <p>Disponemos de un buzón para quienes prefieran obsequios en efectivo.</p>
              <button
                className="btn-varios2"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </div>
          )}
        </aside>
        <aside className="col-xs-12 text-center cuando mb-4 mt-5 position-relative">
              

              <h4
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Subi tus fotos
              </h4>
              <img src={qr} alt="" width={300} />
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Compartamos los recuerdos de la noche juntos. ¡Subí tus fotos
                acá!
              </p>
            </aside>
      </article>
    
      
    </section>
    </article>
      <article
        className=" fin d-flex flex-column justify-content-center align-items-center position-relative"
       
      >
        <img src={brillo} alt="" className="brillo brillo-top1" />
        <h4  data-aos="zoom-in-down">¡No podes faltar!</h4>
        <h2  data-aos="zoom-in-down">Maria Zoe</h2>
        <img src={brillo} alt="" className="brillo brillo-bottom1" />
      </article>
    </section>
    
    
  );
};

export default Varios;