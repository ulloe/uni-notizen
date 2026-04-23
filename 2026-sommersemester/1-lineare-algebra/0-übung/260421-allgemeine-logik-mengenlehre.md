# Einordnugn in die Vorlesung

Bevor wir in der linearen Algebra mit Vektorräumen, linearen Abbildungen und Lösungsmengen arbeiten, müssen wir erst sicher mit Aussagen, logischen Verknüpfungen und Mengen umgehen können. 

**Verknüpfungsoperatoren für Aussagenlogik**

Konjunktion: $A \land B$  
Disjunktion: $A \lor B$  
Negation: $\lnot A$  
Implikation: $A \Rightarrow B$  
Äquivalenz: $A \Leftrightarrow B$ 

*Ein Satz, der immer wieder Verwendung findet:*  
$\left( (A \Rightarrow B) \land (B \Rightarrow C) \Rightarrow (A \Rightarrow C) \right)$




# Aufgaben
Die detailierten Aufgabestellungen sind auf dem Übungsblatt zu finden.

## Aufgabe 1

Beweisen sie mit Hilfe der Wahrheitstafeln folgende Aussagen:

a) $A \land B = B \land A$

*Lösung:*

|$A$|$B$|$A \lor B$|$B \lor A$|
|-|-|-|-|
|0|0|0|0|
|0|1|1|1|
|1|0|1|1|
|1|1|1|1|

Spalte $A \land B$ und Spalte $B \land A$ zeigen die gleichen Wahrheitswerte, daraus folgt die Behauptung.

b) $A \lor\ (B \lor C) = (A \lor\ B) \lor C$

| $A$ | $B$ | $C$ | $B \lor C$ | $A \lor (B ∨ C)$ | $A \lor B$ | $(A \lor B) \lor C$ |
| - | - | - | ----- | ----------- | ----- | ----------- |
| 0 | 0 | 0 | 0     | 0           | 0     | 0           |
| 0 | 0 | 1 | 1     | 1           | 0     | 1           |
| 0 | 1 | 0 | 1     | 1           | 1     | 1           |
| 0 | 1 | 1 | 1     | 1           | 1     | 1           |
| 1 | 0 | 0 | 0     | 1           | 1     | 1           |
| 1 | 0 | 1 | 1     | 1           | 1     | 1           |
| 1 | 1 | 0 | 1     | 1           | 1     | 1           |
| 1 | 1 | 1 | 1     | 1           | 1     | 1           |


c) $A \lor\ (B \land C) = (A \lor B) \land (A \lor C)$

| $A$ | $B$ | $C$ | $B \land C$ | $A \lor (B \land C)$ | $A \lor B$ | $A \lor C$ | $(A \lor B) \land (A \lor C)$ |
| - | - | - | ----- | ----------- | ----- | ----- | ----------------- |
| 0 | 0 | 0 | 0     | 0           | 0     | 0     | 0                 |
| 0 | 0 | 1 | 0     | 0           | 0     | 1     | 0                 |
| 0 | 1 | 0 | 0     | 0           | 1     | 0     | 0                 |
| 0 | 1 | 1 | 1     | 1           | 1     | 1     | 1                 |
| 1 | 0 | 0 | 0     | 1           | 1     | 1     | 1                 |
| 1 | 0 | 1 | 0     | 1           | 1     | 1     | 1                 |
| 1 | 1 | 0 | 0     | 1           | 1     | 1     | 1                 |
| 1 | 1 | 1 | 1     | 1           | 1     | 1     | 1                 |


d) $A \land\ (B \lor C) = (A \land B) \lor (A \land C)$

| $A$ | $B$ | $C$ | $B \lor C$ | $A \land (B \lor C)$ | $A \land B$ | $A \land C$ | $(A \land B) \lor (A \land C)$ |
| - | - | - | ----- | ----------- | ----- | ----- | ----------------- |
| 0 | 0 | 0 | 0     | 0           | 0     | 0     | 0                 |
| 0 | 0 | 1 | 1     | 0           | 0     | 0     | 0                 |
| 0 | 1 | 0 | 1     | 0           | 0     | 0     | 0                 |
| 0 | 1 | 1 | 1     | 0           | 0     | 0     | 0                 |
| 1 | 0 | 0 | 0     | 0           | 0     | 0     | 0                 |
| 1 | 0 | 1 | 1     | 1           | 0     | 1     | 1                 |
| 1 | 1 | 0 | 1     | 1           | 1     | 0     | 1                 |
| 1 | 1 | 1 | 1     | 1           | 1     | 1     | 1                 |


e) $\lnot(A \lor B) = \lnot A \land \lnot B$

| $A$ | $B$ | $A \lor B$ | $\lnot (A \lor B)$ | $\lnot A$ | $\lnot B$ | $\lnot A \land \lnot B$ |
| - | - | ----- | -------- | -- | -- | ------- |
| 0 | 0 | 0     | 1        | 1  | 1  | 1       |
| 0 | 1 | 1     | 0        | 1  | 0  | 0       |
| 1 | 0 | 1     | 0        | 0  | 1  | 0       |
| 1 | 1 | 1     | 0        | 0  | 0  | 0       |


