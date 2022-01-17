    var time
    let isTime = 25
    let minute = 24;
    let second = 60;
    let teste = document.querySelectorAll('.buttonTop')
    let but = document.querySelectorAll('.but')
    let sect = document.getElementById('sect')
    let al = document.getElementById('al')
     
    function timer(){
        clearTimeout(time)
        time = setInterval(function(){
            
        for(i = 0; i <= 1; i++) 
        second -= i;

        tela.innerHTML = `${putZero(minute)}:${putZero(second)}` 
        
        if(second === 0 && minute > 0) second = 60, minute --
            
            //exibe o relogio e contador na tela
        if(isTime == 25 && minute <= 0 && second == 0) breaker()
        if(isTime == 5 &&  minute <= 0 && second == 0) pomodoro()
        if(isTime == 15 &&  minute <= 0 && second == 0) pomodoro()
        
        },1000);
        }

    function putZero(time){ return time < 10 ? `0${time}` : time;}

    function pomo(){
        parar()
        pomodoro()
    }

    function br(){
        parar()
        breaker()
    }

    function pomodoro(){
        setColor('#ff3838', '#ff3838')
        tela.innerHTML='25:00'
    
        al.classList.remove('allScreenColorRest', 'allScreenColorLr')
        al.classList.add('allScreenColor')
    
        second = 60
        minute = 24
    }

    function breaker(){
        setColor('#01a078', '#01a078')
        tela.innerHTML='05:00'

        al.classList.remove('allScreenColor','allScreenColorLr')
        al.classList.add('allScreenColorRest')
          
        second = 60
        minute = 4
    }

    function longRest(){
        setColor('#385dff', '#385dff')            
        clearTimeout(time)
        tela.innerHTML='15:00'
 
        al.classList.remove('allScreenColor', 'allScreenColorRest')
        al.classList.add('allScreenColorLr')
              
        second = 60
        minute = 14
        isTime = 15
    }

    function setColor(backg, tes){
        for(let i = 0; i < teste.length; i++) teste[i].style.background = backg;
        for(let i = 0; i < but.length; i++) but[i].style.color = tes;
    }

    function parar(){
        clearTimeout (time)
    } 
