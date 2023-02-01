document.getElementById("demo1").innerHTML = Math.pow(2, 3);



document.getElementById("demo12").innerHTML = Math.abs(-5.8)


document.getElementById("demo13").innerHTML = Math.cos(0 * Math.PI/180);

document.getElementById("demo14").innerHTML = Math.min(80, -100, 200, 85, -400, 150);

document.getElementById("demo15").innerHTML = Math.max(80, -100, 200, 85, -400, 150);

document.getElementById("demo11").innerHTML = Math.log2(3);






function myFunction(){
    let age = document.getElementById("age").value;
    let voter = (age < 18) ? "Not 18 Years Old ! " : "You are eligible ! "

    document.getElementById("demo18").innerHTML = voter + "To vote";
}