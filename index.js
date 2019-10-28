document.addEventListener("DOMContentLoaded", () => {

    var input = document.getElementById("age");
    var knapp = document.getElementsByTagName("button");
    var message = document.getElementById("message");

    knapp[0].addEventListener("click", () => {
        var age = input.value;

        // Räkna ut vilket år som användaren var halva sin ålder.
        var year = new Date().getFullYear();

        // Värden från input är alltid string, även om input-typen är number.
        console.log(typeof (age));

        var whatYear = year - (Math.floor(age / 2));

        message.innerText = whatYear;
    })

})