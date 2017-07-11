 $('.login-form button').on('click', function() {
            var name = $('input').val();
            if(name.length > 2){
                var message = "Hey, " + name;
                $('.main .user-name').text(message);
                $('.background').addClass('hidden'); $('.main').removeClass('hidden');
            }
            else{
                $('input').addClass('error');
            }
                               
        });
        function toggleSong() {
            
            var song = document.querySelector('audio');
            if(song.paused == true) {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                song.play();
            }
            else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                song.pause();
            }
        } 
        $('.play-icon').on('click', function() {
            toggleSong();
        });

        $('body').on('keypress',function(event) {
            if (event.keyCode == 32)
         {
         toggleSong();
}
}); 
        function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
      $('.time-elapsed').text(currentTime);
      $('.song-duration').text(duration);
}
    function updateProgress() {
       var song = document.querySelector('audio');
       var progress =document.querySelector('#progress');
       var value = 0;
       if (song.currentTime > 0) {
       value = Math.floor((100 / song.duration) * song.currentTime);
       console.log(progress);
   }
   progress.style.width = value + "%";
}
   

window.onload = function() {
updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
updateProgress();
setInterval(function() {
updateProgress();
},1000);
}
