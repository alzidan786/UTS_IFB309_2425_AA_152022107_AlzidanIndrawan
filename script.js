document.addEventListener('DOMContentLoaded', () => {
  // URL endpoint yang akan diakses
  const apiUrl = 'http://localhost:3000/api/data';

  // Fungsi untuk mengambil data dari server
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Terjadi kesalahan saat mengambil data:', error);
    }
  }

  // Fungsi untuk menampilkan data di halaman web
  function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = `
      <h3>Data Sensor</h3>
      <p>Temperature: ${data.sensor.temperature} °C</p>
      <p>Humidity: ${data.sensor.humidity} %</p>
      <p>pH Level: ${data.sensor.pH}</p>
      <h3>Actuator</h3>
      <p>Pump Status: ${data.actuator.pumpStatus ? 'On' : 'Off'}</p>
    `;
  }

  // Panggil fungsi untuk mengambil data saat halaman dimuat
  fetchData();
});