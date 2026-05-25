---
layout: page
title: "Doctrinal Lineage"
permalink: /lineage/
mermaid: true
---

# Doctrinal Lineage

The program's intellectual identity rests on two traditions that arrive at the same conclusion through independent reasoning. Both end at the same place: partnership at shared risk is the just form of capital deployment, and the form in which justice toward the poor takes shape in commercial life. The page works through each layer of the Catholic tradition in turn, then the Jewish parallel, and ends at the convergence.

## I. Roman foundation

The doctrine begins in Roman commercial law. The juristic literature on the *exercitor navis*, the commercial operator of a ship, sets up the structure on which Aquinas later builds. The investor and the operator are both liable in proportion to their stake in the venture. Risk is shared. Return follows risk.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':50,'rankSpacing':60},'themeVariables':{'fontSize':'17px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  R1["Digest 14.1 (Ulpian)<br/><i>exercitor navis</i><br/>shared maritime venture<br/><br/><b>The move:</b> liability tracks the stake.<br/>Risk is shared in proportion to capital."]
  classDef foundation fill:#f4e9d8,stroke:#8a6a2a,stroke-width:2px,color:#1a1a1a,padding:10px;
  class R1 foundation;
</div>

## II. Thomistic distinction

Aquinas takes the Roman structure and turns it into a doctrinal distinction that runs through the rest of the tradition. Capital deployed into a partnership at shared risk earns a return justly, because the investor remains a co-owner who shares the loss. The same capital extended as a loan at fixed interest is usury, because the lender keeps the capital safe and demands a return as well.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':50,'rankSpacing':80},'themeVariables':{'fontSize':'17px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  T1["Aquinas<br/>ST II-II q. 78 a. 2 ad 5<br/>(c. 1265 to 1274)"]
  T2["<b>societas</b><br/>partnership at shared risk<br/>JUST"]
  T3["<b>mutuum</b><br/>loan at fixed interest<br/>USURY"]
  T1 ==> T2
  T1 ==> T3
  classDef foundation fill:#f4e9d8,stroke:#8a6a2a,stroke-width:2px,color:#1a1a1a;
  classDef good fill:#d4e8d4,stroke:#2a6a3a,stroke-width:3px,color:#1a1a1a;
  classDef bad fill:#e8d4d4,stroke:#6a2a3a,stroke-width:3px,color:#1a1a1a;
  class T1 foundation;
  class T2 good;
  class T3 bad;
</div>

## III. The Salamanca school

In sixteenth-century Spain, a generation of Dominican and Jesuit theologians at Salamanca turn the Aquinas distinction into a full commercial moral theology. They develop the just price as common estimation, the legitimacy of partnership returns, the doctrine of restitution, and the early monetary theory that runs from the New World silver inflation. They write for confessors of merchants, which means their work is practical, not just speculative.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':40,'rankSpacing':50},'themeVariables':{'fontSize':'16px','fontFamily':'Georgia, serif'}}}%%
flowchart TB
  HEAD["Salamanca School<br/>(c. 1526 to 1610)<br/>Commercial moral theology"]
  S1["<b>Francisco de Vitoria</b><br/>(c. 1483 to 1546)<br/>Just price as<br/>common estimation"]
  S2["<b>Domingo de Soto</b><br/>(1494 to 1560)<br/><i>De Iustitia et Iure</i> (1553)<br/>Restitution, contract"]
  S3["<b>Tomás de Mercado</b><br/>(c. 1525 to 1575)<br/><i>Suma de Tratos y Contratos</i> (1571)<br/>Merchant conscience, exchange"]
  S4["<b>Luis de Molina</b><br/>(1535 to 1600)<br/><i>De Iustitia et Iure</i> (1593 to 1609)<br/>Partnership returns,<br/>contractual freedom"]
  S5["<b>Martín de Azpilcueta</b><br/>(1491 to 1586)<br/>Quantity theory of money<br/>(Doctor Navarrus)"]
  HEAD ==> S1
  HEAD ==> S2
  HEAD ==> S3
  HEAD ==> S4
  HEAD ==> S5
  classDef head fill:#f4e9d8,stroke:#8a6a2a,stroke-width:2px,color:#1a1a1a;
  classDef scholastic fill:#e6dcc6,stroke:#6a5a2a,stroke-width:1px,color:#1a1a1a;
  class HEAD head;
  class S1,S2,S3,S4,S5 scholastic;
