# 1.3 Begriffe der Prädikatenlogik

* Prädikatenlogik ist eine Erweiterung der Aussagenlogik.

* Beispiele:
  * $P(x) := \text{'}x > 3 \land x < 5\text{'}$
  * $\set{x \in U | P(x)} Q(x,y) := \text{'}cos(x) = \frac{sin(y)}{2}\text{'} $

* Elementare Prädikate sind: "$=$", "$<$", "$\geq$", ...
* Prädikate sind Funktionen, die Wahrheitswerte als Resultate haben.

Zusätzliche Komonenten: **Quantoren**

* $\forall$: Für alle ... gilt ... (Allquantor, x = quantifizierte Variable)
* $\exists$: Für ein ... gilt ... (existenzielle Quantifizierung)
* $\nexists$ Es existiert kein ... für das gilt ...

**Beispiel:** $\forall x \in U P$ oder $\forall x \in U: P(x)$  
"Für alle x in U gilt P"

In der Regel wird $P(x)$ genutzt, um zu zeigen, dass $P$ von $x$ abhängig ist.

Ist $U$ endlich gilt:
$\forall x \in U P(x) \equiv P(u_1) \land P(u_2) \land ... \land P(u_n) = \bigwedge_x (Px) \text{ oder } \bigwedge_{x \in U} P(x)$

und

$\exists x \in U P(x) \equiv P(u_1) \lor P(u_2) \lor ... \lor P(u_n) = \bigvee_x (Px) \text{ oder } \bigvee_{x \in U} P(x)$


## Regeln für quantifizierbare Aussagen:

$\lnot (\forall x \in X P(x)) = \exists x \in X \lnot P(x)$

$\lnot (\exists x \in X P(x)) = \forall x \in X \lnot P(x)$ 

## Definition: Freie und gebundene Verwendung von Variablen in Aussageformen

* Hat $P$ keine Quantoren, so ist jedes Vorkommen einer Variablen $x$ in $P$ frei.
* Ist ein Vorkommen von $x$ in $P$ frei, so ist das Vorkommen von $x$ in $Qx P$ nicht mehr frei, sondern an den Quantor $Q$ gebunden.

$\underbrace{y < 1 \lor \underbrace{x \in U x < 2}_{\text{Aussage}}}_{\text{Aussageform, da y frei wählbar}}$

Setzen wir für $y$ einen Wert (z. B. 3) ein, erhalten wir eine Aussage:  
$ 3 < 1 \lor x \in U x < 2$

**Beispiel:**

(A) Weder Samson noch Freunde von Samson schießen ein Tor.  
(B) Ein Tor wird von Samson oder Johannes geschossen
(C) Also ist Johannes kein Freund von Samson.

Formalisierung:
* Das Universum $U$ sei die Menge der Fußballspielenden.
* $T(x)$ ist ein Prädikat mit der Bedeutung "$x$ schießt ein Tor"
* $F(x,y)$ ist ein Prädikat

Damit gilt:

(A) $\lnot T(S) \land \forall x (F(x, S) \rightarrow \lnot T(x))$  
(B) $T(S) \lor T(J)$  
(C) $\lnot F(J, S)$


Wir müssen "Aus A und B folgt C" aussagen.  
A kann vereinfach werden zu $\lnot T(S)$, da dieser Teil immer wahr sein muss, damit der gesamte Ausdruck wahr ist. Mit B zusammen gilt daher:  
$\lnot T(S) \land (T(S) \lor T(J))$

Durch Anwenden des Distributivgesetzes gilt:

$(\lnot T(S) \land T(S)) \lor (\lnot T(S) \land T(J))$

$(\lnot T(S) \land T(S))$ ist eine Kontradiktion und immer falsch. Durch Identitätsgesetz für "oder" könne wir folgern:

$\lnot T(S) \land T(J)$

Setzen wir J in den zweiten Teil der Aussage A ein erhalten wir:

$F(J,S) \rightarrow \lnot T(S)$ und durch modus ponens gilt: $T(S) \rightarrow \lnot F(J,S)$

Damit ist gezeigt, das J (Johannes) kein Freund von S (Samson ist).