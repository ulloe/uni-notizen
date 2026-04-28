# Mengenbeweise
## Aufgabe 1

### Teilaufgabe a)
Sei 

```math
\begin{aligned}
x \in A \cup (B \cup C) &\Leftrightarrow x \in A \lor x \in B \cup C \\
&\Leftrightarrow x \in A \lor (x \in B \lor x \in C) \\
&\overset{\text{Aussagenlogik}}\Leftrightarrow (x \in A \lor x \in B) \lor x \in C \\
&\Leftrightarrow x \in (A \cup B) \lor x \in C \\
&\Leftrightarrow x \in (A \cup B) \cup C \\

\end{aligned}
```

Man kann auch direkt mit der Menge arbeiten:

```math
\begin{aligned}
A \cup (B \cup C) &= \set{x: x \in A \lor x \in B \cup C} \\
&= \set{x: x \in A \lor (x \in B \lor x \in C)} \\
&\overset{\text{Aussagenlogik}}= \set{x: (x \in A \lor x \in B) \lor x \in C} \\
&= \set{x: x \in (A \cup B) \lor x \in C} \\
&= (A \cup B) \cup C \\

\end{aligned}
```

### Teilaufgabe e)


```math
\begin{aligned}
\overline{A \cap B} &= \set{x: x \in \Omega \land \lnot(x \in A \cap B)} \\
&= \set{x: x \in \Omega \land \lnot(x \in A \land x \in B)} \\
&\overset{\text{Aussagenlogik}}= \set{x: (x \in \Omega \land \lnot(x \in A) \lor \lnot (x \in B)} \\
&= \set{x: x \in \Omega \land x \in \overline{A} \cup \overline{B}} \\
&= \overline{A} \cup \overline{B}
\end{aligned}
```
Weitere Aufgaben können mit dem gleichen Schema bewiesen werden.


# Abbildungen

$f: X \to Y$

* f: ist die Abbildung
* X: ist die Definitionsmenge
* Y: ist die Wertemenge

Beispiel: 

* keine Abbildung: $f: \mathbb{R} \to \mathbb{R} , f(x) = \frac{1}{x}$ (da $f(x)$ für $x = 0$ nicht definiert ist)
* Abbildung: $f: \mathbb{R} \setminus \set{0} \to \mathbb{R}, f(x) = \frac{1}{x}$ (da $0$ explizit aus der Definitionsmenge ausgeschlossen wurde)

## injektiv

Falls $f(x) = f(y) \Rightarrow x = y$  
oder $x \not= y \Rightarrow f(x) \not= f(y)$

Beispiel:

* injektiv: $f: \mathbb{R}  \to \mathbb{R} , f(x) = x$
* nicht injektiv: $f: \mathbb{R}  \to \mathbb{R} , f(x) = x^2$  
(weil $f(-1) = f(1)$ und $-1 \not= 1$)

## surjektiv

$\forall y \in Y \exists x \in X : f(x) = y$  
(Für jedes $y$ der Menge $Y$ existiert ein $x$ in der Menge $X$ mit dem wir mit $f(x)$ dieses $y$ abbilden können)

## bijektiv

Ist eine Abbildung **surjektiv und injektiv**, nennen wir sie **bijektiv**.

## Aufgabe 2

### Teilaufgabe a)

Die Abbildung ist nicht injektiv, da mit $x,y \in \mathbb{Z}$ mit $x = 1$ und $y = -1$ gilt $f(x) = f(y)$.

Die Abbildung ist nicht surjektiv, da $f(x) = 3$ nicht abgebildet werden kann.

**Beweis:** Sei $f(x) = 3$

```math
\begin{aligned}
    x^2 + 1 &= 3 \\
    x^2 &= 2 \\
    x &=  \pm \sqrt{2} \quad | \sqrt{2} \notin \mathbb{Z} & \\
                                                        & &\square \\
\end{aligned}
```

### Teilaufgabe b)

Die Abbildung ist nicht surjektiv, da $f(x) = 3$ nicht abgebildet werden kann.

Die Abbildung ist injektiv,da für $x,y \in \mathbb{N}$ gilt:
```math
\begin{aligned}
   f(x) &= f(y) \\
   \Leftrightarrow \quad x^2 + 1 &= y^2 + 1 \\
   \Leftrightarrow \quad x^2 &= y^2\\
   \Leftrightarrow \quad x &= y \\
   &\quad \quad \square
\end{aligned}
```

> Hinweis: Injektivität kann immer mit dem Muster bewiesen werden ein $x,y \in \mathbb{D}$ (Definitionsmenge) zu wählen. Dann kann $f(x) = f(y)$ mit Hilfe der Abbildung auf $x = y$ umgeformt werden. Und das ist die Bedingung.


