let URL = "https://pokeapi.co/api/v2/pokemon/";
const listaPokemon = document.querySelector("#listaPokemon");
const botones = document.querySelectorAll(".btn-header");
const maximoPokemon = 151;

cogerPokemon(1);

function cogerPokemon(numeroPokemon) {
	if (numeroPokemon > maximoPokemon) return;
	axios
		.get(URL + numeroPokemon, {
			responseType: "json",
		})
		.then(function (res) {
			if (res.status == 200) {
				mostrarPokemon(res.data);
				cogerPokemon(numeroPokemon + 1);
			}
		})
		.catch(function (err) {
			console.log(err);
		});
}

function mostrarPokemon(pokemon) {
	//declarar los tipos como texto (dentro de types es siempre un array)
	let tipos = pokemon.types.map(
		(type) => `
	<p class="tipo ${type.type.name}">${type.type.name}</p>
	`
	);
	tipos = tipos.join(``);
	let pokemonId = pokemon.id.toString();
	if (pokemonId.length == 1) {
		pokemonId = "00" + pokemonId;
	} else if (pokemonId.length == 2) {
		pokemonId = "0" + pokemonId;
	}
	let fondoPokemon;
	switch (pokemon.types[0].type.name) {
		case "fire":
			fondoPokemon =
				"https://i.pinimg.com/736x/5d/62/89/5d6289eaea877f9b8d5e12091193677c.jpg";
			break;
		case "water":
			fondoPokemon =
				"https://static.wikia.nocookie.net/pokemon/images/f/ff/Serene_Sea_Rescue_Team_DX.png";
			break;
		case "grass":
			fondoPokemon =
				"https://i.pinimg.com/originals/af/92/99/af92992e01ed558690e8d6e0bbefb0c9.jpg";
			break;
		case "electric":
			fondoPokemon =
				"https://www.models-resource.com/resources/big_icons/17/16701.png";
			break;
		case "ice":
			fondoPokemon =
				"https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/glacier.jpg";
			break;
		case "fighting":
			fondoPokemon =
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3623cfbc-41a8-40f4-bd77-184800f2bd81/dab816e-79f87151-5050-41ee-b51a-dba997b4da34.jpg/v1/fill/w_1023,h_777,q_75,strp/pokemon_go_fighting_type_background_by_thoritegem_dab816e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc3IiwicGF0aCI6IlwvZlwvMzYyM2NmYmMtNDFhOC00MGY0LWJkNzctMTg0ODAwZjJiZDgxXC9kYWI4MTZlLTc5Zjg3MTUxLTUwNTAtNDFlZS1iNTFhLWRiYTk5N2I0ZGEzNC5qcGciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0NoRzRcXlv5QJ-rJYgqz_HCXzyl8ofP2F52XnRGut3c";
			break;
		case "poison":
			fondoPokemon =
				"https://pm1.aminoapps.com/7794/ce16fcee867f4651f1d33ba688a9e0926ac860b2r1-1280-960v2_00.jpg";
			break;
		case "ground":
			fondoPokemon =
				"https://pics.craiyon.com/2023-06-17/5311955adc884806aab6cbb0c08e7a2f.webp";
			break;
		case "flying":
			fondoPokemon =
				"https://i.pinimg.com/736x/43/0e/85/430e85c46513b8b64627f85e1dc1b7a4.jpg";
			break;
		case "psychic":
			fondoPokemon =
				"https://s3.amazonaws.com/colorslive/png/2282020-pz7AGeJuB_DrZcM9.png";
			break;
		case "bug":
			fondoPokemon = "https://wallpapercave.com/wp/wp7321259.jpg";
			break;
		case "rock":
			fondoPokemon =
				"https://pics.craiyon.com/2023-06-18/a3e6f73ce06a445e8b29d04f3668c0c8.webp";
			break;
		case "ghost":
			fondoPokemon =
				"https://c4.wallpaperflare.com/wallpaper/60/208/964/clouds-dark-halloween-mimikyu-wallpaper-preview.jpg";
			break;
		case "dark":
			fondoPokemon =
				"https://wallpaper-house.com/data/out/5/wallpaper2you_71206.jpg";
			break;
		case "dragon":
			fondoPokemon =
				"https://img.freepik.com/premium-photo/purple-background-chinese-watercolor-landscape-illustration-mountain-river-grass-anime-wallpaper_327903-1468427.jpg";
			break;
		case "steel":
			fondoPokemon =
				"https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/sword-shield/galar-scenery.png";
			break;
		case "fairy":
			fondoPokemon =
				"https://cdn.openart.ai/stable_diffusion/8b1f00efc4945609f7a1c359ef47e145ccc6c987_2000x2000.webp";
			break;
		default:
			fondoPokemon =
				"https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/masters/city.jpg";
			break;
	}
	const divPokemon = document.createElement("div");

	//para asociarle los tipos
	pokemon.types.forEach((tipo) => {
		divPokemon.setAttribute(tipo.type.name, "");
	});

	divPokemon.classList.add("pokemon");
	divPokemon.innerHTML = `
	<div class="imagenPokemon" style="background-image:url('${fondoPokemon}')">
		<span>#${pokemonId}</span>
		<img
			src="${pokemon.sprites.other["official-artwork"].front_default}"
			alt="${pokemon.name}"
		/>
	</div>
	<div class="infoPokemon">
		<div class="nombre">
			<h2 class="pokemonNombre">${pokemon.name}</h2>
		</div>
		<div class="tipos">
			${tipos}
		</div>
		<div class="stats">
			<p class="stat">${pokemon.height / 10}M</p>
			<p class="stat">${pokemon.weight / 10}KG</p>
		</div>
	</div>
	`;
	divPokemon.id = "Pokemon-" + pokemon.id;
	divPokemon.onclick = () => {
		seleccionarPokemon(pokemon);
	};
	listaPokemon.append(divPokemon);
}

