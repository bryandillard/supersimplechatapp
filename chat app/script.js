const messageForm = document.querySelector('.message-input form');
const messageInput = document.querySelector('.message-input input[type="text"]');
const chatHistory = document.querySelector('.chat-history ul');

messageForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the message input value
  const message = messageInput.value;

  // Create a new list item with the message
  const li = document.createElement('li');
  li.classList.add('message', 'sent');
  li.innerHTML = `<span class="message-text">${message}</span>`;
  chatHistory.appendChild(li);

  // Clear the message input field
  messageInput.value = '';
});
