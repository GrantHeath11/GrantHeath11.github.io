/*********************
 *     Grant Heath
 *     Volunteer Connect Project
 *     contact.js
 *     2025-01-24
 *********************/

"use strict";

/**
 * Represents a Contact with a fullName, contactNumber, and emailAddress
 */
class Contact {
    /**
     * Constructor a new Constructor instance
     * @param fullName
     * @param contactNumber
     * @param emailAddress
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") {
        this._fullName = fullName;
        this._contactNumber = contactNumber;
        this._emailAddress = emailAddress;
    }

    /**
     * Gets the full name of the contact
     * @returns {string}
     */
    get fullName() {
        return this._fullName;
    }

    /**
     * Sets the full name of the contact. Validates input to ensure it's a non-empty string.
     * @param fullName
     */
    set fullName(fullName) {
        if (typeof fullName !== "string" || fullName.trim() === "") {
            throw new Error("Invalid fullName: must be non-empty string");
        }
        this._fullName = fullName;
    }

    /**
     * Gets contact number of the contact
     * @returns {string}
     */
    get contactNumber() {
        return this._contactNumber;
    }

    /**
     * Sets the contactNumber of the contact. Validates the input to ensure it matches the 10-digit format
     * @param contactNumber
     */
    set contactNumber(contactNumber) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/; // Example: 905-555-5555
        if (!phoneRegex.test(contactNumber)) {
            throw new Error("Invalid contact number: must be in the format XXX-XXX-XXXX");
        }
        this._contactNumber = contactNumber;
    }

    /**
     * Gets the email address for the contact
     * @returns {string}
     */
    get emailAddress() {
        return this._emailAddress;
    }

    /**
     * Sets the email address of the contact. Validate input to ensure standard email format
     * @param address
     */
    set emailAddress(address) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(address)) {
            throw new Error("Invalid email address: must be a valid email format");
        }
        this._emailAddress = address;
    }

    /**
     * Converts the contact details into a human-readable string
     * @returns {string}
     */
    toString() {
        return `Full Name: ${this._fullName}\n
                Contact: ${this._contactNumber}\n
                Email: ${this._emailAddress}`;
    }
}

/**
 * Function to handle contact form submissions
 */
function displayContactPage() {
    const sendButton = document.getElementById("sendButton");

    // Add click event listener to the send button
    sendButton.addEventListener("click", function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate form fields
        const fullName = document.getElementById("fullName").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const emailAddress = document.getElementById("emailAddress").value;

        // Validate phone number format (XXX-XXX-XXXX)
        const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneNumberPattern.test(contactNumber)) {
            alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
            return;
        }

        // Validate email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Create Contact instance
        let contact = new Contact(fullName, contactNumber, emailAddress);

        // Confirmation message (HTML element, previously used)
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = "Contact information submitted successfully.";
        confirmationMessage.style.display = "block";
    });
}

/**
 * Initialize the contact page
 */
window.addEventListener("DOMContentLoaded", displayContactPage);
