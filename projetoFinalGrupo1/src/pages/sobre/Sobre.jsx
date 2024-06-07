import React from 'react';

const team = [
    { name: 'Geisila Silva da Costa', bio: 'Sou uma pessoa dedicada, e procuro viver com alegria e sempre ver o lado positivo da vida! ', photo: '/src/img/ge.png' },
    { name: 'Carlos Alberto', bio: '', photo: '/src/assets/img/Carlos.webp' },
    { name: 'Patrick', bio: '', photo: '/src/assets/img/Patrick.webp' },
    { name: 'Felipe', bio: '', photo: '/src/img/ge.png' },
    { name: 'Gustavo', bio: '', photo: '/src/img/ge.png' },
    { name: 'Marcela', bio: '', photo: '/src/img/ge.png' },
];

function Sobre() {
    return (
        <div className={styles.sobre}>
            <h1>Grupo 1</h1>
            <div className={styles.team}>
                {team.map(member => (
                    <div key={member.name} className={styles.member}>
                        <img src={member.photo} alt={member.name} />
                        <h2>{member.name}</h2>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sobre;