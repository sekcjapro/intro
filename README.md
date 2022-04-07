# Spokojnie, to tylko intro

To repozytorium jest częścią całego kursu Front-End developer. Przykład skierowany jest dla osób, które dopiero rozpoczynają przygodę z programowaniem i chcą sprawdzić jak wygląda praca front-end developera.

Przygotowaliśmy prostą stronę, a Twoim zadaniem będzie poprawienie błędów na postawie poniższych zadań tak, aby strona "ożyła".



## Przygotowanie 

Utwórz swoją wersję tego repozytorium i pobierz ją jako lokalne repozytorium. 

> W tym celu skorzystaj z opcji "Fork" oraz komendy `git clone`. Jeśli nie pamiętasz jak to zrobić, wróć do materiałów "Podstawy Git" 



### Struktura repozytorium

Przykładowa strona znajduje się w folderze `webpage` i składa się z:

* pliku `index.html` będącego głównym dokumentem HTML
* folderu `img`, w którym przygotowane są pliki obrazków
* folderu `fonts`, w którym znajdują się czcionki
* folderu `css`, w którym trzymane są arkusze styli (`style.css`)
* folderu `js`, w którym trzymane są pliki JavaScript (`script.js`)

Zapoznaj się z zawartością tego katalogu i plikami wewnątrz niego. Plik `style.css` oraz `script.js` możesz otworzyć za pomocą dowolnego edytora tekstowego, jednak nic w nich na razie nie zmieniaj.





## Zadanie 1

Treść każdej strony internetowej opisana jest przez język znaczników HTML. Poprzez różne znaczniki nadajemy poszczególnym fragmentom strony znaczenie, tworząc w ten sposób układ strony. 

Aby przeglądarka mogła prawidłowo wyświetlić taką stroną, musi być ona zgodna ze specyfikacją - czyli spełniać określone wymagania gramatyczne. 

> Komputer możemy potraktować jako rozmówcę programisty - nie wystarczy, że będziesz znać pojedyncze słowa, musisz nauczyć się poprawnie ich używać i układać w odpowiedniej kolejności, według zasad gramatycznych danego języka. 
> Zobacz jak nawet pojedyncze litery zmieniają znaczenie: `szampon, szampan, szambo` - czy wyobrażasz sobie co by nalał robot do kieliszka przez taką literówkę programisty? :)

W pliku tekstowym `index.html` jest kilka błędów przez co przeglądarka nie wie jak wyświetlić stronę.

### Część 1

Przeglądarka nie wie co ma zrobić z zawartością elementu, ponieważ takiego nie zna.

Odszukaj w pliku `index.html` dokładnie fragment `<secion class="about">`. Miał być to element opisujący sekcję fragmentu strony. W jego nazwie wkradła się jednak literówka:

* popraw słowo `secion` na `section` 

Zapisz zmiany i odśwież stronę ponownie. Teraz przeglądarka dokładnie wie co zrobić z tym elementem, ponieważ jego nazwa jest prawidłowa i zgodna ze specyfikacją.

> Na kursie poznasz znaczenia poszczególnych elementów i nauczysz się budować układ strony 
>

### Część 2

Przeglądarka nie wie co ma zrobić gdy elementy nie są prawidłowo zdefiniowane.

Odszukaj w pliku `index.html` dokładnie fragment jak poniżej (znajduje się on wewnątrz sekcji, którą przed chwilą poprawialiśmy):

```html
img src="./img/frankenstein.png" alt="Frankenstein">
```

Miał być to obrazek, jednak przez nieprawidłowe otwarcie znacznika przeglądarka całkowicie się pogubiła i zamiast go wyświetlić wyświetliła jakiś tekst.

Dopisz znak otwierający `<`  przed elementem `img` tak aby wyglądał jak poniżej 

```html
<img src="./img/frankenstein.png" alt="Frankenstein">
```

Zapisz zmiany i odśwież stronę ponownie. Teraz przeglądarka dokładnie wie jak zinterpretować ten zapis i zaczęła prawidłowo wyświetlać obrazek.

> Na kursie poznasz praktyczne sposoby radzenia sobie z typowymi problemami oraz nauczysz się wykorzystywać dołączone do przeglądarki narzędzia developerskie





## Zadanie 2

Powinniśmy już mieć prawidłową strukturę pliku HTML, jednak cały czas jest to tylko zwykła zawartość. Nie poinformowaliśmy jeszcze przeglądarki jak i w którym miejscu chcemy, aby wyświetlały się poszczególne elementy.

Za szczegółowy opis wyglądu i zachowania elementów na stronie odpowiadają arkusze styli. Jest to plik tekstowy napisany według ściśle określonych zasad. 



### Część 1

Dodaj do pliku `index.html` informację dla przeglądarki z jakiego pliku ma pobierać arkusze styli. Informacje o takich wymaganiach znajdują się w części nagłówkowej, czyli pomiędzy znacznikiem otwierającym `<head>`  a zamykającym `</head>`.

