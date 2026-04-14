# Uni Notizen Repository

Dieses Repository dient der Sammlung und gemeinsamen Bearbeitung von Vorlesungsnotizen aus dem Informatikstudium.
 
Primär versuche ich hier meinen eigenen Fortschritt zu notieren, deshalb strukturiere ich nach Jahren und Semestern, die ich studiere. Es ist denkbar ergänzende Vorlesungen hinzuzufügen, wenn der Bedarf besteht. Dann muss ich mir eine Lösung für meinen persönlichen Fortschritt überlegen. Zum Beispiel ihn über separate branches zu pflegen. Ich behalte mir weiterhin vor Änderungen und Ergänzungen abzulehnen.

## Ziel

- langfristige, plattformunabhängige Verfügbarkeit der Inhalte
- Dokumentation des Studienfortschritts
- kollaboratives Arbeiten über GitHub
- strukturierte Notizen in Markdown
- Unterstützung von mathematischen Formeln via LaTeX/MathJax
- Übung von Git als grundlegendes Werkzeug der Softwareentwicklung

## Struktur

```
/2026-sommersemester
│
├── /vorkurs-informatik
│   ├── 260409-grundlagen.md
│   ├── 260410-grundlagen-programmierung.md
│   │
│   └── /assets
│       ├── /bilder
│       ├── /diagramme
│       ...
│
├── /lineare-algebra
│   ├── 260403-definitionen.md
│   ├── 02-grenzwerte.md
│   ...
│
└── /elementare-logik
    ├── 01-logik.md
    ├── 02-beweise.md
    ...
 ```


## Editor

Alle Inhalte sind [Markdown](#markdown-und-formeln), einem reinen Textformat. Der Vorteil ist, Markdown ist simpel und Plattform unabhängig. Damit kann jeder die Inhalte mit seiner bevorzugten Methode bearbeiten.
Optionen sind Ghostwriter, Visual Studio Code oder ein einfacher Texteditor. 

### Ghostwriter

Ubuntu:
`sudo apt install ghostwriter`

Fedora:
`sudo dnf install ghostwriter`

https://ghostwriter.kde.org/

### Visual Studio Code

> Ich hab hier keine Ahnung, Empfehlung von ChatGPT. Gerne korrigieren oder bestätigen.

Empfohlene Extensions:
- Markdown Preview Enhanced
- LaTeX Workshop

https://code.visualstudio.com/docs

## Git

Grundlegende Befehle:
```
git clone <repo-url>
git add .
git commit -m "message"
git push
```

https://git-scm.com/doc

## GitHub

https://docs.github.com/

https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo

## Markdown und Formeln

### Beispiel

```

# Überschrift

## Überschrift 2

Text in **fett** oder *kursiv*

- Punkt 1
- Punkt 2

Inline Formel: $a^2 + b^2 = c^2$

Block Formel:

$$
\int_0^1 x^2 dx
$$

> Zitate
```

https://www.markdownguide.org/

https://www.mathjax.org/

## Mitarbeit

Pull Requests sind willkommen, wenn sie legitim sind. Also schreibe mir kurz bevor du einen PR erstellst, damit ich weiß, dass du mit mir studierst. Oder sprich mich ganz einfach in einer Vorlesung oder Übung an.


Bitte beachten:
- klare Struktur
- konsistente Dateinamen
- verständliche Formeln
- saubere Commit Messages


# Lizenz

Copyright (c) 2026

Alle Rechte vorbehalten.

Die in diesem Repository enthaltenen Inhalte (Notizen, Zusammenfassungen) sind nur für private und akademische Zwecke bestimmt.
Inhalte Dritter (z. B. Vorlesungsunterlagen) können urheberrechtlich geschützt sein und werden nicht lizenziert.

