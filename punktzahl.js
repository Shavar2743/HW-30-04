function punktzahl (eingabe) {
    if (eingabe > 90) {
        console.log("Sehr gut")
    } else if (eingabe >= 80 && eingabe <= 90 ) {
        console.log("gut")
    } else if (eingabe >= 70 && eingabe <= 80 ) {
        console.log("befriedigend")
    } else if (eingabe >= 60 && eingabe <= 70 ) {
        console.log("ausreichend")
    } else if (eingabe < 60 ) {
        console.log("nicht bestanden")
    }

}

punktzahl(91)
punktzahl(81)
punktzahl(71)
punktzahl(61)
punktzahl(51)