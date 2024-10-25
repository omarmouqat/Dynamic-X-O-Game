const h1 = document.getElementById("p1");
var the_player = -1;
var xo  = [
    [0,0,0],
    [0,0,0],
    [0,0,0]];
var positions = [];
var endgame = false;
function Box(box) {
    //console.log(xo);
    if (endgame) return;
    if (xo[Number(box[0])][Number(box[1])] === 0) {
        positions.push([Number(box[0]), Number(box[1])]);
        //console.log("inside");
        if (the_player === -1) {
            //console.log("-1");
            xo[Number(box[0])][Number(box[1])] = 1;
            document.getElementById(box).src = 'X.png';
            the_player *= -1;
            //console.log(xo);
            if (
                (xo[0][0] === 1 && xo[0][1] === 1 && xo[0][2] === 1) ||
                (xo[1][0] === 1 && xo[1][1] === 1 && xo[1][2] === 1) ||
                (xo[2][0] === 1 && xo[2][1] === 1 && xo[2][2] === 1) ||
                (xo[0][0] === 1 && xo[1][0] === 1 && xo[2][0] === 1) ||
                (xo[0][1] === 1 && xo[1][1] === 1 && xo[2][1] === 1) ||
                (xo[0][2] === 1 && xo[1][2] === 1 && xo[2][2] === 1) ||
                (xo[0][0] === 1 && xo[1][1] === 1 && xo[2][2] === 1) ||
                (xo[0][2] === 1 && xo[1][1] === 1 && xo[2][0] === 1)) {
                console.log("p1 wins");
                endgame = true;
                document.getElementById("p1").textContent = 'Player One Wins!';
                return;
            }
            document.getElementById("p1").textContent = 'Player Two Role!';
            console.log(positions.length);
            if (positions.length>5){
                console.log(positions[0][0].toString()+positions[0][1].toString());
                xo[positions[0][0]][positions[0][1]] = 0;
                document.getElementById(positions[0][0].toString()+positions[0][1].toString()).src = 'N.png';
                positions.shift();
            }
        }else if (the_player === 1) {
            //console.log("1");
            xo[Number(box[0])][Number(box[1])] = 2;
            document.getElementById(box).src = 'O.png';
            the_player *= -1;
            //console.log("hell");
            //console.log(xo);
            if (
                (xo[0][0] === 2 && xo[0][1] === 2 && xo[0][2] === 2) ||
                (xo[1][0] === 2 && xo[1][1] === 2 && xo[1][2] === 2) ||
                (xo[2][0] === 2 && xo[2][1] === 2 && xo[2][2] === 2) ||
                (xo[0][0] === 2 && xo[1][0] === 2 && xo[2][0] === 2) ||
                (xo[0][1] === 2 && xo[1][1] === 2 && xo[2][1] === 2) ||
                (xo[0][2] === 2 && xo[1][2] === 2 && xo[2][2] === 2) ||
                (xo[0][0] === 2 && xo[1][1] === 2 && xo[2][2] === 2) ||
                (xo[0][2] === 2 && xo[1][1] === 2 && xo[2][0] === 2)
            ) {
                console.log("p2 wins");
                endgame = true;
                document.getElementById("p1").textContent = 'Player two Wins!';
                return;
            }
            document.getElementById("p1").textContent = 'Player One Role!';
            console.log(positions.length);
            if (positions.length>5){
                console.log(positions[0][0].toString()+positions[0][1].toString());
                xo[positions[0][0]][positions[0][1]] = 0;
                document.getElementById(positions[0][0].toString()+positions[0][1].toString()).src = 'N.png';
                positions.shift();
            }
        }


    }
}