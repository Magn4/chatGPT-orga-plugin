document.addEventListener('DOMContentLoaded', () => {
    console.log("Content script loaded");
  
    // Function to add pin button to each chat
    function addPinButtons() {
      const chats = document.querySelectorAll('.chat-item'); // Update this selector based on ChatGPT's chat item class
  
      if (chats.length > 0) {
        console.log("Chats found:", chats.length);
        chats.forEach(chat => {
          const pinButton = document.createElement('button');
          pinButton.textContent = 'Pin';
          pinButton.style.marginLeft = '10px';
          pinButton.onclick = () => {
            const chatTitle = chat.textContent || 'Untitled Chat'; // Assuming chat title can be derived from the chat item text
            chrome.storage.sync.get(['pinnedChats'], (result) => {
              const pinnedChats = result.pinnedChats || [];
              pinnedChats.push(chatTitle);
              chrome.storage.sync.set({ pinnedChats }, () => {
                console.log(`Pinned chat: ${chatTitle}`);
              });
            });
          };
          chat.appendChild(pinButton);
        });
      } else {
        console.log("No chats found.");
      }
    }
  
    // Adding pin buttons when the chats container is found
    const chatsContainer = document.querySelector('.chats-container'); // Update this selector based on ChatGPT's chat container class
    if (chatsContainer) {
      console.log("Chats container found");
      addPinButtons();
    } else {
      console.log("Chats container not found");
    }
  });
  