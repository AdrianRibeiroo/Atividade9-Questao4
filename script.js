let a = parseInt(prompt('Digite o valor de um lado do triângulo'));
let b = parseInt(prompt('Digite o valor de um lado do triângulo'));
let c = parseInt(prompt('Digite o valor de um lado do triângulo'));

if(a+b>c && a+c>b && b+c>a)
{
    if(a=b=c)
    {
        alert('Os valores informados formam um triângulo equilátero')
    }
    else if(a===b || a===c || b===c)
    {
        alert('Os valores informados formam um triângulo isósceles')
    }
    else if(a!=b!=c)
    {
        alert('Os valores informados formam um triângulo escaleno')
    }
}
else
{
    alert('Valores informados não formam um triângulo')
}