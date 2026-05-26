# 2. Beweistechniken

> Tipp: Software wie Coq proof assistant, MIZAR project, HOL light / ISABELLE können Aussagenbeweise prüfen. 

> TODO: Tools prüfen.

## 2.1. Einfache Beweise


* **Inhaltsleerer Beweis**: Aussage ist wahr, weil der relevante Fall nie eintritt (z. B. Voraussetzung ist immer falsch).
* **Trivialer Beweis**: Aussage ist sofort wahr aus Definitionen.

### Inhaltsleerer Beweis

Aussageforme: $p(n) := (n > 1) , q(n) := (n3 > n)$

Inhaltsleerer Beweis: $p \rightarrow q$

Wir zeigen, dass $p$ stets falsch ist:

Für $p(0) \rightarrow q(0)$ reicht "inhaltsleerer Beweis" ("Nichts zu zeigen"), da aus etwas falschem, beliebiges gefolgert werden kann.

### Trivialer Beweis:

Wir zeigen $q$ ist wahr, unabhängig von $p$.  
$p := (0 < a \leq b) , q(n) := (a^n \leq b^n)$

Dann $q(0) = (a^0 \leq b^0) = (1 ≤ 1)$


### Fallunterscheidungen für z. B. Induktionsanfänge

$p \to q$

Wir müssen nur Fälle für $p = \text{wahr}$ zeigen, da andernfalls die Aussage immer wahr ist.  

**Beispiel**

$6|x \to 3|x$  
Für den Fall, dass x nicht durch 6 teilbar ist, ist nichts zu zeigen.  

1) Es sei $6|x$
2) Nach Definition gibt es ein k mit $6 \cdot k = x$
3) Also gibt es auch ein k mit $3(2 \cdot k) = x$
4) Daher gibt es ein $k'$ für $(2 \cdot k)$ mit $3 \cdot k' = x$
5) Es gibt also ein $k$ mit $3|x$

> TODO:
Vergeliche: Formalisierte Schreibweise 2.1.3

## 2.2. Indirekte Beweise

Annahme umkehren und das Gegenteil annehmen und diese Annahme zum Widerspruch führen

## 2.3. Fallunterscheidungen

Aus dem Beispiel 2.3.1:  

Wegen der o.a. Tautologie können wir für beliebiges q die folgenden Fälle getrennt untersuchen: 1. q ist wahr; 2. q
ist falsch.Für a ∈ N0 beweise Beispiel-Behauptung p: a2 geteilt durch vier hat entweder Rest Eins oder Rest Null.
Wähle als q: ‘a ist gerade’, damit ergibt sich:
• Fall a ist gerade: Dann ∃k : (a = 2k), und damit a^2 = (2k)2 = 4k2, d.h. 4 | a2, also ist p erfüllt.
• Fall a ist ungerade: Dann ∃k : (a = 2k + 1), damit a^2 = (2k + 1)2 = 4k2 + 4k + 1 und 4 | (a2 − 1),
also ist wieder p erfüllt.
Da sowohl (q → p) als auch (¬q → p) gilt, folgt also p.
Ist (für beliebige q1, ...qn) die Aussageform q1 ∨ q2 ∨ . . . ∨ qn immer wahr, dann gilt

Es wird eine Fallunterscheidung zwischen geraden und ungeraden Fällen gemacht.

Seien $q_1, \dots, q_n$ unterschiedliche Fälle, dann muss jeder Fall erfüllt sein.

```math
\begin{aligned}
p & \equiv wahr \to p \\
& \equiv (q_1 \lor q_2 \lor \dots \lor q_n) \to p \\
& \equiv \lnot (q_1 \lor q_2 \lor \dots \lor q_n) \lor p \\
& \equiv (\lnot q_1 \land \lnot q_2 \land \dots \land \lnot q_n) \lor p \\
& \equiv (\lnot q_1 \lor p) \land (\lnot q_2 \lor p) \land \dots \land (\lnot q_n \lor p) \\
& \equiv (q_1 \to p) \land (q_2 \to p) \land \dots \land (q_n \to p) \\
\end{aligned}
```

### Allaussagen

$\forall x (p(x) \to q(x))$

### Existenzausage

$\exists x(q(x))$

Existenzaussagen sind oft konstruktiv beweisbar. Wir müssen nur für ein x zeigen, dass die Aussage wahr ist.  

Beispiel 2.4.2 als Konstruktionsschritt