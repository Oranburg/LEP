---
layout: page
title: "Readings"
permalink: /readings/
---

# Readings

Primary sources and secondary scholarship grounding the program's intellectual identity.

{% for section in site.data.readings %}
## {{ section.section }}

{% for item in section.items %}
- {{ item.citation }}{% if item.note %}. {{ item.note }}{% endif %}
{% endfor %}

{% endfor %}

## Related library

Seth Oranburg's existing topic library on law and entrepreneurship: [oranburg.law/insights/library/law-entrepreneurship/](https://oranburg.law/insights/library/law-entrepreneurship/).
