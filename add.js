document.addEventListener('DOMContentLoaded', async () => {
    const url = 'https://steam-api7.p.rapidapi.com/appDetails/website/271590';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '82a1a9aef4msh57aadd6611f10f9p19a85ajsn4b3c1c1dfef0',
        'X-RapidAPI-Host': 'steam-api7.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.text();
      const puzzleContainer = document.getElementById('puzzle-container');
      puzzleContainer.textContent = data;
    } catch (error) {
      console.error(error);
    }
  });
