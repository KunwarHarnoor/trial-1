// let questionIndex = 0;

// const conversation = [
//     { question: "What is your name?", expectedAnswer: null },
//     { question: "How old are you?", expectedAnswer: null },
//     { question: "What is your favorite color?", expectedAnswer: null },
//     { question: "Where are you from?", expectedAnswer: null }
// ];

// function toggleChatbot() {
//     const chatbot = document.getElementById('chatbot');
//     chatbot.classList.toggle('hidden');

//     const toggleButton = document.getElementById('toggle-chatbot');
//     if (chatbot.classList.contains('hidden')) {
//         toggleButton.textContent = "Open Chatbot";
//     } else {
//         toggleButton.textContent = "Close Chatbot";
//         startConversation();
//     }
// }

// function startConversation() {
//     questionIndex = 0;
//     document.getElementById('chat-area').innerHTML = '';
//     addMessageToChat('bot', conversation[questionIndex].question);
// }

// function sendMessage() {
//     const inputField = document.getElementById('user-input');
//     const message = inputField.value.trim();
//     if (message === "") return;

//     addMessageToChat('user', message);
//     inputField.value = '';

//     if (questionIndex < conversation.length) {
//         conversation[questionIndex].expectedAnswer = message;
//         questionIndex++;
//         setTimeout(() => {
//             if (questionIndex < conversation.length) {
//                 addMessageToChat('bot', conversation[questionIndex].question);
//             } else {
//                 addMessageToChat('bot', "Thank you for the information!");
//             }
//         }, 1000);
//     }
// }

// function addMessageToChat(sender, message) {
//     const chatArea = document.getElementById('chat-area');
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
//     messageElement.textContent = message;
//     chatArea.appendChild(messageElement);
//     chatArea.scrollTop = chatArea.scrollHeight;
// }

// document.getElementById('user-input').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// });