f) $\lnot(A \land B) = \lnot A \lor \lnot B$

| $A$ | $B$ | $A \land B$ | $\lnot (A \land B)$ | $\lnot A$ | $\lnot B$ | $\lnot A \lor \lnot B$ |
| - | - | ----- | -------- | -- | -- | ------- |
| 0 | 0 | 0     | 1        | 1  | 1  | 1       |
| 0 | 1 | 0     | 1        | 1  | 0  | 1       |
| 1 | 0 | 0     | 1        | 0  | 1  | 1       |
| 1 | 1 | 1     | 0        | 0  | 0  | 0       |

## Aufgabe 2

Zeigen Sie mit Hilfe einer Wahrheitstafel, dass die Aussagen $(A \Rightarrow B) \land (B \Rightarrow A)$ nur dann wahr ist, wenn A und B gleichzeitig wahr oder unwahr (und mithin) identsich sind.

$(A \Rightarrow B) := \lnot A \lor B$  
$(B \Rightarrow A) := \lnot B \lor A$

Daraus ergibt sich folgender Ausdruck:  
$(\lnot A \lor B) \land (\lnot B \lor A)$

Diesen können wir wieder in eine Wahrheitstabelle einfügen und sehen:

| $A$ | $B$ | $\lnot A \lor B$ | $\lnot B \lor A$ | $(\lnot A \lor B) \land (\lnot B \lor A)$ |
| - | - | ----- | ----- | ----------------- |
| 0 | 0 | 1     | 1     | 1                 |
| 0 | 1 | 1     | 0     | 0                 |
| 1 | 0 | 0     | 1     | 0                 |
| 1 | 1 | 1     | 1     | 1                 |


Der Ausdruck ist nur dann wahr, wenn $A$ und $B$ beide gleichzeitig wahr oder gleichzeitig unwahr und somit identisch sind. $_\square$

## Aufgabe 3

Wir definieren den Aussagen $A, B, C, D$ als Folgende:

$A$: Andrea geht in die Mensa.  
$B$: Bernd geht in die Mensa.  
$C$: Christiane geht in die Mensa.  
$D$: Daniel geht in die Mensa.

```math
a) A \Rightarrow B \\ 
b) \begin{cases}
B \Rightarrow \lnot C \\
C \Rightarrow \lnot B \\
\end{cases} \\
c) \begin{cases}
\lnot A \Rightarrow C \\
\lnot C \Rightarrow A \\
\end{cases} \\
d) D \Rightarrow \text{mindestens zwei der drei Aussagen} A, B, C \text{sind wahr} \\
```

> Die Aussage $d)$ ist eine hinreichende Bedingung. $D$ ist keine Notwendigkeit.

Da alle Aussagen erfüllt sein müssen, können wir das Kommutativgesetz anwenden und deren Reihenfolge beliebig tauschen. Daraus ergibt sich folgende Aussage:  
$\lnot A \Rightarrow C \Rightarrow A \Leftrightarrow \lnot A \Rightarrow A$  
Das bedeutet, dass $A$ wahr sein muss, damit die Aussage wahr ist, also geht Andrea auf jeden Fall zur Mensa. Aus $A \Rightarrow B$ folgt, dass Bernd ebenfalls zur Mensa geht. Und aus $B \Rightarrow \lnot C$ folgt, dass Christiane nicht geht.  
Damit ist die hinreichende Bedingung für $D$ gegeben. Daniel könnte zu Mensa gehen. Da wir keine Notwendigkeit haben, bleibt offen ob Daniel geht oder nicht.

## Aufgabe 4

Bilden von Mengen:

a) $M_1 \cap M_2 = \{\}$  
b) $M_3 \setminus M_2 = \{ \{x\}, a, b, \{1\}\}$  
c) $M_4 \cup M_1 = \{a, b, x, y, 1, \{1\}\}$  
d) $M_3 \cap \{M_2 \cup M_4\} = \{\}$  
e) $M_1 \cap M_3 = \{a, b\}$  

*Hinweis zu a)*

Die Mengen $\{1\}$ und $\{\{1\}\}$ sind nicht identisch, da $ 1 \neq \{1\}$!

*Hinweis zu d)*

Ähnlich wie bei a) ist  $\{M_1 \cup M_4\} = \{\{...\}\}$. Hier wird also eine Menge, die eine bestimmte Menge enthält mit der Menge $M_3$ geschnitten. Deshalb ist die Schnittmenge leer.


## Aufgabe 5
Es ist zu zeigen: 
$A \cup B = B \cup A$

Die Menge $A \cup B$ ist eine Menge deren Elemente in der Menge $A$ und der Menge $B$ enthalten ist. 

$A \cup B = \{x: x \in A\ \land x \in B \}$  
$B \cup A = \{x: x \in B\ \land x \in A \}$  

Daraus folgt:  
$\{x: x \in A\ \land x \in B \} = \{x: x \in B\ \land x \in A \}$

Mit der Wahrheitstabelle aus *Aufgabe 1)* kann gezeigt werden, dass die Mengen identisch sind.