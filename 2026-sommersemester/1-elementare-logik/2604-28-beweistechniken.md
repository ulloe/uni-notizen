# 2. Beweistechniken

> Tipp: Software wie Coq proof assistant, MIZAR project, HOL light / ISABELLE können Aussagenbeweise prüfen. 

> TODO: Tools prüfen.

## Einfache Beweise


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

