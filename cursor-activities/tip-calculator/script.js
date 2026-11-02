const form = document.getElementById("tip-form");
const result = document.getElementById("result");

function showMessage(text) {
  result.textContent = text;
}

function showLines(lines) {
  result.replaceChildren();
  for (const line of lines) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    result.appendChild(paragraph);
  }
}

function dollarsToCents(raw) {
  const match = raw.match(/^(\d+)(?:\.(\d+))?$/);
  if (!match) return null;
  const whole = Number(match[1]) * 100;
  const frac = (match[2] || "").padEnd(3, "0");
  const cents = Number(frac.slice(0, 2)) + (frac[2] >= "5" ? 1 : 0);
  return whole + cents;
}

function money(cents) {
  return (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const billRaw = document.getElementById("bill-amount").value.trim();
  const peopleRaw = document.getElementById("people").value.trim();
  const tipPercent = Number(document.getElementById("tip-percent").value);

  if (billRaw === "") {
    showMessage("Enter the bill amount.");
    return;
  }

  if (billRaw.startsWith("-")) {
    showMessage("The bill amount can't be negative.");
    return;
  }

  const billCents = dollarsToCents(billRaw);
  if (billCents === null || !Number.isFinite(tipPercent)) {
    showMessage("Enter a bill amount using numbers only, like 80 or 80.50.");
    return;
  }

  if (peopleRaw === "") {
    showMessage("Enter the number of people.");
    return;
  }

  if (peopleRaw.startsWith("-")) {
    showMessage("The number of people can't be negative.");
    return;
  }

  if (!/^\d+$/.test(peopleRaw) || Number(peopleRaw) < 1) {
    showMessage("Enter at least 1 person.");
    return;
  }

  const people = Number(peopleRaw);
  const tipCents = Math.round((billCents * tipPercent) / 100);
  const totalCents = billCents + tipCents;
  const eachCents = Math.round(totalCents / people);

  showLines([
    "Tip: " + money(tipCents),
    "Total: " + money(totalCents),
    "Total per person: " + money(eachCents),
  ]);
});
