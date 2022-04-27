# Customize Chrome Theme Extension 🌑👩‍💻
This extension is avaible on Chrome here: 

## Features 
<ul> 
  <li> Record the window 📹</li>
  <li> Save any page as a single file 📓 </li>
  <li> Color picker 🎨</li>
  <li> Custom theme 🖌</li>
</ul> 

## For Developers
### Record the window
Steps to record the window:
<ul>
  <li>Ask the user to select the input source (screen or window) to record.  </li>  
  <li>Create a MediaRecorder to store the MediaStream.</li>
  <li>Store once the screen recording has stopped.</li>
</ul>

  ```javascript
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
    mediaRecorder.start(100);
    return mediaRecorder;
}
  ```


### Save any page as a single file
Implementation

### Color picker
Implementation

### Custom Theme
Implementation
