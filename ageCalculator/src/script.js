const birthInput = document.getElementById("birthYearInput");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("ageResult");

function exactAge () {
    if (birthInput.value === "") {
    result.textContent = "Please enter your Date of birth first";
    return
    } 

    const birthDate = new Date(birthInput.value);
    const today = new Date();

        // Differences
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    //Negative Days fix
    if (days < 0) {
        months -= 1;

        const prevMonthLastDay = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();
        days += prevMonthLastDay;
    }

    if (months < 0) {
    years -= 1;
    months += 12;
}

    if (years === 0) {
    result.textContent = "Bro... you aren't even born yet. 💀"
    return
   } else if (years > 0 && years <= 4) {
    result.innerHTML = '';
    const ageLine = document.createElement("p");
    ageLine.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    result.appendChild(ageLine);

    const commentLine = document.createElement("p");
    commentLine.textContent = "Who gave you phone access, little one?📱🍼";
    result.appendChild(commentLine);
   } else if (years > 4 && years <= 12) {
    result.innerHTML = '';
    const ageLine = document.createElement("p");
    ageLine.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    result.appendChild(ageLine);

    const commentLine = document.createElement("p");
    commentLine.textContent = "Cartoons > Homework. We all know that.📺✏️"
    result.appendChild(commentLine);
   } else if (years > 12 && years <= 17) {
    result.innerHTML = '';
    const ageLine = document.createElement("p");
    ageLine.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    result.appendChild(ageLine);
    const commentLine = document.createElement("p");
    commentLine.textContent = "Ah, the teenage phase: drama, crushes & mood swings🎭💔"
    result.appendChild(commentLine);
   } else if (years > 17 && years <= 24) {
    result.innerHTML = '';
    const ageLine = document.createElement("p");
    ageLine.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
    result.appendChild(ageLine);
    const commentLine = document.createElement("p");
    commentLine.textContent = "Start struggling to understand yourself. ~Zaryab";
    result.appendChild(commentLine);
   }
};


button.addEventListener("click", exactAge);

