let start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    mediaRecorder;

start.addEventListener('click', async function() {
    let stream = await recordScreen();
    let mimeType = 'video/webm';
    mediaRecorder = createRecorder(stream, mimeType);
    let node = document.createElement('p');
    node.textContent = "Started recording";
    document.body.appendChild(node);
});

stop.addEventListener('click', function() {
    mediaRecorder.stop();
    let node = document.createElement('p');
    node.textContent = "Stopped recording";
    document.body.appendChild(node);
});

async function recordScreen() {
    return await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: { mediaSource: 'screen' }
    });
}

function createRecorder(stream, mimeType) {
    //media store
    let recordedChunks = [];

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function(e) {
        if (e.data.size > 0) {
            recordedChunks.push(e.data);
        }
    };
    mediaRecorder.onstop = function() {
        saveFile(recordedChunks);
        recordedChunks = [];
    };
    //every 200 milliseconds the stream data will ne stored in the recordedChunks array
    mediaRecorder.start(200);
    return mediaRecorder;
}

function saveFile(recordedChunks) {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });

    let filename = window.prompt('Enter a name for your video file:'),
        downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = '${filename}.webm';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(blob);
    document.body.removeChild(downloadLink);

}