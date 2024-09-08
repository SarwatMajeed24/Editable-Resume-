var _a, _b, _c;
// Function to dynamically add more education fields
function addEducationField() {
    var educationFields = document.getElementById('education-fields');
    var entryCount = educationFields.querySelectorAll('.education-entry').length + 1;
    var newEntry = document.createElement('div');
    newEntry.className = 'education-entry';
    newEntry.innerHTML = "\n        <label for=\"edu-institute-".concat(entryCount, "\">Institute:</label>\n        <input type=\"text\" id=\"edu-institute-").concat(entryCount, "\" name=\"edu-institute\" required>\n        \n        <label for=\"edu-degree-").concat(entryCount, "\">Degree:</label>\n        <input type=\"text\" id=\"edu-degree-").concat(entryCount, "\" name=\"edu-degree\" required>\n        \n        <label for=\"edu-year-").concat(entryCount, "\">Year:</label>\n        <input type=\"text\" id=\"edu-year-").concat(entryCount, "\" name=\"edu-year\" required>\n    ");
    educationFields.appendChild(newEntry);
}
// Function to dynamically add more work experience fields
function addWorkExperienceField() {
    var workExperienceFields = document.getElementById('work-experience-fields');
    var entryCount = workExperienceFields.querySelectorAll('.work-experience-entry').length + 1;
    var newEntry = document.createElement('div');
    newEntry.className = 'work-experience-entry';
    newEntry.innerHTML = "\n        <label for=\"work-company-".concat(entryCount, "\">Company:</label>\n        <input type=\"text\" id=\"work-company-").concat(entryCount, "\" name=\"work-company\" required>\n\n        <label for=\"work-role-").concat(entryCount, "\">Role:</label>\n        <input type=\"text\" id=\"work-role-").concat(entryCount, "\" name=\"work-role\" required>\n        \n        <label for=\"work-period-").concat(entryCount, "\">Period:</label>\n        <input type=\"text\" id=\"work-period-").concat(entryCount, "\" name=\"work-period\" required>\n    ");
    workExperienceFields.appendChild(newEntry);
}
// Function to generate resume from form data
function generateResume(event) {
    var _a;
    event.preventDefault();
    var form = document.getElementById('resume-form');
    var name = form.elements.namedItem('name').value;
    var email = form.elements.namedItem('email').value;
    var contact = form.elements.namedItem('contact').value;
    var skills = form.elements.namedItem('skills').value;
    // Handle profile picture upload
    var profilePicInput = document.getElementById('profile-pic-upload');
    var profilePic = ((_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePicInput.files[0]) : '';
    // Update resume with form data
    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = "Email: ".concat(email);
    document.getElementById('resume-contact').textContent = "Contact #: ".concat(contact);
    var resumeImg = document.getElementById('profile-img');
    resumeImg.src = profilePic;
    var educationEntries = Array.from(form.querySelectorAll('.education-entry')).map(function (entry) {
        var institute = entry.querySelector('[name="edu-institute"]').value;
        var degree = entry.querySelector('[name="edu-degree"]').value;
        var year = entry.querySelector('[name="edu-year"]').value;
        return "<li>".concat(institute, " - ").concat(degree, " (").concat(year, ")</li>");
    }).join('');
    var workEntries = Array.from(form.querySelectorAll('.work-experience-entry')).map(function (entry) {
        var company = entry.querySelector('[name="work-company"]').value;
        var role = entry.querySelector('[name="work-role"]').value;
        var period = entry.querySelector('[name="work-period"]').value;
        return "<li>".concat(company, " - ").concat(role, " (").concat(period, ")</li>");
    }).join('');
    document.getElementById('skills-section').innerHTML = "<ul>".concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>");
    document.getElementById('education').innerHTML = educationEntries;
    document.getElementById('work-experience').innerHTML = workEntries;
}
// Add event listeners
(_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addEducationField);
(_b = document.getElementById('add-work-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addWorkExperienceField);
(_c = document.getElementById('resume-form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', generateResume);
