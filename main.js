document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
});

function analyzer()
{
    var s = document.getElementById("input").value;
    document.getElementById("input").value="";
    document.getElementById("string").textContent = s;
    var vowels = 0, consonants = 0, digits = 0, spaces = 0, splchar = 0;
    for(var i=0; i<s.length; i++)
    {
        if("AEIOUaeiou".indexOf(String.fromCharCode(s.charCodeAt(i)))>=0)
        {
            vowels++;
        }
        else if(s.charCodeAt(i)===32)
        {
            spaces++;
        }   
        else if( (s.charCodeAt(i)>32 && s.charCodeAt(i)<=47) || ( s.charCodeAt(i)>=91 && s.charCodeAt(i)<=96) || (s.charCodeAt(i)>=58 && s.charCodeAt(i)<=64) || ( s.charCodeAt(i)>=123 && s.charCodeAt(i)<=126))
        {
            splchar++;
        }
        else if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)
        {
            digits++;
        }
        else
        {
            consonants++;
        }
    }

    document.getElementById("Vowels").textContent = vowels;
    document.getElementById("Consonants").textContent = consonants;
    document.getElementById("Digits").textContent = digits;
    document.getElementById("Spaces").textContent = spaces;
    document.getElementById("Splchar").textContent = splchar;
}