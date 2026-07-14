# Lösungen — Testklausur Lineare Algebra

> Musterlösung zu [`klausur-01.md`](./klausur-01.md). Erst selbst versuchen, dann vergleichen!

---

## Aufgabe 1 — Wahr oder Falsch (5 P)

a) **Falsch.** Injektivität allein genügt nicht — für Bijektivität muss $f$ zusätzlich surjektiv sein.
Gegenbeispiel: $f: \mathbb{Z} \to \mathbb{Z}, f(n)=2n$ ist injektiv, aber nicht surjektiv.

b) **Falsch.** Das Nullelement $0 \in K$ besitzt **kein** multiplikatives Inverses. Nur jedes $a \in K \setminus \{0\}$ hat ein Inverses $a^{-1}$.

c) **Wahr.** $U_1 \cap U_2$ enthält $0$, und mit $u, w \in U_1 \cap U_2$ liegen $u+w$ und $\lambda u$ in beiden Unterräumen, also im Durchschnitt. Damit sind alle Untervektorraum-Eigenschaften erfüllt.

d) **Wahr.** Aus der Homogenität folgt $f(0) = f(0 \cdot v) = 0 \cdot f(v) = 0$.

e) **Wahr.** Ähnliche Matrizen beschreiben dieselbe lineare Abbildung bezüglich verschiedener Basen; der Rang (= Dimension des Bildes) ist basisunabhängig, also gleich.

---

## Aufgabe 2 — Mengen & Abbildungen (5 P)

**a)** $f(n) = 2n$:
- **Injektiv:** ja. Aus $2n_1 = 2n_2$ folgt $n_1 = n_2$.
- **Surjektiv:** nein. Ungerade Zahlen (z. B. $1$) werden nicht getroffen, da $2n$ stets gerade ist.

**b)** $g(x) = x^2$:
- **Injektiv:** nein, denn $g(-1) = 1 = g(1)$, aber $-1 \neq 1$.
- **Surjektiv:** nein, denn negative Zahlen (z. B. $-1$) haben kein Urbild, da $x^2 \geq 0$.

**c)** Verkettungen:

```math
(w \circ u)(x) = w(u(x)) = w(x+2) = 3(x+2) = 3x + 6
```
```math
(u \circ w)(x) = u(w(x)) = u(3x) = 3x + 2
```

(Man sieht: $w \circ u \neq u \circ w$ — Verkettung ist i. A. nicht kommutativ.)

---

## Aufgabe 3 — Algebraische Strukturen (6 P)

Mit $a * b = a + b + 1$:

**Abgeschlossenheit:** Für $a, b \in \mathbb{R}$ ist $a + b + 1 \in \mathbb{R}$. ✓

**(G1) Assoziativität:**

```math
(a * b) * c = (a+b+1) * c = (a+b+1) + c + 1 = a+b+c+2
```
```math
a * (b * c) = a * (b+c+1) = a + (b+c+1) + 1 = a+b+c+2
```

Beide Ausdrücke stimmen überein $\Rightarrow$ assoziativ. ✓

**(G2) Neutrales Element:** Gesucht $e$ mit $a * e = a$ für alle $a$:

```math
a + e + 1 = a \;\Leftrightarrow\; e = -1.
```

Also $e = -1$ (Probe: $a * (-1) = a - 1 + 1 = a$ ✓).

**(G3) Inverse Elemente:** Gesucht $a^{-1}$ mit $a * a^{-1} = e = -1$:

```math
a + a^{-1} + 1 = -1 \;\Leftrightarrow\; a^{-1} = -2 - a.
```

Zu jedem $a \in \mathbb{R}$ existiert also ein Inverses. ✓

**Kommutativität:** $a * b = a+b+1 = b+a+1 = b * a$. ✓

**Ergebnis:** $(\mathbb{R}, *)$ ist eine Gruppe und sogar **abelsch**.

---

## Aufgabe 4 — Gauß-Algorithmus (9 P)

**a)** Erweiterte Koeffizientenmatrix und Elimination:

```math
\left[\begin{array}{rrr|r}
1 & 2 & 1 & 1 \\
2 & 4 & 1 & 3 \\
3 & 6 & 2 & 4
\end{array}\right]
\xrightarrow[\;Z_3 - 3Z_1\;]{\;Z_2 - 2Z_1\;}
\left[\begin{array}{rrr|r}
1 & 2 & 1 & 1 \\
0 & 0 & -1 & 1 \\
0 & 0 & -1 & 1
\end{array}\right]
\xrightarrow{\;Z_3 - Z_2\;}
\left[\begin{array}{rrr|r}
1 & 2 & 1 & 1 \\
0 & 0 & -1 & 1 \\
0 & 0 & 0 & 0
\end{array}\right]
```

Das ist Zeilenstufenform. Pivotspalten sind Spalte 1 und Spalte 3.

**b)** Zwei Pivotpositionen (Nichtnullzeilen) $\Rightarrow \operatorname{rang}(A) = 2$.

**c)** Das System ist konsistent (keine Zeile der Form $0 = c \neq 0$). Die Spalte zu $x_2$ ist keine Pivotspalte, also ist $x_2$ **freie Variable**; setze $x_2 = t$.

Aus Zeile 2: $-x_3 = 1 \Rightarrow x_3 = -1$.
Aus Zeile 1: $x_1 + 2x_2 + x_3 = 1 \Rightarrow x_1 = 1 - 2t - (-1) = 2 - 2t$.

Lösungsmenge:

```math
L = \left\{
\begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix}
+ t \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}
\;\middle|\; t \in \mathbb{R} \right\}.
```

