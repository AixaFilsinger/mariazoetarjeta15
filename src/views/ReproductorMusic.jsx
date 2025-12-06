import React, { useState, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// Importa íconos de alguna librería, usaremos 'react-icons' como ejemplo.
// Si no tienes react-icons instalado, puedes usar íconos de Bootstrap CSS nativo.
// npm install react-icons
import { FaPlay, FaPause, FaBackward, FaForward, FaRandom, FaSyncAlt } from 'react-icons/fa';

const ReproductorMusic = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Función para manejar el botón de Play/Pause
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        
        <div className='repro'>
            <h3>Presioná play para reproducir la canción</h3>
            <Container fluid className="reproductor-bg py-3 px-5">
            {/* Elemento de Audio Oculto */}
            <audio ref={audioRef} src={"/music/wana.mp3"} onEnded={() => setIsPlaying(false)} />

            {/* Fila de Barra de Progreso (barra rosada en tu imagen) */}
            <Row className="mb-3 align-items-center">
                <Col>
                    {/* Placeholder de la barra de progreso (la barra fina con el círculo) */}
                    <div className="progress-bar-placeholder">
                        <div className="progress-slider"></div>
                    </div>
                </Col>
            </Row>

            {/* Fila de Controles (botones de reproducción) */}
            <Row className="align-items-center justify-content-center">
                <Col xs={1} className="text-center">
                    <Button variant="link" className="control-btn"><FaRandom /></Button> {/* Shuffle */}
                </Col>
                <Col xs={1} className="text-center">
                    <Button variant="link" className="control-btn"><FaBackward /></Button> {/* Anterior */}
                </Col>
                <Col xs={2} className="text-center">
                    {/* Botón Central de Play/Pause */}
                    <Button 
                        variant="link" 
                        className="play-pause-btn"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <FaPause className="play-icon" /> : <FaPlay className="play-icon" />}
                    </Button>
                </Col>
                <Col xs={1} className="text-center">
                    <Button variant="link" className="control-btn"><FaForward /></Button> {/* Siguiente */}
                </Col>
                <Col xs={1} className="text-center">
                    <Button variant="link" className="control-btn"><FaSyncAlt /></Button> {/* Repetir */}
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default ReproductorMusic;