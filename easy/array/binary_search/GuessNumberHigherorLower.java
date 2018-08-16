// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I'll tell you whether the number is higher or lower.

// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

// -1 : My number is lower
//  1 : My number is higher
//  0 : Congrats! You got it!
// Example:
// n = 10, I pick 6.

// Return 6.


/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class GuessNumberHigherorLower {
    public static int SetNum = 3;
    public static void main(String[] args){
        GuessNumberHigherorLower solution = new GuessNumberHigherorLower();
        int result  = solution.guessNumber(3);
        System.out.println(result);
    }
    public static int guess(int num){
        return num > GuessNumberHigherorLower.SetNum ? -1 : (num == GuessNumberHigherorLower.SetNum ? 0 : 1);
    }
    public int guessNumber(int n) {
        int left = 1, right = n;
        while(left < right ){
            int mid = left + (right - left) / 2;
            int res = guess(mid);
            if(res == 0){
                return mid;
            }
            if(res > 0){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return left;
    }
}