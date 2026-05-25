---
layout: page
title: "News"
permalink: /news/
---

# News

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

*{{ post.date | date: "%B %-d, %Y" }}*

{{ post.excerpt }}

{% endfor %}

## Feed

This page is also available as an [RSS feed](/LEP/feed.xml).
