# Grundbegriffe der Logik

## Begriffe

**Aussage:**  
Ein (oft sprachlcihes) Gebilde, bei dem es sinvoll ist ob es wahr oder falsch ist.
Zum Beispiel:
- Die Sonne scheint.
- Fragen sind keine Aussagen ("Wie geht es dir?" kann nicht mit "wahr" oder "falsch" beantwortet werden.)
- Aussagen können auch unbekannte Werte haben: $\frac{7}{x}$ ist eine rationale Zahl. (Wert istt abhängig von $x$)

**Axiome:**  
Grundlegende Annahmen, die nicht bewiesen werden.

**Sätze:**  
Aussagen, die bewiesen werden können.

**Propositionen:**  
Aussagen, die einfach zu beweisen sind.

**Beweise:**  
Vollständige und nachvollziehbare Argumentationen, die zweifelsfrei zeigen, dass eine Aussage gültig
ist.

**Aussagenverknüpfung:**  
Sind $p_1...p_n$ Aussagen, könenn wir sie zu $a(p_1..p_n)$ *kombinieren*.  
Wenn wir die Aussagenwerte für $p_1..p_n$ kennen, können wir den Wert für $a(p_1..p_n)$ bestimmen.

> TODO! extensional vs. intensional

**Aussageform (Prädikat):**  
Ein sprachliches Gebilde mit Leerstellen (*Variablen*), welches durch Ersetzen der Leerstellen zur Aussage wird.

**Universum:**  
Gesamtheit der Menge $\mathbb{U}$, die in eine Leerstelle eingesetzt werden kann. ($\mathbb{U}$ muss vorher bekannt sein.)  
Zum Beispiel: "$x$ ist durch 3 teilbar."

**Prädikatenlogik:**  
Ist $A(x)$ eine Aussageform, kann man Aussagen gewinnen durch Konstruktionen wie $\forall x \in \mathbb{U}: A(x)$ (Für alle $x$ aus $\mathbb{U}$ gilt $A(x)$.)
oder $\exists x \in \mathbb{U}: A(x)$ (Es gibt ein $x$ aus $\mathbb{U}$ für das gilt $A(x)$.)

**Negation:**  
- Symbole: 
    - $\lnot p$
    - $nicht\quad p$
    - $\bar{p}$

Dabei ist $p$ eine Aussage. $\lnot p$ ist wiederum eine Aussage.

**Konjunktion:**
- Smybole
    - $A \quad und \quad B$
    - $A \land B$ (übliche verwendet)
    - $A \cdot B$
    - $A \& B$

**Disjunktion:**  
- Symbole
    - $A \quad oder \quad B$
    - $A \lor B$ (übliche verwendet)
    - $A + B$
    - $A | B$


## Rechengesetze

### Kommutativgesetz

Konjunktion und Disjunktion sind *kommutativ** (Reihenfolge ist vertauschbar).

$$
p \land q = q \land p \\
p \lor q = q \lor p
$$


### Assoziativgesetz

Konjunktion und Disjunktion sind *assoziativ** (Klammerung ist beliebig).

$$
(p \land q) \land r = q \land (p \land r) \\
(p \lor q) \lor r = q \lor (p \lor r)
$$

### Distributivgesetz

Konjunktion und Disjunktion sind *distributiv** (Ausmultiplizieren / Verteilen).

$$
p \lor (q \land r) = (p \lor q) \land (p \lor r) \\
p \land (q \lor r) = (p \land q) \lor (p \land r) \\
$$


### Negationsgesetze

Gesetze von de Morgan  

$$
\lnot (p \lor q) = \lnot p \land \lnot q \\
\lnot (p \land q) = \lnot p \lor \lnot q
$$

Beweise für Rechengesetze können über die Wahrheitstafel erfolgen, zum Beispiel:

$\lnot(p \lor q) = \lnot p \land \lnot q$

