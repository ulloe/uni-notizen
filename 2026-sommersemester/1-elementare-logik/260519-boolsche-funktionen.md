# Boolesche Funktionen

### Definition
Eine $n$-stellige Boolesche Funktion $f$ ist eine Abbildung, die jedem Tupel $(b_1, ..., b_n)$ aus $\set{0,1}^n$ einen Wert aus $\set{0,1}$ ("Bits") zuordnet: $f: \set{0,1}^n \to \set{0,1}$

**Boolesche Komplement** (einstellige Funktion):  
$\bar 0 = \lnot 0 = 1,\quad \bar 1 = \lnot 1 = 0$

**Boolesches Produkt** (zweistellig):  
$0 \cdot 0 = 1 \cdot 0 = 0 \cdot 1 = 0, \quad 1 \cdot 1 = 1$

**Boolesche Summe** (zweistellig):  
$0 + 0 = 0 \quad  0 + 1 = 1 + 0 = 1 + 1 = 1$


Syntax der Booleschen Funktionen entspricht fast exakt der wohlgeformten Aussagenlogik.
* "$\cdot$" und "$+$" ersetzenb "$\land$" und "$\lor$"
* $\set{0,1}$ ersetzen $\set{w, f}$

Durch Regeln kann die Schreibweise verkürzt werden:

* "$\cdot$" kann weggelassenw erden
* $\lnot$ kann durch $\bar \space$ ersetzt werden
* von links nach rechts ersetzt bestimmte äußere Klammern

Beispiel:

```math
((x_1 + x_2) \cdot \lnot(\lnot x_3 \cdot x_4)) \cdot (x_5 + 1) \\
\to (x_1 + x_2) \overline{\bar x_3 x_4} (x_5 +1)
```

### Definition

Zwei Boolesche Ausdrücke $v$ und $w$ heißen **äquivalent** ($v \equiv w$), wenn beide die gleiche n-stellige Boolesche Funktion $f$ darstellen, also $f_v^{(n)} (b_1, ..., b_n) = f_w^{(n)} (b_1, ..., b_n)$ für alle Bitvektoren $(b_1, ..., b_n)$ gilt.  
Dabei wird $n$ als maximaler Index der in $v$ oder $w$ vorkommenden Variablen gewählt.


## Normalformen

Gibt es zu jeder FUnktion $f$ auch einen passenden Ausdruck $w$ mit $f_w = f$?

| $x_1$ | $x_2$ | $f(x_1,x_2)$ |
|-|-|-|
|0|0|1|
|0|1|0|
|1|0|0|
|1|1|1|

$f$ hat den Wert $1$ nur bei $(0,0)$ odedr $(1,1)$:  
$\bar x_1 \bar x_2 + x_1 x_2$

### Definition (3.2.1)
Eine einzelne Variable oder negierte Variable in einem Booleschen Ausdruck wird **Literal** genannt.