# 4. Der Ring der Matrizen

### Definition

Sei $(K, + ,\cdot)$ ein Körper, $m,n \in \mathbb{N}_0$.

Ein Feld $A = [a_{ij}] = \left[ \begin{matrix} a_{11} &  a_{12} & \dots &  a_{1n}\\  a_{21} &  a{_{22}} & \dots & a_{2n} \\ \vdots & \ddots & & \vdots \\ a_{m1} &a_{m2} & \dots & a_{mn} \end{matrix} \right]$  
mit $a_{ij} \in K$ für alle $i$ von $1, \dots, n$ und $j$ von $1, \dots, n$ heißt **(m $\times$ n)-Matrix mit Koeffizienten in $K$** oder **(m $\times$ n)-Matrix über $K$**.

### Bezeichnungen

a) $K^{m \times n}$ (oft auch $K^{m,n}$) ist die Menge aller (m $\times$ n)-Matrizen über K.  
b) $\underset{j \text{= Spalte}}{\overset{i = \text{Zeile}}{a_{ij}}}$ ist der (i,j)-te Koeffizient oder Eintrag (manchmal $[A]_{ij} = a _{ij}$)  
c) $[a_{i1}, \dots, a_{in}]$ i-te Zeile von A ((1 $\times$ n)-Matrix)  
d) $\left[ \begin{matrix} a_{1j} \\ \vdots \\ a_{mj} \end{matrix} \right]$ j-te Spalte von A ((m $\times$ 1)-Matrix)  
e) 0 Nullmatrix, das heißt alle Einträge sind 0.  
f) $I_n$ Einheitsmatrix in $K^{n\times n}$ (muss quadratisch sein), das heißt die Matrix hat die EInträge $\delta_{ij} = \begin{cases} \text{1 i = j} \\ \text{0 sonst} \end{cases}$  


## 4.1 Matrixoperationen und algebraische Strukturen

### 4.1.1 Addition

$+$: $K^{m \times n} \times K^{m \times n} \to K^{m \times n }$  
$c_{ij} = a_{ij} + b_{ij}$ für alle $i=1, \dots, m; j = 1, \dots, n$

#### Beispiel
$A = \left[ \begin{matrix}1  &  2 \\ 3 & 4 \end{matrix} \right]; B = \left[ \begin{matrix}6  &  7 \\ 8 & 9 \end{matrix} \right]$


$C = A + B = \left[ \begin{matrix}1+6  &  2+7 \\ 3+8 & 4+9 \end{matrix} \right] = \left[ \begin{matrix}7  & 9 \\ 11 & 13 \end{matrix} \right]$

#### Lemma

$(K^{m \times n }, +)$ ist mit dem additiv inversen Element $-A := [-a_{ij}]$ für $A \in K^{m \times n }$ eine kommutative Gruppe.  
Das neutrale Element ist die Nullmatirx $0 \in K^{m \times n}$

### 4.1.2 Skalarmultiplikation

$\cdot$: $K \times  K^{m \times n} \to K^{m \times n}$  
$(r, A) \mapsto r \cdot A = [r \cdot a_{ij}]_{ij}$

Elemente des Grundkörpers nennt man **Skalare**.

#### Lemma

Sei $A, B \in K^{m \times n}; r,s \in K $  
Dann gilt  
a) $(r \cdot s) \cdot A  = r \cdot (s \cdot A)$  
b) $(r+s) \cdot A = rA + sA$  
c) $r \cdot (A + B)  = rA + rB$  
d) $1 \cdot A  = A$  
e) $A + \underbrace{(-A)}_{(-1) \cdot A}  = 0$

#### Beweis

Folgerung aus komponentenweisen Betrachtung.

#### Beispiel

