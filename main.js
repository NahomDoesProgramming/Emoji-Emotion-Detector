Webcam.set
({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='captured_image' src= " + data_uri + "/>";
    });
}
console.log("ml5 version:" + ml5.version);
function modelLoaded()
{
    console.log("model loaded!");
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SABiTqFuo/model.json', modelLoaded);
function speak()
{
    var speak = window.speechSynthesis;
    speach_data1 = "The first prediction is " + prediction1;
    speach_data2 = "The second prediction is " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speach_data1 + speach_data2);
    synth.speak(utterThis)
}