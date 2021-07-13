array = ["red","green","orange"]
d_array = "black"
function changeWord()
{
  for(let i = 0; i< array.length; i++)
  {
    return d_array = array[i]
  }
  return setInterval(changeWord, 3000);
}