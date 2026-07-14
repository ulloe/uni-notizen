# Testklausur — Lineare Algebra

**Bearbeitungszeit:** 45 Minuten &nbsp;·&nbsp; **Erreichbare Punkte:** 45 &nbsp;·&nbsp; **Hilfsmittel:** keine

> Die Minutenangaben pro Aufgabe sind als Richtwert für die Zeiteinteilung gedacht.
> Begründe deine Antworten — reine Ergebnisse ohne Rechenweg geben in der Regel keine volle Punktzahl.

---

## Aufgabe 1 — Wahr oder Falsch (5 Punkte, ~5 min)

Entscheide für jede Aussage, ob sie **wahr** oder **falsch** ist, und begründe jeweils in einem Satz (bzw. gib ein Gegenbeispiel an).

a) Jede injektive Abbildung $f: A \to B$ ist bijektiv.

b) In einem Körper $K$ besitzt **jedes** Element ein multiplikatives Inverses.

c) Der Durchschnitt $U_1 \cap U_2$ zweier Untervektorräume von $V$ ist wieder ein Untervektorraum von $V$.

d) Für jede lineare Abbildung $f: V \to W$ gilt $f(0) = 0$.

e) Zwei ähnliche Matrizen $A, B \in K^{n\times n}$ (also $B = S^{-1}AS$) haben denselben Rang.

---

## Aufgabe 2 — Mengen & Abbildungen (5 Punkte, ~5 min)

a) Untersuche $f: \mathbb{Z} \to \mathbb{Z}, \; f(n) = 2n$ auf **Injektivität** und **Surjektivität**. Begründe. *(2 P)*

b) Untersuche $g: \mathbb{R} \to \mathbb{R}, \; g(x) = x^2$ auf **Injektivität** und **Surjektivität**. Begründe. *(2 P)*

c) Seien $u: \mathbb{R} \to \mathbb{R}, \, u(x) = x + 2$ und $w: \mathbb{R} \to \mathbb{R}, \, w(x) = 3x$.
Bestimme die Verkettungen $(w \circ u)(x)$ und $(u \circ w)(x)$. *(1 P)*

---

## Aufgabe 3 — Algebraische Strukturen (6 Punkte, ~6 min)

Auf der Menge $\mathbb{R}$ wird die Verknüpfung

```math
a * b := a + b + 1
```

definiert. Untersuche, ob $(\mathbb{R}, *)$ eine **Gruppe** ist. Prüfe dazu alle Gruppenaxiome (Assoziativität, neutrales Element, inverse Elemente) explizit nach. Ist die Gruppe **abelsch**?

---

## Aufgabe 4 — Gauß-Algorithmus (9 Punkte, ~9 min)

Gegeben sei das lineare Gleichungssystem $Ax = b$ mit

```math
\begin{aligned}
x_1 + 2x_2 + \phantom{2}x_3 &= 1 \\
2x_1 + 4x_2 + \phantom{2}x_3 &= 3 \\
3x_1 + 6x_2 + 2x_3 &= 4
\end{aligned}
```

a) Stelle die erweiterte Koeffizientenmatrix $[A \mid b]$ auf und bringe sie mit dem Gauß-Algorithmus auf Zeilenstufenform. *(4 P)*

b) Bestimme den **Rang** von $A$. *(1 P)*

c) Gib die **Lösungsmenge** des Gleichungssystems an (in der Form „spezielle Lösung + Vielfache"). *(4 P)*

---

## Aufgabe 5 — Vektorräume (8 Punkte, ~7 min)

a) Welche der folgenden Teilmengen sind **Untervektorräume** von $\mathbb{R}^3$? Begründe jeweils. *(3 P)*

```math
U_1 = \{(x,y,z) \mid x + y + z = 0\}, \quad
U_2 = \{(x,y,z) \mid x + y + z = 1\}, \quad
U_3 = \{(x,y,z) \mid x \cdot y = 0\}
```

b) Untersuche, ob die Vektoren

```math
v_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \quad
v_2 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \quad
v_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}
```

linear unabhängig sind. Bilden sie eine **Basis** des $\mathbb{R}^3$? Wie groß ist $\dim(\mathbb{R}^3)$? *(5 P)*

---

## Aufgabe 6 — Lineare Abbildungen (7 Punkte, ~8 min)

a) Ist die Abbildung $f: \mathbb{R}^2 \to \mathbb{R}^2, \; f(x, y) = (x + y, \; x\cdot y)$ linear? Begründe. *(2 P)*

b) Sei $g: \mathbb{R}^3 \to \mathbb{R}^3$ die lineare Abbildung mit der Darstellungsmatrix

```math
A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 1 & 1 \end{pmatrix}.
```

Bestimme $\ker(g)$ und $\operatorname{im}(g)$ sowie deren Dimensionen und gib $\operatorname{rang}(g)$ an. Überprüfe abschließend den **Dimensionssatz** $\dim(V) = \dim(\ker g) + \dim(\operatorname{im} g)$. *(5 P)*

---

## Aufgabe 7 — Euklidischer Vektorraum (5 Punkte, ~5 min)

Im $\mathbb{R}^3$ mit dem Standard-Skalarprodukt seien

```math
u = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}, \qquad
v = \begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix}.
```

a) Berechne das Skalarprodukt $\langle u, v \rangle$ und die Norm $\lVert u \rVert$. *(2 P)*

b) Welchen **Winkel** schließen $u$ und $v$ ein? Sind sie orthogonal? *(1 P)*

c) Berechne das **Kreuzprodukt** $u \times v$ und weise nach, dass das Ergebnis orthogonal zu $u$ ist. *(2 P)*

---

*Viel Erfolg!*
