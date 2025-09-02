// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(async (reg) => {
      console.log("✅ Service Worker registered");
  
      if ('periodicSync' in reg) {
        try {
          await reg.periodicSync.register("check-stocks", {
            minInterval: 15 * 60 * 1000 // 15 minutes
          });
          console.log("✅ Periodic Sync registered");
        } catch (err) {
          console.error("⚠️ Periodic sync registration failed", err);
        }
      }
    });
  }
  
  // Request notification permission
  document.getElementById("enable").addEventListener("click", async () => {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      alert("Notifications enabled!");
    } else {
      alert("Notifications blocked.");
    }
  });
  

  let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing
  e.preventDefault();
  // Save the event for later
  deferredPrompt = e;
  // Show the button
  installBtn.hidden = false;
});

// Handle button click
installBtn.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }
  // Show the install prompt
  deferredPrompt.prompt();

  // Wait for user to respond
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to install: ${outcome}`);

  // Clear the deferredPrompt
  deferredPrompt = null;
  // Hide the button
  installBtn.hidden = true;
});
