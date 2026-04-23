# Folgen

$a_1, a_2, a_3, a_4, ...$ 

Zum Beispiel:


$$
\begin{aligned}
a_n = n &\Rightarrow 1, 2, 3, 4, 5 ... \\
2+3n &\Rightarrow 5, 8, 11, 14 ... \\
\frac{n}{8} &\Rightarrow \frac{1}{8}, \frac{1}{4}, \frac{3}{8}, \frac{1}{2}, ... \\
(-1)^n+1  \frac{1}{n} &\Rightarrow 1, 2, 3, 4, 5 ... \\
\left[\left(\frac{1+\sqrt(5)}{2}\right)^n - \left(\frac{1+\sqrt(5)}{2}\right)^n \right] * \frac{1}{\sqrt(5)} &\Rightarrow 1, 1, 2, 3, 5, 8, 13 ...
\end{aligned}
$$


# Polynom

$a_nx^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + ... + a_0$

$n$ ist der Grad des Polynoms.


# Summenzeichen Sigma

Eine Summe $\displaystyle \sum_{i=0}^n$ wird in der Programmierung durch eine **for-Schleife** umgesetzt.  
Die Summe beginnt mit $i = 0$ und wird, bis $i$  den Wert von $n$ erreicht hat, gebildet.

Zum Beispiel wird $\displaystyle \sum_{i=0}^n a_i x^i$ in der Programmierung wie folgt umgesetzt:
```
summe = 0

for i = 0 to n do
    term = a[i] * x^i
    summe = summe + term

return summe
```

## Arithmetische Reihe

$$
    \sum_{i=1}^n i = \frac{n(n+1)}{2}
$$


## Weitere Reihen

### Binärsystem

Größtmögliche Zahl mit $n$ stellen: 

$$
    \sum_{i=1}^n 2^i = 2^{n+1}-1
$$

### Konvergierende Reihe

Zum Beispiel $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + ... $

Als Summe schreibt man:

$$
    \sum_{i=1}^n a_i = 2-\frac{1}{2^{n-1}}
$$

Konvergent nennt man die Reihe, weil sich die Partialsummen einem festen Wert immer weiter annähern.

Für den Grenzwert gilt:

$$
    \lim_{n\to\infty}\sum_{i=1}^n a_i = 2
$$

### Divergierende Reihe

Zum Beispiel $1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + ... $

Als Summe schreibt man:

$$
    \sum_{i=1}^{i=\infty} = \infty
$$

Divergent nennt man die Reihe, weil die Partialsummen keinen endlichen Grenzwert haben und unbegrenzt wachsen können.

### Alternierende Reihe

> **TODO:** Beispiel einfügen


# Logarithmus

Hilfreicher Trick um annäherungsweise den Logarithmus zur Basis 2 zu bestimmen:

Beispiel:
WIe oft kann ich $1000$ halbieren, bis ich $\leq 1$ erhalte?
Annäherung: $\log_2 1000 \approx 10$ (weil $2^10 = 1024$)

## Regeln
$\log_x ab = \log_x a + log_x b$  
$\log_x a^k = k(\log_x a)$  
$\log_x \frac{a}{b} = \log_x a - log_x b$  
$\log_b a = \frac{\log_x a}{\log_x b}$  

# Peano-Axiome

1. 0 ist eine natürliche Zahl
2. Jede Zahl hat einen Nachfolger
3. Keine Zahl hat 0 als Nachfogler
4. Zwei Zahlen sind gleich, wenn ihr Nachfolger gleich ist
5. Wenn etwas für 0 gilt und für $n \rightarrow n+1$, dann gilt es für alle $n$.

Regel 5 nennt man **Induktionsprinzip**

# Logik

## Aussage

> Für Details siehe Vorlesung zu Elementare Logik!

Wir schreiben $A \Rightarrow B$ und sprehcen "Aus $A$ folgt $B$!"

## Kombinatoren

| Symbol | Bedeutung |
|-|-|
| $A \land B$ | *und* |
| $A \lor B$ | *oder* |
| $A \oplus B$ | *entweder oder* |
| $\lnot A$ | *nicht* |

# Beweise

## Direkter Beweis

1. Beispiel 

Aussage: $n$ ist gerade $\Rightarrow n^2$ ist auch gerade

gerade Zahl: $n = 2k$ mit $k \in \mathbb{N}$
$(2k)^2 = 4k^2 = 2 (2k^2)$ mit $k' = 2k^2 \in \mathbb{N} \Rightarrow 2 (2k^2) = 2k' \quad _\square$

2. Beispiel 

Aussage: $n$ ist ungerade $\Rightarrow n^2$ ist gerade

Wenn $n = 3 \Rightarrow 3^2 = 9 🗲$

## Indirekter Beweis 
## Widerspruchsbeweis

Wir nehmen das Gegentail an und widerlegen es.

> **TODO:** Beispiel einfügen

## Kontraposition

> **TODO:** Beispiel einfügen

## Beweis durch Indikation

Beweis der arithmetischen Reihe

$$
    \sum_{i=1}^n i = \frac{n(n+1)}{2}
$$

1. **Indikationsanfang (*IA*)**: 
Für: 

$$
    n = 1 \Rightarrow \sum_{i=1}^n i = \sum_{i=1}^1 i = 1 \checkmark
$$

2. **Induktionsvoraussetzung (*IV*)**  
- Für alle $1 \leq n \leq k$ gilt die Formel.
- Für $n$ gilt die Formel.

4. **Induktionsschluss (*IS*)**:  
$n \rightarrow n+1$

```math
\sum_{i=1}^{n+1} i = n+1 + \sum_{i=1}^n \underset{IV}= n+1 + \frac{n(n+1)}{2} = \frac{2(n+1)}{2} + \frac{n(n+1)}{2} = \frac{(n+2)n+1)}{2}  _\square
```