# Advanced Form Handling using FormData (React)

This project demonstrates how to collect multiple input values from a form using the **FormData API** in React without using the `useState` hook.

---

## 📌 What is FormData?

`FormData` is a built-in JavaScript object used to automatically collect data from an HTML form.

It reads all input values based on their **name attributes** and stores them as key–value pairs.

Example:
name="first_name" → "John"
name="email" → "john@gmail.com

This allows us to handle multiple inputs easily without managing separate state variables.

---

## ⚙️ How Form Submission Works

When the form is submitted:

1. The default page reload is prevented.
2. FormData reads all form fields automatically.
3. The collected data is converted into a JavaScript object.
4. The final object is printed in the console.

---

## 🧩 Code Explanation

### Prevent Page Refresh

```js
e.preventDefault();

```
Stops the browser from refreshing after form submission.

---
## Creating FormData Object

```js
const formData = new FormData(e.target);

```

- e.target refers to the form element.

- FormData scans the entire form.

- It collects all input values automatically.

## Converting FormData into Object
```js
const data = Object.fromEntries(formData.entries());

```

- formData.entries() returns all form values.

- Object.fromEntries() converts them into a normal JavaScript object.

Example Output:
```js
{
  first_name: "John",
  last_name: "Doe",
  phone_number: "9876543210",
  email: "john@gmail.com",
  agree: "on"
}
```
## Phone Number Validation

The phone number input allows only numeric values using the onKeyDown event.
```js

const handleNumber = (e) => {
  if (
    !/[0-9]/.test(e.key) &&
    e.key !== "Backspace" &&
    e.key !== "Delete" &&
    e.key !== "ArrowLeft" &&
    e.key !== "ArrowRight" &&
    e.key !== "Tab"
  ) {
    e.preventDefault();
  }
};

```


# 📎 Key Requirement

Every input must include a name attribute because FormData uses it as the object key.

Example:
```js
<input name="first_name" />
<input name="email" />

```
# Access Single Field Value
Use .get("name")
```js
const firstName = formData.get("first_name");
const lastName = formData.get("last_name");
const phone = formData.get("phone_number");
const email = formData.get("email");

console.log(firstName);
console.log(phone);

```


---


