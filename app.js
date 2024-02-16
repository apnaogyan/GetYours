const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', (event) => {
    const messagesContainer = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = event.data;
    messagesContainer.appendChild(messageDiv);
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    socket.send(message);
    messageInput.value = '';
}