function seleccionarPokemon(pokemon) {
	document.getElementById("header").style.display = "none";
	document.getElementById("nav").style.display = "none";
	document.getElementById("main").style.display = "none";
	document.getElementById("infoStats").style.display = "flex";

	let pokemonId = pokemon.id.toString();
	if (pokemonId.length == 1) {
		pokemonId = "00" + pokemonId;
	} else if (pokemonId.length == 2) {
		pokemonId = "0" + pokemonId;
	}

	document.getElementById("infoNum").innerText = "#" + pokemonId;
	document.getElementById("imagenStat").src =
		pokemon.sprites.other["official-artwork"].front_default;
	document.getElementById("imagenStat").alt = pokemon.name;
	document.getElementById("infoNombre").innerText = pokemon.name;
	document.getElementById("sprite").src =
		pokemon.sprites.other.showdown.front_default;
	document.getElementById("sprite").alt = pokemon.name;

	/* TIPOS */
	//declarar los tipos como texto (dentro de types es siempre un array)
	let tipos = pokemon.types.map(
		(type) => `
	<p class="tipo ${type.type.name}">${type.type.name}</p>
	`
	);
	tipos = tipos.join(``);
	document.getElementById("tipos").innerHTML = tipos;

	/* HABILIDADES */
	document.getElementById("habilidades").innerHTML = "";
	for (var i = 0; i < pokemon.abilities.length; i++) {
		document.getElementById(
			"habilidades"
		).innerHTML += `<p>${pokemon.abilities[i].ability.name.replace(
			"-",
			" "
		)}</p>`;
	}

	/* MOVIMIENTOS */
	document.getElementById("movimientos").innerHTML = "";
	for (var i = 0; i < Math.min(pokemon.moves.length, 150); i++) {
		document.getElementById("movimientos").innerHTML += `<p>${pokemon.moves[
			i
		].move.name.replace("-", " ")}</p>`;
	}
	/* STATS */
	/* Vida */
	document.getElementById("numVida").innerText = pokemon.stats[0].base_stat;
	/* Ataque */
	document.getElementById("numAtaque").innerText = pokemon.stats[1].base_stat;
	/* Defensa */
	document.getElementById("numDefensa").innerText =
		pokemon.stats[2].base_stat;
	/* Velocidad */
	document.getElementById("numVelocidad").innerText =
		pokemon.stats[5].base_stat;
	/* Ataque Especial */
	document.getElementById("numASP").innerText = pokemon.stats[3].base_stat;
	/* Defensa Especial */
	document.getElementById("numDSP").innerText = pokemon.stats[4].base_stat;

	/* gestionar las flechas */
	document.getElementById("flechaIzquierda").style.display =
		pokemon.id == 1 ? "none" : "block";
	document.getElementById("flechaIzquierda").onclick = () => {
		document.getElementById("Pokemon-" + (pokemon.id - 1)).click();
	};
	document.getElementById("flechaDerecha").style.display =
		pokemon.id == maximoPokemon ? "none" : "block";
	document.getElementById("flechaDerecha").onclick = () => {
		document.getElementById("Pokemon-" + (pokemon.id + 1)).click();
	};

	//almacenar todas las barras
	let barras = document.querySelectorAll(".barraStat");
	for (var i = 0; i < pokemon.stats.length; i++) {
		//llamar a la funcion para calcular los tamaños y colores de la barra de las stats
		calcularStat(pokemon.stats[i], barras[i]);
	}
}

function calcularStat(estadisticaPokemon, barra) {
	if (estadisticaPokemon.base_stat <= 60) {
		barra.style.backgroundColor = "#ff7f0f";
	} else if (estadisticaPokemon.base_stat <= 100) {
		barra.style.backgroundColor = "#ffdd57";
	} else if (estadisticaPokemon.base_stat <= 130) {
		barra.style.backgroundColor = "#23cd5e";
	} else {
		barra.style.backgroundColor = "#00c2b8";
	}
	/* Clamp => quiero que el numero este entre 0 y 1 
	si el resultado de la division es menor a 0, se coge un 0
	y si es mayor a 1 se coge un 1. Luego se multiplica * 100
	para obtener un valor entre 0 y 100*/
	barra.style.width =
		Math.min(Math.max(estadisticaPokemon.base_stat / 200, 0), 1) * 100 +
		"%";
}

function cerrarInfo() {
	document.getElementById("header").style.display = "block";
	document.getElementById("nav").style.display = "block";
	document.getElementById("main").style.display = "block";
	document.getElementById("infoStats").style.display = "none";
}

botones.forEach((boton) =>
	boton.addEventListener("click", (evento) => {
		const botonId = evento.currentTarget.id;
		listaPokemon.childNodes.forEach((child) => {
			if (botonId == "vertodos") {
				child.style.display = "flex";
			} else if (child.getAttribute(botonId) != null) {
				child.style.display = "flex";
			} else {
				child.style.display = "none";
			}
		});
	})
);

/* Para el cambio a modo claro y oscuro */
let temaOscuro = true;
function cambiarTema() {
	let html = document.getElementById("html");
	if (temaOscuro) {
		html.setAttribute("temaClaro", "");
	} else {
		html.removeAttribute("temaClaro");
	}
	temaOscuro = !temaOscuro;
}
