function sendMessage() {
    var userInput1 = document.getElementById("user-input");
    if(document.getElementById("user-input").value=='')
    {
         userInput1.style.border="2px solid red";
         userInput1.placeholder="Required..."
         
    }
    else{
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    // Display user mess    age
    var userMessage = document.createElement("p");
    userInput1.style.border="1px solid #ccc";
    userInput1.placeholder="Type your message..."
    userMessage.className = "user-message";
    userMessage.style.marginRight="50px"
    userMessage.style.backgroundColor="gray";
    userMessage.style.padding="13px";
    userMessage.style.borderRadius="15px"
    userMessage.style.color="white";
    userMessage.style.boxShadow="2px 3px 10px #ccc";
    userMessage.style.fontFamily="'Trirong', serif";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    var botResponse = getBotResponse(userInput);
    var botMessage = document.createElement("p");
    var image=document.createElement("img")
    botMessage.className = "bot-message";
    botMessage.style.marginLeft="50px"
    botMessage.style.backgroundColor="silver";
    botMessage.style.padding="13px";
    botMessage.style.borderRadius="15px"
    botMessage.style.textAlign="right";
    botMessage.style.marginLeft="50px";
    botMessage.style.boxShadow="2px 3px 10px #ccc";
    botMessage.style.fontFamily="'Trirong', serif";
    botMessage.textContent =    botResponse;
    chatBox.appendChild(botMessage);


    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear user input field
    document.getElementById("user-input").value = "";
    }
}

function getBotResponse(userInput) {

    var responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there!",
        "how are you?": "I'm good, thank you! How about you?",
        
    };


    return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that.";
}




