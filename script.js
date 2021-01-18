// const btnRand = document.getElementById("random");
// const btnStop = document.getElementById("stop");
// const tvHasil = document.querySelector("#random-area p");

// function putar(){
// 	const pilihan = ['A', 'B', 'C', 'D', 'E'];
// 	let i = 0;
// 	const waktuMulai = new Date().getTime();
// 	setInterval(function(){
// 		if(new Date().getTime() - waktuMulai > 3000){
// 			clearInterval;
// 			return;
// 		}
//         tvHasil.innerHTML = pilihan[i++];
// 		if( i == pilihan.length) i = 0;
// 	}, 100);
// }

// btnRand.addEventListener('click', function() {
// 	putar();
// });

// btnStop.addEventListener('click', function() {
// 	putar().stop;
// });

var interval = null;
    var randomValue = null;
    var choices = ['A', 'B', 'C', 'D', 'E'];
    function startRandomly() {
        if (choices.length == 0) return;
        if (choices.length == 1) {
            randomValue = 0;
            stopRandomly();
            return;
        }
        interval = setInterval(function () {
            randomValue = getRandomInt(0, choices.length - 1);
            document.querySelector("#random-area p").innerHTML = choices[randomValue];
        }, 10);
    }

    function stopRandomly() {
        clearInterval(interval);
        if (choices.length && randomValue >= 0) {
            document.querySelector("#random-area p").innerHTML = choices[randomValue];
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }