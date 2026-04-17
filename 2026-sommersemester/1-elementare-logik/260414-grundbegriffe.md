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

## Kommutativgesetz

Konjunktion und Disjunktion sind *kommutativ** (Reihenfolge ist vertauschbar).

$$
p \land q = q \land p \\
p \lor q = q \lor p
$$


## Assoziativgesetz

Konjunktion und Disjunktion sind *assoziativ** (Klammerung ist beliebig).

$$
(p \land q) \land r = q \land (p \land r) \\
(p \lor q) \lor r = q \lor (p \lor r)
$$

## Distributivgesetz

Konjunktion und Disjunktion sind *distributiv** (Ausmultiplizieren / Verteilen).

$$
p \lor (q \land r) = (p \lor q) \land (p \lor r) \\
p \land (q \lor r) = (p \land q) \lor (p \land r) \\
$$


**Negationsgesetze:**

Gesetze von de Morgan  

$$
\lnot (p \lor q) = \lnot p \land \lnot q \\
\lnot (p \land q) = \lnot p \lor \lnot q
$$
