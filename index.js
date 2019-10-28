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

        try {
            // Blandar string och number för att "tvinga" fram ett fel.
            var whatYear = "User is " + year - (Math.floor(age / 2));
            console.log(whatYear);
            if (isNaN(whatYear))
                throw "NAAAAN"
            message.innerText = whatYear;
        } catch (err) {
            console.error(err);
            message.innerText = "Det är inte du, det är jag som programmerade sidan som gjorde fel."
        }
    })

})