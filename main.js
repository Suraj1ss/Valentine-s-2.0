// Countdown Timer
function updateTimer() {
    let eventDate = new Date('February 14, 2025 00:00:00').getTime();
    let now = new Date().getTime();
    let diff = eventDate - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateTimer, 1000);
updateTimer();

// Love Quotes
const quotes = [
    "Love is not about how many days, months, or years you have been together...",
    "You are my today and all of my tomorrows...",
    "The best thing to hold onto in life is each other...",
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Love Message Generator
const messages = [
    "You are my sunshine on a rainy day!",
    "I can't imagine my life without you.",
];

function generateMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('love-message').innerText = messages[randomIndex];
}

// Send SMS via WhatsApp
function sendSMS() {
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    if (phone.trim() === '' || message.trim() === '') {
        alert('Please enter a phone number and message!');
        return;
    }
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Chat System
function sendMessage() {
    let message = document.getElementById('chatInput').value;
    if (message.trim() === '') {
        alert('Please enter a message!');
        return;
    }
    
    let chatBox = document.getElementById('chatBox');
    let newMessage = document.createElement('p');
    newMessage.textContent = `You: ${message}`;
    chatBox.appendChild(newMessage);

    let chatData = JSON.parse(localStorage.getItem('chat')) || [];
    chatData.push({ user: 'You', text: message });
    localStorage.setItem('chat', JSON.stringify(chatData));
    
    document.getElementById('chatInput').value = '';
}

// Load Chat Messages
function loadChat() {
    let chatData = JSON.parse(localStorage.getItem('chat')) || [];
    let chatBox = document.getElementById('chatBox');
    chatData.forEach(msg => {
        let msgElement = document.createElement('p');
        msgElement.textContent = `${msg.user}: ${msg.text}`;
        chatBox.appendChild(msgElement);
    });
}
window.onload = loadChat;
