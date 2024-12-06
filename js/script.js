
function getData(){

const postcode = document.getElementById('location').value;
const apiKey = 'f900e05279038e327d4fb869d1f9b013';

fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=${postcode}`)
.then(response => response.json())
.then(data => {
    const weatherDescription = data.current?.weather_descriptions[0];
    
        const weatherDegrees = data.current?.temperature;

        const weatherDate = data.location?.localtime;
        updateDate(weatherDate);

        const weatherImage = data.current?.weather_icons[0];

        document.getElementById('weather_image').src = weatherImage;
        document.getElementById('weather_text').innerText = weatherDescription;
        document.getElementById('degrees').innerText = `${weatherDegrees}°C`;
        

        document.getElementById('weather_info').style.display = 'block';
})

.catch(error => console.error(error));

}

function updateDate(weatherDate) {
    const dateElement = document.getElementById('date');
  
    // Parse the input date
    const dateObj = new Date(weatherDate);
  
    // Get day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[dateObj.getDay()];
  
    const date = dateObj.getDate();
    const suffix = (date % 10 === 1 && date !== 11) ? 'st' :
                   (date % 10 === 2 && date !== 12) ? 'nd' :
                   (date % 10 === 3 && date !== 13) ? 'rd' : 'th';
  
    // Get month name
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[dateObj.getMonth()];
  
    // Get year
    const year = dateObj.getFullYear();
  
    // Combine into the desired format
    const formattedDate = `${dayName} ${date}${suffix} ${monthName} ${year}`;
  
    // Update the HTML element
    dateElement.textContent = formattedDate;
  }

