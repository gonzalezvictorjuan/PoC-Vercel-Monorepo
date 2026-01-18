import React from 'react';

interface TypeConfig {
    color: string;
    icon: string;
}

const TYPE_CONFIGS: Record<string, TypeConfig> = {
    normal: { color: '#9FA19F', icon: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png' },
    fire: { color: '#E62829', icon: 'https://archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/20px-Fire_icon.png' },
    fighting: { color: '#FF8000', icon: 'https://archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png' },
    water: { color: '#2980EF', icon: 'https://archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png' },
    flying: { color: '#81B9EF', icon: 'https://archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png' },
    grass: { color: '#3FA129', icon: 'https://archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png' },
    poison: { color: '#9141CB', icon: 'https://archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png' },
    electric: { color: '#FAC000', icon: 'https://archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png' },
    ground: { color: '#915121', icon: 'https://archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png' },
    psychic: { color: '#EF4179', icon: 'https://archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/20px-Psychic_icon.png' },
    rock: { color: '#AFA981', icon: 'https://archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png' },
    ice: { color: '#3DCEF3', icon: 'https://archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/20px-Ice_icon.png' },
    bug: { color: '#91A119', icon: 'https://archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png' },
    dragon: { color: '#5060E1', icon: 'https://archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png' },
    ghost: { color: '#704170', icon: 'https://archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png' },
    dark: { color: '#624D4E', icon: 'https://archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/20px-Dark_icon.png' },
    steel: { color: '#60A1B8', icon: 'https://archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png' },
    fairy: { color: '#EF70EF', icon: 'https://archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/20px-Fairy_icon.png' },
};

interface Props {
    type: string;
}

const TypeBadge: React.FC<Props> = ({ type }) => {
    const config = TYPE_CONFIGS[type.toLowerCase()] || TYPE_CONFIGS.normal;

    return (
        <div style={{ margin: '2px' }}>
            <span style={{
                backgroundColor: '#5A5A5A',
                padding: '2px 2px 2px 4px',
                borderRadius: '15px',
                display: 'inline-flex',
                whiteSpace: 'nowrap',
                backgroundImage: `linear-gradient(105deg, ${config.color} 30px, #5A5A5A 31px, #5A5A5A)`,
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
                <img
                    src={config.icon}
                    alt={type}
                    width="20"
                    height="20"
                    style={{ display: 'block' }}
                />
                <span style={{
                    margin: '0 5px 0 10px',
                    display: 'inline-block',
                    minWidth: '50px',
                    textAlign: 'center',
                    color: '#FFF',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'capitalize'
                }}>
                    {type}
                </span>
            </span>
        </div>
    );
};

export default TypeBadge;
