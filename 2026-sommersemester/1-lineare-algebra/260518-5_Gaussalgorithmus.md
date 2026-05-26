# 5. Gauß Algorithmus

## 5.1 Beispiel

LGS: Unbekannte: $x_1, x_2, x_3, x_4$

```math
\begin{aligned}
&2x_1 & & & +1x_4 = 1 \\
&6x_1 & & +3x_3 & +3x_4 = 2 \\
&8x_1 & & & +8x_4 = 3 \\
&4x_1 & +2x_2 & & +2x_4 = 4 
\end{aligned}
```

**Maatrix Schreibweise:** $Ax = b$, Unbekannte $x = \left(\begin{matrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{matrix}\right)$

$A = \left[\begin{matrix} 2 & 0 & 0 & 1 \\ 6 & 0 & 3 & 3 \\ 8 & 0 & 0 & 8 \\ 4 & 2 & 0 & 2 \end{matrix}\right], b = \left[\begin{matrix} 1 \\ 2 \\ 3 \\ 4 \end{matrix}\right]$

Idee: 

```math

\begin{aligned}
Ax &= b \\
\underbrace{A^{-1} \cdot A}_{I_n} \cdot x &= A^{-1} \cdot b \\
x &= A^{-1} b

\end{aligned}
```

Wenn $A$ einen untere Dreiecksmatrix ist, ist sie invertierbar. Wir finden $A^{-1}$ durch Rückwärtseinsetzen.

Wir müssen also A auf die Form einer oberen Dreiecksmatrix b ringen, in dem Zeilen addiert oder vervielfacht werden.


1. Betrachte die erste Spalte
    * Addiere das (-3)-fache der 1. Zeile zur 2. Zeile
    * Addiere das (-4)-fache der 1. Zeile zur 3. Zeile
    * Addiere das (-2)-fache der 1. zeile zur 4. Zeile

```math

A

\begin{aligned}
  & \xrightarrow{Z2-3Z1} \\ 
  & \xrightarrow{Z3-4Z1} \\
  & \xrightarrow{Z4-2Z1} \\
\end{aligned}

\left[
\begin{array}{rrrr|r}
2 &  0 & 0 & 1 & 1 \\
0 &  0 & 3 & 0 & -1 \\
0 &  0 & 0 & 4 & -1 \\
0 &  2 & 0 & 0 & 2
\end{array}
\right]

\\
\quad
\\

\xrightarrow{Z4 \leftrightarrow Z2} 

\left[
\begin{array}{rrrr|r}
2 &  0 & 0 & 1 & 1 \\
0 &  2 & 0 & 0 & 2 \\
0 &  0 & 0 & 4 & -1 \\
0 &  0 & 3 & 0 & -1 
\end{array}
\right]

\\
\quad
\\


\xrightarrow{Z4 \leftrightarrow Z3} 

\left[
\begin{array}{rrrr|r}
2 &  0 & 0 & 1 & 1 \\
0 &  2 & 0 & 0 & 2 \\
0 &  0 & 3 & 0 & -1 \\
0 &  0 & 0 & 4 & -1 
\end{array}
\right]

```
$4x_4 = -1 \leadsto x_4 = -\frac{1}{4}$  
$3x_3 = -1 \leadsto x_3 = -\frac{1}{3}$  
$2x_2 = 2 \leadsto x_2 = 1$  
$2x_1 +1x_4 = 1 \leadsto x_1 = \frac{5}{8}$  


### LR-Zerlegung einer Matrix A
$P \cdot A = L \cdot R$

$R$: rechte, obere Dreiecksmatrix  
$L$: linke, untere Dreiecksmatrix  
$P$: Permutationsmatrix

Für unser Beispiel:

```math
\begin{matrix}
a) \\
b) \\
c) \\
d)
\end{matrix}

\left[
\begin{matrix}
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 
\end{matrix}
\right]
 A = 

\overset{L}{
\left[
\begin{matrix}
1 & 0 & 0 & 0 \\
2 & 1 & 0 & 0 \\
3 & 0 & 1 & 0 \\
4 & 0 & 0 & 1 
\end{matrix}
\right]}
 
\overset{R}{
\left[
\begin{matrix}
2 & 0 & 0 & 1 \\
0 & 2 & 0 & 0 \\
0 & 0 & 3 & 0 \\
0 & 0 & 0 & 4 
\end{matrix}
\right]}
```

a) Tausche 1. Zeile mit 1. Zeile
b) Tausche 2. Zeile mit 4. Zeile
c) Tausche 3. Zeile mit 2. Zeile
d) Tausche 4. Zeile mit 3. Zeile


$L$ sind die Operationen der miteinander verrechneten Zeilen, nachdem wir getauscht haben.


Gegeben: Matrix $A \in K^{n \times n}, b \in K^{n \times 1}$  
Gesucht: $X$ mit $Ax=b$

Erweiterte matrix $[A|b]$

$[A|b] \to [R|\tilde b]$

Mögliche Zeilenmanipulationen:

1. Multiplikation einer Zeile mit einem Skalar.
2. Addition zweier Zeilen
3. Tausch zweier Zeilen

Zeilenmanipulationen sollen auf **Zeilen-Stufenform** führen.

```math

\left[
\begin{array}{cccc|c}
* & * & * & * & \tilde b_1 \\
0 & * & * & * & \tilde b_2 \\
0 & 0 & * & * & \tilde b_3 \\
0 & 0 & 0 & a & z
\end{array}
\right]

```

Zu unterscheiden sind dabei 3 Fälle:

1. Fall: $a = 0$ und $z \not = 0$  
Dann gibt es *keine Lösung*!
2. Fall: $a = 0 und $z = 0$  
Dann gibt es *unendlich viele Lösungen*!
3. Fall $a \not = 0$  
Dann gibt es eine *eindeutige Lösung*. $A$ ist dann invertierbar.

## 5.2 Theoretische Analyse des Gauß-Algorithmus

Wir benötigen für die elementaren Zeilenoperationen Matrixdarstellungen. (Elementarmatrizen)

### Definition

Wir bezeichnen mit $P_{ij} \in K^{n \times n}$ mit $1 \leq i \leq j \leq n$ die **Permutationsmatrix**.

$P_{ij} = \left[\begin{matrix}1 \\ & \ddots \\ & & 0 & 1 \\ & & 1 & 0 \\ & & & & \ddots \\ & & & & & 1 \end{matrix}\right]$

Hierbei handelt es sich bei den ausgezeichneten Zeilen/Spalten um die i-te bzw. j-te Zeile und Spalte.

> Hinweis: Elementarmatrix tausch **nur** zwei Zeilen / Spalten!

Wir bezeichnen mit $G_j: K^{n-j} \to K^{n \times n }, 1 \leq j \leq n$ die **Frobeniusmatrix**.

$G_j (l_1,...,l_{n-j}) = \left[\begin{matrix}1 \\ & 1 \\ & l_1 & 1 \\ & \vdots & & 1 \\ & l_{n-j} & & & 1 \end{matrix}\right]$

Die j-te Spalte unterscheidet die Forbeniusmatrix von der Einheitsmatrix.