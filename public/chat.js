const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const toggleChatbot = document.getElementById("toggle-chatbot");
const chatbotContainer = document.getElementById("chatbot-container");
const closeChatbot = document.getElementById("close-chatbot");

// Respuestas predefinidas del chatbot
const botResponses = {
  "hola": "¡Hola mapache! ¿Cómo puedo ayudarte?",
  "adiós": "¡Hasta luego! Que tengas un buen día.",
  "¿cómo estás?": "¡Estoy aquí para ayudarte! 😊",
  "default": "Lo siento, no entiendo eso. ¿Puedes intentar otra cosa?"
};

// Función para agregar mensajes al chat
function addMessage(content, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);

  if (sender === "bot") {
    // Agregar ícono del chatbot
    const botIcon = document.createElement("img");
    botIcon.src = "https://cdn-icons-png.flaticon.com/512/4712/4712109.png"; // URL del ícono
    botIcon.alt = "Chatbot";
    message.appendChild(botIcon);
  }

  const messageContent = document.createElement("div");
  messageContent.classList.add("content");
  messageContent.textContent = content;

  message.appendChild(messageContent);
  chatBody.appendChild(message);

  chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo automáticamente
}

// Manejar el envío de mensajes
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim();

  if (userMessage) {
    // Muestra el mensaje del usuario
    addMessage(userMessage, "user");

    // Respuesta del chatbot
    const botMessage = botResponses[userMessage.toLowerCase()] || botResponses["default"];
    setTimeout(() => addMessage(botMessage, "bot"), 500);

    // Limpia el campo de entrada
    userInput.value = "";
  }
});

// Permitir enviar mensajes con Enter
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

// Mostrar u ocultar el chatbot
toggleChatbot.addEventListener("click", () => {
  chatbotContainer.classList.toggle("hidden");
});

// Cerrar el chatbot
closeChatbot.addEventListener("click", () => {
  chatbotContainer.classList.add("hidden");
});