</div>

## IV. Modern restatement: the social encyclicals

The doctrine goes quiet in the eighteenth and early nineteenth centuries. Leo XIII reopens it in 1891 with *Rerum Novarum*, framing a middle path between unbridled capitalism and socialism. The arc that follows is a single tradition restating itself across one hundred and thirty-five years.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':35,'rankSpacing':50},'themeVariables':{'fontSize':'15px','fontFamily':'Georgia, serif'}}}%%
flowchart TB
  E1["<b>Leo XIII</b> · 1891<br/><i>Rerum Novarum</i><br/>labor, property, association"]
  E2["<b>Pius XI</b> · 1931<br/><i>Quadragesimo Anno</i><br/>subsidiarity, social order"]
  E3["<b>John Paul II</b> · 1981<br/><i>Laborem Exercens</i><br/>priority of labor, co-ownership"]
  E4["<b>John Paul II</b> · 1991<br/><i>Centesimus Annus</i><br/>creative subjectivity, enterprise"]
  E5["<b>Benedict XVI</b> · 2009<br/><i>Caritas in Veritate</i><br/>gratuitousness in economic life"]
  E6["<b>Francis</b> · 2015<br/><i>Laudato Si</i><br/>integral ecology"]
  E7["<b>Francis</b> · 2020<br/><i>Fratelli Tutti</i><br/>social friendship"]
  E1 ==> E2 ==> E3 ==> E4 ==> E5 ==> E6 ==> E7
  classDef encyclical fill:#dfe7ef,stroke:#2a4a6a,stroke-width:1px,color:#1a1a1a;
  class E1,E2,E3,E4,E5,E6,E7 encyclical;
</div>

## V. The present restatement

Two weeks ago, Pope Leo XIV restated the social doctrine for the AI age in *Magnifica Humanitas*. The encyclical takes Babel and Nehemiah as its governing biblical images, and treats data colonialism and the new forms of dependence as the present-day analogues to the conditions Leo XIII addressed in 1891.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':50,'rankSpacing':60},'themeVariables':{'fontSize':'17px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  L14["<b>Leo XIV</b> · 15 May 2026<br/><i>Magnifica Humanitas</i><br/>On Safeguarding the Human Person<br/>in the Time of Artificial Intelligence<br/><br/>Babel and Nehemiah as governing images<br/>Partnership in the AI age"]
  classDef present fill:#f7d9a8,stroke:#a05a14,stroke-width:3px,color:#1a1a1a;
  class L14 present;
</div>

## VI. Jewish parallel: the eight rungs of *tzedakah*

The Jewish tradition reaches the same conclusion through independent reasoning. The path runs from a Pentateuchal command through Talmudic commercial jurisprudence to Maimonides's systematic ranking of the forms of *tzedakah*. The highest rung is *shutafut*, partnership: strengthening the hand of the one who has fallen so that he need not depend on others.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':30,'rankSpacing':35},'themeVariables':{'fontSize':'15px','fontFamily':'Georgia, serif'}}}%%
graph TD
    R1["<b>Rung 1 · 10:7 · HIGHEST</b><br/>Strengthen the hand of the poor<br/>by gift, loan, <b>partnership (שֻׁתָּפוּת)</b>, or work,<br/>so he need not beg"]
    R2["Rung 2 · 10:8<br/>Mutual anonymity"]
    R3["Rung 3 · 10:9<br/>Donor knows; recipient does not"]
    R4["Rung 4 · 10:10<br/>Recipient knows; donor does not"]
    R5["Rung 5 · 10:11<br/>Gives before asked"]
    R6["Rung 6 · 10:12<br/>Gives after asked"]
    R7["Rung 7 · 10:13<br/>Gives less than appropriate, pleasantly"]
    R8["Rung 8 · 10:14 · LOWEST<br/>Gives with sadness"]
    R1 ==> R2 --> R3 --> R4 --> R5 --> R6 --> R7 --> R8
    style R1 fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:3px
    style R2 fill:#c9a84c,color:#1a1a1a,stroke:#8B6914
    style R3 fill:#d4b96a,color:#1a1a1a,stroke:#8B6914
    style R4 fill:#ddc882,color:#1a1a1a,stroke:#8B6914
    style R5 fill:#e6d79a,color:#1a1a1a,stroke:#8B6914
    style R6 fill:#ede3b2,color:#1a1a1a,stroke:#8B6914
    style R7 fill:#f2ebca,color:#1a1a1a,stroke:#8B6914
    style R8 fill:#f8f4e0,color:#1a1a1a,stroke:#8B6914
