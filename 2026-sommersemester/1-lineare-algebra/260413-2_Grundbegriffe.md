# 2. Grundbegriffe: Aussagenlogik, Mengen, Abbildungen

## 2.1. Aussagenlogik

Sei $A$ eine Aussage, z. B. "Es regnet!". Eine Aussage ist entweder wahr ($1$) oder falsch ($0$).

**Definition**: logisches "und", "oder" und "nicht"  
Wir definieren durch die folgenden Wahrheitstabellen die Verknüpfungen von Aussagen:  
$\land$ ("und zugleich")  
$\lor$ ("oder" im Sinne von mindestens eine von beiden Aussagen ist wahr")  
$\lnot$ ("nicht")

a) **Konjunktion** ("und") $A \land B$  
|$A$|$B$|$A\land B$|
|---|---|----------|
| 1 | 1 |  1       |
| 0 | 1 |  0       |
| 1 | 0 |  0       |
| 0 | 0 |  0       |


b) **Disjunktion** ("oder") $A \lor B$  
|$A$|$B$|$A\lor B$|
|---|---|----------|
| 1 | 1 |  1       |
| 0 | 1 |  1       |
| 1 | 0 |  1       |
| 0 | 0 |  0       |

c) **Negation** ("nicht") $A \lnot B$  
|$A$|$\lnot A$|
|---|---|
| 1 | 0 |
| 0 | 1 |

<small>*(Vorlesung vom 15.04.26)*</small>
  
Es lassen sich komplexere Verknüpfungen bilden

|$A$|$\lnot A$|$A \land \lnot A$|$A \lor \lnot A$|
|-|-|-|-|
|1|0|0|1|
|0|1|0|1|

**Satz:**

Es gelten die folgenden Rechenregeln für alle die Aussagen A, B, C:

a) $A \land B = B \land A$ (Kommutativität)  
b) $A \lor B = B \lor A$ (Kommutativität)  
c) $A \land (B \land C) = (A \land B) \land C$ (Assoziativität)  
d) $A \lor (B \lor C) = (A \lor B) \lor C$ (Assoziativität)    
e) $A \lor (B \land C) = (A \lor B) \land (A \lor C)$ (Distributivität)  
f) $A \land (B \lor C) = (A \land B) \lor (A \land C)$ (Distributivität)  
g) $\lnot (A \lor B) = \lnot A \land \lnot B$  
h) $\lnot (A \land B) = \lnot A \lor \lnot B$ 

Das Symbol $=$ ist im Sinne der Gleichheit der Einträge der Wahrheitstabelle zu verstehen.

**Beweis:**

zu a)

|$A$|$B$|$A \land B$|$B \land A$|
|-|-|-|-|
|1|1|1|1|
|1|0|0|0|
|0|1|0|0|
|0|0|0|0|

...

zu g)

|$A$|$B$|$A \lor B$|$\lnot (A \lor B)$|$\lnot A$|$\lnot B$|$\lnot A \land B$|
|-|-|-|-|-|-|-|
|1|1|1|0|0|0|0|
|1|0|1|0|0|1|0|
|0|1|1|0|1|0|0|
|0|0|0|1|1|1|1|
| | | |*| | |*|

### Definition: Aus A folgt B

"Aus A folgt B": $A \Rightarrow B$

**Feststellung:**  
Im Fall, dass A wahr und B gleichzeitig unwahr ist, ist die Folgerung $A \Rightarrow B$ sicherlich falsch.

Wir definieren: $(A \Rightarrow B) := \lnot (A \land \lnot B) = \lnot A \lor B$

### Defintion: Logische Modi

a) $(A \Rightarrow B) := \lnot A \lor B$ heißt **modus ponens**  
*(heißt, wenn $\lnot A \lor B$ wahr ist, darf ich $A \Rightarrow B$ folgern)*

b) Die Schlussregel $(\lnot B \Rightarrow \lnot A)$ heißt **modus tollens**

### Definition: Äquivalenz von Aussagen
Die Aussagen A und B sind **gleich** oder **äquivalent**, wenn $A \Rightarrow B$ und $B \Rightarrow A$ gilt. Wir schreiben: $A \Leftrightarrow B$

**Satz:**

$(A \Rightarrow B) \Leftrightarrow (\lnot B \Rightarrow \lnot A)$

