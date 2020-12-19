export const compareNumbers = (userGuess, actualNumber) => {
  if(userGuess > actualNumber) return 1;
  if(userGuess === actualNumber) return 0;
  if(userGuess < actualNumber) return -1;
}
