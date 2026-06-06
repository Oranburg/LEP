---
layout: page
title: "Proposal: Doctrinal Lineage Visual"
permalink: /proposals/catholic-lineage/
---

# Proposal: Doctrinal Lineage Visual

This proposal replaces the flat top-down chronology on `/lineage/` with a left-to-right convergence diagram that shows what each generation *added* and where the Catholic and Jewish traditions meet.

## The proposed block

<div class="mermaid">
flowchart LR

  %% ============ ROMAN FOUNDATION ============
  subgraph ROM["Roman foundation"]
    direction TB
    R1["Digest 14.1, Ulpian<br/><i>exercitor navis</i><br/>shared maritime venture"]
  end

  %% ============ THOMISTIC FOUNDATION ============
  subgraph THO["Thomistic foundation: the distinction"]
    direction TB
    T1["Aquinas, ST II-II q. 78<br/>a. 2 ad 5<br/><b>societas</b> at shared risk: just<br/><b>mutuum</b> at fixed interest: usury"]
  end

  %% ============ SALAMANCA DEVELOPMENT ============
  subgraph SAL["Salamanca: from distinction to commercial moral theology"]
    direction TB
    S1["Vitoria<br/>just price as common estimation"]
    S2["Domingo de Soto<br/><i>De Iustitia et Iure</i>, 1553<br/>restitution, contracts"]
    S3["Tomás de Mercado<br/><i>Suma de Tratos y Contratos</i>, 1571<br/>merchant conscience, exchange"]
    S4["Luis de Molina<br/><i>De Iustitia et Iure</i>, 1593 to 1609<br/>partnership returns, contractual freedom"]
    S5["Martín de Azpilcueta<br/>quantity theory of money<br/>time value [verify: attribution scope]"]
  end

  %% ============ MODERN ENCYCLICAL RESTATEMENT ============
  subgraph ENC["Modern restatement: the social encyclicals"]
    direction TB
    E1["Leo XIII, 1891<br/><i>Rerum Novarum</i><br/>labor, property, association"]
    E2["Pius XI, 1931<br/><i>Quadragesimo Anno</i><br/>subsidiarity, social order"]
    E3["John Paul II, 1981<br/><i>Laborem Exercens</i><br/>priority of labor, co-ownership"]
    E4["John Paul II, 1991<br/><i>Centesimus Annus</i><br/>creative subjectivity, enterprise"]
    E5["Benedict XVI, 2009<br/><i>Caritas in Veritate</i><br/>gratuitousness in economic life"]
    E6["Francis, 2015<br/><i>Laudato Si</i><br/>integral ecology"]
    E7["Francis, 2020<br/><i>Fratelli Tutti</i><br/>social friendship"]
  end

  %% ============ PRESENT RESTATEMENT ============
  L14["Leo XIV, 15 May 2026<br/><i>Magnifica Humanitas</i><br/>partnership in the AI age"]

  %% ============ JEWISH PARALLEL ============
  subgraph JEW["Jewish parallel route"]
    direction TB
    J1["Leviticus 25:35 to 36<br/>so that he may live with you"]
    J2["Talmud, Bava Metzia and Bava Batra<br/>partnership law, <i>iska</i>"]
    J3["Maimonides, MT Mattenot Aniyim 10:7 to 14<br/>eight rungs of <i>tzedakah</i><br/>highest rung: <b>shutafut</b>"]
  end

  %% ============ CONVERGENCE ============
  CONV(("Convergence:<br/>partnership at shared risk<br/>as the just form of capital"))

  %% main Catholic trunk
  R1 ==> T1
  T1 ==> SAL
  SAL ==> E1
  E1 --> E2 --> E3 --> E4 --> E5 --> E6 --> E7
  E7 ==> L14
  L14 ==> CONV

  %% Jewish trunk
  J1 --> J2 --> J3
  J3 ==> CONV

  %% styling
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

## Design rationale

**Reading direction.** Left to right reads as a tradition unfolding in time, not as a hierarchy descending. A reader scans from the Roman and Thomistic origins on the left, through the scholastic and modern restatements, to the present-day restatement and the convergence node on the right.

**Lanes by kind of contribution.** Four subgraphs separate the doctrinal *moves*: Roman commercial-law source, Thomistic distinction (societas versus mutuum), Salamanca commercial moral theology, modern encyclical restatement. Each lane carries a heading that names what that layer added, so the reader sees development, not just chronology. Leo XIV sits outside the encyclical lane as the present restatement, with a heavier border to mark him as the living terminus.

**The convergence node.** A target shape on the right collects both routes. The Catholic route arrives through Aquinas, Salamanca, and the encyclicals. The Jewish route arrives through Leviticus, Talmud, and Maimonides on shutafut. The convergence node states the shared conclusion in one line: partnership at shared risk as the just form of capital. This is the visual answer to the brief's requirement that the two traditions reach the same point through different routes.

**Edges.** Thick edges (`==>`) mark the trunk line of each tradition. Thin edges chain the encyclicals inside their lane. The two thick edges into the convergence node carry the visual weight of the meeting.

**Theme compatibility.** Fill and stroke colors are explicit, mid-saturation, and paired with dark text, so the diagram reads on both the #000 dark-mode and #fff light-mode backgrounds under mermaid `neutral`. No reliance on default theme colors.

## Doctrinal notes and verifications

Verified against the brief and a Salamanca-school accuracy check:

- Aquinas, ST II-II q. 78 a. 2 ad 5 on societas versus mutuum: stated as in the brief.
- Digest 14.1, Ulpian, exercitor navis: stated as in the brief.
- Salamanca figures and works: de Soto *De Iustitia et Iure* 1553, Mercado *Suma de Tratos y Contratos* 1571, Molina *De Iustitia et Iure* 1593 to 1609, all attested.
- Azpilcueta on quantity theory of money is well attested. The specific phrase "time value" is a modern gloss; I have marked the node `[verify: attribution scope]` so Seth can decide whether to keep the modern phrasing or recast in period language.
- Maimonides MT Mattenot Aniyim 10:7 to 14 on the eight rungs, with shutafut as the highest: stated as in the brief.

## Open questions for Seth

1. Keep Saint Benedict on the canvas, or treat the *ora et labora* tradition as a preface in prose rather than a node. The current proposal omits Benedict from the diagram to keep the doctrinal lineage tight; the data file still carries him.

2. Treat *Laudato Si* and *Fratelli Tutti* as on-lineage encyclicals, or peel them off as a thematic side-branch (ecology and social friendship rather than partnership economics). The current proposal keeps them on the main line.

3. Confirm the wording of the convergence node. Alternatives: "partnership at shared risk as the just form of capital," "shared-risk partnership as the highest form of justice in exchange," or a bilingual gloss naming both *societas* and *shutafut*.

4. Confirm whether *Magnifica Humanitas* should be rendered with the date "15 May 2026" inside the node or elsewhere on the page.
