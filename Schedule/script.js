const teams = [
    {
        name: "Team A",
        members: ["Alice", "Bob", "Charlie", "David"]
    },
    {
        name: "Team B",
        members: ["Eve", "Frank", "Grace", "Heidi"]
    },
    {
        name: "Team C",
        members: ["Ivy", "Jack", "Kathy", "Leo"]
    },
    {
        name: "Team D",
        members: ["Mallory", "Nina", "Oscar", "Pat"]
    },
    {
        name: "Team E",
        members: ["Quentin", "Rupert", "Sybil", "Trudy"]
    },
    {
        name: "Team F",
        members: ["Victor", "Walter", "Xena", "Yara"]
    },
    {
        name: "Team G",
        members: ["Zara", "Aiden", "Brianna", "Cody"]
    },
    {
        name: "Team H",
        members: ["Diana", "Ethan", "Fiona", "Gabriel"]
    }
];

const matches = [
    {
        date: "2024-09-30",
        time: "10:00 AM",
        team1: "Team A",
        team2: "Team B",
        details: "This is the opening match of the tournament."
    },
    {
        date: "2024-09-30",
        time: "2:00 PM",
        team1: "Team C",
        team2: "Team D",
        details: "A thrilling encounter between these two rivals."
    },
    {
        date: "2024-10-01",
        time: "10:00 AM",
        team1: "Team E",
        team2: "Team F",
        details: "Both teams are looking for their first win."
    },
    {
        date: "2024-10-01",
        time: "2:00 PM",
        team1: "Team G",
        team2: "Team H",
        details: "Expect a nail-biting finish!"
    }
];

function displayTeams() {
    const teamList = document.getElementById("team-list");
    teams.forEach(team => {
        const teamDiv = document.createElement("div");
        teamDiv.className = "team";
        teamDiv.innerText = team.name;
        
        teamDiv.addEventListener('click', () => showTeamMembers(team));
        
        teamList.appendChild(teamDiv);
    });
}

function showTeamMembers(team) {
    document.getElementById("team-modal-title").innerText = `Members of ${team.name}`;
    document.getElementById("team-members").innerText = team.members.join(", ");
    document.getElementById("team-modal").style.display = "block";
}

function displaySchedule() {
    const scheduleContainer = document.getElementById("schedule");
    matches.forEach(match => {
        const matchDiv = document.createElement("div");
        matchDiv.className = "match";
        matchDiv.innerHTML = `
            <h3>${match.date}</h3>
            <p>${match.time}</p>
            <p><strong>${match.team1}</strong> vs <strong>${match.team2}</strong></p>
        `;
        matchDiv.addEventListener('click', () => openModal(match));
        scheduleContainer.appendChild(matchDiv);
    });
}

function openModal(match) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-title").innerText = `${match.team1} vs ${match.team2}`;
    document.getElementById("modal-details").innerText = match.details;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function closeTeamModal() {
    const teamModal = document.getElementById("team-modal");
    teamModal.style.display = "none";
}

document.getElementById("close").addEventListener("click", closeModal);
document.getElementById("close-team").addEventListener("click", closeTeamModal);
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    const teamModal = document.getElementById("team-modal");
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === teamModal) {
        closeTeamModal();
    }
});


document.addEventListener("DOMContentLoaded", () => {
    displayTeams();
    displaySchedule();
});
