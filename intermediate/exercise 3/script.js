var string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var secondString = "";

console.log(string);
for (var i=0;i<string.length;i++)
{
    if(string[i] != '/')
    {
        secondString += string[i];
    }
    else
    {
        secondString += "\n";
    }
}
console.log(secondString);