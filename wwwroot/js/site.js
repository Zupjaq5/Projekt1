function SendForm()
{
    var imie = document.querySelector("input[name=name]").value;
    var nazwisko = document.querySelector("input[name=lastName]").value;
    var email = document.querySelector("input[name=mailOfClient]").value;
    var rodzajKlienta = document.querySelectorAll("input[name=TypeOfClient]");

    var rodzajKlientaSelected = "";
    if (rodzajKlienta[0].checked) {
        rodzajKlientaSelected = "Osoba prywanta";
    }
    else if (rodzajKlienta[1].checked) {
        rodzajKlientaSelected = "Firma";
    }
    else {
        rodzajKlientaSelected = "Nie wybrano typu klienta!";
    }

    var komentarz = document.querySelector("textarea").value;

    const json = '{"name":"' + imie + '", "surname":"' + nazwisko + '", "email":"' + email + '", "typeOfClient":"' + rodzajKlientaSelected + '", "content":"' + komentarz +'"}';
    const obj = JSON.parse(json);
    // metoda z neta ;>
    $.ajax(
        {
            type: 'POST',
            contentType: 'application/json',
            url: '/Home/SendForm/' + json.toString(),
            data: {
                jsonObj: obj
            },
            success:
                function (response) {
                    console.log(response);
                },
            error:
                function (response) {
                    alert("Error: " + response);
                }
        });

}