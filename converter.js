function temperatureConverter() 
{
  var temp=document.getElementById("inputCelsius").value;
  var valNum = parseFloat(temp);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}
    
