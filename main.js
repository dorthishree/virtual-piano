var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon
$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});

<!------------------------login k liye function--------------------------------->
function login(){
      var name = $('input').val();
            if(name.length > 2){
                var message = "Hey, " + name;
                $('.main .user-name').text(message);
                $('.background').addClass('hidden'); $('.main').removeClass('hidden');
                $('.main').addClass('animated fadeInLeft');
            }
            else{
                $('input').addClass('error');
            }
} 
$('.login-form button').on('click', function() {
          login();
});
$('body').on('keypress',function(event) {
            if (event.keyCode == 13)
         login();
});
<!--------------------function for toggle songs----------------------------------------->
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
<!---------------------current time and progress bar---------------------------------->        
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
   }
   progress.style.width = value + "%";
   progress.style.backgroundColor= "red";
    
}

<!------------------ variables for song--------------------------------------->
    var songs = [{
        'name': 'Your Song',
        'artist': '(Rita Ora)',
        'fileName': 'songs/song1.mp3',
       'image':'song1.jpg',
       'thum':'1.jpg',
       'time':'03:00',
       'album':'Rita Ora - Your Song@2017'
    },
                {
        'name': 'Shape Of You',
        'artist': '(Ed Sheeran)',
        'fileName': 'songs/song2.mp3',
        'image':'song2.jpg',
        'time':'03:53',
        'thum':'song2.jpg',
        'album':'Shape of You by Ed Sheeran'
    },
                {
        'name': 'Let Me Love You',
        'artist': '(DJ Snake)',
        'fileName': 'songs/song3.mp3',
        'image':'song3.jpg',
        'thum':'song3.jpg',
        'time':'03:26',
        'album':'Encore'
    },
                {
        'name': 'I Am The One',
        'artist': '(DJ Khaled)',
        'fileName': 'songs/song4.mp3',
        'image':'song4.jpg',
        'time':'03:29',
        'thum':'song4.jpg',
         'album':'Grateful'
    },
                {
        'name': 'That\'s What I Like',
        'artist': '(Bruno Mars)',
        'fileName': 'songs/song5.mp3',
        'image':'song5.jpg',
        'time':'04:48',
        'thum':'song5.jpg',
         'album':'24K Magic'
    },
                {
        'name': 'Mein Tera Boyfriend',
        'artist': '(Arjit Singh)',
        'fileName': 'songs/song6.mp3',
        'image':'song6.jpg',
        'thum':'song6.jpg',
        'time':'03:08',
         'album':'Raabta'
    },
                 {
        'name': 'All My Love',
        'artist': '( Cash Cash)',
        'fileName': 'songs/song8.mp3',
        'image':'song8.jpg',
        'thum':'song8.jpg',
        'time':'03:11',
         'album':'All My Love'
                 },
               {
        'name': 'Rise',
        'artist': '( ka1ty perry)',
        'fileName': 'songs/song7.mp3',
        'image':'song9.jpg',
        'thum':'song9.jpg',
        'time':'03:42',
         'album':'rise@katy perry'
                 },
                {
        'name': 'Na Ja',
        'artist': '( Pav Dharia )',
        'fileName': 'songs/song10.mp3',
        'image':'song10.jpg',
        'thum':'song10.jpg',
         'time':'03:22',
         'album':'Na Ja'
                 },
                {
        'name': 'Perfect Two',
        'artist': '( Auburn)',
        'fileName': 'songs/song11.mp3',
        'image':'song11.jpg',
            'time':'04:15',
        'thum':'song11.jpg',
         'album':'Perfect Two'
                 },
                {
        'name': 'Mercy',
        'artist': '( Badshah)',
        'fileName': 'songs/song12.mp3',
        'image':'song12.jpg',
        'thum':'song12.jpg',
        'time':'02:42',
         'album':'Mercy by Badshah'
                 },
                {
        'name': 'Dream Boy',
        'artist': '(By Babbal rai)',
        'fileName': 'songs/song13.mp3',
        'image':'song13.jpg',
        'time':'03:12',
        'thum':'song13.jpg',
         'album':' Dream Boy'
                 },
        {
            
        'name': 'Excuses',
        'artist': '(By Garry Sandhu)',
        'fileName': 'songs/song14.mp3',
        'image':'song14.jpg',
        'time':'04:36',
        'thum':'song14.jpg',
         'album':'Excuses@GarrySandhu'
                 },
                ]
    <!------------------current songs ki detail--------------->
function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','images/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
}
function addSongNameClickEvent(songObj,position) {
var id = '#song' + position;
var songName = songObj.fileName;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
     changeCurrentSongDetails(songObj);
}
});
}
<!----------------------------------------------------------->
    $('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,13,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 13) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})
<!------------------forward/backward--------------------->
   $('.fa-step-forward').click(function(){
        var audio = document.querySelector("audio");
        if(currentSongNumber <songs.length) {
          
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
       else{
           $('.fa-step-forward').addClass('disabled');
       }
 
      });   
       
        $('.fa-step-backward').click(function(){
        var audio = document.querySelector("audio");
        if(currentSongNumber <songs.length) {
      
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber - 1;
    }
       else{
           $('.fa-step-backward').addClass('disabled');
       }
       
       
        });
<!-----------------------local song-------------------------------->
var $audio = $('#myAudio');
$('input').on('change', function(e) {
  var target = e.currentTarget;
  var file = target.files[0];
  var reader = new FileReader();
  
  console.log(saudio[0]);
   if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $audio.attr('src', e.target.result);
            $audio.play();
        }
        reader.readAsDataURL(file);
    }
});

<!----------------------------piano ko lanne k liye music ko hide krna-------------------------------->

 $('.main .vir').on('click', function() {
      $('.music').addClass('hidden'); 
     $('.piano').removeClass('hidden');
 
     $('.piano').addClass('animated slideInRight');
      
 });
 $('.main .home').on('click', function() {
      $('.piano').addClass('hidden'); 
     $('.music').removeClass('hidden');
 
     
 });
<!-----------------window on load function-------------------------------------->
       
window.onload = function(songObj) {
    changeCurrentSongDetails(songs[0]);
       for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.time').text(obj.time);
//        song.find('.song-image').attr('src','images/' + songObj.thum);
        addSongNameClickEvent(obj,i+1)
    }
}
updateCurrentTime();
setInterval(function() {
updateCurrentTime();
},1000);
updateProgress();
setInterval(function() {
updateProgress();
},1000);
<!-------------------random k liye code-------------------------------------->


function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}

//shuffle
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}	





<!-------------------volume slider ka code---------------------------->
    //////////////////////////////volumeslider function///////////////////////////////
function setvolume() 
{						
	var song = document.querySelector('audio');
	song.volume = slider.value/100;
}
// increase and decrease the volume by volume slider		
$('#slider').on('mousemove', function() 
{								
	setvolume();
});

/////////////////increase the volume of sidebar on click/////////////////
$('#slider').on('click', function() 
{								
	setvolume();
});

<!---------------------------------------------------------->