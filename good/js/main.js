function bold() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontWeight != "bold") {

        ban.style.fontWeight = 'bold';
    } else {
        ban.style.fontWeight = 'normal';
    }
}
function ital() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontStyle != "italic") {

        ban.style.fontStyle = 'italic';
    } else {
        ban.style.fontStyle = 'normal';
    }
}
function under()
{
    event.preventDefault();
    var ban=document.getElementById("txt");
    if(ban.style.textDecoration!="underline")
    {
        ban.style.textDecoration='underline';
    }else{
        ban.style.textDecoration='none';
    }
}
function sizee()
{
    var ban=document.getElementById("txt");
    event.preventDefault();
    ban.style.fontSize=document.getElementById("sz").value;

}
function font ()
{
    event.preventDefault();
    var ban=document.getElementById("txt");
    ban.style.fontFamily=document.getElementById("family").value;

}

