const display = document.getElementById("display");
const search = document.getElementById("search");

search.addEventListener("input", () => {
  const password = search.value;
  const isLongEnough = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpparCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecial = /[@#]/.test(password);

  let score = 0;
  if (isLongEnough) score++;
  if (hasNumber) score++;
  if (hasUpparCase) score++;
  if (hasLowerCase) score++;
  if (hasSpecial) score++;

  let strength = "Weak🔴";
  if (score >= 5) {
    strength = "Strong🟢";
  } else if (score >= 3) {
    strength = "Medium";
  }

  display.innerHTML = `
        <p>Strength: ${strength}</p>
        <ul>
            <li>${isLongEnough ? "✅" : "❌"} At least 8 characters</li>
            <li>${hasUpparCase ? "✅" : "❌"} Contains uppercase</li>
            <li>${hasLowerCase ? "✅" : "❌"} Contains lowercase</li>
            <li>${hasNumber ? "✅" : "❌"} Contains number</li>
            <li>${hasSpecial ? "✅" : "❌"} Contains special character</li>
        </ul>
    `;
});
