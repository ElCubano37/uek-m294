# CSS Selektoren – Übersicht

Dieses Dokument fasst die wichtigsten CSS-Selektoren zusammen.  
Perfekt als Spickzettel für Prüfungen oder zum schnellen Nachschlagen. 🚀

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
