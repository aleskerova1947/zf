var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};



document.querySelector ('.toggleMenu').onclick = function (e)
  {
    var e = e || window.event;
    if (e.preventDefault) e.preventDefault (); else e.returnValue = false;
    document.querySelector ('.containerMenuClose').style.marginTop = '0px';
    document.querySelector ('.menu').style.display = 'none';
  };
  

document.getElementById('cross').onclick = function() 
  {
    document.getElementById('containerMenuClose').style.marginTop = '-1000px';
    document.getElementById('menu').style.display = 'flex';
  };


 /* var count = document.getElementById('count');
  function func() {
    var plusButton = document.getElementById('plus')
    var minusButton = document.getElementById('minus');
    if (document.onclick = plusButton) {
      count++;
    } else if (document.onclick = minusButton) {
      count--;
    }
  };*/

document.getElementById('crossSecond').onclick = function() 
  {
    document.getElementById('basketCloseBG').style.display = 'none';
  };


  
document.getElementById('btn').onclick = function() 
  {
    document.getElementById('basketCloseBG').style.display = 'flex';
  };


document.getElementById('btnSubmit').onclick = function() 
  {
    document.getElementById('basketThanksBG').style.display = 'flex';
    document.getElementById('basketCloseBG').style.display = 'none';
  };


document.getElementById('btnReturn').onclick = function() 
  {
    document.getElementById('basketThanksBG').style.display = 'none';
  };

document.getElementById('call').onclick = function() 
  {
    document.getElementById('callThanksBG').style.display = 'block';
  };

document.getElementById('callClose').onclick = function() 
  {
    document.getElementById('callThanksBG').style.display = 'none';
  };

document.getElementById('receive').onclick = function() 
  {
    document.getElementById('callWaitBG').style.display = 'flex';
    document.getElementById('callThanksBG').style.display = 'none';
  };

document.getElementById('btnCallReturn').onclick = function() 
  {
    document.getElementById('callWaitBG').style.display = 'none';
  };






document.getElementById('vitamins1').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'visible';
    document.getElementById('vitaminsImg1').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(46, 139, 87, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton1').style.backgroundColor = 'rgba(46, 139, 87)';
    document.getElementById('vitaminsButton1').style.border = 'rgba(46, 139, 87)';
  };

document.getElementById('vitamins2').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'visible';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdLeft').style.backgroundImage = 'url(../Здравофарм/img/vitaminsBGBlue.png)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'normal';
  };

document.getElementById('vitamins3').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'visible';
    document.getElementById('vitaminsImg3').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(123, 104, 238, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton3').style.backgroundColor = 'rgba(123, 104, 238)';
    document.getElementById('vitaminsButton3').style.border = 'rgba(123, 104, 238)';
  };

document.getElementById('vitamins4').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'visible';
    document.getElementById('vitaminsImg4').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(238, 130, 238, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton4').style.backgroundColor = 'rgba(238, 130, 238)';
    document.getElementById('vitaminsButton4').style.border = 'rgba(238, 130, 238)';
  };

document.getElementById('vitamins5').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'visible';
    document.getElementById('vitaminsImg5').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(218, 165, 32, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton5').style.backgroundColor = 'rgba(218, 165, 32)';
    document.getElementById('vitaminsButton5').style.border = 'rgba(218, 165, 32)';
  };

document.getElementById('vitamins6').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'visible';
    document.getElementById('vitaminsImg6').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(0, 0, 205, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton6').style.backgroundColor = 'rgba(0, 0, 205)';
    document.getElementById('vitaminsButton6').style.border = 'rgba(0, 0, 205)';
  };

document.getElementById('vitamins7').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'visible';
    document.getElementById('vitaminsImg7').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(184, 134, 11, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton7').style.backgroundColor = 'rgba(184, 134, 11)';
    document.getElementById('vitaminsButton7').style.border = 'rgba(184, 134, 11)';
  };

document.getElementById('vitamins8').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'visible';
    document.getElementById('vitaminsImg8').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(102, 205, 170, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton8').style.backgroundColor = 'rgba(102, 205, 170)';
    document.getElementById('vitaminsButton8').style.border = 'rgba(102, 205, 170)';
  };

document.getElementById('vitamins9').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'visible';
    document.getElementById('vitaminsImg9').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(255, 69, 0, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton9').style.backgroundColor = 'rgba(255, 69, 0)';
    document.getElementById('vitaminsButton9').style.border = 'rgba(255, 69, 0)';
  };

document.getElementById('vitamins10').onclick = function() 
  {
    document.getElementById('thirdRight').style.visibility = 'hidden';
    document.getElementById('thirdRight1').style.visibility = 'hidden';
    document.getElementById('thirdRight3').style.visibility = 'hidden';
    document.getElementById('thirdRight4').style.visibility = 'hidden';
    document.getElementById('thirdRight5').style.visibility = 'hidden';
    document.getElementById('thirdRight6').style.visibility = 'hidden';
    document.getElementById('thirdRight7').style.visibility = 'hidden';
    document.getElementById('thirdRight8').style.visibility = 'hidden';
    document.getElementById('thirdRight9').style.visibility = 'hidden';
    document.getElementById('thirdRight10').style.visibility = 'visible';
    document.getElementById('vitaminsImg10').style.width = '50%';
    document.getElementById('thirdLeft').style.background = 'url(../Здравофарм/img/thanksBG.png), rgba(233, 150, 122, .7)';
    document.getElementById('thirdLeft').style.backgroundBlendMode = 'multiply';
    document.getElementById('vitaminsButton10').style.backgroundColor = 'rgba(233, 150, 122)';
    document.getElementById('vitaminsButton10').style.border = 'rgba(233, 150, 122)';
  };