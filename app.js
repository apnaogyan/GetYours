const socket = io();

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
}

socket.on('chat message', (msg) => {
    const messagesContainer = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = msg;
    messagesContainer.appendChild(newMessage);
});
