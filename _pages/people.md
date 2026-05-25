---
layout: page
title: "People"
permalink: /people/
---

# People

The program's co-directors. Bios forthcoming; will be drawn from `program-people.md` and condensed for public reading.

{% for person in site.data.people %}
## {{ person.name }}

*{{ person.role }}*

{{ person.bio }}

{% endfor %}
