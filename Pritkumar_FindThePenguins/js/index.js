$(document).ready( function() {

    //This code will run after your page loads
    /*
    $("#yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });
    */
    
    var countscore = document.getElementById('countscore').value;
    var highScore = document.getElementById('counthighscore').value;
    
    
    
    countscore = 0;
    highScore = 0;
    
    
    var modal = document.getElementById('gameoverModal');

    
    var span = document.getElementsByClassName("close")[0];


    
    span.onclick = function() {
        modal.style.display = "none";
        game_over();
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    
    
    var penguinImages = ['images/penguin_1.png','images/penguin_2.png','images/penguin_3.png','images/penguin_4.png','images/penguin_5.png','images/penguin_6.png','images/penguin_7.png','images/penguin_8.png','images/yeti.png'];
    
   
    var gamepiece = document.getElementsByClassName('gamepieces');
    
    
    
    $('#wrapper').on('click', function (e) {
    
        if($(e.target).hasClass('click'))
        {
            return;
        }
    
        if($(e.target).hasClass('gamepieces'))
        {
    
            var penguin = shuffle(penguinImages)[0];
            var str ='url('+penguin+')';
    
            $(e.target).css('background-image', str);
    
            $(e.target).addClass('click');
    
            if(penguin === 'images/yeti.png')
            {
                var yetimp3=new Audio('media/yeti.wav');
                yetimp3.play();
    
                setTimeout(function () {
                    
                    gameover.textContent = 'Game Over';
                    gameover.setAttribute('style', 'color: black;');
                    gameoverModal.style.display = 'block';
                    game_over();
                },200);
            
            }
            else{
                    var penguinmp3=new Audio('media/penguin.wav');
                    penguinmp3.play();
                        
                
                        countscore += 1;
                        document.getElementById('countscore').value = countscore;
                   
                if(countscore > highScore)
                    {
                        document.getElementById('counthighscore').value = countscore;
                        highScore = countscore;
                        if(highScore === 8 )
                            {
                               gameover.textContent = 'Congratulations!';
                               gameover.setAttribute('style', 'color: blue;');
                               gameoverModal.style.display = 'block'; 
                            }
                    }
            }
            penguinImages.shift();
        }
    });
    
    
    
    function game_over()
    {
        penguinImages = ['images/penguin_1.png','images/penguin_2.png','images/penguin_3.png','images/penguin_4.png','images/penguin_5.png','images/penguin_6.png','images/penguin_7.png','images/penguin_8.png','images/yeti.png'];
        
        $('.gamepieces').css('background-image', '');
        document.getElementById('countscore').value = 0;
        countscore = 0;
        $('.gamepieces').removeClass('click');
    }
    
    function shuffle(array) {
          var current = array.length, temporary, randomindex;

          
          while (0 !== current) 
          {

            
            randomindex = Math.floor(Math.random() * current);
            current -= 1;

           
            temporary = array[current];
            array[current] = array[randomindex];
            array[randomindex] = temporary;
          }

          return array;
    }

});