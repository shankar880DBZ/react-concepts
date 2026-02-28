# 📝 React To-Do List App

A simple **CRUD (Create, Read, Update, Delete)** To-Do List application built using **React Hooks** and **Local Storage**.
This project helps beginners understand form handling, state management, editing items, and saving data permanently in the browser.

---

## 🚀 Features

✅ Add new tasks
✅ Edit existing tasks
✅ Delete tasks
✅ Persistent storage using LocalStorage
✅ Dynamic UI update using React state
✅ Conditional button (Submit / Update)
✅ Responsive grid layout (Tailwind CSS)

---

## 📂 Project Overview

This application allows users to:

1. Enter a task title.
2. Add a message/description.
3. Save the task.
4. Edit or delete tasks anytime.
5. Keep tasks saved even after page refresh.

---


---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
```

### 2️⃣ Navigate into project

```bash
cd project-name
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start development server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🏗️ Step-by-Step Working

---

### Step 1 — State Creation

```js
const [data, setData] = useState([]);
const [formData, setFormData] = useState({
  task: "",
  message: "",
});
const [editIndex, setEditIndex] = useState(null);
```

**Purpose:**

* `data` → stores all tasks
* `formData` → stores current input values
* `editIndex` → tracks which item is being edited

---

### Step 2 — Input Handling

```js
const inputHandler = (event) => {
  const { name, value } = event.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};
```

**What happens:**

* Reads input name (`task` or `message`)
* Updates only that field
* Keeps other values unchanged

---

### Step 3 — Add or Update Task

```js
const submitHandler = (event) => {
  event.preventDefault();

  if (editIndex !== null) {
    const updateData = [...data];
    updateData[editIndex] = formData;
    setData(updateData);
    setEditIndex(null);
  } else {
    setData((prev) => [...prev, formData]);
  }

  setFormData({ task: "", message: "" });
};
```

**Logic:**

* If editing → replace existing task
* Otherwise → add new task
* Reset form after submit

---

### Step 4 — Delete Task

```js
const deleteHandler = (indexToDelete) => {
  const updatedData = data.filter(
    (_, index) => index !== indexToDelete
  );
  setData(updatedData);
};
```

Removes selected item using `filter()`.

---

### Step 5 — Edit Task

```js
const editHandler = (index) => {
  setFormData(data[index]);
  setEditIndex(index);
};
```

Loads selected task back into the form.

---

### Step 6 — Save Data to LocalStorage

```js
useEffect(() => {
  localStorage.setItem("todo", JSON.stringify(data));
}, [data]);
```

Every time `data` changes → it saves automatically.

---

### Step 7 — Load Saved Data

```js
useEffect(() => {
  const saveData = localStorage.getItem("todo");
  if (saveData) {
    setData(JSON.parse(saveData));
  }
}, []);
```

Runs once when app loads.

---










