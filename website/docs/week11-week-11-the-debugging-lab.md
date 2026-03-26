---
sidebar_position: 11
sidebar_label: "Week 11: The Debugging Lab"
title: "Week 11: The Debugging Lab"
description: "Learn how programmers solve problems when code doesn't work the way they expect."
---

# Week 11: The Debugging Lab  
*Digital Problem Solving*

Last week you wrote your **first real programs** using Scratch.

You gave instructions to the computer and watched the sprite follow them.

But something very important happens when people write code:

**Sometimes things don't work the way we expect.**

This happens to every programmer, engineer, and scientist.

The big idea this week:

**Problems are normal. Smart creators learn how to investigate and fix them.**

When programmers search for mistakes and fix them, it is called:

**Debugging.**

Debugging is really just **careful problem solving**.

---



:::info Caregiver Snapshot
- You do not need to teach every bullet on the page. Use the learning goal and one or two activities for the session you are teaching today.
- If time is short, teach one guided session well and leave the rest for later. The lessons are designed to stretch across the week.
- The independent session works best after the learner has already explored the main idea with you once.
:::

:::tip Quick Navigation
- [Teacher Preparation](#teacher-preparation)
- [Guided Session 1](#guided-session-1)
- [Guided Session 2](#guided-session-2)
- [Independent Session](#independent-session)
- [Setup Notes](#setup)
:::

## Teacher Preparation
:::info Before You Begin
- **Time needed:** ~30–40 minutes per guided session; ~20 minutes for the independent session.
- **Devices:** A computer or tablet with a web browser and access to the learner’s Scratch project from last week.
- **Accounts:** Same Scratch account as Week 10 (optional but helpful).
- Ensure Scratch is accessible:
  https://scratch.mit.edu
- Prepare one or two **simple Scratch scripts with intentional mistakes**.
- Review a few debugging strategies to demonstrate:
  - reading instructions carefully
  - running code step-by-step
  - changing one thing at a time
- Prepare a whiteboard or paper to draw a simple debugging checklist.
- Set up a visual timer.
:::

:::tip Teaching Mindset
The goal is to normalize mistakes.

Students should leave this lesson thinking:

> "When something doesn't work, that just means I get to investigate."

This mindset is the foundation of engineering and programming.
:::

---

## Guided Session 1
### When Programs Go Wrong
#### Learning Goal
By the end of this session, the student can:

- analyze a broken program to identify likely causes of the problem
- evaluate what the program is doing versus what it was supposed to do
- choose and justify a fix based on evidence from observation

---

#### Activities
**1. What Happens When Something Doesn't Work?**

Ask the student:

> “Have you ever tried something on the computer and it didn’t work?”

Examples might include:

- a game freezing
- clicking something and nothing happens
- a drawing tool doing something unexpected

Explain that programmers experience this **all the time**.

The good news is that programmers have tools for figuring things out.

---

**2. Introduce the Word "Debugging"**

Explain that programmers call this process **debugging**.

The name comes from early computers where actual bugs (insects) sometimes caused hardware problems.

Today the word simply means:

**Finding and fixing mistakes in a program.**

Write the word:


Debugging = Finding the problem and fixing it


---

**3. Scratch Example with a Mistake**

Open Scratch and show a simple program like this:


when green flag clicked
move 10 steps
turn 15 degrees
move 10 steps


Ask the student what they think the sprite will do.

Then show a version where something is missing or incorrect, such as:


move 10 steps
turn 15 degrees


Ask:

> “Why didn’t the program start?”

Guide the student to notice that the **green flag block is missing**.

Explain that small mistakes can stop programs from working.

---

**4. Observe Before Fixing**

Before fixing the code, ask the student:

- What is the sprite doing?
- What is it not doing?
- What do you think the problem might be?

Explain that programmers often **observe carefully before making changes**.

---

#### Reflection Questions
- “What evidence helped you identify the likely cause of the bug?”
  - *Sentence starter: “I figured out the problem by looking at…”*
- “Why is careful observation more useful than random guessing when debugging?”
  - *Sentence starter: “Observing carefully is better because…”*
- “How would you explain debugging to someone who thinks mistakes mean failure?”
  - *Sentence starter: “I would tell them that mistakes are…”*

---

## Guided Session 2
### Debugging Strategies
#### Learning Goal
By the end of this session, the student can:

- apply a debugging process to test, revise, and improve a program
- evaluate the effect of one change at a time before making the next one
- create a reasoned plan for solving a simple coding problem

---

#### Activities
**1. Introduce the Debugging Checklist**

Draw a simple checklist together.


Debugging Checklist

What is supposed to happen?

What actually happened?

What might be causing the problem?

Try changing one thing.

Test again.


Explain that engineers and programmers often use steps like this.

---

**2. Debug a Small Program Together**

Create a simple Scratch program with a small mistake.

Example:


when green flag clicked
repeat 10
move 20 steps


Ask the student:

> “What do you think this program is trying to do?”

Then show the mistake:

The **move block is not inside the repeat block**.

Ask the student to help fix it by dragging the block into the loop.

Run the program again.

Observe how the behavior changes.

---

**3. Change One Thing at a Time**

Explain an important debugging rule:

**Only change one thing at a time.**

Demonstrate by changing a number:


move 20 steps


Change it to:


move 50 steps


Run the program again.

Observe the difference.

Explain that testing small changes helps programmers understand what the code is doing.

---

**4. Let the Student Break the Program**

Encourage experimentation.

Ask the student to intentionally create a mistake, such as:

- disconnecting a block
- changing a number
- removing a loop

Then challenge them to **debug their own mistake**.

This turns debugging into a puzzle.

---

#### Reflection Questions
- “Which debugging step gave you the clearest evidence about the problem?”
  - *Sentence starter: “The step that helped most was…”*
- “Why does changing one thing at a time lead to better decisions?”
  - *Sentence starter: “Changing one thing at a time helps because…”*
- “How did the program’s behavior help you judge whether your fix worked?”
  - *Sentence starter: “I knew my fix worked because the sprite…”*

---

## Independent Session
### Debugging Detective
#### Instruction
Open your Scratch project from last week, or start a new one, and use it like a debugging lab.

Build a small program, then do one of these:

**Challenge 1: Break It and Diagnose It**

Change something so the program behaves incorrectly, then figure out:

- what it was supposed to do
- what it actually did
- which part likely caused the problem

**Challenge 2: Improve It Carefully**

Add one new block or change one value, then explain how that one change affected the program.

Give your project a fun name when you finish.

---

#### Skills Reinforced
- solving problems through evidence-based debugging
- applying and evaluating debugging strategies
- analyzing cause and effect in broken and fixed code
- revising code through controlled experimentation

---

#### Setup
- Scratch editor open
- previous Scratch project accessible (optional)
- visual timer

---

## 🔄 Simplify or Extend

**To simplify:**
- Pre-build a broken program yourself and let the learner focus only on finding the one mistake.
- Use the Debugging Checklist as a printed handout so the learner can follow it step-by-step.
- Limit the session to one bug at a time — finding and fixing a single problem is a full lesson.

**To extend:**
- Ask the learner to intentionally create a broken program and challenge you (or a sibling) to debug it.
- Introduce the idea of “edge cases” — what happens if a number is very large or very small?
- Have the learner write a short “bug report” describing what went wrong, what they tried, and what fixed it.
- Explore Scratch community projects and look for programs that behave unexpectedly — discuss what might be causing it.

---

## 💾 Save This Week’s Artifact

Save the learner’s fixed or improved Scratch project by downloading it (**File → Save to your computer**) or taking a screenshot of the final script. If the learner wrote a bug report or debugging checklist, save that too. Place everything in **My Projects → Experiments**. This artifact shows growth — not just what the learner built, but what they figured out when things went wrong.

---

## ✅ Success Indicators

By the end of this week, look for signs that the learner can:

- Look at a broken program and describe what it is doing versus what it should be doing.
- Use the Debugging Checklist (or a similar process) to investigate a problem systematically.
- Identify at least one bug in a simple Scratch program and explain what caused it.
- Fix a bug with guidance — or independently — and test to confirm the fix works.
- Stay calm and curious when something doesn’t work, rather than giving up. Getting stuck is a normal and valuable part of learning.
- Explain debugging in their own words — for example, “It’s when you find out why something isn’t working and try to fix it.”