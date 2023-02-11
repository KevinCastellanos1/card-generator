const form = document.getElementById('card-form');
const nameInput = document.getElementById('name');
const selectDay = document.getElementById('special-day-select');
const messageInput = document.getElementById('message');
const cardContainer = document.getElementById('card-container');



const createCard = (name, select, message ) =>{
    const card =  `
        <div class="card">
            <h2>Happy ${select} to the most amazing person ${name},</h2>
            <p>${message}</p>
        </div>
    `;
    return card;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const select = selectDay.value;
    const message = messageInput.value;

    const card = createCard(name, select, message);

    cardContainer.innerHTML = card;
    cardContainer.style.display = "block";
});