# 3. Algebraische Strukturen: Gruppen, Ringe, Körper

## Definition: Verknüpfung

Unter einer **Verknüpfung** auf einer Menge $G$ verstehen wir eine Abbildung:

$\circ: G \times G \to G$  
$(a, b) \mapsto a \circ b$

## Definition: Gruppe

Eine Menge $G$ zusammen mit einer Verknpüpfung $\circ$ heißt **Gruppe**, wenn folgende Axiome erfüllt worden sind:

*(G1)* **Assoziativität:** $(a \circ b) \circ c = a \circ (b \circ c)$, für alle $a, b, c \in G$
*(G2)* Es gibt ein **neutrales Element** $e \in G$ mit $e \circ a = a$ für alel $a \in G$
*(G3)* Es gibt zu jedem $a \in G$ ein **inverses Element** $a^{-1} \in G$ mit $a^{-1} \circ a = a$.

Wir schreiben:

$(G, \circ)$ wobei $G$ die Menge und $\circ$ die Verknüpfung ist.

### Satz

Sei $(G, \circ)$ eine Gruppe.
Dann ist das neutrale Element eindeutig bestimmt und für jedes $a$ ist $a^{-1}$ eindeutig bestimmt.  
Ferne gilt:  
$a \circ e = a$ für alle $a \in G$  
$a \circ a^{-1} = a$ für alle $a \in G$  

#### Beweis

**Zunächst die letzte Behauptung:**

Zu $a^{-1} \in G$ gibt es ein inverses Element $\bar{a} \in G$  
(*) mit $\bar{a} \circ a^{-1} = e$, woraus folgt  

```math

\begin{align}
a \circ a^{-1} &\overset{(G2)} = (e \circ a) \circ a^{-1} \\
&\overset{(G1)}= e \circ (a \circ a^{-1}) \\
&\overset{(*)}= (\bar{a} \circ a^{-1}) \circ (a \circ a^{-1}) \\
&\overset{(G1)}= \bar{a} \circ \underbrace{(a^{-1} \circ a)}_{\overset{(G3)}= e} \circ a^{-1} \\
&\overset{(G2)}= \bar{a} \circ a^{-1} \\
&\overset{(*)}= e
\end{align}
```

Dann erhalten wir den 2. Teil
$a \circ e \overset{(G3)}= a \circ (a^{-1} \circ a) \overset{(G1)}= (a \circ a^{-1}) \circ a = \overset{(G2)}= a$

**Eindeutigkeit des inversen Elements**

Seien $a'$ und $a^{-1}$ beides inverse zu a.  
Dann gilt:

$a' = a' \circ e = a' \circ (a \circ a^{-1}) \overset{(G1)} = (a' \circ a) \circ a^{-1} \overset{(G3)} = e \circ a^{-1} \overset{(G2)}= a^{-1}$


**Eindeutigkeit des neutralen Elements**

Sei $\tilde{e}$ ein weiteres neutrales Element, dann muss gelten:  
$\tilde{e} = e \circ \tilde{e} \overset{(Komm.)}= \tilde{e} \circ e \overset{(G2)} = e $


### Definition: Kommutative (bzw. Abelsche) Gruppe

Eine Gruppe $(G,\circ)$ heitß kommutativ (bzw. abelsch), wenn $a \circ b = b \circ a$für alle $a,b \in G$ gilt.

**Beispiel**

$(\mathbb{R},+)$ ist eine abelsche Gruppe
$(\mathbb{N}_0,+)$ ist **keine** Gruppe, da es kein inverses Element gibt ((G3) nicht erfüllt).

#### Notation

Sei $(G, +)$ eine abelsche Gruppe.  
Für $a_1,...,a_n \in G$ definieren wir:

$\displaystyle \sum_{i=1}^{n} a_i := a_1 + a_2 + ... + a_n = \sum_{i \in \set{1,..,n}} a_i$

## Definition: Ring

Ein Ring $(R,+,\cdot)$ ist eine Menge $R$ mit den zwei Verknüpfungen Addition ($+$) und Multiplikation ($\cdot$), für die die folgenden Axiome gelten:

*(R1)* $(R,+)$ ist eine abelsche Gruppe. Das neutrale Element wir mit $0$ bezeichnet.  
*(R2)* $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ für alle $a,b,c \in R$ (Multiplikation ist Assoziativ)  
*(R3)* Es gelten dei Distributivgesetze. Das heißt für alle $a,b,c \in R$ gilt:  
$a \cdot (b + c) = a \cdot b + a \cdot c$  
$(a + b) \cdot c = a \cdot c + b \cdot c$  


Falls $R$ kommutativ bzgl. Multiplikation ist, heißt $(R, +, \cdot)$ kommutativer Ring.  
Ein Element $1 \in R$ heißt Einselement, wenn $1 \cdot a = a \cdot 1 = a$ für alle $a \in R$ gilt.  
Ein kommutativer Ring mit Einselement heißt **kommutativer Ring mit Eins**.

Zu $a \in R$ wird das inverse Element bzgl. der Addition mit $-a$ bezeichnet.