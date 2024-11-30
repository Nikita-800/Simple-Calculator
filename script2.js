// document.getElementById('heading').style.color ='red';
function getadd()
{
    const num1 = Number(document.getElementById("a").value)
    const num2 = Number(document.getElementById("b").value)

    const add = num1+num2;
    console.log(add);

    document.getElementById("result").innerHTML = "Addition of a and b is :"+add;
}

function getsub()
{
    const num1 = Number(document.getElementById("a").value)
    const num2 = Number(document.getElementById("b").value)

    const sub = num1-num2;
    console.log(sub);

    document.getElementById("result").innerHTML = "Substraction of a and b is :"+sub;
}

function getmul()
{
    const num1 = Number(document.getElementById("a").value)
    const num2 = Number(document.getElementById("b").value)

    const mul = num1*num2;
    console.log(mul);

    document.getElementById("result").innerHTML = "Multiplication of a and b is :"+mul;
}

function getdiv()
{
    const num1 = Number(document.getElementById("a").value)
    const num2 = Number(document.getElementById("b").value)

    const div = num1/num2;
    console.log(div);

    document.getElementById("result").innerHTML = "Division of a and b is :"+div;
}
