var colors=["red","blue","green","purple"]
console.log(colors);
console.log(colors.length);
delete colors[2]
console.log(colors.length);
console.log(colors);

// here the space is still vacant even after removinf the element ,if we open it in chrome then the output will be undefinedx1 but in node it is <1 empty item>
//these are the way in which the ouput is shown in different browsers or node env

//before and after deleting the length remains the same since the data is being removed but replaced with undefined so it does not affect the length. 