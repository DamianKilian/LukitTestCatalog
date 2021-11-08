# Lukit Test Catalog
Prosty katalog produktów z podziałem na kategroie i podkategorie.

## Opis

Przygotować prosty katalog produktów z podziałem na kategorie i podkategorie. 
Produkty zawierające jedno zdjęie i opis powinny mieć możliwość umieszczania w różnych kategoriach i podkategoriach.

Projekt powinien składać się z dwóch części: **frontend** i **backend**.
Katalog powinien być responsywny zbudowany na wybranym frameworku UI.

### Frontend

Na froncie widoczna jest lista kategorii głównych z możliwością rozwinięcia drzewa i podglądu (wejscia do) pod-kategorii oraz lista produktów.
Podgląd wybranej kategorii zawęża listę produktów do tych dostępnych w aktualnie wybranej.
Domyślnie na stronie głównej wyświetlać karty wszystkich produktów. 
Każda karta produktu powinna wyświetlać nazwę, zdjęcie, krótki opis oraz cenę.
Lista produktów i kategorii posortowana po nazwie ASC.

### Backend

W backendzie dwie sekcje - kategorie i produkty gdzie jest możliwść listowania, dodawania, edycji i kasowania danych.
Edycja produktu i kategorii powinna aktualizować datę aktualizacji, która jest widoczona na liście.
Przypisywanie produktu do kategorii może odbywać się na stronie edycji produktu lub w dodatkowej akcji.

Lista produktów i kategorii domyśłnie posortowana po nazwie ASC. Możliwe sortowania list po nazwie i dacie aktualizacji.

### Encje

#### Kategoria

- nazwa
- kategoria nadrzędna
- data aktualizacji

#### Produkt

- nazwa 
- opis
- zdjęcie
- data aktualizacji
- cena

## Stack

- Symfony 5 + Twig
- Mysql/MariaDb + Doctrine
- Frontend - wybrany Responsive Framework np: Bootstrap lub Semantic UI
- Backend - również responsywny, można posiłkować się dostępnymi w Symfony generatorami CRUD
- W kodzie nazwy metod, encji, dokumentacja, komentarze po angielsku
- Przyogotwać zestaw danych startowych - fixtures
- Proste testy funkcjonalne i unity w miarę potrzeby
- Załączyć instrukcja/opis instalacji - osobny plik readme
- Github - prywatny fork i Pull Requesty ze zmianami
- Commity tak jak komentarze najlepiej po angielsku
- Pytania i inne kwestie - w Issues, możemy też tam wrzucać prośby o poprawki lub objaśnienia, dyskusje itp...
