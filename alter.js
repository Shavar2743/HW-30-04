function alter (eingabe) {
    if (eingabe < 6) {
        console.log("Die Fahrt ist für Kinder unter 6 Jahren kostenlos!")
    } else if (eingabe >= 6 && eingabe <= 17 ) {
        console.log("Eine Kinderfahrkarte ist ausreichend!")
    } else if (eingabe >= 18 && eingabe <= 66 ) {
        console.log("Bitte eine Erwachsenen-Fahrkarte kaufen!")
    } else if (eingabe > 66 ) {
        console.log("Wir empfehlen die Super-Seniorenfahrkarte!")
    } 
}

alter(5)
alter(15)
alter(25)
alter(99)