**Beweis:**
```math
\begin{aligned}
(A \Rightarrow B) & = \lnot A \lor B \\
& = B\lor \lnot A \\
& = \lnot(\lnot B) \lor \lnot A \\
& = (\lnot B \Rightarrow \lnot A)
\end{aligned}
```

Sprechweise bei $(A \Rightarrow B)$:  
$A$ heißt **hinreichend** für $B$  
$B$ heißt **notwendig** für $A$  

**Satz (Kettenschluss, Transitivität):**

Die folgende AUssage ist für Ausssagen A, B, C immer wahr:

$\left[(A \Rightarrow B) \land (B \Rightarrow C)\right] \Rightarrow (A \Rightarrow C)$

**Beweis:**

```math
\begin{aligned}
& \left\{ \left[ (A \Rightarrow B) \land (B \Rightarrow C) \right] \Rrightarrow (A \Rightarrow C) \right\} \\
\Leftrightarrow &\left\{ \lnot \left[ (\lnot A \lor B) \land (\lnot B \lor C) \right] \lor (\lnot A \lor C) \right\} \\
\Leftrightarrow &\left\{ (A \land \lnot B) \lor (B \land \lnot C) \lor \lnot A \lor C) \right\} = Z \\
\end{aligned}
```

Wahrheitstabelle für Z beweist die Aussage:  
(Da der Ausdruck für $A = 0$ und $C = 1$ immer wahr ist, betrachten wir noch die restlichen Fälle:)

|$A$|$B$|$C$|$Z$|
|---|---|---|---|
| 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 |

$ \square $


## 2.2. Mengen
<small>*(Vorlesung vom 20.04.26)*</small>

### Defition: Menge

a) Eine **Menge** $M$ ist die Zusammenfassung von wohlbestimmten und wohlunterscheidbaren Objekten. Diese Objekte heißen **Elemente** der Menge.

b) "$x \in M$" bedeutet, "$x$ ist ein Element von $M$"

c) "$x \notin M$" bedeutet, "$x$ ist nicht Element von $M$"

**Beispiele:**

$\mathbb{N}$: natürliche Zahlen $\{1, 2, 3, ... \}$  
$\mathbb{Z}$: ganze Zahlen $\{..., -3, -2, -1, 0, 1, 2, 3, ... \}$  
$\mathbb{Q}$: rationale Zahlen  
$\mathbb{R}$: reelle Zahlen  
$\mathbb{C}$: komplexe Zahlen  

$M_1 = \{ S_1, ..., S_67\}$  
$M_2 = \{ Julia, Paul, Felix, ...\}$  
$M_3 = \{ 2x | x \in \mathbb{N}, x \leq 5\} = \{2, 4, 6, 8, 10 \}$  

Leere Menge: $M = \{\} = \empty$

**Schreibweise:**

Seien $A_1, ..., A_n$ Aussagen.

$\mathop{\land}\limits_{i \in \{1,...,n\}} A_i := A_1 \land A_2 \land ... \land A_n$  
("für alle $i \in \{1,...,n\}$ gilt $A_i$")

$\mathop{\lor}\limits_{i \in \{1,...,n\}} A_i := A_1 \lor A_2 \lor ... \lor A_n$   
("für mindestens ein $i \in \{1,...,n\}$ gilt $A_i$")

**Folgerung:**

$\mathop{\land}\limits_{i \in \{1,...,n\}} A_i = \mathop{\lor} \limits_{i \in \{1,...,n\}} (\lnot A_i)$

und

$\mathop{\lor}\limits_{i \in \{1,...,n\}} A_i = \mathop{\land} \limits_{i \in \{1,...,n\}} (\lnot A_i)$


### Definition: Quantoren

Sei $M$ eine Menge, $A(x)$ eine Aussage, die für bestimmte $x \in M$ gilt bzw. wahr ist. Dann bezeichnet

 $\forall x \in M: A(x) \Leftrightarrow \mathop{\land} \limits_{x \in M}A(x)$  
 ...die Aussage "Für alle $X \in M$ gilt $A(x)$."

 $\exists x \in M: A(x) \Leftrightarrow \mathop{\lor} \limits_{x \in M}A(x)$  
 ...die Aussage "Für ein $X \in M$ für das $A(x)$ gilt."