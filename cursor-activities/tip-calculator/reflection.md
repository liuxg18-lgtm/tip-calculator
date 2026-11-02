# Reflection

## Which tool for which job

- **Fixing a typo:** Tab. The change is one word. Accept the suggestion in place.
- **Renaming a variable in one function:** Inline edit. Select that function, ask for the rename, and read the diff so the new name stays inside the selection.
- **Understanding someone else's code:** Ask. It is read-only, so it can explain the page without changing the file.
- **Adding a whole new feature:** Agent. A new file, a link from the page, and several edge cases are more than one local edit. Agent can make those changes, and the diff is reviewed before it is accepted.

## One thing that had to be checked

The first calculator multiplied the bill with ordinary decimals. A bill of 84.50 with a 15% tip showed a tip of 12.67. By hand, 84.50 × 0.15 is 12.675, which rounds to 12.68. Floating-point math had landed just under the halfway point, so the displayed tip was a cent low. The calculation was moved to whole cents. A bill of 80 with a 15% tip split by 3 people now shows tip 12.00, total 92.00, and 30.67 per person.
