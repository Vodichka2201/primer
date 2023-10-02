//Папа, потеряв надежду, прихожу к тебе (почти как и всегда). Подскажи, как нормальным айтишником стать. Вот откуда узнать, как узнать пороль от интернета, подключить один компьютер к другому, подключить принтер по интернету. Гуглить что ли?  :(


function rand(max) {
    return Math.floor(Math.random() * max);
}

let but = document.getElementById("letsbut");
let tex = document.getElementById("textt");
let getB = document.getElementById("gotov");
let otv = document.getElementById("otvett"); 
let it = document.getElementById("itog");
let bg = document.getElementById("bg");
let bg2 = document.getElementById("bg2");
let a, b;
let o = 0;
let num1, num2;
let pri, otvet;
let tab = [];
let N = 0, Y = 0;
function Get() {
    getB.style.display = "none";
    a = document.getElementById("zna1").value;
    console.log(a);
    b = document.getElementById("zna2").value;
    console.log(b);
}

function Go() {
    tex.textContent = "Нажмите Далее 2 раза";
    but.style.display = "none";
}

function podt() {
    otvet = document.getElementById("otvett").value;
    let pri1 = 0;
    let tex = document.getElementById("textt");
    pri = parseInt(tex);
    if(otvet == "") {
        console.log("Вводите только числа");
    } else if (parseInt(otvet) != pri) {
        if (o > a) {
            let p = pri1 + " << No";
            var v = document.createElement('tr');
            v.innerHTML = p;
            document.getElementById("tab").appendChild(v);
        }
        N = N + 1;
        console.log(pri);
        console.log(pri1);
        console.log(otvet);
        console.log("Не правильно");
    } else if (parseInt(otvet) == pri) {
        if (o > a) {
            let p = pri1 + " << Yes";
            var v = document.createElement('tr');
            v.innerHTML = p;
            document.getElementById("tab").appendChild(v); 
        }
        Y = Y + 1;
        console.log("Правильно");
    }
}

function GOOO() {
    if (o > a) {
        console.log("Конец");
        itog.style.display = "block";
        bg.style.display = "none";
        bg2.style.display = "block";
        var v = document.createElement('tr');
        v.innerHTML = tab;
        document.getElementById("tab").appendChild(v);
        return 0;
    } else {
        if (b == 1) {
            num1 = rand(300);
            num2 = rand(300);
            while(num1 < num2) {
                num1 = rand(300);
                num2 = rand(300);
            }
            let znak = rand(2);
            if (znak == 0) {
                znak = "+";
                tex.textContent = num1 + " " + znak + " " + num2;
                pri = num1 + num2;
            } else if (znak == 1) {
                znak = "-";
                tex.textContent = num1 + " " + znak + " " + num2;
                pri = num1 - num2;
            }


            z = num1 + " " + znak + " " + num2;
            o++;
        } else if (b == 2) {
            console.log("Второй");
        } else if (b == 3) {
            console.log("Третий");
        } else if (b == 4) {
            console.log("Четвёртый");
        }
    }
}