### Teilaufgabe c)

Die Abbildung ist surjektiv: Sei $ q \in Q$, Dann gibt es $a,b$ mit $q = \frac{a}{b}$ wobei $a \in \mathbb{Z}$ und $b \in \mathbb{N}$  
Dann gilt: $q = \frac{a}{b} = \frac{2a}{2b} = h(\underbrace{2a}_{\in \mathbb{Z}}, \underbrace{2b -1}_{\in \mathbb{N}})$


### Teilaufgabe d)

...

### Teilaufgabe e)

...

### Teilaufgabe f)

Die Abbildung ist injektiv: Sei $x,y \in \N$ mit $h(x) = h(y)$, dann gilt:
```math
\begin{aligned}
h(x) &= h(y) \\
\Leftrightarrow 2x &= 2y \\
\Leftrightarrow x &= y
\end{aligned} 
```

Die Abbildung ist surjektiv: Sei $m \in \set{2,4,6,...}$ dann ist $m = 2k$ für ein $k \in \N$, also $h(k) = 2k = m$.

Die Umkehrabbildung ist $h^{-1}(y) = \frac{y}{2}$, das können wir zeigen durch:

> Tipp: Die Umkehrabbildung kann leicht gefundeen werden, in dem man für $f(x)$ einen Wert $y$ in die Gleichung einsetzt und die Gliechung nach $x$ auflöst.
>
>Beispiel:
>
>```math
>\begin{aligned}
>   \text{Geg.:} \quad f(x) &= 2x \\
>   y &= 2x \\
>   \frac{y}{2} &= x 
>\end{aligned}
>```

$h^{-1}(h(x)) = h^{-1}(2x) = \frac{2x}{2} = x$  
und  
$h(h^{-1}(x)) = h(\frac{x}{2}) = 2\frac{x}{2} = x$

## Aufgabe 3

### Teilaufgabe a)

Geg.: $f$: injektiv, das heißt für $x_1,x_2 \in X$ mit $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$
Geg.: $g: injektiv, das heißt für $y_1,y_2 \in Y$ mit $f(y_1) = f(y_2) \Rightarrow y_1 = y_2$

Zeige: $(g \circ f)(x_1) = (g \circ f)(x_2) \Rightarrow x_1 = x_2

Sei $x_1, x_2 \in X$ mit $(g \circ f)(x_1) = (g \circ f)(x_2)$  
```math 
\begin{aligned}
(g \circ f)(x_1) &= (g \circ f)(x_2) \\
g(f(x_1)) &= g(f(x_2)) \\
\overset{\text{g ist injektiv}}\Longrightarrow f(x_1) &= f(x_2) \\
\overset{\text{f ist injektiv}}\Longrightarrow x_1 &= x_2 
\end{aligned}
```
Wichtig: wir haben hier Folgefeile ($\Rightarrow$) keine Äquivalenz, denn Rückwärts können wir den Schluss nicht ziehen.

### Teilaufgabe b)

Sei $z \in Z$ beliebig, da $g$ surjektiv ist, gitb es ein $y \in Y$ mit $g(y) = z$.  
Da $f$ surjektiv ist, gibt es ein $x \in X$ mit $f(x) = y$.

Also gilt: $(g \circ f)(x) = g(f(x)) = g(y) = z$

### Teilaufgabe c)

Zeige: Wenn $g \circ f$ injektiv ist, ist $f$ ebenfalls injektiv.

```math 
\begin{aligned}
f(x_1) &= f(x_2) \\
\Rightarrow g(f(x_1)) &= g(f(x_2)) \\
\Rightarrow (g \circ f)(x_1) &= (g \circ f)(x_2) \\
\overset{\text{g }\circ\text{ f ist injektiv}}\Longrightarrow x_1 &= x_2 
\end{aligned}
```

Ebenfalls möglich ist der Beweis durch einen Widerspruch:

Angenommen $f$ ist nicht injektiv, dann sei für $x_1 \not= x_2$  mit $x_1,x_2 \in X$  gültig, dass  $f(x_1) = f(x_2)$.  
Da Die Verknüpfung $g \circ f$ injektiv ist, gilt:  

```math 
\begin{aligned}
(g \circ f)(x_1) &= (g \circ f)(x_2) \\
\Leftrightarrow g(f(x_1)) &= g(f(x_2)) \\
\overset{\text{g }\circ\text{ f ist injektiv}}\Longrightarrow x_1 &= x_2 
\end{aligned}
```

Es ergibt sich ein Widerspruch aus $x_1 = x_2$ zur Annahme.
 