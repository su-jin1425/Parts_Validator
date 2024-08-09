document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('failureRegisterForm');
    const reportElement = document.getElementById('report');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let report = '';

        // Extract input values
        const airFilter = parseFloat(document.getElementById('air-filter').value);
        const brakeControl = parseFloat(document.getElementById('brake-control').value);
        const exhaustTemp = parseFloat(document.getElementById('exhaust-temp').value);
        const hydraulicPump = parseFloat(document.getElementById('hydraulic-pump').value);
        const fuelLevel = parseFloat(document.getElementById('fuel-level').value);
        const oilPressure = parseFloat(document.getElementById('oil-pressure').value);
        const pedalSensor = parseFloat(document.getElementById('pedal-sensor').value);
        const speed = parseFloat(document.getElementById('speed').value);
        const systemVoltage = parseFloat(document.getElementById('system-voltage').value);
        const engineTemp = parseFloat(document.getElementById('engine-temp').value);
        const transmissionPressure = parseFloat(document.getElementById('transmission-pressure').value);
        const waterInFuel = parseFloat(document.getElementById('water-in-fuel').value);

        // Validate and generate report
        if (oilPressure < 25 || oilPressure > 65) {
            report += '🔧 Engine Oil Pressure: Replacement Needed\n';
        }
        if (speed > 1800) {
            report += '🏎️ Engine Speed: Replacement Needed\n';
        }
        if (engineTemp > 105) {
            report += '🌡️ Engine Temperature: Replacement Needed\n';
        }
        if (brakeControl < 1) {
            report += '🛑 Brake Control: Replacement Needed\n';
        }
        if (transmissionPressure < 200 || transmissionPressure > 450) {
            report += '⚙️ Transmission Pressure: Replacement Needed\n';
        }
        if (pedalSensor > 4.7) {
            report += '🦶 Pedal Sensor: Replacement Needed\n';
        }
        if (waterInFuel > 1800) {
            report += '💧 Water in Fuel: Replacement Needed\n';
        }
        if (fuelLevel < 1) {
            report += '⛽ Fuel Level: Replacement Needed\n';
        }
        if (systemVoltage < 12.0 || systemVoltage > 15.0) {
            report += '🔋 System Voltage: Replacement Needed\n';
        }
        if (exhaustTemp > 365) {
            report += '🌡️ Exhaust Gas Temperature: Replacement Needed\n';
        }
        if (hydraulicPump > 125) {
            report += '💨 Hydraulic Pump Rate: Replacement Needed\n';
        }
        if (airFilter < 20) {
            report += '🌬️ Air Filter Pressure Drop: Replacement Needed\n';
        }

        if (report === '') {
            report = '✅ All values are within acceptable ranges. No replacement needed.';
            reportElement.style.borderColor = '#4ECDC4';  // Green border for all good
        } else {
            reportElement.style.borderColor = '#FF6B6B';  // Red border if issues found
        }

        // Display the report with a fade-in effect
        reportElement.innerText = report;
        reportElement.classList.add('visible');
        
        // Use setTimeout to ensure the display change has taken effect before fading in
        setTimeout(() => {
            reportElement.style.opacity = '1';
        }, 10);
    });
});