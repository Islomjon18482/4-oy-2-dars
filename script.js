// 1-masala
let a = prompt("a sonini kiriting");
let b = prompt("b sonini kiriting");
if (a > b){
    alert("Javob:" + " " + a**2);
} else{
    alert("Javob:" + " " + b**2);
}


var next = confirm("2-masalaga o'tish");
// 2-masala
let c = prompt("c sonini kiriting");
let d = prompt("d sonini kiriting");
let i = prompt("i sonini kiriting");
if(d >= c){
    if(d > i){
        alert("Eng katta son:" + " " + d)
    }else{
        alert("Eng katta son:" + " " + i)
    }
}else{
    if(c >= i){
        alert("Eng katta son:" + " " + c)
    }else{
        alert("Eng katta son:" + " " + i)
    }
}

var next = confirm("3-masalaga o'tish");
// 3-masala
let n = prompt("n sonini kiriting");
if(n%2==1){
    alert("Bu son toq son")
}else{
    alert("Bu son juft son")
}

var next = confirm("4-masalaga o'tish");
// 4-masala
let f = prompt("f sonini kiriting");
if(f%5==0){
    alert("Berilgan son 5ga karrali")
}else{
    alert("Berilgan son 5ga karrali emas")
}

var next = confirm("5-masalaga o'tish");
// 5-masala
let g = prompt ("Ikki xonali son kiriting kiriting")
let j = g % 10;
let h = g - j;
alert(h / 10);

var next = confirm("6-masalaga o'tish");
// 6-masala
let k = prompt("Ikki xonali son kiriting kiriting");
alert(k%10)

var next = confirm("7-masalaga o'tish");
// 7-masala
let p = prompt("Ikki xonali son kiriting");
let q = p % 10;
let z = (p-q) / 10;
if (z > q){
    alert("O'nlar xonasidagi raqam birlar xonasidagi raqamdan katta")
}else{
    alert("Birlar xonasidagi raqam o'nlar xonasidagi raqamdan katta")
}

var next = confirm("8-masalaga o'tish");
// 8-masala
let x = prompt("Ikki xonali son kiriting");
if (x%2==0){
    alert(true)
}else{
    alert(false)
}

var next = confirm("9-masalaga o'tish");
// 9-masala
let o = prompt("Uch xonali son kiriting");
let y = o % 100
let res = (o - y)/100
alert(res);

var next = confirm("10-masalaga o'tish");
// 10-masala
let w = prompt("Uch xonali son kiriting");
let r = w%10;
let u = ((w-r)/10)%10;
let m = (w-r-(u*10))/100;
if(r >= u){
    if(r > m){
        alert("Eng katta raqam:" + " " + r)
    }else{
        alert("Eng katta raqam:" + " " + m)
    }
}else{
    if(u >= m){
        alert("Eng katta raqam:" + " " + u)
    }else{
        alert("Eng katta raqam:" + " " + m)
    }
}