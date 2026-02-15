## Handling Multiple Inputs Using `useState` in React

In this project, the **SimpleForm.jsx** component demonstrates how to handle multiple form inputs using a single state object with the `useState` hook.

### ✅ Why use a single state object?

Instead of creating a separate state for every input field, we store all form values inside one object. This makes the form easier to manage, especially when working with multiple inputs.

---

### 🧠 State Structure

We create one state object that contains all form fields:

```jsx
const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  agree: false,
});
```

Each key represents an input field.

---

### ✍️ Handling Multiple Inputs with One Function

A single `inputHandler` function updates all inputs dynamically using the `name` attribute.

```jsx
const inputHandler = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  });
};
```

#### How it works:

* Every input has a `name` attribute matching a key in the state.
* The handler reads the input name.
* The correct value inside the object is updated automatically.
* Checkbox values use `checked` instead of `value`.

---

### 🧾 Example Input

```jsx
<input
  type="text"
  name="first_name"
  value={formData.first_name}
  onChange={inputHandler}
/>
```

When the user types, React updates only that specific field inside the state object.

---

### 🚀 Benefits

* Cleaner code
* Reusable handler function
* Easy form scaling
* Better state management

---

### 📌 Summary

Using a single state object with `useState` allows us to efficiently manage multiple form inputs in React. By using the input `name` attribute and a common change handler, we can update any field dynamically without writing separate logic for each input.