(Unendlich viele Lösungen — eine eindimensionale Lösungsgerade.)

---

## Aufgabe 5 — Vektorräume (8 P)

**a)**
- $U_1 = \{x+y+z = 0\}$: **Untervektorraum.** Enthält $0=(0,0,0)$; mit zwei Lösungen bleibt die Summe und jedes skalare Vielfache Lösung der homogenen Gleichung (abgeschlossen). ✓
- $U_2 = \{x+y+z = 1\}$: **kein** Untervektorraum. $0 = (0,0,0) \notin U_2$, da $0+0+0 = 0 \neq 1$.
- $U_3 = \{x \cdot y = 0\}$: **kein** Untervektorraum. Nicht abgeschlossen bzgl. Addition: $(1,0,0), (0,1,0) \in U_3$, aber $(1,0,0)+(0,1,0) = (1,1,0) \notin U_3$ (denn $1 \cdot 1 = 1 \neq 0$).

**b)** Linearkombination $\lambda_1 v_1 + \lambda_2 v_2 + \lambda_3 v_3 = 0$ bzw. Determinante der Matrix mit den Spalten $v_1, v_2, v_3$:

```math
\det \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}
= 1\,(1\cdot 1 - 1\cdot 0) - 1\,(0\cdot 1 - 1\cdot 1) + 0
= 1 - (-1) = 2 \neq 0.
```

Da die Determinante $\neq 0$ ist, sind $v_1, v_2, v_3$ **linear unabhängig**. Drei linear unabhängige Vektoren im $\mathbb{R}^3$ bilden eine **Basis**. Es gilt $\dim(\mathbb{R}^3) = 3$.

---

## Aufgabe 6 — Lineare Abbildungen (7 P)

**a)** $f(x,y) = (x+y,\, xy)$ ist **nicht linear**. Gegenbeispiel zur Homogenität:

```math
f(2 \cdot (1,1)) = f(2,2) = (4, 4), \qquad
2 \cdot f(1,1) = 2 \cdot (2,1) = (4, 2).
```

Wegen $(4,4) \neq (4,2)$ ist $f(\lambda x) \neq \lambda f(x)$ — der Term $xy$ ist nicht linear.

**b)** Elimination von $A$:

```math
\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 1 & 1 \end{pmatrix}
\xrightarrow[\;Z_3 - Z_1\;]{\;Z_2 - 2Z_1\;}
\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & -1 & -2 \end{pmatrix}
\xrightarrow{\;Z_2 \leftrightarrow Z_3\;}
\begin{pmatrix} 1 & 2 & 3 \\ 0 & -1 & -2 \\ 0 & 0 & 0 \end{pmatrix}
```

$\Rightarrow \operatorname{rang}(g) = 2$, also $\dim(\operatorname{im} g) = 2$.

**Kern** ($Ax = 0$): aus Zeile 2 $-x_2 - 2x_3 = 0 \Rightarrow x_2 = -2x_3$; aus Zeile 1 $x_1 + 2x_2 + 3x_3 = 0 \Rightarrow x_1 = -2(-2x_3) - 3x_3 = x_3$. Mit $x_3 = t$:

```math
\ker(g) = \left\{ t \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} \;\middle|\; t \in \mathbb{R} \right\},
\qquad \dim(\ker g) = 1.
```

**Bild:** aufgespannt von den Pivotspalten (Spalte 1 und 2) von $A$:

```math
\operatorname{im}(g) = \operatorname{span}\!\left\{
\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix},
\begin{pmatrix} 2 \\ 4 \\ 1 \end{pmatrix} \right\},
\qquad \dim(\operatorname{im} g) = 2.
```

**Dimensionssatz:** $\dim(\mathbb{R}^3) = 3 = \underbrace{1}_{\dim \ker g} + \underbrace{2}_{\dim \operatorname{im} g}$. ✓

---

## Aufgabe 7 — Euklidischer Vektorraum (5 P)

**a)** Skalarprodukt und Norm:

```math
\langle u, v \rangle = 1\cdot 2 + 2\cdot 0 + 2\cdot(-1) = 2 - 2 = 0
```
```math
\lVert u \rVert = \sqrt{1^2 + 2^2 + 2^2} = \sqrt{9} = 3
```

**b)** Wegen $\langle u, v \rangle = 0$ sind $u$ und $v$ **orthogonal**. Der Winkel beträgt

```math
\cos(\varphi) = \frac{\langle u,v\rangle}{\lVert u\rVert \,\lVert v\rVert} = 0
\;\Rightarrow\; \varphi = 90^\circ.
```

**c)** Kreuzprodukt:

```math
u \times v =
\begin{pmatrix}
u_2 v_3 - u_3 v_2 \\
u_3 v_1 - u_1 v_3 \\
u_1 v_2 - u_2 v_1
\end{pmatrix}
=
\begin{pmatrix}
2\cdot(-1) - 2\cdot 0 \\
2\cdot 2 - 1\cdot(-1) \\
1\cdot 0 - 2\cdot 2
\end{pmatrix}
=
\begin{pmatrix} -2 \\ 5 \\ -4 \end{pmatrix}
```

Orthogonalität zu $u$ nachweisen:

```math
\langle u \times v,\; u \rangle = (-2)\cdot 1 + 5\cdot 2 + (-4)\cdot 2 = -2 + 10 - 8 = 0. \checkmark
```

---

**Punkteschlüssel (Orientierung):** 45–41 sehr gut · 40–34 gut · 33–27 befriedigend · 26–23 ausreichend · < 23 nicht bestanden.
