const toBinary = function(sn: number) : number[]{
  const reminders = []

  do{
    reminders.push( sn % 2);
    sn = Math.floor(sn / 2);
  }while(sn > 0)

  for(let left = 0, right = reminders.length - 1; left < right; ){
    let temp = reminders[left];
    reminders[left] = reminders[right];
    reminders[right] = temp;
    left++;
    right--;
  }
  return reminders;
}



