**Q-learning och Ice Grid – En steg-för-steg guide**

### Vad är Q-learning?
Q-learning är en metod inom förstärkningsinlärning där en agent lär sig genom att utforska en miljö och ta beslut baserat på erfarenhet. Genom att få belöningar eller straff för sina handlingar bygger agenten upp en så kallad Q-tabell som hjälper den att fatta bättre beslut i framtiden.

### Ice Grid – Problemet vi ska lösa
Föreställ dig att vi har ett rutnät (Ice Grid) där en agent ska navigera från en startpunkt till ett mål. Några av rutorna är hala, vilket gör att agenten glider, medan andra rutor är hål som får agenten att misslyckas.

**Exempel på en 4x4 Ice Grid:**
```
S  .  .  G
.  H  .  .
.  .  H  .
.  .  .  .
```
- `S` = Start
- `G` = Mål
- `H` = Hål (Farliga rutor)
- `.` = Vanlig is (kan vara hal)

### Steg 1: Initialisera Q-tabellen
Q-tabellen är en tabell där varje ruta har en lista av värden för olika handlingar (upp, ner, vänster, höger). Från början är alla värden 0 eftersom agenten inte har lärt sig något ännu.

### Steg 2: Utforska och uppdatera Q-tabellen
Agenten börjar sin färd genom att pröva olika vägar. För varje steg får den en belöning eller ett straff:
- +1 poäng om den når målet (G).
- -1 poäng om den ramlar i ett hål (H).
- 0 poäng för andra steg.

Efter varje steg uppdateras Q-värden enligt formeln:
```
Q(s, a) = Q(s, a) + α [ R + γ max Q(s', a') - Q(s, a) ]
```
Där:
- `s` = nuvarande tillstånd (position i rutnätet)
- `a` = vald handling (upp, ner, vänster, höger)
- `R` = belöning för handlingen
- `s'` = nästa tillstånd
- `α` = inlärningshastighet (hur snabbt vi uppdaterar värden)
- `γ` = framtidsdiskonteringsfaktor (hur mycket vi värderar framtida belöningar)

### Steg 3: Utforska vs. Exploatera
Agenten måste balansera mellan att:
1. **Utforska** – testa nya vägar för att lära sig mer.
2. **Exploatera** – använda den bästa hittills lärda vägen.
Detta styrs ofta av en `ε`-greedy strategi, där agenten slumpar vissa val för att utforska.

### Steg 4: Lära sig den optimala strategin
Efter att ha testat sig fram många gånger bygger agenten upp en stabil Q-tabell och kan nu alltid hitta den kortaste och säkraste vägen till målet.

### Summering
- Q-learning lär en agent att ta bättre beslut genom att prova sig fram och uppdatera en Q-tabell.
- Ice Grid är ett bra exempel på hur agenten måste navigera i en okänd miljö och hitta den bästa vägen.
- Genom att använda Q-tabellen kan agenten lära sig att undvika hål och hitta den snabbaste vägen till målet.

Med den här metoden kan vi träna AI-agenter att fatta smarta beslut i alla slags miljöer!

