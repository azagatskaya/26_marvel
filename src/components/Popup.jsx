function Popup(props){
	return (
	<div class="popup" id="popup">
		<div class="popup__body">
			<div class="popup__content">
				<a href="" class="popup__close close-popup">x</a>
				<div class="popup__title">{name}</div>
				<div class="popup__rating rating" id="batman">
					<span class="material-symbols-outlined rating__star rating__star-0" id="0">grade</span>
					<span class="material-symbols-outlined rating__star" id="1">grade</span>
					<span class="material-symbols-outlined rating__star" id="2">grade</span>
					<span class="material-symbols-outlined rating__star" id="3">grade</span>
					<span class="material-symbols-outlined rating__star" id="4">grade</span>
					<span class="material-symbols-outlined rating__star" id="5">grade</span>
					<span class="material-symbols-outlined rating__star" id="6">grade</span>
					<span class="material-symbols-outlined rating__star" id="7">grade</span>
					<span class="material-symbols-outlined rating__star" id="8">grade</span>
					<span class="material-symbols-outlined rating__star" id="9">grade</span>
					<span class="material-symbols-outlined rating__star" id="10">grade</span>
				</div>
				<div class="popup__img-info-wrapper">
					<div class="popup__img"><img src="https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg" alt=""></div>
					<div class="popup__info info">
						<div class="info__item">
							<div class="info__title">Вселенная:</div>
							<div class="info__text" id="universe">DC Comics</div>
						</div>
						<div class="info__item">
							<div class="info__title">Альтер-эго:</div>
							<div class="info__text" id="alterego">Брюс Уэйн</div>
						</div>
						<div class="info__item">
							<div class="info__title">Род деятельности:</div>
							<div class="info__text" id="occupation">борец с преступностью, филантроп, миллиардер</div>
						</div>
						<div class="info__item">
							<div class="info__title">Друзья:</div>
							<div class="info__text" id="friends">Робин, Бэтгерл</div>
						</div>
						<div class="info__item">
							<div class="info__title">Суперсилы:</div>
							<div class="info__text" id="superpowers">интеллект, обширные познания, знания боевых искусств, ловкость</div>
						</div>
					</div>
				</div>
				<div class="info__title">Подробности:</div>
				<div class="popup__text" id="details">
					по популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография
					настолько же темна, как
					и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым
					годом популярность
					только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом. Если подумать, это один
					из немногих героев,
					кто добился своего положения за счет ума и упорства, а не за счет мутаций.
				</div>
			</div>
		</div>
	</div>
	)
}

export default Popup;