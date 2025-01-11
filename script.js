// JavaScript for Portfolio Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Functionality for 'Recent Work'
    const recentWork = document.querySelector('#recent-work');
    const recentWorkDropdown = document.querySelector('#recent-work-dropdown');

    recentWork.addEventListener('mouseover', () => {
        const rect = recentWork.getBoundingClientRect();
        recentWorkDropdown.style.display = 'block';
        recentWorkDropdown.style.opacity = '1';
        recentWorkDropdown.style.transition = 'opacity 0.3s ease';
        recentWorkDropdown.style.top = `${rect.bottom}px`;
        recentWorkDropdown.style.left = `${rect.left}px`;
    });

    recentWorkDropdown.addEventListener('mouseover', () => {
        recentWorkDropdown.style.opacity = '1';
    });

    recentWork.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!recentWorkDropdown.matches(':hover')) {
                recentWorkDropdown.style.opacity = '0';
                setTimeout(() => {
                    recentWorkDropdown.style.display = 'none';
                }, 300);
            }
        }, 100);
    });

    recentWorkDropdown.addEventListener('mouseleave', () => {
        recentWorkDropdown.style.opacity = '0';
        setTimeout(() => {
            recentWorkDropdown.style.display = 'none';
        }, 300);
    });

    // Functionality for 'Contact'
    const contact = document.querySelector('#contact');
    const contactDropdown = document.querySelector('#contact-dropdown');

    contact.addEventListener('mouseover', () => {
        const rect = contact.getBoundingClientRect();
        contactDropdown.style.display = 'block';
        contactDropdown.style.opacity = '1';
        contactDropdown.style.transition = 'opacity 0.3s ease';
        contactDropdown.style.top = `${rect.bottom}px`;
        contactDropdown.style.left = `${rect.left}px`;

        // Ensure dropdown remains within the viewport
        const dropdownRect = contactDropdown.getBoundingClientRect();
        if (dropdownRect.right > window.innerWidth) {
            contactDropdown.style.left = `${window.innerWidth - dropdownRect.width}px`;
        }
    });

    contactDropdown.addEventListener('mouseover', () => {
        contactDropdown.style.opacity = '1';
    });

    contact.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!contactDropdown.matches(':hover')) {
                contactDropdown.style.opacity = '0';
                setTimeout(() => {
                    contactDropdown.style.display = 'none';
                }, 300);
            }
        }, 100);
    });

    contactDropdown.addEventListener('mouseleave', () => {
        contactDropdown.style.opacity = '0';
        setTimeout(() => {
            contactDropdown.style.display = 'none';
        }, 300);
    });

    // Tool Icon Hover Effects
    const toolIcons = document.querySelectorAll('.tool-icons .tool-icon');

    toolIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.backgroundColor = '#555';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
            icon.style.backgroundColor = '#333';
        });
    });

    // Functionality for 'Let's Chat on WhatsApp'
    const whatsappButton = document.querySelector('#whatsapp-button');

    whatsappButton.addEventListener('click', () => {
        window.open('https://wa.me/+8801700000000', '_blank');
    });

    // Functionality for 'Send Me an Email'
    const emailButton = document.querySelector('#email-button');
    const copyResponse = document.querySelector('#copy-response');

    emailButton.addEventListener('click', () => {
        navigator.clipboard.writeText('jon334@gmail.om').then(() => {
            copyResponse.classList.remove('hidden');
            copyResponse.textContent = 'Successfully Copied';

            setTimeout(() => {
                copyResponse.classList.add('hidden');
            }, 2000);
        });
    });
});




