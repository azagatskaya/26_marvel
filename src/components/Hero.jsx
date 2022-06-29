import './Hero.css';

function Hero(props) {
	const handleHeroClick = (e) => {
	}
	return (
		<div className='hero__wrapper' id={props.hero.id}>
			<div className='hero__img' onClick={handleHeroClick} style={{
				backgroundImage: `url(${props.hero.image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				height: '420px'
			}}>
			</div>
			<div className='hero__name'>{props.hero.name}</div>
			<div className='hero__info-title'><span>Вселенная: </span>{props.hero.universe}</div>
			<div className='hero__info-title'><span>Альтер-эго: </span>{props.hero.alterego}</div>
			<div className='hero__info-title'><span>Род деятельности: </span>{props.hero.occupation}</div>
			<div className='hero__info-title'><span>Друзья: </span>{props.hero.friends}</div>
			<div className='hero__info-title'><span>Суперсилы: </span>{props.hero.superpowers}</div>
			<div className='hero__info-title'><span>Подробности: </span>{props.hero.details}</div>
		</div>
	)
}

export default Hero;