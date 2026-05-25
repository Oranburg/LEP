---
layout: page
title: "Collaborators"
permalink: /collaborators/
---

# Collaborators

This page lists scholars and practitioners who have publicly engaged with the program's intellectual work. Listing here requires public commitment. Conversations under way but not yet public are not recorded here.

{% for collaborator in site.data.collaborators %}
## {{ collaborator.name }}

*{{ collaborator.affiliation }}*

{{ collaborator.note }}

{% endfor %}