$r=3, A= \left[ \begin{matrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{matrix} \right]$ ($A \in \mathbb{R}^{2 \times 3}$)  
$(K, +, \cdot) = (\mathbb{R}, +, \cdot)$  
$(r \cdot A) = \left[ \begin{matrix} 3 \cdot 1 & 3 \cdot 2 & 3 \cdot 3 \\ 3 \cdot 4 & 3 \cdot 5 & 3 \cdot 6 \end{matrix} \right] = \left[ \begin{matrix} 3 & 6 & 9 \\ 12 & 15 & 18 \end{matrix} \right]$


### 4.1.3 Matrixmultiplikation

Defintion der Multiplikation von Matrizen soll eine einfache Formulierung und Lösung linearer Gleichungssysteme erlauben.

```math
\begin{aligned}
& a_{11} x_1 + \dots & + a_{1n} x_n & = r_1 \\
& a_{21} x_1 + \dots & + a_{2n} x_n & = r_2 \\
& \quad \quad \vdots \\
& a_{m1} x_m + \dots & + a_{mn} x_n & = r_m \\
\end{aligned} \\
\quad \\
\big\downarrow  \\
\quad \\

\left[
    \begin{matrix}
    a_{11} & \dots & a_{1n} \\
    a_{21} & \dots & a_{2n} \\
    \vdots & \ddots & \vdots \\
    a_{m1} & \dots & a_{mn} \\
    \end{matrix}
\right]

\cdot

\left[
    \begin{matrix}
    x_1 \\
    x_2 \\
    \vdots \\
    x_n
    \end{matrix}
\right]

= 

\left[
    \begin{matrix}
    r_1 \\
    r_2 \\
    \vdots \\
    r_m
    \end{matrix}
\right]
```

> **Wunsch:** 
> Matrix-Vektor-Form des linearen Gleichungssystem

Eine Matrix kann als Ansammlung ihrer Spalten betrachetet werden.

$B = [b_1, b_2, \dots, b_l], b_j = \left[ \begin{matrix} b_{1j} \\ b_{2j} \\ \vdots\\  b_{kj} \end{matrix}\right] \in K^{k \times 1}; j = 1, \dots, l$

$B \in K^{k \times l}$



```math

A \cdot B =
\left[
    \begin{matrix}
    \sum\limits_{i=1}^k a_{1i}b_{i1} & \sum\limits_{i=1}^k a_{1i}b_{i2} & \dots & \sum\limits_{i=1}^k a_{1i}b_{il} \\
    \vdots \\
    \sum\limits_{i=1}^k a_{mi}b_{i1} & \sum\limits_{i=1}^k a_{mi}b_{i2} & \dots & \sum\limits_{i=1}^k a_{mi}b_{il} 
    \end{matrix}
\right]
```

Es gilt:

$C = A \cdot B$

$\cdot$: $K^{\textcolor{green}{m} \times \textcolor{red}{n}} \times K^{\textcolor{red}{n} \times \textcolor{green}{l}} \to K^{\textcolor{green}{m} \times \textcolor{green}{l}} $

> Zwei Matrizen können nur dann miteinander multipliziert werden, wenn die Anzahl der Spalten der ersten matrix mit der Anzahl der Zeilen der zweiten Matrix übereinstimmt.

#### Beispiel

$A =  \left[ \begin{matrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{matrix} \right], A \in K^{\textcolor{green}2 \times \textcolor{red}3}$


$B =  \left[ \begin{matrix} 1 \\ 2 \\ 3 \end{matrix} \right], A \in K^{\textcolor{red}3 \times \textcolor{green}1}$

$C = A \cdot B, C \in K^{\textcolor{green}2 \times \textcolor{green}1}$

**Schema:**

<img src="./bilder/matrixmultiplikation.png" width="400"><br>  


<img src="./bilder/matrixmultiplikation_schema.png" width="400">


#### Lemma

$A, \tilde A \in K^{m \times n}; B, \tilde B \in K^{n \times l}; C \in K^{l \times p}; r \in K$, dann gilt:

a) Assoziativität $(A \cdot B) \cdot C = A \cdot (B \cdot C)$  
b) Distributivität $(A + \tilde A) \cdot B = A \cdot B + \tilde A \cdot B$  
c) Distributivität $A \cdot (B + \tilde B) = A \cdot B + A \cdot \tilde B$  
d) links- und rechtsneutrales Element $I_m \cdot A = A \cdot I_n = A$
e) $(r \cdot A) \cdot B = r \cdot (A \cdot B) = A \cdot (r \cdot B)$  
f) Nullelement
```math
\begin{aligned}
0_m \cdot A = \quad & 0_{m,n} \\
 & \parallel \\
A \cdot 0_n = \quad & 0_{m,n} \\
\end{aligned}
```

> Hinweis: Eine Matrixmultiplikation kommutiert in der Regel nicht!

#### Beweis

a)

$[ \underbrace{(A \cdot B)}_{\tilde A} \cdot C]_{ij} = \sum\limits_{r=1}^l (\underbrace{\sum\limits_{k=1}^n a_{ik} \cdot b_{kr}}_{\tilde A_{ir}}) \cdot c_{rj} = \sum\limits_{k=1}^n a_{ik} (\sum\limits_{r=1}^l b_{kr} \cdot c_{rj}) = [A \cdot (B \cdot C)]_{ij}$

b-f) Komponentenweise verfahren

**Bemerkung:** Die Kommutativität gilt bei Matrizen im Allgemeinen **nicht**!


**Gegenbeispiel (Kommutativität):**

$A = \left[ \begin{matrix} 1 & 1 \\ 2 & 2 \end{matrix} \right], B = \left[ \begin{matrix} 0 & 0 \\ 1 & 0 \end{matrix} \right]$

$A \cdot B = \left[ \begin{matrix} 1 & 0 \\ 2 & 0 \end{matrix} \right]$

$B \cdot C = \left[ \begin{matrix} 0 & 0 \\ 1 & 1 \end{matrix} \right]$

$A \cdot B \not = B \cdot A$

**Bemerkung:** Matrixprodukt ist **nicht** nullteilerfrei!

**Beispiel:**

$A = \left[ \begin{matrix} 1 & 1 \\ 2 & 2 \end{matrix} \right] \cdot \left[ \begin{matrix} 1 & -1 \\ -1 & 1 \end{matrix} \right] = \left[ \begin{matrix} 0 & 0 \\ 0 & 0 \end{matrix} \right]$

Asu $A \cdot B$ folgt **nciht** notwendigerweise $A = 0$ oder $B = 0$.

#### Definition (Invertierbare Matrix)

Eine Matrix heißt **invertierbar** $(A \in K^{n \times n})$ wenn es ein $\tilde A \in  K^{n \times n}$ gibt mit $\tilde A \cdot A = I_n$. Man schreibt dann $\tilde A =: A^{-1}$ und nennt $A^{-1}$ die zu $A$ inverse Matrix.  
Die Menge dedr invertierbaren Matrizen wird mit $GL_n(K)$ (GL = general linear) bezeichnet.