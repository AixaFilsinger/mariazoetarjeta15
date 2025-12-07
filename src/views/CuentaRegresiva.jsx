import React, { useEffect, useState } from "react";
import fecha from '../assets/16e.png'
import adorno from '../assets/adorno.png'
import brillo from "../assets/brillos.png";
const CuentaRegresiva = () => {
      const targetDate = new Date("2026-01-16T21:30:00").getTime(); // FECHA DEL EVENTO

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

    return (
        <section className='cuenta'>
          
          <article className='d-flex flex-row justify-content-center lineaC '>
            <img src={brillo} alt="" className="brilloC brillo-top" />
            <aside className=' viernes text-center'>
                <img src={adorno} alt="" width={70}/>
                <h3>Viernes</h3>
                <img src={adorno} alt="" width={70} />
            </aside>
            <aside >
                <img src={fecha} alt="" width={100}/>
            </aside>
            <aside className='año text-center'>
                <img src={adorno} alt=""  width={70}/>
                <h3>2026</h3>
                <img src={adorno} alt="" width={70}/>
            </aside>
            <img src={brillo} alt="" className="brilloC brillo-bottom" />
          </article>
          <article className='cuentaRegre'>
             <section className="cuentaRe d-flex flex-column justify-content-end align-items-center">
      <h2 className="h2-cuentaRe mb-0">Faltan</h2>
      <aside className="">
        <div className="d-flex flex-column align-items-center justify-content-center contador">
          <div className="d-flex gap-2">
            <div className="text-center">
              <h3 className="fw-bold">{timeLeft.days}:</h3>
              <small>Días</small>
            </div>
            <div className="text-center">
              <h3 className="fw-bold">{timeLeft.hours}:</h3>
              <small>Horas</small>
            </div>
            <div className="text-center">
              <h3 className="fw-bold">{timeLeft.minutes}:</h3>
              <small>Minutos</small>
            </div>
            <div className="text-center">
              <h3 className="fw-bold">{timeLeft.seconds}</h3>
              <small>Segundos</small>
            </div>
          </div>
        </div>
      </aside>
    </section>
          </article>
        </section>
    );
};

export default CuentaRegresiva;