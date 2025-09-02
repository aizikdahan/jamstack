self.addEventListener('install', (event) => {
    console.log("📥 Service Worker installed");
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log("🚀 Service Worker activated");
  });
  
  self.addEventListener('periodicsync', async (event) => {
    if (event.tag === "check-stocks") {
      console.log("🔄 Checking stock prices...");
  
      try {
        // Example: Replace with your real stock API
        const res = await fetch("https://market.tipranks.com/api/quotes/GetQuotes?app_name=tr&tickers=SOXX");
        const data = await res.json();
        const price = data[0].price; // BTC price in USD
  
        console.log("💰 Current Price:", price);
  
      
          self.registration.showNotification("🚀 Stock Alert", {
            body: `SOXX reached $${price}`,
            icon: "/stock.png"
          });
        
      } catch (e) {
        console.error("❌ Stock check failed", e);
      }
    }
  });
  