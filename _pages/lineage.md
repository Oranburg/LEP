---
layout: page
title: "The Moral Anatomy of Enterprise"
subtitle: "Two Traditions on the Just Form of Capital"
permalink: /lineage/
mermaid: true
---

# The Moral Anatomy of Enterprise

Enterprise has parts. Capital is gathered. Labor is given. Risk is taken. Return is shared or it is not. Partnership is formed or refused. The poor are drawn in or pushed aside. These are not separable problems. They are the joints of one body, and the moral question about any commercial form turns on how the joints are arranged.

Two traditions worked through that anatomy in detail and arrived at the same conclusion through independent reasoning. The Catholic tradition runs from Roman commercial law through Aquinas and the Salamanca school to the modern social encyclicals and the present restatement under Leo XIV. The Jewish tradition runs from the Pentateuch through Talmudic commercial jurisprudence to Maimonides and the *heter isqa*. Both end at the same claim: partnership at shared risk is the just form of capital deployment, and the form in which justice toward the poor takes shape in commercial life.

This page works through the anatomy layer by layer. Sections I through V trace the Catholic articulation. Section VI sets out the Jewish parallel and its halakhic mechanism. Section VII names the convergence. Section VIII reads several modern instruments, the venture-capital partnership, the employee stock ownership plan, the tokenized venture, and the AI-platform equity question, through the joined anatomy the two traditions supply.

<p class="lineage-hint">Click any named figure on the diagrams below to open a break-out box with the doctrinal move, the textual locus, a verified quotation, and further reading.</p>

## I. Roman foundation

The doctrine begins in Roman commercial law. The juristic literature on the *exercitor navis*, the commercial operator of a ship, sets up the structure on which Aquinas later builds. The investor and the operator are both liable in proportion to their stake in the venture. Risk is shared. Return follows risk.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':50,'rankSpacing':60},'themeVariables':{'fontSize':'17px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  R1["Digest 14.1 (Ulpian)<br/><i>exercitor navis</i><br/>shared maritime venture<br/><br/><b>The move:</b> liability tracks the stake.<br/>Risk is shared in proportion to capital."]
  classDef foundation fill:#f4e9d8,stroke:#8a6a2a,stroke-width:2px,color:#1a1a1a,padding:10px;
  class R1 foundation;
  click R1 call openFig("ulpian")
</div>

## II. Thomistic distinction

Aquinas takes the Roman structure and turns it into a doctrinal distinction that the tradition then elaborates for seven centuries. Capital deployed into a partnership at shared risk earns a return justly, because the investor remains a co-owner who shares the loss. The same capital extended as a loan at fixed interest is usury, because the lender keeps the capital safe and demands a return as well.

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
  click T1 call openFig("aquinas")
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
  click S1 call openFig("vitoria")
  click S2 call openFig("soto")
  click S3 call openFig("mercado")
  click S4 call openFig("molina")
  click S5 call openFig("azpilcueta")
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
  click E1 call openFig("leo-xiii-rerum-novarum")
  click E2 call openFig("pius-xi-quadragesimo-anno")
  click E3 call openFig("john-paul-ii-laborem-exercens")
  click E4 call openFig("john-paul-ii-centesimus-annus")
  click E5 call openFig("benedict-xvi-caritas-in-veritate")
  click E6 call openFig("francis-laudato-si")
  click E7 call openFig("francis-fratelli-tutti")
</div>

## V. The present restatement

Pope Leo XIV restated the social doctrine for the AI age in *Magnifica Humanitas* on 15 May 2026. The encyclical takes Babel and Nehemia as its governing biblical images, and treats data colonialism and the new forms of dependence as the present-day analogues to the conditions Leo XIII addressed in 1891.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':50,'rankSpacing':60},'themeVariables':{'fontSize':'17px','fontFamily':'Georgia, serif'}}}%%
flowchart LR
  L14["<b>Leo XIV</b> · 15 May 2026<br/><i>Magnifica Humanitas</i><br/>On Safeguarding the Human Person<br/>in the Time of Artificial Intelligence<br/><br/>Babel and Nehemia as governing images<br/>Partnership in the AI age"]
  classDef present fill:#f7d9a8,stroke:#a05a14,stroke-width:3px,color:#1a1a1a;
  class L14 present;
  click L14 call openFig("leo-xiv-magnifica-humanitas")
</div>

## VI. Jewish parallel: the eight rungs of *tzedakah*

The Jewish tradition reaches the same conclusion through independent reasoning. The path runs from a Pentateuchal command through Talmudic commercial jurisprudence to Maimonides's systematic ranking of the forms of *tzedakah*. The highest rung is *shutafut*, partnership: strengthening the hand of the one who has fallen so that he need not depend on others.

