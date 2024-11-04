const imie = document.getElementById(imie);
const nazwisko = document.getElementById(nazwisko);
const email = document.getElementById(email);
const zgloszenie = document.getElementById(zgloszenie);
const regulamin = document.getElementById(regulamin);

imie_value = imie.value;
nazwisko_value = nazwisko.value;
email_value = email.value;
zgloszenie_value = zgloszenie.value;
regulamin_value = regulamin.value;

if (regulamin==false)
{
    document.write("Musisz zapoznać się z regulaminem")
} else {
    document.write(toUpperCase(imie_value + nazwisko_value + "<br>"));
    document.write("Treść Twojej sprawy: " + zgloszenie_value);
}