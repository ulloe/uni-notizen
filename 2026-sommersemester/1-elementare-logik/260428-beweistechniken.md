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


## 2.4 Schubfachprinzip (von Dirichlet)

Falls man $n$ Gegenstände auf $k$ Fächer verteilt mit $n > k > 0$, dann muss es mindestens ein Fach geben, mit mehr als einem Gegenstand.  
*Widerspruchsbeweis:*  
Gäbe es höcshtens ein Gegenstand pro Fach, gäbe es höchstens $n = k$ Gegensände. Widerspruch zu $n > k$ !

### Lemma

Werden $n > k$ Gegensände auf $k$ Fächer verteilt, so gibt es ein Fach, das mindestens $\lceil \frac{n}{k} \rceil$ Gegenstände enthält.

### Beweis

Gegenteilige Annahme: Ein Fach hat maximal  $\lceil \frac{n}{k} \rceil -1$ Gegenstände.

$k \cdot (\lceil \frac{n}{k} \rceil -1) < k \cdot ((\lceil \frac{n}{k} \rceil -1) +1) = n$

Das ist ein Widerspruch zu $n > k$

> Hinweis:  
> $\lceil \frac{n}{k} \rceil - \frac{n}{k} < 1$


### 2.5 Induktionsbeweise

**Begriffe:**

**Induktion:** Auflisten in Reihe $\mathbb{N}_0 = \set{0,1,2,3,...}$

**Rekursion:** Beziehen auf NMachfolger von elementarer Zahl $0$

**iteration:** Durchlaufen aller Elemente

* $p$ sei ein Prädikat mit einer Variable aus dem Universum $\mathbb{N}_0$
* Betrachte Menge $X$ aller Zahlen für die $p(n)$ wahr ist.

$X = \set{n \in \mathbb{N}_0 | p(n)}$

$p(0)$ und stets $p(n) \to p(n+1)$, dann $p(n)$ für alle $n \in \mathbb{N}_0$ $\forall n \in \mathbb{N}_0 \quad p(n)$

Zu zeigen: $p(0) \land \forall n \in \mathbb{N}_0 \quad p(n) \to p(n+1)$

1) Nachweis der Gültigkeit von $p(0)$ (**Induktionsanfang (IA)**)
2) Zeige $p(n) \to p(n+1)$ (**Induktionsschritt (IS)**)
3) $p(n) ist wahr.  (**Induktionsvoraussetzung (IV)**)

Unter Annahme von $p(n)$ kann $p(n+1)$ gezegit werden.

Schematischer Aufbau eines Beweises von ∀n ∈ N0 p(n) mit Induktion:
1. **IA**: Für den Fall $n = 0$ gilt ...(+).
2. $n$ sei im folgenden beliebig aus $\mathbb{N}_0$ .
3. **IV**: Wir nehmen an, dass $p(n)$ (*) gilt.
4. **IB**: Zu zeigen ist daher $p(n + 1)$ (**).
5. Die IB gilt, da ... (++).
6. Da $n$ beliebig gewählt war, gilt nach dem Induktionsprinzip damit $\forall n \in \mathbb{N}_0 \quad p(n)$.


Empfehlung: Schema genau(!) übernehmen, d.h. erst (+) ausfüllen, dann (*) und (**) ausformulieren(!), schließlich (++) ausfüllen.

#### Beispiel

```math
\begin{aligned}
&1 & = 1^2 \\
&1 + 3 & = 2^2 \\
&1 + 3 + 5 & = 3^2
\end{aligned}
```

Behauptung: $\sum\limits_{i = 1}^n (2i-1) = n^2$  

**IA:**  
$n = 0 \quad \sum\limits_{i = 1}^0 (2i-1)  = 0 = 0^2$  
$n = 1 \quad \sum\limits_{i = 1}^1 (2i-1) = 1 = 1^2$  

**IV:**  
$\sum\limits_{i = 1}^n (2i-1) = n^2$ 

**IS:**  
$(n+1)^2 = \underbrace{n^2}_{\sum\limits_{i = 1}^n (2i-1)} +2n + 1$ 
$ = (\sum\limits_{i = 1}^n (2i-1)) +2n +1$  
$ = \sum\limits_{i = 1}^{n+1} (2i-1)$

> Hinweis:  
> $2n +1 = 2n + 2 -1 = 2(n+1)-1$

