const videoUrl = 'https://steam-api7.p.rapidapi.com/media/videos/271590';
        const descriptionUrl = 'https://steam-api7.p.rapidapi.com/appDetails/detailedDescription/271590?plainText=true';
        const url = 'https://steam-api7.p.rapidapi.com/search?query=Grand%20Theft&limit=5';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8b2406591fmsh7e1778906aba802p19c05cjsn8882346b4d52',
                'X-RapidAPI-Host': 'steam-api7.p.rapidapi.com'
            }
        };
        async function fetchAndDisplayVideos() {
            try {
                const response = await fetch(url, options);
	            const result = await response.text();
                console.log(result);
                
                const videoResponse = await fetch(videoUrl, options);
                const videoData = await videoResponse.json();
                const descriptionResponse = await fetch(descriptionUrl, options);
                let descriptionData = await descriptionResponse.text();

                descriptionData = descriptionData.replace('{"detailedDescription":"', '');
                const videosContainer = document.getElementById('videos-container');
                videoData.videos.forEach((video, index) => {
                    const videoElement = document.createElement('div');
                    videoElement.classList.add('video-item');
                    const thumbnailContainer = document.createElement('div');
                    thumbnailContainer.classList.add('thumbnail-container');
                    const thumbnailImg = document.createElement('img');
                    thumbnailImg.src = video.thumbnail;
                    thumbnailContainer.appendChild(thumbnailImg);
                    const playButton = document.createElement('div');
                    playButton.classList.add('play-button');
                    playButton.innerHTML = '<img src="https://img.icons8.com/ios/50/ffffff/play--v2.png"/>';
                    playButton.addEventListener('click', () => {
                        window.open(video.mp4, '_blank');
                    });
                    thumbnailContainer.appendChild(playButton);
                    videoElement.appendChild(thumbnailContainer);
                    const videoDescription = document.createElement('div');
                    videoDescription.classList.add('video-description');
                    videoDescription.innerHTML = truncateDescription(descriptionData); 
                    videoElement.appendChild(videoDescription);
                    const readMoreLink = document.createElement('a');
                    readMoreLink.classList.add('read-more');
                    readMoreLink.textContent = 'Read more';
                    readMoreLink.addEventListener('click', () => {
                        videoDescription.classList.toggle('expanded');
                        if (readMoreLink.textContent === 'Read more') {
                            readMoreLink.textContent = 'Read less';
                        } else {
                            readMoreLink.textContent = 'Read more';
                        }
                    });
                    videoElement.appendChild(readMoreLink);
                    videosContainer.appendChild(videoElement);
                });
            } catch (error) {
                console.error(error);
            }
        }
        function truncateDescription(description) {
            const maxLength = 200; 
            if (description.length > maxLength) {
                return description.substring(0, maxLength) + '...';
            }
            return description;
        }
        fetchAndDisplayVideos();










