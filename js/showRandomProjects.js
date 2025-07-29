(() => {
	const projects = ["bokena", "wof", "bagus", "saveGod"]

	const currentProject = document.body.getAttribute("projet");

	const filteredProjects = projects.filter(project => project !== currentProject);

	const numbers = [];
	while (numbers.length < 3) {
		const randomNumber = Math.floor(Math.random() * filteredProjects.length);
		if (!numbers.includes(randomNumber)) {
			numbers.push(randomNumber);
		}
	}

	const projectContainer = document.getElementById("projets");

	for (const number of numbers) {
		const randomProject = filteredProjects[number];
		const a = document.createElement("a");
		switch (randomProject) { 
			case "bokena":
				a.href = "bokena.html";
				a.id = "bokena";
				a.classList.add("projet")
				break;

			case "wof":
				a.href = "wof.html";
				a.id = "wof";
				a.classList.add("projet")
				break;

			case "bagus":
				a.href = "bagus.html";
				a.id = "bagus";
				a.classList.add("projet")

				const p = document.createElement("p");
				p.textContent = "Projet en cours...";
				a.appendChild(p);

				const h2 = document.createElement("h2");
				h2.innerHTML = "- BAGUS ASCENT -<br>TURN-BASED RPG";
				a.appendChild(h2);
				break;

			case "saveGod":
				a.href = "saveGod.html";
				a.id = "saveGod";
				a.classList.add("projet")

				const p2 = document.createElement("p");
				p2.textContent = "Projet en cours...";
				a.appendChild(p2);

				const h22 = document.createElement("h2");
				h22.innerHTML = "- SAVE GOD -<br>ROGUELITE PUZZLE";
				a.appendChild(h22);
				break;

			default:
				console.error("Projet inconnu:", randomProject);
				break;
		}

		// projectContainer.appendChild(a);
	}
})()