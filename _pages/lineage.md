---
layout: page
title: "Doctrinal Lineage"
permalink: /lineage/
mermaid: true
---

# Doctrinal Lineage

The program's intellectual identity rests on two traditions that arrive at the same conclusion through independent reasoning. The Catholic tradition runs from Roman commercial law and Aquinas through the Salamanca school to the modern social encyclicals. The Jewish tradition runs from Leviticus through the Talmudic *isqa* device to Maimonides on the eight rungs of *tzedakah*. Both end at the same place: partnership at shared risk is the just form of capital deployment, and the form in which justice toward the poor takes shape in commercial life.

## Catholic lineage

<div class="mermaid" markdown="0">
flowchart LR
  subgraph ROM["Roman foundation"]
    direction TB
    R1["Digest 14.1 (Ulpian)<br/><i>exercitor navis</i><br/>shared maritime venture"]
  end
  subgraph THO["Thomistic distinction"]
    direction TB
    T1["Aquinas, ST II-II q. 78 a. 2 ad 5<br/><b>societas</b> at shared risk: just<br/><b>mutuum</b> at fixed interest: usury"]
  end
  subgraph SAL["Salamanca: commercial moral theology"]
    direction TB
    S1["Vitoria<br/>just price as common estimation"]
    S2["Domingo de Soto<br/><i>De Iustitia et Iure</i> (1553)<br/>restitution, contracts"]
    S3["Tomás de Mercado<br/><i>Suma de Tratos y Contratos</i> (1571)<br/>merchant conscience, exchange"]
    S4["Luis de Molina<br/><i>De Iustitia et Iure</i> (1593 to 1609)<br/>partnership returns, contractual freedom"]
    S5["Martín de Azpilcueta<br/>quantity theory of money"]
  end
  subgraph ENC["Modern encyclical restatement"]
    direction TB
    E1["Leo XIII (1891)<br/><i>Rerum Novarum</i><br/>labor, property, association"]
    E2["Pius XI (1931)<br/><i>Quadragesimo Anno</i><br/>subsidiarity, social order"]
    E3["John Paul II (1981)<br/><i>Laborem Exercens</i><br/>priority of labor, co-ownership"]
    E4["John Paul II (1991)<br/><i>Centesimus Annus</i><br/>creative subjectivity, enterprise"]
    E5["Benedict XVI (2009)<br/><i>Caritas in Veritate</i><br/>gratuitousness in economic life"]
    E6["Francis (2015)<br/><i>Laudato Si</i><br/>integral ecology"]
    E7["Francis (2020)<br/><i>Fratelli Tutti</i><br/>social friendship"]
  end
  L14["Leo XIV (15 May 2026)<br/><i>Magnifica Humanitas</i><br/>partnership in the AI age"]
  subgraph JEW["Jewish parallel route"]
    direction TB
    J1["Leviticus 25:35 to 36<br/>so that he may live with you"]
    J2["Talmud, Bava Metzia and Bava Batra<br/>partnership law, <i>isqa</i>"]
    J3["Maimonides, MT Mattenot Aniyim 10:7 to 14<br/>eight rungs of <i>tzedakah</i><br/>highest rung: <b>shutafut</b>"]
  end
  CONV(("<b>Societas meets Shutafut</b><br/>partnership at shared risk<br/>as the just form of capital"))
  R1 ==> T1
  T1 ==> SAL
  SAL ==> E1
  E1 --> E2 --> E3 --> E4 --> E5 --> E6 --> E7
  E7 ==> L14
  L14 ==> CONV
  J1 --> J2 --> J3
  J3 ==> CONV
  classDef foundation fill:#f4e9d8,stroke:#8a6a2a,stroke-width:2px,color:#1a1a1a;
  classDef scholastic fill:#e6dcc6,stroke:#6a5a2a,stroke-width:1px,color:#1a1a1a;
  classDef encyclical fill:#dfe7ef,stroke:#2a4a6a,stroke-width:1px,color:#1a1a1a;
  classDef present    fill:#f7d9a8,stroke:#a05a14,stroke-width:3px,color:#1a1a1a;
  classDef jewish     fill:#e7e0ef,stroke:#5a3a8a,stroke-width:1px,color:#1a1a1a;
  classDef converge   fill:#fff4c2,stroke:#000,stroke-width:3px,color:#1a1a1a;
  class R1,T1 foundation;
  class S1,S2,S3,S4,S5 scholastic;
  class E1,E2,E3,E4,E5,E6,E7 encyclical;
  class L14 present;
  class J1,J2,J3 jewish;
  class CONV converge;
