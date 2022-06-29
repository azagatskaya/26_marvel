import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Marvel Heroes</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="./assets/css/nullstyle.css">
	<link rel="stylesheet" href="./assets/css/style.css">
	<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0" />

</head>

<body>
	<div class="wrapper">
		<h1 class="title">Герои Marvel</h1>
		<!-- Slider main container -->
		<div class="image-slider swiper">
			<!-- Additional required wrapper -->
			<div class="image-slider__wrapper swiper-wrapper">
				<!-- Slides -->


			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<!-- If we need scrollbar -->
			<div class="swiper-scrollbar"></div>
		</div>

	</div>



	<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
	<script src="./assets/js/data.js"></script>
	<script src="./assets/js/hero.js"></script>
	<script src="./assets/js/script.js"></script>
</body>
    </div>
  );
}

export default App;
