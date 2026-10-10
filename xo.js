let turn = 'X'
let titlee = document.querySelector('.titlee');
let squares = [];

function end(num1, num2, num3)
{
    titlee.innerHTML = `${squares[num1]} WINNER`

     document.getElementById('item'+num1).innerHTML =
        '<img src="messi.jpg" class="winner-img">';

    document.getElementById('item'+num2).innerHTML =
        '<img src="messi.jpg" class="winner-img">';

    document.getElementById('item'+num3).innerHTML =
        '<img src="messi.jpg" class="winner-img">';

    document.getElementById('item'+num1).style.background = 'rgb(83, 182, 37)';
    document.getElementById('item'+num2).style.background = 'rgb(83, 182, 37)';
    document.getElementById('item'+num3).style.background = 'rgb(83, 182, 37)';

    setInterval(function(){titlee.innerHTML += '.'}, 1000);
    setTimeout(function(){location.reload()}, 3000);
}

function winner()
{
    for(let i = 1; i < 10; i++)
    {
         squares[i] = document.getElementById('item'+i).innerHTML;   
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != '')
    {
        end(1,2,3);
    }
    
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != '')
    {
        end(4,5,6);
    }

    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '')
    {
        end(7,8,9);
    }

    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '')
    {
        end(1,4,7);
    }

    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '')
    {
        end(2,5,8);
    }

    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != '')
    {
        end(3,6,9);
    }

    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != '')
    {
        end(1,5,9);
    }

    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '')
    {
        end(3,5,7);
    }

    else if (
    squares[1] != '' &&
    squares[2] != '' &&
    squares[3] != '' &&
    squares[4] != '' &&
    squares[5] != '' &&
    squares[6] != '' &&
    squares[7] != '' &&
    squares[8] != '' &&
    squares[9] != ''
            ) 
{
    titlee.innerHTML = 'DRAW';

    setTimeout(function(){
        location.reload();
    }, 1000);
}

}

function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        turn = 'O'
        titlee.innerHTML = 'O'
    }

    else if(turn === 'O' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        turn = 'X'
        titlee.innerHTML = 'X'
    }
    winner();
}