</div>

The diagram reads left to right as a tradition unfolding. Four lanes name the kind of contribution each layer made: Roman commercial-law source, Thomistic distinction between *societas* and *mutuum*, Salamanca development into a full commercial moral theology, and the modern encyclical restatement. Leo XIV sits outside the encyclical lane as the living terminus. The convergence node on the right collects both spines: the Catholic route arrives through Aquinas, Salamanca, and the encyclicals; the Jewish route arrives through Leviticus, Talmud, and Maimonides; both end at partnership at shared risk as the just form of capital.

## Jewish lineage: partnership as the highest form of justice

The Jewish tradition reaches the same conclusion through independent reasoning. The path runs from a Pentateuchal command through Talmudic commercial jurisprudence to Maimonides's systematic ranking of the forms of *tzedakah* (צְדָקָה). The highest rung is *shutafut* (שֻׁתָּפוּת), partnership: strengthening the hand of the one who has fallen so that he need not depend on others.

### The eight rungs: *shemoneh maʿalot ba-tzedakah*

<div class="mermaid" markdown="0">
graph TD
    TITLE["<b>שְׁמוֹנֶה מַעֲלוֹת בַּצְּדָקָה</b><br/><i>Shemoneh Ma'alot ba-Tzedakah</i><br/>The Eight Rungs of Tzedakah<br/>Mishneh Torah, Hilkhot Mattenot Aniyim 10:7 to 14"]
    R1["<b>Rung 1 (10:7) HIGHEST</b><br/>מַחֲזִיק בְּיַד יִשְׂרָאֵל שֶׁמָּךְ<br/>Strengthen the hand of the poor Israelite<br/>by gift, loan, <b>partnership (שֻׁתָּפוּת)</b>, or work,<br/>so he need not beg<br/>Source verse: Lev. 25:35"]
    R2["Rung 2 (10:8)<br/>Mutual anonymity"]
    R3["Rung 3 (10:9)<br/>Donor knows; recipient does not"]
    R4["Rung 4 (10:10)<br/>Recipient knows; donor does not"]
    R5["Rung 5 (10:11)<br/>Gives before asked"]
    R6["Rung 6 (10:12)<br/>Gives after asked"]
    R7["Rung 7 (10:13)<br/>Gives less than appropriate, pleasantly"]
    R8["Rung 8 (10:14) LOWEST<br/>Gives with sadness"]
    TITLE --> R1
    R1 --> R2 --> R3 --> R4 --> R5 --> R6 --> R7 --> R8
    style TITLE fill:#2c1810,color:#f8f4ee,stroke:#8B6914,stroke-width:2px
    style R1 fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:3px
    style R2 fill:#c9a84c,color:#1a1a1a,stroke:#8B6914
    style R3 fill:#d4b96a,color:#1a1a1a,stroke:#8B6914
    style R4 fill:#ddc882,color:#1a1a1a,stroke:#8B6914
    style R5 fill:#e6d79a,color:#1a1a1a,stroke:#8B6914
    style R6 fill:#ede3b2,color:#1a1a1a,stroke:#8B6914
    style R7 fill:#f2ebca,color:#1a1a1a,stroke:#8B6914
    style R8 fill:#f8f4e0,color:#1a1a1a,stroke:#8B6914
</div>

### The halakhic mechanism and the convergence with *societas*

