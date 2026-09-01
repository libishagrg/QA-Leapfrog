import person from "../personInformation.json" with { type: "json" };

console.log("First Name:", person.firstName);
console.log("Middle Name:", person.middleName);
console.log("Last Name:", person.lastName);
console.log("Date of Birth:", person.dateOfBirth);
console.log("Gender:", person.gender);
console.log("Email:", person.email);
console.log("Phone Number:", person.phoneNumber);
console.log("Address:", person.address.street);
console.log("City:", person.address.city);
console.log("District:", person.address.district);
console.log("Country:", person.address.country);