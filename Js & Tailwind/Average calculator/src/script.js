// Get DOM elements
const calculateBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');
const averageScoreSpan = document.getElementById('averageScore');
const studentsList = document.getElementById('studentsList');
const studentsContainer = document.getElementById('studentsContainer');
const displayText = document.getElementById('displayText');

// Array to store submitted student data
let submittedStudents = [];

// Calculate average function
function calculateAverage() {
    console.log('Calculate button clicked'); // Debug log
    
    const grades = [
        parseFloat(document.getElementById('grade1').value) || 0,
        parseFloat(document.getElementById('grade2').value) || 0,
        parseFloat(document.getElementById('grade3').value) || 0
    ];

    console.log('Grades:', grades); // Debug log

    const validGrades = grades.filter(grade => grade > 0);
    
    if (validGrades.length === 0) {
        alert('Please enter at least one grade!');
        return;
    }

    const average = validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
    
    console.log('Average calculated:', average); // Debug log
    
    // Update the display area with the average
    displayText.textContent = `Average: ${average.toFixed(2)}%`;
    console.log('Display updated to:', displayText.textContent); // Debug log
    
    averageScoreSpan.textContent = average.toFixed(2);
    resultDiv.classList.remove('hidden');
}

// Reset function
function resetForm() {
    console.log('Reset button clicked'); // Debug log
    
    document.getElementById('studentName').value = '';
    document.getElementById('subject1').selectedIndex = 0;
    document.getElementById('subject2').selectedIndex = 0;
    document.getElementById('subject3').selectedIndex = 0;
    document.getElementById('grade1').value = '';
    document.getElementById('grade2').value = '';
    document.getElementById('grade3').value = '';
    resultDiv.classList.add('hidden');
    
    // Reset display text back to "Display"
    displayText.textContent = 'Display';
    console.log('Display reset to:', displayText.textContent); // Debug log
}

// Create student entry HTML
function createStudentEntry(student) {
    const subjectsText = student.subjects.map((subject, index) => 
        `${subject}: ${student.grades[index]}`
    ).join(', ');

    return `
        <div class="bg-white/30 rounded p-2 text-xs">
            <div class="font-semibold text-[#292E4A]">${student.name}</div>
            <div class="text-[#585A7A] text-[10px]">${subjectsText}</div>
            <div class="font-semibold text-[#292E4A]">Average: ${student.average}%</div>
        </div>
    `;
}

// Update students list display
function updateStudentsList() {
    if (submittedStudents.length === 0) {
        studentsList.classList.add('hidden');
        return;
    }

    studentsContainer.innerHTML = submittedStudents
        .map(student => createStudentEntry(student))
        .join('');
    
    studentsList.classList.remove('hidden');
}

// Submit function
function submitData() {
    console.log('Submit button clicked'); // Debug log
    
    const studentName = document.getElementById('studentName').value.trim();
    const subjects = [
        document.getElementById('subject1').value,
        document.getElementById('subject2').value,
        document.getElementById('subject3').value
    ];
    const grades = [
        parseFloat(document.getElementById('grade1').value) || 0,
        parseFloat(document.getElementById('grade2').value) || 0,
        parseFloat(document.getElementById('grade3').value) || 0
    ];

    if (!studentName) {
        alert('Please enter student name!');
        return;
    }

    // Filter out empty subjects and corresponding grades
    const validEntries = subjects.map((subject, index) => ({
        subject: subject,
        grade: grades[index]
    })).filter(entry => entry.subject && entry.grade > 0);

    if (validEntries.length === 0) {
        alert('Please select at least one subject and enter its grade!');
        return;
    }

    // Calculate average for valid entries
    const validGrades = validEntries.map(entry => entry.grade);
    const average = (validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length).toFixed(2);

    // Create student object
    const studentData = {
        name: studentName,
        subjects: validEntries.map(entry => entry.subject),
        grades: validEntries.map(entry => entry.grade),
        average: average,
        timestamp: new Date().toLocaleString()
    };

    // Add to submitted students array
    submittedStudents.push(studentData);

    // Update the display
    updateStudentsList();

    // Show success message
    alert(`Data submitted successfully for ${studentName}! Average: ${average}%`);

    // Reset the form
    resetForm();
}

// Clear all submitted data
function clearAllData() {
    if (submittedStudents.length === 0) {
        alert('No data to clear!');
        return;
    }

    if (confirm('Are you sure you want to clear all submitted student data?')) {
        submittedStudents = [];
        updateStudentsList();
        alert('All data cleared successfully!');
    }
}

// Event listeners
calculateBtn.addEventListener('click', calculateAverage);
resetBtn.addEventListener('click', resetForm);
submitBtn.addEventListener('click', submitData);

// Double-click reset button to clear all data
resetBtn.addEventListener('dblclick', clearAllData);

// Allow Enter key to calculate
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateAverage();
    }
});

// Debug: Check if elements are found
console.log('Display text element:', displayText);
console.log('Calculate button:', calculateBtn);

// Test function to verify display update works
function testDisplayUpdate() {
    displayText.textContent = 'Test: Average: 75.50%';
    console.log('Test display update:', displayText.textContent);
}

// Uncomment the line below to test display update on page load
// testDisplayUpdate();