<div class="mermaid" markdown="0">
%%{init: {'theme':'neutral','flowchart':{'curve':'basis','nodeSpacing':30,'rankSpacing':35},'themeVariables':{'fontSize':'15px','fontFamily':'Georgia, serif'}}}%%
graph TD
    RUNG1["<b>Rung 1 · 10:7 · HIGHEST</b><br/>Strengthen the hand of the poor<br/>by gift, loan, <b>partnership (שֻׁתָּפוּת)</b>, or work,<br/>so he need not beg"]
    RUNG2["Rung 2 · 10:8<br/>Mutual anonymity"]
    RUNG3["Rung 3 · 10:9<br/>Donor knows; recipient does not"]
    RUNG4["Rung 4 · 10:10<br/>Recipient knows; donor does not"]
    RUNG5["Rung 5 · 10:11<br/>Gives before asked"]
    RUNG6["Rung 6 · 10:12<br/>Gives after asked"]
    RUNG7["Rung 7 · 10:13<br/>Gives less than appropriate, pleasantly"]
    RUNG8["Rung 8 · 10:14 · LOWEST<br/>Gives with sadness"]
    RUNG1 ==> RUNG2 --> RUNG3 --> RUNG4 --> RUNG5 --> RUNG6 --> RUNG7 --> RUNG8
    style RUNG1 fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:3px
    style RUNG2 fill:#c9a84c,color:#1a1a1a,stroke:#8B6914
    style RUNG3 fill:#d4b96a,color:#1a1a1a,stroke:#8B6914
    style RUNG4 fill:#ddc882,color:#1a1a1a,stroke:#8B6914
    style RUNG5 fill:#e6d79a,color:#1a1a1a,stroke:#8B6914
    style RUNG6 fill:#ede3b2,color:#1a1a1a,stroke:#8B6914
    style RUNG7 fill:#f2ebca,color:#1a1a1a,stroke:#8B6914
    style RUNG8 fill:#f8f4e0,color:#1a1a1a,stroke:#8B6914
    click RUNG1 call openFig("maimonides-mattenot-aniyim-10-7-14")
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
    click LEV call openFig("leviticus-25-35-36")
    click DEUT1 call openFig("deuteronomy-15-7-8")
    click DEUT2 call openFig("deuteronomy-16-20")
    click BM call openFig("bava-metzia-5-4-68a-70b")
    click BB call openFig("bava-batra-9b-10a")
    click KET call openFig("ketubot-67b")
    click RAMBAM call openFig("maimonides-mattenot-aniyim-10-7-14")
    click HETER call openFig("heter-isqa-tradition")
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

## VIII. The anatomy applied: reading modern instruments

{% include figure.html name="callout-societas-shutafut" alt="Two converging nodes labeled societas (Catholic) and shutafut (Jewish), both flowing into a single convergence node labeled Partnership at shared risk." caption="The principle the two traditions arrive at independently. The clause-by-clause application to modern instruments is the work of the companion essay [Partnership at Shared Risk](/LEP/partnership-at-shared-risk/)." %}

The two traditions converge on a principle, but the principle has work to do. Modern commercial life is conducted through instruments that were not anticipated by Ulpian or Maimonides, and the anatomy must be applied to each. Four examples mark the present field.

### Venture capital and the modern *societas*

The venture-capital partnership is the closest thing modern law has produced to the Thomistic *societas*. The general partner deploys management; the limited partners deploy capital; both share in the upside, and both, in the event of failure, share in the loss. The structure is not pure: management fees and the asymmetric "carry" complicate the risk-sharing. But the form recognizes that a venture whose outcome is genuinely uncertain cannot be financed justly by debt alone. Where the outcome is unknown, equity at risk is the morally appropriate instrument; the loan demanding a fixed return regardless of outcome is the form Aquinas named usurious. The contemporary debate over founder-friendly versus investor-protective terms is, in the older vocabulary, a debate over how the risk is shared. Both traditions tell us the risk must be shared, not transferred.

### Employee ownership and the priority of labor

The employee stock ownership plan, the cooperative, and the partnership profit-sharing arrangement are modern instruments through which labor receives a stake in the venture it constitutes. John Paul II named the principle directly in *Laborem Exercens*: labor has priority over capital because labor is the human person at work. The ESOP is the institutional form that takes the principle seriously enough to assign ownership, not merely wages, to the worker. The Jewish tradition reaches the same conclusion through Maimonides's *shutafut*: the highest form of giving is partnership with the one who has fallen, because partnership does not create dependence but the conditions for the partner to stand on his own again. Where labor is treated as a partner, the doctrine recognizes the arrangement as just. Where labor is treated only as an input, the arrangement falls outside the tradition's range.

### Tokenized ventures and the shared-risk question, reopened in code

The decentralized autonomous organization and the tokenized partnership are recent inventions that ask the shared-risk question in new form. A DAO that distributes governance tokens proportional to capital contribution can replicate the *societas* in code, provided the loss as well as the upside is genuinely shared. A token sale that promises a return without genuine partnership in the venture's risk is *mutuum* in new clothing, regardless of the legal label affixed to it. The contemporary regulatory debate over which token offerings are securities is, in the older vocabulary, a debate over which forms genuinely share risk and which only appear to. The question is doctrinally familiar even where the instrument is novel.

### AI-platform equity and the Babel question

Leo XIV's *Magnifica Humanitas* takes Babel and Nehemia as governing biblical images for the AI age. Babel is the platform whose capital is gathered, whose labor is given, whose data is harvested, and whose returns flow upward to a tower that the contributors do not own. Nehemia is the contrasting image: rebuilding the wall of Jerusalem by assigning each family the section adjacent to its own house. The Nehemian arrangement is partnership at shared risk in built form. The Babel arrangement is its opposite. The platform-economy question, who shares in the upside of the compute, the data, and the labor that compose a modern AI venture, is not a new question. It is the oldest question in the tradition, asked of the newest instrument.

### The work the anatomy supplies

These four examples are not a complete inventory. They are the instruments the Program will treat first because they are the instruments the present generation of entrepreneurial lawyers will be asked to draft, advise on, and reason about. The anatomy supplies the questions. The two traditions supply the answers in independent and convergent form. The work is to read the instrument through the anatomy and to draft the instrument so the anatomy holds.

{% include figure-modals.html %}
