
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Fetch weather data for Udon Thani, Thailand from OpenWeatherMap API
const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?forecast=hourly_3h&daily=weathericon,current_weather_temperature_2m_3h&timezone=Asia/Bangkok&hourly=temperature_2m_3h,precipitation_hours&latitude=17.4134&longitude=102.7855';

fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.current_weather_temperature_2m_3h) {
            const temperature = data.current_weather_temperature_2m_3h[0].value;
            document.getElementById('weather').textContent = `${temperature}°C`;
        } else {
            throw new Error('Weather data not available');
        }
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').textContent = 'N/A';
    });
    
    let pageVisits = localStorage.getItem('pageVisits') || 0;
    pageVisits++;
    localStorage.setItem('pageVisits', pageVisits);
    document.getElementById('pageVisits').textContent = pageVisits;

    document.addEventListener('DOMContentLoaded', function () {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('mouseover', function () {
                this.classList.add('hovered');
            });

            card.addEventListener('mouseout', function () {
                this.classList.remove('hovered');
            });
        });
    });