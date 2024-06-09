import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Importe os ícones das mídias sociais
import './contato.css'; // Adicione esta linha no topo do seu arquivo Contato.jsx


const Contato = () => {
    // Lista de participantes com suas informações de contato
    const participantes = [
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://www.facebook.com/geisila.silvadacosta/',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.linkedin.com/in/geisila-silva-da-costa-0089a3177/',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
        {
            nome: 'Geisila Costa',
            email: 'geisilascosta@gmail.com',
            facebook: 'https://facebook.com/participante1',
            instagram: 'https://www.instagram.com/geisilasilvadacosta',
            linkedin: 'https://www.instagram.com/geisilasilvadacosta',
            github: 'https://github.com/GeisilaCosta',
            whatsapp: 'https://wa.me/5524988362454',
        },
    ];

    return (
        <div className="contato-container">
            <h1>Contatos</h1>
            <ul>
                {participantes.map((participante, index) => (
                    <li key={index}>
                        <p>{participante.nome}</p>
                        <div className="social-icons">
                            <a href={`mailto:${participante.email}`}><FaEnvelope /></a>
                            <a href={participante.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href={participante.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href={participante.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href={participante.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={participante.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contato;
