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

#### Lemma
- a) $A \in K^{n \times m}  
Durch $P_{ij} \cdot A$ werden die Zeilen $i$ und $j$ in $A$ vertauscht. ($1 \leq i \leq j \leq n$)
- b) Es gilt $P_{ij} = P_{ij}^T = P_{ij}^{-1}
- c) Durch $G_j(l) \cdot A$ wird das $l_i$-fache der j-ten Zeile von $A$ zur Zeile ($j+i$) hinzuaddiert.
- d) Für $l \in K^{n-j}$ gilt $(G_j(l))^{-1} = G_j(-l)$
- e) Für $1 \leq k < i < j$ und die Definition $P_{ij}^k := P_{i-k,j-k} \in K^{(n-k) \times (n-k)}$ gilt $P_{ij} G_k(l) = G_k(P_{ij}^k l)P_{ij}$


#### Beweis

> Siehe Übung zum 26.05.2026

### Algorithmus Gauß-Algorithmus in rekursiver Form

**Eingabe:** $A, t$ und $\tilde m, \tilde n$ mit $A \in \mathbb{R}^{\tilde m \times \tilde n}$

1. Setze $t \leftarrow t +1
2. if $A = 0$ then
3. &emsp; Setze $S_t = I_{\tilde m}$
4. else
5. &emsp; Finde die erste Spalte in $A$, die nicht komplett $0$ ist.
6. &emsp; Diese Spalte erhält den Index $j_k$
7. &emsp; Finde den ersten Spalteneintrag $i_t$, der ungleich $0$ ist
8. &emsp; Vertausche die erste und die $i_t$-te Zeile von $A$
9. &emsp; Annuliere alle Einträge in der ersten Spalte unterhalbn $a_{1j_k}$ Dann gilt:  
 &emsp; $\tilde A = \underbrace{G_1 \left(\begin{matrix} \frac{-a_{2,j_t}}{a_{1,j_t}} \\ \vdots \\ \frac{-a_{m,j_t}}{a_{1,j_t}} \end{matrix}\right) \quad P_{1,i_t}}_{S_t} \cdot A = \left[\begin{array}{ccc}0 & 0 & a_{11} & * \\ 0 & 0 & 0 & \begin{array}{c} A_{neu} \end{array} \\ 0 & 0 & 0 & \end{array} \right] $
10. &emsp; if $\tilde m > 1$ then
11. &emsp; &emsp; Prüfe den Algorithmus auf ($A_{neu}, t, \tilde m - 1, \tilde n - j_t$)
12. &emsp; endif
13. endif

### Satz

$K$ Körper, $A \in K^{m \times n}$  
Dann gibt es ein $t \in \mathbb{N}$ und Elementarmatrizen $S_i, i = 1, ..., t$, so dass das Produkt $S_t \cdot ... \cdot S_1 \cdot A$ in Zeilenstufenform ist, das heißt:

$\underbrace{S_t \cdot ... \cdot S_1}_{\tilde A} \cdot A = \underset{\underset{\text{n-Stufen}}{\tilde a_{ii} \not = 0}}{\overbrace{\left(\begin{matrix} \underline x & & & x\\ & |\underline x \\ & & |\underline x \\ 0 & & & |\underline x\end{matrix}\right)}^{\tilde A}}$

Insbesondere ist $\tilde A$ eine obere Dreiecksmatrix, falls $n=m$ gilt und $A$ invertierbar ist.

### Beweis

$t = 0, \tilde m = m, \tilde n = n$ und rufen Gauß-Algorithmus auf.
Die Matrizen $G^t$ und $P^t$ operieren in $K^{\tilde m \times \tilde n}$, wobei $\tilde m$ von Iteration zu Iteration um $1$ verkleinert wird. Sie lassen sich für $t > 0$ durch folgende Identifizierung, aber auch als Operationen auf ganz $K^{m \times n}$ auffassen.

$G_t(l) = \left[\begin{array}{c|c} I_{t-1} & 0 \\ \hline 0 & G^t_1(l) \end{array}\right]$


$P_{t,i_t+t-1} = \left[\begin{array}{c|c} I_{t-1} & 0 \\ \hline 0 & P^t_{1,i_t} \end{array}\right]$

