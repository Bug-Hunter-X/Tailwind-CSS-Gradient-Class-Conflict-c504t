# Tailwind CSS Gradient Class Conflict

This repository demonstrates an uncommon bug in Tailwind CSS related to gradient classes conflicting with other styles.

## Bug Description

When using Tailwind's gradient classes (e.g., `bg-gradient-to-r`), unexpected behavior can occur if combined with certain other classes that modify the box model (like padding, margin, or border-radius).  The gradient may not render correctly, or other styles may be unexpectedly overridden.

## Reproduction

1. Clone this repository.
2. Run `npm install` (or `yarn install`).
3. Open `index.html` in your browser.

You'll observe the issue in the original example. The gradient might not display as expected or might interact strangely with other styles.

## Solution

The solution often involves carefully considering the order of classes, or using utility-first approach to ensuring a more predictable output.  Always check for conflicting styles using your browser's developer tools.