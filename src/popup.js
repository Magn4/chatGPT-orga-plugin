document.addEventListener('DOMContentLoaded', () => {
  const options = [
    'hideHomeFeed',
    'hideVideoSidebar',
    'hideRecommended',
    'hideLiveChat',
    'hidePlaylist',
    'hideFundraiser',
    'hideEndScreenFeed',
    'hideEndScreenCards'
  ];

  // Load saved settings
  chrome.storage.sync.get(options, (result) => {
    options.forEach(option => {
      const checkbox = document.querySelector(`input[name="${option}"]`);
      if (checkbox) {
        checkbox.checked = result[option] || false;
        checkbox.addEventListener('change', (event) => {
          chrome.storage.sync.set({ [option]: event.target.checked }, () => {
            console.log(`Saved ${option}: ${event.target.checked}`);
          });
        });
      }
    });
  });

  // Add event listeners for footer buttons (if needed)
  document.querySelector('button:contains("Donate")').addEventListener('click', () => {
    // Handle donate action
  });

  document.querySelector('button:contains("Request Feature")').addEventListener('click', () => {
    // Handle request feature action
  });

  document.querySelector('button:contains("Support")').addEventListener('click', () => {
    // Handle support action
  });
});