Ergebnis: $\underbrace{S_t \cdot ... \cdot S_1}_{\tilde A} \cdot A = \left(\begin{matrix} 0 & | \underline{x \quad} \\ 0 & & |\underline x \\ 0 & & & |\underline x \\ 0 & & & & |\underline x\end{matrix}\right)$

wobei die x in den Spalten $j_\tau$ für $1 \leq \tau \leq t$ stehen. 
Außerdem gilt ($S_\tau = G_\tau(l_\tau)) P_{\tau,i_\tau + \tau -1}$ für $1 \leq \tau \leq t$.

Wenn $A$ invertierbar ist ($m = n$):


$S_t \cdot ... \cdot S_1 \cdot A = \underset{\underset{\text{n-Stufen}}{\tilde a_{ii} \not = 0}}{\overbrace{\left(\begin{matrix} \underline x & & & x\\ & |\underline x \\ & & |\underline x \\ 0 & & & |\underline x\end{matrix}\right)}^{\tilde A}} \\ \quad \square$

### Definition

Die Position ($\tau , i_\tau$) des Gauß-Algorithmus heißen Pivotpositionen.

Beispiel:

```math
\left.
\begin{aligned}
&
\underset{\color{green}\text{1. Pivotposition}}{
  \left[\begin{matrix}
  0 &\color{green}2 &1 &3 \\
  0 &2 &0 &1 \\
  0 &2 &0 &2
  \end{matrix}\right] 
}
\xrightarrow{\begin{aligned}\small{Z2 - Z1} \\ \small{Z3 - Z1} \end{aligned}}

\left[\begin{array}{cccc}
 0 &2 &1 &3 \\
 0 &2 &\color{blue}-1 &\color{blue}-2 \\
 0 &2 &\color{blue}-1 &\color{blue}-1 
\end{array}\right] \color{blue}A_{neu}\color{text}

\\

&
\underset{\color{green}\text{2. Pivotposition}}{
  \left[\begin{matrix}
  \color{green}-1 & -2 \\
  -1 & -1
  \end{matrix}\right] 
}
\xrightarrow{\small{Z2 - Z1}}

\left[\begin{array}{cc}
 -1 & -2 \\
 0  &\color{blue}1 
\end{array}\right] \color{blue}A_{neu}\color{text}

\\

&
\left[\begin{array}{c}
 \color{green}1
\end{array}\right]

\end{aligned}
\right\}

 \left[\begin{array}{cccc}
 0 &|\underline{\color{green}2} &1 &3 \\
 0 &0 &|\underline{\color{green}-1} &-2 \\
 0 &0 &0 &|\underline{\color{green}-1} 
\end{array}\right] 
```

### Satz

$A \in K^{n \times n}$ invertierbar.  
Dann ergibt sich durch den Gauß-Algorithmus eine Zerlegung der Form $P \cdot A = L \cdot R$ mit Permutationsmatrixk $P$, invertierbare untere Dreiecksmatrix $L$, invertierbare obere Dreiecksmatrix $R$.

## Beweis

Nach obigen Satz: $S_t \cdot ... \cdot S_1 \cdot A = \tilde A$, $\tilde A$ Zeilenstufenform

Da $GL_n(K)$ eine Gruppe ist und $S_\tau$ invertierbar sind, ist auch $\tilde A$ invertierbar.  
Daher muss $\tilde a_{ii} \not = 0$ für alle $i=1, ...m n$ gelten.  
Es sei $R = \tilde A$ und $S_t \cdot ... \cdot S_1 \cdot A = R$  
> Wunsch: $S_t \cdot ... \cdot S_1 = G_t(l_\tau) \cdot P_{t,i_t + t-1} \cdot ... \cdot G_1(l_1) \cdot P_{1,i_1}$  

$\color{green}\underbrace{G_t(\tilde l_\tau) \cdot ... \cdot G_1(\tilde l_1)}_{= \bar L} \color{text} \cdot \color{red}\underbrace{P_{t,i_t + t-1} \cdot ... \cdot P_{1,i_t}}_{= P}$

wobei $\tilde l_\tau$ entspricht der Permutation von $l_\tau$