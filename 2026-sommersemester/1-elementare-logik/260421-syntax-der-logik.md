## 1.2 Sytax der Aussagenlogik

1) Syntax = System von Regeln, nach denen Ausdrücke aus einem Zeichenvorat gebildet werden dürfen.
2) Semantik = Festlegung der Bedeutung, von Ausdrücken, die syntaktisch richtig aufgebaut sind.

Grundmenge von Zeichen (die Menge $Z$) nennt man Alphabet, oder $\sum = \set{0,1,(,),...}$


### Definition: Formalisierte Syntax der Aussagenlogik

Die Menge $V$ der atomaren Formeln besteht aus allen Zeichenfolgen, beginnend mit $A_1$ gefolgt von nur $1$ oder $0$.

$V := \set{A_1, A_{10}, A_{11}, A_{100},...}$

Die Menge $WFF$ der (wohlgeformten logischen) Formeln ist wie folgt induktiv definiert:
1) Alle atomaren Formeln sind Formeln.
2) Ist $F$ Formel so auch $\lnot F$
3) Sind $F_1$ und $F_2$ Formeln so auch $(F_1 \land F_2)$
4) Sind $F_1$ und $F_2$ Formeln so auch $(F_1 \lor F_2)$