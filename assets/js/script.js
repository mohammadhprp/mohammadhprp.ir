$(function() {
    const currentYear = new Date().getFullYear();
    $("#copyright-year").html(currentYear);

    // Create a new Date object from the user's date of birth.
    const birthdate = new Date('2002');

    // Get the current date.
    const today = new Date();

    // Calculate the age difference between the user's date of birth and the current date.
    const age = Math.floor((today - birthdate) / (365.25 * 24 * 60 * 60 * 1000));
    $("#born-year").html(age);
});