<div class="mermaid" markdown="0">
graph LR
    subgraph TORAH ["Torah: the obligation"]
        direction TB
        LEV["Lev. 25:35 to 36<br/>וְהֶחֱזַקְתָּ בּוֹ<br/><i>ve-heḥezakta vo</i><br/>You shall uphold him"]
        DEUT1["Deut. 15:7 to 8<br/>פָּתֹחַ תִּפְתַּח אֶת יָדְךָ<br/><i>patoaḥ tiftaḥ et yadkha</i><br/>Open your hand, open it"]
        DEUT2["Deut. 16:20<br/>צֶדֶק צֶדֶק תִּרְדֹּף<br/><i>Tsedek tsedek tirdof</i><br/>Justice, justice you shall pursue"]
    end
    subgraph TALMUD ["Talmud: commercial development"]
        direction TB
        BM["Bava Metzia 5:4 / 68a to 70b<br/>The <i>isqa</i> (עִסְקָא) structure:<br/>half capital as loan,<br/>half as deposit at shared risk"]
        BB["Bava Batra 9b to 10a<br/>On the merit of different forms of giving"]
        KET["Ketubot 67b<br/>Restore him to his former state"]
    end
    subgraph RAMBAM ["Maimonides: systematization"]
        direction TB
        RUNG1["MT Mattenot Aniyim 10:7<br/><b>Rung 1, highest</b><br/>שֻׁתָּפוּת, <i>shutafut</i>, partnership<br/>as the supreme form of tzedakah"]
    end
    subgraph ISQA ["Commercial application"]
        direction TB
        HETER["שְׁטַר עִסְקָא · הֶיתֵּר עִסְקָא<br/><i>Shtar isqa · Heter isqa</i><br/>The venture-partnership deed<br/>Investor and manager share<br/>profit AND risk"]
    end
    subgraph CONVERGENCE ["Independent convergence"]
        direction TB
        AQ["Thomas Aquinas, ST II-II q. 78<br/><i>Societas</i>: partnership at shared risk<br/>is the just form of capital"]
    end
    LEV --> RUNG1
    DEUT1 --> RUNG1
    DEUT2 --> RUNG1
    BM --> HETER
    BB --> RUNG1
    KET --> RUNG1
    RUNG1 --> HETER
    HETER -->|"same principle, different root"| AQ
    style TORAH fill:#1a2e1a,color:#e8f4e8,stroke:#4a6741,stroke-width:2px
    style TALMUD fill:#1a1a2e,color:#e8e8f4,stroke:#41416a,stroke-width:2px
    style RAMBAM fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:3px
    style ISQA fill:#2e1a1a,color:#f4e8e8,stroke:#6a4141,stroke-width:2px
    style CONVERGENCE fill:#1e1e2e,color:#e8e8f8,stroke:#4141aa,stroke-width:2px
    style LEV fill:#2c4a2c,color:#e8f4e8,stroke:#4a6741
    style DEUT1 fill:#2c4a2c,color:#e8f4e8,stroke:#4a6741
    style DEUT2 fill:#2c4a2c,color:#e8f4e8,stroke:#4a6741
    style BM fill:#2c2c4a,color:#e8e8f4,stroke:#41416a
    style BB fill:#2c2c4a,color:#e8e8f4,stroke:#41416a
    style KET fill:#2c2c4a,color:#e8e8f4,stroke:#41416a
    style RUNG1 fill:#8B6914,color:#ffffff,stroke:#5a4309,stroke-width:2px
    style HETER fill:#4a2c2c,color:#f4e8e8,stroke:#6a4141
    style AQ fill:#2c2c5a,color:#e8e8ff,stroke:#4141aa
</div>

The *shtar isqa* is the practical-law cousin of the highest rung: it lets Jewish commercial law treat capital deployment as partnership rather than as interest-bearing debt. The arrow at the right of the mechanism diagram marks the place where this halakhic conclusion meets Aquinas's *societas* doctrine from the opposite direction. Same principle, different root.
