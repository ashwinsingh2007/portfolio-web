---
title: "Building Sanchay: Why I Created an Open-Source AI Finance Co-Pilot"
description: "The story behind Sanchay - from a personal frustration with tracking expenses to building an AI-powered finance assistant that actually understands your spending patterns."
date: "2024-12-15"
author: "Ashwani Kumar"
tags: ["AI", "Open Source", "Finance", "Side Project"]
---

# Building Sanchay: Why I Created an Open-Source AI Finance Co-Pilot

Every side project has a story. For Sanchay, it started with a simple frustration that I'm sure many of you have experienced.

## The Problem That Wouldn't Go Away

It was a Saturday morning, and I was staring at my bank statement trying to figure out where my money went last month. Sound familiar?

I had tried everything - spreadsheets that I'd abandon after two weeks, budgeting apps that wanted me to manually categorize every transaction, and fancy fintech apps that promised automation but never quite got my spending patterns right.

**The problem wasn't tracking expenses. The problem was understanding them.**

When I looked at "UPI-SWIGGY-123456789", I knew it was food delivery. But my apps? They'd categorize it under "Others" or worse, ask me to manually tag it every single time.

## The "Aha" Moment

I was working on MEL AI at Radius Agent at the time, building NLP systems to parse messy real estate contracts. One day, while debugging a particularly tricky contract parsing issue, it hit me:

> If AI can understand legal jargon in contracts, why can't it understand my UPI transactions?

That evening, I opened my laptop and started sketching out what would become Sanchay.

## Why "Sanchay"?

Sanchay (संचय) is a Sanskrit word meaning "accumulation" or "collection" - but in the context of finance, it represents the idea of thoughtful saving and wealth building. It felt right for a tool that's all about understanding and optimizing your financial habits.

## The Technical Journey

### Phase 1: Making Sense of Chaos

Indian bank statements are messy. Really messy. You have:
- UPI transaction IDs that look like random strings
- Merchant names that are truncated or abbreviated
- Different formats from different banks
- Mix of English and transliterated text

My first challenge was building a parser that could handle all this chaos. I used a combination of:
- **Pattern matching** for common transaction formats
- **NLP-based entity extraction** for merchant names
- **Fuzzy matching** to group similar transactions

### Phase 2: The Intelligence Layer

Parsing was just the beginning. The real magic needed to happen in understanding *what* these transactions meant for the user.

I integrated OpenAI's API to build what I call the "Financial Intelligence Layer":

```typescript
const analyzeSpending = async (transactions: Transaction[]) => {
  // Group by category, time period, and patterns
  const patterns = detectSpendingPatterns(transactions);

  // Use LLM to generate human-readable insights
  const insights = await generateInsights(patterns);

  return {
    patterns,
    insights,
    recommendations: await getRecommendations(patterns)
  };
};
```

The goal was never to replace human judgment but to surface insights that would otherwise require hours of manual analysis.

### Phase 3: Privacy-First Architecture

Here's the thing about finance apps - they deal with your most sensitive data. I made a conscious decision early on:

**Sanchay processes everything locally by default.**

Your transaction data never leaves your machine unless you explicitly choose to use cloud features. The LLM calls are made with anonymized, aggregated data - never raw transaction details.

## Lessons Learned

### 1. Start with Your Own Pain Point

The best products solve problems you personally have. I built Sanchay for myself first. The fact that others find it useful is a bonus.

### 2. Open Source Isn't Just About Code

It's about building in public, getting feedback early, and creating something that others can adapt to their needs. The Indian financial ecosystem is unique, and having contributors who understand local nuances has been invaluable.

### 3. AI is a Tool, Not a Solution

Throwing AI at a problem doesn't magically solve it. The real work is in understanding the problem deeply, cleaning the data, and designing the right abstractions. The AI part is maybe 20% of the work.

## What's Next for Sanchay

I'm currently working on:

- **Multi-bank support** - Parsing statements from more Indian banks
- **Goal tracking** - Set savings goals and get AI-powered suggestions to achieve them
- **Spending predictions** - Using your historical data to predict upcoming expenses
- **Plugin system** - Allow developers to extend Sanchay with custom analyzers

## Try It Yourself

Sanchay is open source and free to use. If you're interested in contributing or just want to take control of your finances, check out the project on GitHub.

The code isn't perfect, and there's a lot more to build. But that's the beauty of open source - we build it together.

---

*Have thoughts on Sanchay or ideas for features? I'd love to hear from you. Reach out on [LinkedIn](https://www.linkedin.com/in/ashwani-kumar-97465186/) or drop me an [email](mailto:kmr.ashwin2019@gmail.com).*
