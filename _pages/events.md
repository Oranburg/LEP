---
layout: page
title: "Events"
permalink: /events/
---

# Events

The inaugural year-theme will run a sequence of public events at CUA Law. Speaker lineup is being developed. Details are added here only when confirmed publicly.

{% for event in site.data.events %}
## {{ event.title }}

**When**: {{ event.when }}

**Speakers**: {{ event.speakers }}

{{ event.description }}

{% endfor %}
