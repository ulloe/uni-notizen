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
