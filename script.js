function rand(max) {
    return Math.floor(Math.random() * max);
}
alert("Всем привет. Сайт пока что работает только на компьютере. Кнопка сложность не работает. Вводите количество примеров, нажимаете (Готово), потом нажимаете (Начать). В ответ пишите ответ, и нажимаете 1 раз на кнопку (Ответ), а затем на кнопку (Далее). Это очень важно");

let but = document.getElementById("letsbut");
let tex = document.getElementById("textt2");
let getB = document.getElementById("gotov");
let otv = document.getElementById("otvett"); 
let it = document.getElementById("itog");
let bg = document.getElementById("bg");
let bg2 = document.getElementById("bg2");
let butzzz = document.getElementById("butitog");
let a, b;
let h;
let o = 0;
let p = 0;
let num1, num2;
let pri, otvet;
let tab = [];  
let N, Y;
function Get() {
    getB.style.display = "none";
    a = document.getElementById("zna1").value;
    b = document.getElementById("zna2").value;
}
function GOOO() {
    but.style.display = "none";
    function lets() {
        num1 = rand(300);
        num2 = rand(300);
        znak = rand(2);
        if(znak == 0) {
            znak = "-"
        } else if (znak == 1) {
            znak = "+";
        } else {
            znak = "FDASDSAd";
        }
        let tex1 = document.getElementById("textt1");
        let tex2 = document.getElementById("textt2");
        let tex3 = document.getElementById("textt3");
        tex1.textContent = num1;
        tex2.textContent = znak;
        tex3.textContent = num2;

    }
    if (o < a) {
        lets();
        o++;
    }

}
function podt() {
    let tex1 = document.getElementById("textt1");
    let rrr = tex1.textContent || tex1.innerText;
    let tex2 = document.getElementById("textt2");
    let rrr2 = tex2.textContent || tex2.innerText;
    let tex3 = document.getElementById("textt3");
    let rrr3 = tex3.textContent || tex3.innerText;
    let h, Y, N;
    rrr = parseInt(rrr);
    rrr3 = parseInt(rrr3);
    if (rrr2 == "+") {
        h = rrr + rrr3;
    } else if (rrr2 == "-") {
        h = rrr - rrr3;
    }
    let otvet = document.getElementById("otvett").value;
    otvet = String(otvet);
    if(otvet == "") {
        console.log("Вводите только числа");
    } else if (otvet != h) {
        if (o <= a) {
            let p = String(rrr) + " " + String(rrr2) + " " + String(rrr3) + " = " + otvet +" << No";
            var v = document.createElement('tr');
            v.innerHTML = p;
            document.getElementById("tab").appendChild(v);
            N = N + 1;
        }
    } else if (otvet == h) {
        if (o <= a) {
            let p = String(rrr) + " " + String(rrr2) + " " + String(rrr3) + " = " + otvet +" << Yes";
            var v = document.createElement('tr');
            v.innerHTML = p;
            document.getElementById("tab").appendChild(v); 
            Y = Y + 1;
        }
    }
    if (o >= a) {
        butzzz.style.display = "block";
    }
}
function itogg() {
    butzzz.style.display = "none";
    it.style.display = "block";
    bg.style.display = "none";
    bg2.style.display = "block";
    var v = document.createElement('tr');
    v.innerHTML = tab;
    document.getElementById("tab").appendChild(v);
    return 0;
}