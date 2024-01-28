 // Function to load the COCO-SSD model and start webcam
 async function startWebcam() {
  const webcam = document.getElementById('webcam');
  const outputCanvas = document.getElementById('output');
  const carCountSpan = document.getElementById('carCount');

  // Load COCO-SSD model
  const model = await cocoSsd.load();

  // Access the webcam
  const stream = await navigator.mediaDevices.getUserMedia({ 'video': true });
  webcam.srcObject = stream;

  // Detect objects in each frame
  webcam.addEventListener('loadeddata', async () => {
      while (true) {
          const predictions = await model.detect(webcam);
          renderPredictions(predictions, outputCanvas, carCountSpan);

          // Adjust the frame rate as needed
          await new Promise(resolve => setTimeout(resolve, 100));
      }
  });
}
const carCountHistory = [];

// Flag to track if CSV file has been downloaded
let csvDownloaded = false;

// Function to save carCount values to CSV
function saveToCSV() {
    const csvContent = "data:text/csv;charset=utf-8," +
        carCountHistory.map(value => value.toString()).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "carCountHistory.csv");
    document.body.appendChild(link);

    // Trigger download
    link.click();
}

// Function to render predictions on the canvas
function renderPredictions(predictions, canvas, carCountSpan) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let carCount = 0;

    predictions.forEach(prediction => {
        if (prediction.class === 'car' && prediction.score >= 0.5) {
            // Draw bounding box
            ctx.beginPath();
            ctx.rect(
                prediction.bbox[0],
                prediction.bbox[1],
                prediction.bbox[2],
                prediction.bbox[3]
            );
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';
            ctx.fillStyle = 'red';
            ctx.stroke();
            ctx.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                prediction.bbox[0],
                prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
            );

            // Count recognized cars
            carCount++;
        }
    });

    // Update car count
    carCountSpan.textContent = carCount;

    // Store carCount in history
    carCountHistory.push(carCount);

    // Check if carCount went back to zero and save to CSV
    if (carCount === 0 && carCountHistory.length > 1 && !csvDownloaded) {
        saveToCSV();
        // Set flag to true to avoid repeated downloads
        csvDownloaded = true;
    } else if (carCount !== 0) {
        // Reset flag when carCount is non-zero
        csvDownloaded = false;
    }
}


// Start the webcam and object recognition
startWebcam();
