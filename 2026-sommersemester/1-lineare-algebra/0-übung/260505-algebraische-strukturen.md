# Aufgabe 1

Grupen:
* $(\mathbb{Q} \setminus \set{0}, \cdot)$
* $(\set{0}, +)$

Bei $(\mathbb{R}, \cdot)$ gibt es kein inverses für 0.  
Bei $(\mathbb{N}, +)$ gitb es weder inverse, noch ein neutrales Element

# Aufgabe 2

Ja, es handelt sich um eine Gruppe.  
Aus der Tabelle erkennt man, dass die Verknüpfung abgeshclossen ist..

**(G2) Existenz eines neutralen Elements:**

Das neutrale Element ist $e \in G$, denn $e \cdot x  = x = x \cdot e \quad \forall x \in G

**(G3) Existenz eines inversen Elements:**

$e \cdot e = e$  
$a \cdot c = e \Leftrightarrow a^{-1} = c$  
$b \cdot b = e \Leftrightarrow b^{-1} = b$  
$c \cdot a = e \Leftrightarrow c^{-1} = a$  

**(G1) Assoziativität:**

Lässt sich leicht aus der Tabelle nachrechnen.

**Kommutativität:**

Tabelle ist symmetrisch zur Hauptdiagonalen, d.h. $a \dot b = b \cdot a \quad \forall a,b \in G$

# Aufgabe 3

Es sei $(G, \cdot)$ eine Gruppe mit neutralem Element $e$, sodass $a^2 = e$ für alle $a \in G$ gilt.

Zeige, dass $(G, \cdot)$ abelsch ist.

**Beweis:**

Zeige $x \cdot y = y \cdot x \quad \forall x,y \in G$

$a^2 = a \cdot a = e \\ \Rightarrow a = a^{-1}$

Sei $x,y \in G$, daher wissen wir $x \dot y \in G$.

Damit folgt $(xy)^2 = e$

Also $xy = (xy)^{-1} \overset{\text{Rechenregel der Gruppen}}{=} y{-1} \cdot x^{-1} \Leftrightarrow xy = yx $


**Alternative:**

Sei $x, y \in G$  
Es gilt: $a \cdot a = e$
und $b \cdot b = e$
und damit auch $a = a^{-1}$ und $b = b^{-1}$

```math
a \cdot e = a \\
\Rightarrow a \cdot e \cdot a = e \\
\Leftrightarrow  a \cdot b \cdot b \cdot a = e \\

\overset{\text{Assoziativität}}{\Leftrightarrow} \underbrace{(a \cdot b)}_{= a'} \cdot \underbrace{(b \cdot a)}_{=a'} = e \\

\overset{\text{aus } a'^2 = e}\Rightarrow a \cdot b = b \cdot a
```