</div>

<span class="diagram-caption">Maimonides, *Mishneh Torah*, Hilkhot Mattenot Aniyim 10:7 to 14. The eight rungs of *tzedakah*, ordered by merit. The highest rung is partnership.</span>

### The halakhic mechanism

The eight-rung doctrine is not abstract ethics. It is operationalized in Jewish commercial law through the *isqa* (עִסְקָא) structure developed in the Talmud and formalized in the medieval *heter isqa* contract. Capital is deployed half as loan and half as deposit-at-risk, which lets a return follow shared risk rather than fixed interest. The mechanism is the practical-law cousin of the highest rung.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':40,'rankSpacing':60},'themeVariables':{'fontSize':'16px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
    subgraph TORAH ["Torah"]
        direction TB
        LEV["Lev. 25:35 to 36<br/>וְהֶחֱזַקְתָּ בּוֹ<br/>You shall uphold him"]
        DEUT1["Deut. 15:7 to 8<br/>Open your hand, open it"]
        DEUT2["Deut. 16:20<br/>Justice, justice you shall pursue"]
    end
    subgraph TALMUD ["Talmud"]
        direction TB
        BM["Bava Metzia 5:4 / 68a to 70b<br/>The <i>isqa</i> structure"]
        BB["Bava Batra 9b to 10a<br/>Merit of giving"]
        KET["Ketubot 67b<br/>Restore to former state"]
    end
    RAMBAM["<b>Maimonides</b><br/>MT Mattenot Aniyim 10:7<br/><b>shutafut</b> as highest rung"]
    HETER["<b>Shtar isqa · Heter isqa</b><br/>The venture-partnership deed<br/>Investor and manager share<br/>profit AND risk"]
    LEV --> RAMBAM
    DEUT1 --> RAMBAM
    DEUT2 --> RAMBAM
    BB --> RAMBAM
    KET --> RAMBAM
    BM --> HETER
    RAMBAM ==> HETER
    style RAMBAM fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:3px
    style HETER fill:#4a2c2c,color:#f4e8e8,stroke:#6a4141,stroke-width:2px
    style LEV fill:#d4e8d4,color:#1a1a1a,stroke:#4a6741
    style DEUT1 fill:#d4e8d4,color:#1a1a1a,stroke:#4a6741
    style DEUT2 fill:#d4e8d4,color:#1a1a1a,stroke:#4a6741
    style BM fill:#d4d4e8,color:#1a1a1a,stroke:#41416a
    style BB fill:#d4d4e8,color:#1a1a1a,stroke:#41416a
    style KET fill:#d4d4e8,color:#1a1a1a,stroke:#41416a
</div>

## VII. The convergence

Both traditions arrive at the same conclusion. The route differs. The principle is one.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':80,'rankSpacing':100},'themeVariables':{'fontSize':'18px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  CATH["<b>Catholic route</b><br/>Roman law to Aquinas<br/>to Salamanca<br/>to the modern encyclicals<br/>to Leo XIV"]
  JEW["<b>Jewish route</b><br/>Torah to Talmud<br/>to Maimonides<br/>to the heter isqa tradition"]
  CONV(("<b>Societas meets Shutafut</b><br/><br/>Partnership at shared risk<br/>is the just form of capital,<br/>and the form in which<br/>justice toward the poor<br/>takes shape in<br/>commercial life"))
  CATH ==> CONV
  JEW ==> CONV
  classDef cath fill:#dfe7ef,stroke:#2a4a6a,stroke-width:2px,color:#1a1a1a;
  classDef jew fill:#e7e0ef,stroke:#5a3a8a,stroke-width:2px,color:#1a1a1a;
  classDef conv fill:#fff4c2,stroke:#000,stroke-width:4px,color:#1a1a1a;
  class CATH cath;
  class JEW jew;
  class CONV conv;
</div>

Each figure on the diagrams above will, in the next iteration of this page, expand into a break-out box on click, giving the precise doctrinal move, the textual locus, a verified quotation, and further reading. That work is in development.
