// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;

var activeCompScenePill = null;
var activeCompVidID = 0;


function selectGalleryVideo(methodPill, scenePill, modePill, metricsPill) {
    // Your existing logic for video selection
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    if (activeModePill) {
        activeModePill.classList.remove("active");
    }
    if (activeMetricsPill) {
        activeMetricsPill.classList.remove("active");
    }

    if (modePill) {
        modePill.classList.add("active");
        activeModePill = modePill;
    }
    if (metricsPill) {
        metricsPill.classList.add("active");
        activeMetricsPill = metricsPill;
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");

    method = methodPill.getAttribute("data-value");
    scene = scenePill.getAttribute("data-value");
    mode = activeModePill ? activeModePill.getAttribute("data-value") : "";
    metrics = activeMetricsPill ? activeMetricsPill.getAttribute("data-value") : "";

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "assets/videos/" + metrics + "/" + scene + "_" + method + "_" + mode + ".mp4";
    video_active.load();
}


function selectCompVideo(scenePill, samplePill) {
    // Your existing logic for video selection

    if (activeCompScenePill) {
        activeCompScenePill.classList.remove("active");
    }
    if (activeCompSamplePill) {
        activeCompSamplePill.classList.remove("active");
    }
    activeCompScenePill = scenePill;
    activeCompSamplePill = samplePill;
    scenePill.classList.add("active");
    samplePill.classList.add("active");
    scene = scenePill.getAttribute("data-value");
    sample = samplePill.getAttribute("data-value");
    // console.log(scene);

    // swap video to avoid flickering
    activeCompVidID = 1 - activeCompVidID;
    var video_active = document.getElementById("compGridVideo" + activeCompVidID);
    var video_hidden = document.getElementById("compGridVideo" + (1 - activeCompVidID));
    video_active.src = "assets/videos/supp_compare/" + scene + "/compare_" + sample  + ".mp4";
    console.log(video_active.src);
    video_active.load();
}