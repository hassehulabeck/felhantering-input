# Felhantering vid input

## JS är snällt.
Om vi blandar tal och strängar för att utföra någon räkneoperation, så är JS snällt och försöker genomföra den (genom att omvandla string till number), men om vi skapar svårare förutsättningar, så kommer det att misslyckas.

´´´javascript
        // Blandar string och number för att "tvinga" fram ett fel.
        var whatYear = "User is " + year - (Math.floor(age / 2));
´´´

Exempelvis här, där strängen "User is" kommer att göra kaos med beräkningen. Prova att plocka bort den så ser du att JS fixar uträkningen.

## Därför: Se till att skriva kontroller för inkommande värden.
Betrakta alltid värden från input, datakällor, databaser etc som farliga och genomför kontroller av deras typ, deras värden och rensa dem från farligheter.