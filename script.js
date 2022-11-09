console.log("Welcome to Spotify");

//intialise
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Mehbooba - Anayat Bhat",filepath: "songs/1.mp3",coverpath: "./images/covers/1.jpg"},
    {songName: "Dhokha - Arijit singh",filepath: "songs/2.mp3",coverpath: "./images/covers/2.jpg"},
    {songName: "Khawab - Munawar",filepath: "songs/3.mp3",coverpath: "./images/covers/3.jpg"},
    {songName: "Tauba - Badshah",filepath: "songs/4.mp3",coverpath: "./images/covers/4.jpg"},
    {songName: "Halki si Barshat - Munawar",filepath: "songs/5.mp3",coverpath: "./images/covers/5.jpg"},
    {songName: "Ijazat - Arijit singh",filepath: "songs/6.mp3",coverpath: "./images/covers/6.jpg"},
    {songName: "Ja Rhe ho - Yasser Desai",filepath: "songs/7.mp3",coverpath: "./images/covers/7.jpg"},
    {songName: "Kalandar - Munawar",filepath: "songs/8.mp3",coverpath: "./images/covers/8.jpg"},
    {songName: "Nagpada ka Rider - Munawar",filepath: "songs/9.mp3",coverpath: "./images/covers/9.jpg"},
    {songName: "Khamoshi - Munawar",filepath: "songs/10.mp3",coverpath: "./images/covers/10.jpg"},

]

songItems.forEach((element ,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    
});

// audioElement.Play();

// Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
 
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'song/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');

    } )
})

document.getElementById('next').addEventListener('click',()=>{
    console.log(songIndex);

    if(songIndex>=9){
        songIndex =0;
    }
    else{
        songIndex+= 1;
    
    }
    audioElement.src = 'songs/8.mp3';
    // audioElement.src = 'songs/${songIndex+1}.mp3';
    // console.log(audioElement) ;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');

    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    
    }
    audioElement.src = 'songs/8.mp3';
    // audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');

    
})

