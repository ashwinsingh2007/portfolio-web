---
title: "Engineering Success: The Importance of Having Strong, Informed Opinions"
description: "Why the best engineers aren't the most agreeable ones - and how developing strong technical opinions can accelerate your career and improve your team's output."
date: "2024-09-18"
author: "Ashwani Kumar"
tags: ["Engineering", "Career", "Leadership", "Technical Decision Making"]
---

# Engineering Success: The Importance of Having Strong, Informed Opinions

Early in my career, I made a mistake that many engineers make: I was too agreeable.

When the tech lead suggested a certain architecture, I nodded along. When a senior engineer proposed using a particular database, I went with it. I thought being collaborative meant going with the flow.

It took me years to realize that I was wrong. **The best engineers I've worked with have strong opinions - and they're not afraid to voice them.**

## The Myth of the Agreeable Engineer

There's a pervasive myth in engineering culture that good team players don't push back. That raising concerns is "being negative." That the senior person in the room probably knows best.

This myth is actively harmful.

Here's what I've observed over 8+ years:
- Teams where everyone agrees tend to make worse decisions
- "Strong opinions, weakly held" engineers ship better products
- Healthy debate leads to better architecture than consensus-seeking

## What "Strong Opinions" Actually Means

Let me be clear about what I'm **not** advocating:
- Being argumentative for the sake of it
- Dismissing others' ideas without consideration
- Refusing to change your mind when presented with new evidence

**Strong opinions** means:
- Having a clear point of view backed by reasoning
- Being willing to advocate for your position
- Being equally willing to update your view when you learn something new

The key phrase is "strongly held, weakly held." Strong enough to defend, flexible enough to change.

## Why Opinions Matter

### 1. Opinions Force Clarity

When you have to articulate a position, you're forced to think clearly about it. "I think we should use PostgreSQL because..." requires you to actually understand the tradeoffs.

Compare this to "Whatever the team decides is fine with me." The second approach requires no thinking at all.

### 2. Opinions Surface Assumptions

Every technical decision rests on assumptions. When you voice an opinion, you're surfacing those assumptions for debate.

> "I think we should use a microservices architecture because I assume we'll have 10x the traffic in two years."

Now the assumption is explicit. The team can debate whether it's valid. Without the opinion, the assumption stays hidden until it causes problems.

### 3. Opinions Build Trust

Counterintuitively, voicing disagreement builds more trust than always agreeing.

When you push back thoughtfully, your team knows:
- You're engaged and thinking critically
- When you do agree, it means something
- You'll speak up if you see problems

The engineer who always says "looks good to me" provides no signal. The one who sometimes says "I have concerns" provides valuable information.

## How to Form Strong Technical Opinions

### Study the Fundamentals

You can't have informed opinions without knowledge. Invest in understanding:
- **Distributed systems** - CAP theorem, consistency models, failure modes
- **Database internals** - Indexing, query planning, storage engines
- **System design** - Scalability patterns, tradeoffs, failure scenarios

The more you know, the better your opinions become.

### Learn from Failures (Especially Others')

Every post-mortem is a learning opportunity. Read about:
- Why that startup's database choice didn't scale
- How that company's microservices turned into a distributed monolith
- What went wrong with that migration

These stories inform your future opinions.

### Build Things

Theory only gets you so far. Build side projects. Experiment with different databases. Try that new framework. Hands-on experience gives you opinions that textbooks can't.

When I built Scrapebit, I developed strong opinions about queue-based architectures. When I built Sanchay, I formed views on local-first data processing. These opinions came from building, not reading.

## Voicing Opinions Effectively

Having opinions is one thing. Communicating them effectively is another.

### Lead with Reasoning

Bad: "We shouldn't use MongoDB."
Good: "I'm concerned about MongoDB for this use case because we have highly relational data with complex joins. PostgreSQL might be a better fit because..."

### Acknowledge Tradeoffs

Every technical decision has tradeoffs. Show that you understand them:

> "I'm advocating for a monolith to start with. I know this makes it harder to scale individual components independently, but I think the reduced operational complexity is worth it at our current stage."

### Separate Opinion from Ego

Your opinion is not your identity. Being wrong about a technical decision doesn't make you a bad engineer. When someone presents a compelling counterargument, update your view.

The goal is the best outcome, not being right.

### Pick Your Battles

You can't fight for everything. Save your strong advocacy for decisions that really matter:
- Architectural choices that are hard to reverse
- Technology decisions that will affect the team for years
- Patterns that could lead to serious problems at scale

For smaller decisions, let others lead.

## A Personal Example

When I joined Radius Agent, there was a proposal to build MEL AI as a collection of microservices from day one. I pushed back.

My opinion: "We should start with a monolith. We don't know our traffic patterns yet, and microservices will slow us down during the exploration phase. Let's prove the concept first, then extract services as needed."

This wasn't a popular opinion initially. But I backed it with reasoning and was open to being convinced otherwise.

We went with the monolith. We shipped faster. We learned what users actually needed. When we eventually did extract services, we knew exactly where the boundaries should be.

The 150% DAU increase wasn't because of the architecture choice - but the architecture choice allowed us to move fast enough to iterate on what users actually wanted.

## The Courage to Disagree

Here's the hard truth: voicing opinions requires courage. You might be wrong. You might face pushback. You might be the only dissenting voice in the room.

But I've never regretted speaking up. I have regretted staying silent.

The engineers who drive the biggest impact are the ones who:
- Think independently
- Voice their reasoning
- Listen to counterarguments
- Update their views based on evidence

Be that engineer.

---

*What technical opinions do you hold strongly? I'd love to discuss. Find me on [LinkedIn](https://www.linkedin.com/in/ashwani-kumar-97465186/) or [Twitter](https://twitter.com/ashwinsingh2007).*
