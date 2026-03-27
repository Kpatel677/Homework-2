function updateSalaryDisplay(val) {
    document.getElementById("salaryVal").innerText = "$" + Number(val).toLocaleString();
}

function validatepassword() {
    let userId = document.getElementsByName("userId")[0].value;
    let pwd = document.getElementsByName("userPwd")[0].value;
    let repwd = document.getElementsByName("userRePwd")[0].value;

    if (pwd !== repwd) {
        alert("Passwords do not match!");
        return false;
    }

    let lowPwd = pwd.toLowerCase();
    let lowUserId = userId.toLowerCase();

    if (lowPwd.includes(lowUserId)) {
        alert("Password cannot contain your User ID!");
        return false;
    }
    return true;
}


function validateDOB() {
    let dobInput = document.getElementById("dob");
    let dobValue = new Date(dobInput.value);
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    if (dobValue > today) {
        alert("Date of Birth cannot be in the future!");
        return false;
    }
    return true;
}

function firstNameCheck() {
    const firstName = document.getElementById('firstname');

    const fNamePattern = /^[A-Za-z'-]{2,30}$/;
    if (!fNamePattern.test(firstName.value)) {
        alert("First Name should be 2 to 30 characters long. It can include letters, apostrophes, or dashes.");
        return false;
    }
    return true;
}

function lastNameCheck(){
    const lastName = document.getElementById('lastname');

    const lNamePattern = /^[A-Za-z2-5'-]{2,30}$/;
    if (!lNamePattern.test(lastName.value)) {
        alert("Last Name should be 2 to 30 characters long. It can include letters, apostrophes, dashes, or the numbers 2 through 5.");
        return false;
    }
    return true;
}


function validateUserID() {
    let userField = document.getElementById("userId");
    let userId = userField.value;

    if (userId.length < 5 || userId.length > 30) {
        alert("User ID should be between 5 and 30 characters long.");
        return false;
    }

    let userPattern = /^[A-Za-z][A-Za-z0-9_-]*$/;
    
    if (!userPattern.test(userId)) {
        alert("User ID should start with a letter and can only contain letters, numbers, underscores, or dashes (no spaces).");
        return false;
    }
    userField.value = userId.toLowerCase();    
    return true;
}

function validateFinal() {
    
    if (firstNameCheck() == false) {
        return false;
    }

    if (lastNameCheck() == false) {
        return false;
    }

    if (validateDOB() == false) {
        return false;
    }

    if (validateUserID() == false) {
        return false;
    }

    if (validatepassword() == false) {
        return false;
    }
    
    return true;
}


function showReview() {
    const form = document.querySelector('form');
    const reviewArea = document.getElementById('reviewArea');
    const reviewContent = document.getElementById('reviewContent');
    let htmlOutput = "Review Your Information<ul>";
    const formData = new FormData(form);
    
    const labels = {
        firstname: "First Name",
        mi: "Middle Initial",
        lastname: "Last Name",
        dob: "Date of Birth",
        ssn: "SSN",
        email: "Email",
        phone: "Phone",
        addr1: "Address 1",
        addr2: "Address 2",
        city: "City",
        state: "State",
        zip: "Zip Code",
        gender: "Gender",
        vac: "Vaccinated",
        ins: "Insurance",
        salary: "Desired Salary",
        about: "About Yourself",
        userId: "User ID"
    };

    formData.forEach((value, key) => {
        const isCheckbox = key.startsWith('h') && !isNaN(key.substring(1));
        const isPassword = key.includes('Pwd');
        if (!isCheckbox && !isPassword && value) {
            let label = labels[key] || key;
            htmlOutput += `<li><strong>${label}:</strong> ${value}</li>`;
        }
    });

    htmlOutput += "</ul>";
    reviewContent.innerHTML = htmlOutput;
    reviewArea.style.display = "block";
}