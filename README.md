# CSS Selektoren – Übersicht

---

## 1. Grundlegende Selektoren
- `*` → Universalselektor (wählt **alle Elemente**)
- `element` → Typselektor (z. B. `p` für alle `<p>`-Tags)
- `.klasse` → Klassenselektor (alle Elemente mit der Klasse)
- `#id` → ID-Selektor (das eindeutige Element mit dieser ID)

---

## 2. Kombinatoren
- `A B` → Nachfahre (alle B **innerhalb** von A)
- `A > B` → Kindselektor (alle direkten Kinder B von A)
- `A + B` → Adjacent Sibling (erstes B direkt **nach** A)
- `A ~ B` → General Sibling (alle B nach A auf derselben Ebene)

---

## 3. Attribut-Selektoren
- `[attr]` → Elemente mit dem Attribut
- `[attr="wert"]` → exakt dieser Wert
- `[attr~="wort"]` → enthält das Wort (wortweise)
- `[attr|="wert"]` → exakt „wert“ oder „wert-“ beginnend
- `[attr^="wert"]` → beginnt mit „wert“
- `[attr$="wert"]` → endet mit „wert“
- `[attr*="wert"]` → enthält „wert“

---

## 4. Pseudo-Klassen

### Benutzerinteraktion
- `:hover` → wenn Maus drüber
- `:active` → wenn angeklickt
- `:focus` → wenn im Fokus (z. B. Eingabefeld)
- `:visited` / `:link` → besuchter / unbesuchter Link
- `:checked` → ausgewählt (Checkbox/Radio)
- `:disabled` / `:enabled` → deaktiviert / aktiviert
- `:required` / `:optional` → Pflichtfelder / optionale Felder

### Struktur
- `:first-child` → erstes Kind
- `:last-child` → letztes Kind
- `:nth-child(n)` → n-tes Kind
- `:nth-last-child(n)` → von hinten gezählt
- `:only-child` → einziges Kind
- `:first-of-type` → erstes seiner Art
- `:last-of-type` → letztes seiner Art
- `:nth-of-type(n)` → n-tes seiner Art
- `:only-of-type` → einziges seiner Art
- `:not(selector)` → negiert einen Selektor
- `:is(selector)` → trifft zu, wenn einer zutrifft
- `:where(selector)` → wie `:is`, ohne Spezifität

---

## 5. Pseudo-Elemente
- `::before` → Inhalt **vor** dem Element
- `::after` → Inhalt **nach** dem Element
- `::first-letter` → erstes Zeichen
- `::first-line` → erste Zeile
- `::selection` → markierter Text
- `::placeholder` → Platzhalter in Formularfeldern

---

## Tipp
- Druck es dir in Kategorien aus → schneller Überblick.
- Nutze es wie eine „Cheat Sheet“-Seite.

---


---------------------------------------------------------------------------------------------
DOM Changes mit JavaScript 
---------------------------------------------------------------------------------------------

# JavaScript DOM – Übersicht

---

## 1. Elemente auswählen
- `document.getElementById("id")` → Wählt Element mit bestimmter ID.
- `document.getElementsByClassName("class")` → Alle Elemente mit Klasse (HTMLCollection).
- `document.getElementsByTagName("tag")` → Alle Elemente eines Typs (z. B. `div`).
- `document.querySelector("cssSelector")` → Erstes Element, das zum Selektor passt.
- `document.querySelectorAll("cssSelector")` → Alle passenden Elemente (NodeList).

---

## 2. Inhalte lesen / ändern
- `element.textContent` → Gibt reinen Text zurück oder setzt ihn.
- `element.innerHTML` → Gibt HTML-Inhalt zurück oder setzt ihn.
- `element.innerText` → Ähnlich wie `textContent`, aber beachtet CSS.
- `element.value` → Wert von Formularfeldern (Input, Textarea).

---

## 3. Attribute lesen / ändern
- `element.getAttribute("attr")` → Wert eines Attributs auslesen.
- `element.setAttribute("attr", "wert")` → Neues Attribut setzen oder ändern.
- `element.removeAttribute("attr")` → Attribut entfernen.
- `element.hasAttribute("attr")` → Prüfen, ob Attribut vorhanden ist.

---

## 4. CSS-Klassen manipulieren
- `element.classList.add("klasse")` → Klasse hinzufügen.
- `element.classList.remove("klasse")` → Klasse entfernen.
- `element.classList.toggle("klasse")` → Klasse ein-/ausschalten.
- `element.classList.contains("klasse")` → Prüfen, ob Klasse existiert.

---

## 5. CSS-Stile direkt ändern
- `element.style.property = "wert"`  
  Beispiel: `element.style.color = "red"`

---

## 6. DOM-Struktur ändern
- `document.createElement("tag")` → Neues Element erstellen.
- `element.appendChild(neuesElement)` → Neues Kind anhängen.
- `element.append(neuesElement)` → Hängt Knoten oder Text an (moderner).
- `element.prepend(neuesElement)` → Vorne einfügen.
- `element.insertBefore(neuesElement, referenzElement)` → Vor bestimmtem Knoten einfügen.
- `element.remove()` → Element selbst löschen.
- `element.replaceChild(neuesElement, altesElement)` → Knoten ersetzen.
- `element.cloneNode(true|false)` → Knoten kopieren (true = mit Kindern).

---

## 7. Events
- `element.addEventListener("event", callback)` → Ereignis hinzufügen.  
  Beispiel:  
  ```js
  button.addEventListener("click", () => alert("Klick!"));



  ---------------------------------------------------------------------------------
  UI Komponente 
  ---------------------------------------------------------------------------------


  # UI Komponenten – Übersicht
---

## 1. Accordion
- Klapp-Element zur Anzeige und Verbergung von Inhalten.  
- Nutzer:innen können Abschnitte auf- und zuklappen.  
- Gut für FAQs oder strukturierte Listen.

---

## 2. Multiselect
- Dropdown mit Möglichkeit, **mehrere Optionen** gleichzeitig auszuwählen.  
- Häufig mit Checkboxen oder Tags.  

---

## 3. Date Picker
- Interaktive Kalender-Komponente zur Auswahl von Daten.  
- Erleichtert die Eingabe von Datumswerten (statt manueller Eingabe).

---

## 4. Chip / Tag
- Kleine visuelle Elemente, die Informationen oder Kategorien darstellen.  
- Werden oft zum Anzeigen von Auswahlwerten genutzt (z. B. Filter, Hashtags).  

---

## 5. Slider
- Ermöglicht die Auswahl eines Wertes innerhalb eines Bereichs.  
- Horizontal oder vertikal nutzbar.  
- Beispiele: Lautstärke, Preisfilter.

---

## 6. Progress Bar
- Zeigt den Fortschritt einer Aufgabe oder eines Prozesses an.  
- Kann linear (Balken) oder kreisförmig sein.  

---

## 7. Carousel / Slideshow
- Präsentiert Inhalte (Bilder, Karten, Texte) in einer durchlaufenden Abfolge.  
- Navigation per Pfeilen, Punkten oder Auto-Slide.  

---

## 8. Rating
- Bewertungselement, meist mit Sternen, Herzen oder Symbolen.  
- Nutzer:innen geben eine Bewertung auf einer Skala ab.  

---

## 9. Treeview
- Hierarchische Darstellung von Daten (wie ein Dateisystem).  
- Knoten können auf- und zugeklappt werden.  

---

## 10. Tooltip
- Kurze Info-Anzeige, die erscheint, wenn der Mauszeiger über einem Element schwebt.  
- Hilft, zusätzliche Erklärungen oder Labels einzublenden.  

---

