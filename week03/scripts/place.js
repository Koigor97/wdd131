document.addEventListener("DOMContentLoaded", function () {
  // Footer: Current year and last modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

  // Static weather data for Sierra Leone
  const temperature = 27; // Updated static temperature in °C for Sierra Leone
  const windSpeed = 5; // Updated static wind speed in km/h

  function calculateWindChill(temp, wind) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  }

  // Check if wind chill is applicable based on conditions
  if (temperature <= 10 && windSpeed > 4.8) {
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windChillFactor + " °C";
  } else {
    document.getElementById("windchill").textContent = "N/A";
  }
});
