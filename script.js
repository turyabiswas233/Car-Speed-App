//class & id selector
const text1 = document.getElementById("red1");
const text2 = document.getElementById("red2");
const grade = document.getElementById("grade");
const grad = document.getElementById("grad");

//setting variable
let i = 0;
let number = 0;

//creating functions (increament)
function increament() {
    i++;
    number = i;
    text1.innerHTML = number;
    text2.innerHTML = number * 62 / 100;
    //creating color change and adding grade of speed(+)
    if (number > 0 && number <= 40) {
        grade.classList.add("grade-slow");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-faster");
        grad.style.color = "#0056f7";
        grad.innerHTML = "slow"
    }
    else if (number > 40 && number <= 60) {
        grade.classList.add("grade-normal");
        grade.classList.remove("grade-slow");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-faster");
        grad.style.color = "#00cc3f";
        grad.innerHTML = "normal"
    }
    else if (number > 60 && number <= 80) {
        grade.classList.add("grade-faster");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-slow");
        grad.style.color = "#ef783f";
        grad.innerHTML = "faster"
    }
    else if (number > 80) {
        grade.classList.add("grade-overspeed");
        grade.classList.add("bomb-blast");
        grade.classList.remove("grade-slow");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-faster");
        text1.classList.add("bomb-blast")
        text2.classList.add("bomb-blast")
        grad.style.color = "#ea3400";
        grad.innerHTML = "overspeed"
    }
}

//creating functions (decreament)
function decreament() {
    if (number <= 0) {
        alert("speed can't be negative!!")
        return i = 0;
    }
    i--;
    number = i;
    text1.innerHTML = number;
    text2.innerHTML = number * 62 / 100;
    //creating color change and adding grade of speed(-)
    // while (number > 80) {
    //     grade.classList.add("grade-overspeed");
    //     grade.classList.remove("grade-normal");
    //     grade.classList.remove("grade-faster");
    //     grade.classList.remove("grade-slow");
    //     grade.classList.add("bomb-blast");
    //     text1.classList.add("bomb-blast");
    //     text2.classList.add("bomb-blast");
    //     grad.style.color = "#ea3400";
    //     grad.innerHTML = "overspeed";
    //     if (number == 80) {
    //         text1.classList.remove("bomb-blast")
    //         text2.classList.remove("bomb-blast")
    //         grade.classList.remove("bomb-blast")
    //         grade.classList.remove("grade-overspeed");
    //     }
    // }

    if (number > 60 && number <= 80) {
        grade.classList.add("grade-faster");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-slow");
        text1.classList.remove("bomb-blast")
        text2.classList.remove("bomb-blast")
        grade.classList.remove("bomb-blast")
        grad.style.color = "#ef783f";
        grad.innerHTML = "faster"
    }
    else if (number > 40 && number <= 60) {
        grade.classList.add("grade-normal");
        grade.classList.remove("grade-faster");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-slow");
        grad.style.color = "#00cc3f";
        grad.innerHTML = "normal"
    }
    if (number > 0 && number <= 40) {
        grade.classList.add("grade-slow");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-overspeed");
        grade.classList.remove("grade-faster");
        grad.style.color = "#0056f7";
        grad.innerHTML = "slow"
    }
    else if (number == 0) {
        grade.classList.remove("grade-faster");
        grade.classList.remove("grade-normal");
        grade.classList.remove("grade-overspeed");
        grad.style.color = "white";
        grad.innerHTML = "NULL"
    }

}
