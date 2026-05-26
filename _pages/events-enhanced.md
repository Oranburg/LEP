---
layout: page
title: "Events"
permalink: /events/
description: "Law and Entrepreneurship Program events, seminars, and public forums."
---

# LEP Events

The LEP hosts a range of events—from intimate seminars to public forums—all organized around the year's central question: *Entrepreneurship v. Poverty*.

## Upcoming Events

{% assign upcoming = site.data.events | where_exp: "item", "item.status == 'upcoming'" | sort: "date" %}

{% if upcoming.size > 0 %}
<div class="event-cards">
  {% for event in upcoming %}
  <div class="event-card">
    <div class="event-date">{{ event.date | date: "%b %d, %Y" }}</div>
    <h3 class="event-title">{{ event.title }}</h3>
    
    <div class="event-meta">
      {% if event.location %}<span>{{ event.location }}</span>{% endif %}
      {% if event.time %}<span>{{ event.time }}</span>{% endif %}
      {% if event.capacity %}<span>Limited to {{ event.capacity }} participants</span>{% endif %}
    </div>

    {% if event.description %}<p class="event-description">{{ event.description }}</p>{% endif %}

    <div class="event-footer">
      {% include status-badge.html status="available" %}
      {% if event.registration_url %}
        <a href="{{ event.registration_url }}" class="btn btn--primary btn--sm">Register</a>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<div class="callout callout--info">
  <p>No upcoming events scheduled at this time. Check back soon!</p>
</div>
{% endif %}

---

## Past Events

{% assign past = site.data.events | where_exp: "item", "item.status == 'past'" | reverse %}

{% if past.size > 0 %}
<h3>Archives</h3>

<div class="past-events-list">
  {% for event in past %}
  <article class="past-event">
    <h4>{{ event.title }}</h4>
    <p class="event-meta">{{ event.date | date: "%B %d, %Y" }}</p>
    {% if event.recap_url %}
      <a href="{{ event.recap_url }}">Event Recap →</a>
    {% endif %}
  </article>
  {% endfor %}
</div>
{% endif %}

---

## Event Series

### Public Forums

Monthly events open to the public. These forums bring together practitioners, academics, and policymakers to debate the year's central question from multiple angles.

**Location:** Catholic University of America Columbus School of Law  
**Time:** Second Thursday of each month, 5:30-7:00 PM  
**Cost:** Free (limited seating)

### Practitioner Seminars

Intimate seminars for program participants and invited practitioners. These deep-dive into specific business models and case studies through the lens of *societas* and *shutafut*.

**Frequency:** Bi-weekly  
**Participants:** LEP students, alumni, mentors

### Working Group Meetings

Smaller working groups focused on specific topics:
- Partnership law and structures
- Talmudic approaches to labor
- Modern social enterprise models
- AI and algorithmic justice

---

## Propose an Event

Have an idea for an event? We welcome proposals from collaborators, practitioners, and community partners.

{% include callout.html type="info" title="Interested?" text="Email Seth Oranburg at seth.oranburg@gmail.com with your event proposal, including the topic, format, target audience, and proposed date." %}