// JavaScript for Popup Functionality
/*const hireMeBtn = document.getElementById("hireMeBtn");
const hireMePopup = document.getElementById("hireMePopup");
const closePopup = document.getElementById("closePopup");
const topicSelect = document.getElementById("topicSelect");
const otherService = document.getElementById("otherService");
const sendBtn = document.getElementById("sendBtn");

// Show Popup
hireMeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    hireMePopup.classList.remove("hidden");
});

// Hide Popup
closePopup.addEventListener("click", () => {
    hireMePopup.classList.add("hidden");
});

document.addEventListener("click", (e) => {
    if (e.target === hireMePopup) {
        hireMePopup.classList.add("hidden");
    }
});

// Show "Others" Service Box
topicSelect.addEventListener("change", () => {
    if (topicSelect.value === "Others") {
        otherService.classList.remove("hidden");
    } else {
        otherService.classList.add("hidden");
    }
});

// Send Button Click Event
sendBtn.addEventListener("click", () => {
    const topic = topicSelect.value;
    const otherServiceText = otherService.value;
    const description = document.getElementById("description").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone && email && description) {
        fetch("send_email.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                topic,
                otherService: topic === "Others" ? otherServiceText : "",
                description,
                name,
                phone,
                email,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    alert("Your details have been sent successfully!");
                    hireMePopup.classList.add("hidden");
                } else {
                    alert("Failed to send your details. Please try again.");
                }
            })
            .catch(() => {
                alert("An error occurred. Please try again.");
            });
    } else {
        alert("Please fill out all fields.");
    }
});*/




// JavaScript for Popup Functionality
/*const hireMeBtn = document.getElementById("hireMeBtn");
const hireMePopup = document.getElementById("hireMePopup");
const closePopup = document.getElementById("closePopup");
const topicSelect = document.getElementById("topicSelect");
const otherService = document.getElementById("otherService");
const sendBtn = document.getElementById("sendBtn");

// Show Popup
hireMeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    hireMePopup.classList.remove("hidden");
});

// Hide Popup
closePopup.addEventListener("click", () => {
    hireMePopup.classList.add("hidden");
});

document.addEventListener("click", (e) => {
    if (e.target === hireMePopup) {
        hireMePopup.classList.add("hidden");
    }
});

// Show "Others" Service Box
topicSelect.addEventListener("change", () => {
    if (topicSelect.value === "Others") {
        otherService.classList.remove("hidden");
    } else {
        otherService.classList.add("hidden");
    }
});

// Send Button Click Event
sendBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
    const selectedTopic = topicSelect.value;
    const otherServiceText = otherService.value;

    if (email && name && phone && description) {
        const subject = `Hire Me Inquiry: ${selectedTopic}`;
        const body = `
            Name: ${name}
            Phone: ${phone}
            Description: ${description}
            Additional Service: ${selectedTopic === "Others" ? otherServiceText : "N/A"}
        `;
        window.location.href = `mailto:jon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            body
        )}`;
        hireMePopup.classList.add("hidden");
    } else {
        alert("Please fill out all required fields.");
    }
});*/






// JavaScript for Popup Functionality
const hireMeBtn = document.getElementById("hireMeBtn");
const hireMePopup = document.getElementById("hireMePopup");
const closePopup = document.getElementById("closePopup");
const topicSelect = document.getElementById("topicSelect");
const otherService = document.getElementById("otherService");
const sendBtn = document.getElementById("sendBtn");

// Show Popup
hireMeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    hireMePopup.classList.add("show"); // Add 'show' class to trigger the popup transition
});

// Hide Popup
closePopup.addEventListener("click", () => {
    hireMePopup.classList.remove("show"); // Remove 'show' class to hide with transition
});

document.addEventListener("click", (e) => {
    if (e.target === hireMePopup) {
        hireMePopup.classList.remove("show"); // Remove 'show' class if clicked outside
    }
});

// Show "Others" Service Box
topicSelect.addEventListener("change", () => {
    if (topicSelect.value === "Others") {
        otherService.classList.remove("hidden");
    } else {
        otherService.classList.add("hidden");
    }
});

// Send Button Click Event (Now just closes the popup with smooth transition)
sendBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;
    const selectedTopic = topicSelect.value;
    const otherServiceText = otherService.value;

    if (email && name && phone && description) {
        // Optional: you can log the input data to the console or store it elsewhere
        console.log("Form submitted with the following data:");
        console.log(`Name: ${name}`);
        console.log(`Phone: ${phone}`);
        console.log(`Description: ${description}`);
        console.log(`Topic: ${selectedTopic}`);
        console.log(`Other Service: ${selectedTopic === "Others" ? otherServiceText : "N/A"}`);

        // Close the popup after "sending" with smooth transition
        hireMePopup.classList.remove("show");
    } else {
        alert("Please fill out all required fields.");
    }
});