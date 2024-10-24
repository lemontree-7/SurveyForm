function addition()
{
let num1 = document.getElementById('num1').value;
 num1 = parseFloat(num1);
let num2 = document.getElementById('num2').value;
 num2 = parseFloat(num2);
 if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    console.error("错误：请输入有效的数字");
}
else
{let result=num1+num2;
document.getElementById('addition number').innerText = result;
alert(result);}

}