Skopiuj i dodaj poniższy fragment zaraz po lini `<title>Dokument</title>`:

```html
<link rel="stylesheet" href="./css/style.css">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Roboto&display=swap" rel="stylesheet">
```

Pierwsza linia dodaje informację gdzie znajdują się arkusze (w naszym przypadku plik `sytle.css`). 
Druga linia dodaje czcionki z zewnętrznego serwisu Google.

Całość nagłówka po zmianach powinna wyglądać tak:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Roboto&display=swap" rel="stylesheet">
</head>
```

Zapisz zmiany i odśwież stronę. Jej wygląd powinien znacząco się zmienić.



### Część 2

Otwórz plik `style.css` z folderu `css`. Gdzieś w połowie pliku jest definicja zachowania środkowej części strony (sekcji). Odszukaj fragment poniżej (znajduje się gdzieś w połowie) który wygląda jak ten poniżej:

```css
section{
    display: flex;
    align-items: center;
    text-align: center;
}
```

W opisie tej sekcji brakuje własności, która sprawi, że całość wyrówna się od środka.

Dodaj własność `justify-content: center;` przed linią `display:flex`. Całość powinna wyglądać następująco:

```css
section{
    display: flex;
  	justify-content: center;
    align-items: center;
    text-align: center;
}
```

Zwróć uwagę na wszystkie wcięcia, dwukropki i średniki - jak już wiesz plik musi być poprawny gramatycznie. 

Zapisz plik i odśwież stronę. Wygląd strony powinien się zmienić na taki, na którym nam zależało. 

> Na kursie poznasz znaczenie wszystkich najważniejszych własności, nauczysz się ich używać i dowiesz się wszystkiego o budowie arkuszy styli.
>





## Zadanie 3

Nasza strona wygląda już zdecydowanie lepiej. Wszystko wyświetla się prawidłowo. Nadszedł czas dorzucić jeszcze ostatni element, czyli interakcję z użytkownikiem. Zauważ, że po najechaniu kursorem na zdjęcie Frankensteina strzałka zmienia się na "łapkę", co sugerować może, że da się w nie kliknąć - nic się jednak nie dzieje - tym się właśnie zajmiemy w tym zadaniu.

Interakcje z użytkownikiem i reakcje na zdarzenia realizowane są na stronie poprzez JavaScript. Jest to język programowania przygotowany specjalnie dla stron internetowych.

> Język JavaScript stał się tak uniwersalny i wygodny, że obecnie stosuje się go już nie tylko dla stron internetowych, ale również robotów i urządzeń internetu rzeczy (IoT).

W naszym przypadku JavaScript zawarty jest w pliku `script.js` wewnątrz folderu `js`. Żeby zaczął działać musimy poinformować przeglądarkę, aby dołączyła go do naszej strony. Jak już wiesz z zadania 2, takie informacje znajdują się w części nagłówkowej strony (pomiędzy znacznikami `head`).

Otwórz plik `index.html` i dodaj w nagłówku linię jak poniżej:

```html
<script src="./js/script.js"></script>
```

Całość powinna więc wyglądać następująco:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&family=Roboto&display=swap" rel="stylesheet">
    <script src="./js/script.js"></script>
</head>
```

Zapisz plik i odśwież stronę. Sprawdź teraz czy kolor Frankensteina się zmienia po kliknięciu.

> Na kursie nauczysz się pisać własne pliki JavaScript, poznasz możliwości tego języka i nauczysz się korzystać z nowoczesnych bibliotek do tworzenia interfejsców użytkownika (np. React).  





# Zakończenie

Wszystko działa. Sprawdź jeszcze tytuł zakładki po wyświetleniu strony `index.html`. Nie jest on adekwatny do treści strony, prawda? Możesz go zmienić w nagłówku strony modyfikując element `title` 😁



Jak widzisz tworzenie strony internetowej składa się z bardzo wielu czynników i wymaga poznaniu wielu składowych (struktura HTML, arkusze styli CSS, programowanie w języku JavaScript). Jeśli nie boisz się nowych informacji oraz jesteś w stanie przyswoić sporą dawkę zupełnie nowej wiedzy, dołącz do kursu w Sekcji PRO. Szczegóły kursu na stronie [https://sekcja.pro/kursy](https://sekcja.pro/kursy).

Tymczasem wyślij swoje zmiany do zewnętrznego repozytorium i poinformuj nas o chęci dołączenia poprzez utworzenie Pull Request z treścią "Jestem zainteresowana/ny". Jeśli nie pamiętasz jak to zrobić wróć do materiałów "Podstawy Git" 



# P.S.

Na końcu pliku `index.html` znajduje się stopka (element `footer`), a wewnątrz niej element `div` o treści "copyright". Zmień zawartość tego elementu `div` podpisując się swoim imieniem i datą 👍 







