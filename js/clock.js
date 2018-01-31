var d, m, h, s, time, color;

function clocky() {
    
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    
    if (h <=9)
        
    {
            h = "0" + h;
        }
    if (m <=9)
      
    {
            m = "0" + m;
        }
    if (s <=9)
       
    {
            s=  "0" + s;
        }
    
    time = h + ":" + m + ":" + s ;
    
    color  = "#" + h + m+ s;
    
    document.getElementById("clock").innerHTML = time;
    document.body.style.backgroundColor = color;
    setInterval (clocky,1000);
}
clocky();