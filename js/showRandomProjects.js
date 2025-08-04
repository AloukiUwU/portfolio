(() => {
	const projectsAvailable = ["bokena", "bagus", "tasqManager", "handicapy", "ballemssoyr"] // Les noms de projets doivent match avec les id css et les noms de pages html

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
			case "bagus":
			case "tasqManager":
			case "handicapy":
				break;
			case "ballemssoyr":
				const p = document.createElement("p");
				p.textContent = "Projet in progress...";
				a.appendChild(p);

				const h2 = document.createElement("h2");
				h2.innerHTML = "- BALLEMSSOYR -<br>A GAME ABOUT <br>SWINGS";
				a.appendChild(h2);
				break;

			default:
				console.error("Unknown project:", project);
				break;
		}

		projectContainer.appendChild(a);
	}
})()