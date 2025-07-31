(() => {
	const projectsAvailable = ["bokena", "wof", "bagus", "saveGod"] // Les noms de projets doivent match avec les id css et les noms de pages html

	const currentProject = document.body.getAttribute("projet");

	const filteredProjects = projectsAvailable.filter(project => project !== currentProject); // enlève le projet courant de la liste

	const projects = []
	while (projects.length < 3 && filteredProjects.length > 0) { // on prend 3 projets au hasard
		const randomNumber = Math.floor(Math.random() * filteredProjects.length);
		projects.push(filteredProjects[randomNumber]);
		filteredProjects.splice(randomNumber, 1); // on retire le projet choisi pour ne pas le choisir à nouveau
	}

	const projectContainer = document.getElementById("projets");

	for (const project of projects) {
		const a = document.createElement("a");
		a.href = project + ".html";
		a.id = project;
		a.classList.add("projet");

		switch (project) { 
			case "bokena":
			case "wof":
				break;
			case "bagus":
				const p = document.createElement("p");
				p.textContent = "Projet en cours...";
				a.appendChild(p);

				const h2 = document.createElement("h2");
				h2.innerHTML = "- BAGUS ASCENT -<br>TURN-BASED RPG";
				a.appendChild(h2);
				break;

			case "saveGod":
				const p2 = document.createElement("p");
				p2.textContent = "Projet en cours...";
				a.appendChild(p2);

				const h22 = document.createElement("h2");
				h22.innerHTML = "- SAVE GOD -<br>ROGUELITE PUZZLE";
				a.appendChild(h22);
				break;

			default:
				console.error("Projet inconnu:", project);
				break;
		}

		projectContainer.appendChild(a);
	}
})()