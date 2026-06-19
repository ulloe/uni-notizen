# 6. Vektorräume

### Definition:

Sei $K$ ein Körper. Eine Menge $V$ zusammen mit einer Abbild $+$ (Vektoraddition)

```math
\begin{aligned}
& + : & V \times V & \to V \\
& & (v,w) & \mapsto v+w
\end{aligned}
```

und eine Abbildung $\huge \cdot$ (Skalarmultiplikation)

```math
\begin{aligned}
& \cdot : & K \times V & \to V \\
& & (\lambda,v) & \mapsto \lambda \cdot v
\end{aligned}
```

heißt K-Vektorraum, wenn folgendes gilt:

**(VR1)**: $(V,+) ist eine Abelsche Gruppe. Das neutrale Element wird (vorläufig) mit 0 bezeichnet. Das inverse Element (zu $v \in V$) mit $-v$.

**(VR2)**: Die Skalarmultiplikation ist auf folgende Weise mit $(V,+)$ verträglich. Für $\lambda, \mu \in K$ und $v,w \in V$ gelte:  

a) $(\lambda + \mu) \cdot v = \lambda v + \mu v$  
b) $\lambda \cdot (v+w) = \lambda \dot v + \lambda \cdot w$  
c) $\lambda \cdot (\mu \cdot v) = (\lambda \cdot \mu) \cdot v$  
d) $1 \cdot v = v$  

Die Elemente von $V$ nennt man auch **Vektoren**.

**Beispiel:**

a) $K = \mathbb{R}, V = \mathbb{R}^3 = \mathbb{R} \times \mathbb{R} \times \mathbb{R}$  
b) $K = \mathbb{C}, V = \mathbb{C}^n$  
c) $K = \mathbb{R}, V =\mathbb{R}^{m \times n}$  
d) $K = \mathbb{R}, V = \mathcal C([-\pi, \pi], {R}) = \set{f: [- \pi, \pi] \to \mathbb{R}, f \text{ stetig}}$  
e) $K = \mathbb{R}, V=  \set{0}$  
f) $K = \mathbb{F}_2, V = \mathbb{F}_2^n$


### Lemma:

$V$ K-Vektorraum, $v \in V,\lambda \in K$  
Dann gilt

a) $\underbrace{0}_{\in K} \cdot v = \underbrace{\vec 0}_{\in V} \quad \quad 0 \cdot \left(\begin{matrix}v_1 \\ v_2 \\ v_3 \end{matrix} \right) = \left(\begin{matrix}0 \\ 0 \\ 0 \end{matrix} \right) $

b) $\lambda \cdot \vec 0 = \vec 0$  
c) $\lambda \dot v = \vec 0$ impliziert $\lambda = 0$ oder $v = \vec 0$
d) $(-\lambda) \cdot v = \lambda \cdot (-v)$

### Beweis

a) Es gilt: $0 \cdot v = (0 + 0) \cdot v = 0 \cdot v + 0 \cdot v$  
Addition mit Inversen führt auf Behauptung

b) $\lambda \cdot \vec 0 = \lambda \cdot (\vec 0 + \vec 0) = \lambda \cdot \vec 0 + \lambda \cdot \vec 0$  
Addition mit Inversen führt auf Behauptung

c)  Ist $\lambda \cdot v = \vec 0$ mit $\lambda \not = 0$, so gilt

$\lambda^{-1}(\lambda \cdot v) = \lambda^{-1} \cdot \vec 0 = \vec 0$  
$(\lambda^{-1} \cdot \lambda) \cdot v = \vec 0$

d) $\lambda \cdot v + (-\lambda) \cdot v = (\lambda + (-\lambda)) \cdot v = 0 \cdot v = \vec 0$  
$\lambda \cdot v + \lambda \cdot (-v) = \lambda(v + (-v)) = \lambda \cdot \vec 0 = \vec 0$

Mit Eindeutigkeit der inversen Elemente in Gruppen folgt die Behauptung.

**Bemerkung**:
Wegen der Eigenschaften in Lemma a) und b) wird im folgenden **nicht** mehr explizit zwischen $0$ und $\vec 0$ in der Notation unterschieden.

### Definition

$V$ K-Vektorraum, $U \subseteq V$ eine Teilmenge.  
$U$ heißt **Untervektorraum** (kurz **Unterraum**) von $V$ falls gilt:


**(UV1)**: $U \not = \set{}$  
**(UV2)**: Abgeschlossenheit bezüglich Vektoraddition: $u_1, u_2 \in U \Rightarrow u_1 + u_2 \in U$  
**(UV3)**: Abgeschlossenheit bezüglich Skalarmultiplikation: $u \in U, \lambda \in K \Rightarrow \lambda \cdot u \in U$

**Bemerkung**  
Damit ist $U$ für sich genommen ebenfalls ein Vektorraum.  
**Wichtig:**
- Der Unterraum muss die Null enthalten!
- Im $\mathbb{R}^3$ sind Geraden durch $0$ Unterräume!
- Krummlinige Kurven durch 0 können kein Unterraum sein!

**Beispiele:**

- $\mathbb{R}^3 \subseteq \mathbb{R}^4$
- $\underset{\text{stetig differenzierbare Funktionen}}{\mathcal C^1([-\pi,\pi],\mathbb{R})} \subseteq \underset{\text{stetige Funktionen}}{\mathcal C([-\pi,\pi],\mathbb{R})}$