| $p$ | $q$ | $p \lor q$ | $\lnot (p \lor q)$ | $\lnot p$ | $\lnot q$ | $\lnot p \land \lnot q$ |
| - | - | ----- | -------- | -- | -- | ------- |
| 0 | 0 | 0     | 1        | 1  | 1  | 1       |
| 0 | 1 | 1     | 0        | 1  | 0  | 0       |
| 1 | 0 | 1     | 0        | 0  | 1  | 0       |
| 1 | 1 | 1     | 0        | 0  | 0  | 0       |


## Logische Operatoren in Programmiersprachen

$\land \mathop{\widehat=} \&\&$  
$\lor \mathop{\widehat=} ||$


Ist es das gleiche? Nicht unbedingt. In Programmiersprachen wird zum Beispiel (bei "oder") der zweite Wert oft nicht geprüft, wenn der erste bereits wahr ist. Be einer "und" Verknüpfung wird oft die zweite Aussage nicht mehr geprüft, wenn die erste Aussage falsch ist.

## Junktoren (Verknüpfungen)

### Implikation

$p \to q$ oder $p \Rightarrow q$ gilt genau dann, wenn $\lnot p \lor q$

$p \leftrightarrow q$ oder $p \Leftrightarrow q$ gilt genau dann, wenn $(p \to q) \land (q \to p)$

| Implikation | Spreichweise |
|-|-|
| $p \to q$ | "Aus p folgt q"<br> "p ist **hinreichende Bedingung** oder **Prämisse** für q" <br> "q ist **notwendige Bedingung** oer **Konklusion** für p" | 
| $p \leftrightarrow q$ | "p genau dann, wenn q"

### Umkehrschluss (Kontraposition)
$(\lnot q) \to (\lnot p)$ an Stelle von $p \to q$  
Wenn $p$ falsch ist, kann $q$ falsch oder wahr sein.

### Tautologie

Eine Aussage heißt Tautologie, wenn sie unabhängig der Werte **immer Wahr** ist.

### Kontradiktion

Eine Aussage heißt Kontradiktion, wenn sie unabhängig der Werte **immer falsch** ist.

## Definition: Logische Äquivalenz
Zwei Aussageformen $A(v_1,...,v_n)$ und $B(v_1,...,v_n)$ heißen logisch Äquivalent, falls die Verknüpfung $A(v_1,...,v_n) \leftrightarrow B(v_1,...,v_n)$ eine Tautologie ist.  
Schreibweise $A(v_1,...,v_n) \equiv B(v_1,...,v_n)$

$\equiv$ ist ein Metasymbol und **beschreibt Aussagen**.  
$\to$ ist ein logisches Symbol und **verknüpft Aussagen**.


$(p \leftrightarrow q) \equiv (p \land q) \lor (\lnot p \land \lnot q)$

**Beweis:**

```math
 \begin{align}
(p \leftrightarrow q) &= (p \to q) \land (q \to p) \\
(p \to q ) &= (p \lor \lnot q) \\
(q \to p ) &= (q \lor \lnot p) \\
(p \to q) \land (q \to p) &= (p \lor \lnot q) \land (q \lor \lnot p) \\
&= (p \land q) \lor \underbrace{(p \land \lnot p)}_{\text{Kontradiktion}} \lor \underbrace{(\lnot q \land q)}_{\text{Kontradiktion}} \lor (\lnot q \land \lnot p) \\
&= (p \land q) \lor (\lnot p \land \lnot q)
 \end{align}
```

## Dominanz
$p \land \text{falsch} \equiv \text{flasch}$  
$p \lor \text{wahr} \equiv \text{wahr}  $

## Negationsgesetz
$p \land \lnot p \equiv \text{falsch}$  
$p \lor \lnot p \equiv \text{wahr}$

## Idempotenzgesetz

$p \land p \equiv p$  
$p \lor p \equiv p$

## Absorptionsgesetze

$(p \land (p \lor q)) \equiv p$  
$(p \lor (p \land q)) \equiv p$