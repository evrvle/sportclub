const classes = [
    { name: "Бег", time: "10:00", maxParticipants: 10, currentParticipants: 0 },
    { name: "Плавание", time: "11:00", maxParticipants: 8, currentParticipants: 0 },
    { name: "Акробатика", time: "12:00", maxParticipants: 15, currentParticipants: 0 },
];

function renderSchedule() {
    const scheduleDiv = document.getElementById("schedule");
    scheduleDiv.innerHTML = '';

    classes.forEach((classItem, index) => {
        const isFull = classItem.currentParticipants >= classItem.maxParticipants;
        
        const classCard = `
            <div class="card mb-3 ${isFull ? 'full' : ''}">
                <div class="card-body">
                    <h5 class="card-title">${classItem.name}</h5>
                    <p class="card-text">Время: ${classItem.time}</p>
                    <p class="card-text">Максимум участников: ${classItem.maxParticipants}</p>
                    <p class="card-text">Записано участников: ${classItem.currentParticipants}</p>
                    <button class="btn btn-primary" onclick="register(${index})" ${isFull ? 'disabled' : ''}>Записаться</button>
                    <button class="btn btn-danger" onclick="cancel(${index})" ${classItem.currentParticipants === 0 ? 'disabled' : ''}>Отменить запись</button>
                </div>
            </div>`;
        
        scheduleDiv.innerHTML += classCard;
    });
}

function register(index) {
    if (classes[index].currentParticipants < classes[index].maxParticipants) {
        classes[index].currentParticipants++;
        renderSchedule();
    }
}

function cancel(index) {
    if (classes[index].currentParticipants > 0) {
        classes[index].currentParticipants--;
        renderSchedule();
    }
}

// Инициализация страницы
renderSchedule();