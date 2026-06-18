let score = 0;

/* MODO ESCURO */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* QUIZ */
function answer(correct){
    if(correct){
        score++;
        document.getElementById("result").innerText = "✔ Correto!";
    } else {
        document.getElementById("result").innerText = "❌ Tente novamente!";
    }

    document.getElementById("score").innerText = score;
}
