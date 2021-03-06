# Customize Chrome Theme Extension 🌑👩‍💻
This extension is avaible on Chrome here: 

## Features 
<ul> 
  <li> Record the window 📹</li>
  <li> Save any page as a single file 📓 </li>
  <li> Color picker 🎨</li>
  <li> Custom theme 🖌</li>
</ul> 

## Functionalities explaination
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
    //every 100 milliseconds the stream data will ne stored in the recordedChunks array
    mediaRecorder.start(100);
    return mediaRecorder;
}
  ```


### Save any page as a single file
Implementation

### Color picker
```html
<div id="color-picker">
    <input type="color" id="head" name="head" value="#e66465">
    <label for="head">Head</label>
</div>
```

### Custom Theme
```html
<input id="background-image" type="file">
```

```javascript
document.getElementById('background-image').addEventListener('change', readURL, true);

function readURL() {
    var file = document.getElementById('background-image').files[0];
    var reader = new FileReader();
    var readFile = reader.readAsDataURL(file);

    reader.onloadend = function() {
        document.getElementById("main-background-image").style.backgroundImage = "url(" + reader.result + ")";
    }

    if (file) {
        readFile;
    } else {}
}
```
