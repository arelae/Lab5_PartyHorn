// main.js

// Input field that serves as the textual indicator of sound level
// When this field is changed, the slider bar should move correspondingly.
document.getElementById("volume-number").addEventListener("input", function() {
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
});

// Conversely, whenever the slider bar changes this field should update as well.
document.getElementById("volume-slider").addEventListener("input", function() {
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;
});

// The volume icon should display the correct number of bars based upon this value  (see below for ranges)
// Volume icon that change depending on the sound level
document.getElementById("volume-number").addEventListener("input", function() {
    let value = document.getElementById("volume-number").value;
    if(value == 0){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-0.svg";
    }
    else if(value <= 33){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-1.svg";
    }
    else if(value <= 66){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-2.svg";
    }
    else{
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-3.svg";
    }
});
document.getElementById("volume-slider").addEventListener("input", function() {
    let value = document.getElementById("volume-slider").value;
    if(value == 0){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-0.svg";
    }
    else if(value <= 33){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-1.svg";
    }
    else if(value <= 66){
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-2.svg";
    }
    else{
        document.getElementById("volume-image").src = "assets/media/icons/volume-level-3.svg";
    }
});

// This field is editable - the sound level of the <audio> element should be changed when editing this input field
// Slider that serves visual controller for sound level
// Radio that switches between different horn sounds
document.getElementById("audio-selection").onclick = function() {myFunction()};
function myFunction() {
    if(document.getElementById("radio-air-horn").checked == true){
        document.getElementById("sound-image").src = "assets/media/images/air-horn.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/air-horn.mp3";
    }
    else if(document.getElementById("radio-car-horn").checked == true){
        document.getElementById("sound-image").src = "assets/media/images/car.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/car-horn.mp3";
    }
    else if(document.getElementById("radio-party-horn").checked == true){
        document.getElementById("sound-image").src = "assets/media/images/party-horn.svg";
        document.getElementById("horn-sound").src = "assets/media/audio/party-horn.mp3";
    }
}

// Button that plays the horn sound
document.getElementById("honk-btn").onclick = function(event) {myFunction2()};
function myFunction2() {
    event.preventDefault();
    let value = document.getElementById("volume-slider").value;
    let sound = document.getElementById("horn-sound");
    value = sound.volume = value/100;
    sound.play();
}