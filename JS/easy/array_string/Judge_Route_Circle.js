// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let point = {x: 0, y: 0};
    let m = moves.toLowerCase();
    for(let i = 0, l = m.length; i<l; i++){
        switch(m[i]){
            case 'u':
                point.y++;
                break;
            case 'r':
                point.x++;
                break;
            case 'd':
                point.y--;
                break;
            case 'l':
                point.x--;
                break;
        }
    }
    return point.x === 0 && point.y === 0;
};

console.log(judgeCircle('UD'));