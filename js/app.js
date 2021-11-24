//use item length

    let chaine = "Hello DWWM !";
    let p1 = document.querySelector("#p");

    //use on the variable
    console.log(chaine.length);

    // use on the HTML
    // voir avec Jérôme :error
    // console.log(p1.innerHTML.length);

    // use on the string
    console.log("Hello DWWM !".length);

//includes
    let chaine2 = "Hello DWWM !";
    let findAString = "Hello";

    if (chaine2.includes("Hello")) {
        alert("La chaine contient bien le mot Hello");
    }
     //use on the variable
    if (chaine2.includes(findAString)) {
        alert("La chaine contient bien le mot Hello");
    }

//startsWith
    let chaine3 = "Hello DWWM !";
    let findString = "Hello";
    if (chaine3.startsWith("Hello")) {
        alert("Commence bien par Hello");
    }
    // use on the variable
    if (chaine3.startsWith(findString)) {
        alert("Commence bien par Hello");
    }
    // possible on the letter
    if (chaine3.startsWith("H")) {
        alert("Commence bien par H");
    }

//endsWith
    if (chaine3.endsWith("DWWM !")) {
        alert("Finit bien par DWWM !");
    }

//substring
    let chaine4 = "Hello DWWM !";
    // recover Hello DWWM
    let newsChaine = chaine4.substring(0 , 12);
    console.log(newsChaine);
    //recover from
    let newsChaines = chaine4.substring(8);
    console.log(newsChaines)

//indexOf - //lastIndexOf
//find the first position - //find the last position
    let chaine5 = "Hello DWWM !";
    let position = chaine5.indexOf("DWWM !");
    console.log(position);

//slice
//return a new string
    let chaine6 = "Hello DWWM !";
    let news = chaine6.slice(5);
    console.log(news)
    //negative value
    let news2 = chaine6.slice(-2,5);
    console.log(news2);

//replace
    let chaine7 = "Hello DWWM !";
    let newsChaine7 = chaine7.replace("DWWM", "Angel");
    console.log(newsChaine7);

//toLowerCase - //toUpperCase
    let chaine8 = "Hello DWWM !";
    let newsChaine8 = chaine8.toLowerCase();
    console.log(newsChaine8);

//trim
//removes spaces and blanks
    let chaine9 = "Hello DWWM !";
    console.log("longueur de la première chaine:" + chaine9.length);
    let newsChaine9 = chaine9.trim();
    console.log("longueur de la première chaine:" + newsChaine9.length);

//split
//divide a string from a separator  // voir avec Jérôme
    let chaine10 = "Hello DWWM !";
    let tableau = chaine10.split("");
    console.log(tableau);

//Treat a string as an array
    let chaine11 = "Hello DWWM !";
    console.log(chaine11[0]);
    //use a for
    for (let i = 0; i < chaine11.length; i++ ){
        console.log(chaine11[i]);
    }


