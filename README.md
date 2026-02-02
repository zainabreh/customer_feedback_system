# Customer Feedback System

A modern **Customer Feedback System** built with React to demonstrate real-world frontend development practices, including structured state management and secure form validation.

This project highlights my ability to design scalable UI logic and handle complex form workflows in a production-ready way.

---

## Features

- Customer feedback submission form
- Schema-based form validation
- Centralized state management
- Clean and modular component structure
- Scalable frontend architecture

---

## Tech Stack

- **React (Hooks & Functional Components)**
- **Redux Toolkit (RTK)**
- **Formik**
- **Yup**
- **JavaScript (ES6+)**
- **CSS**

---

## Code Highlights

### Form Validation (Yup)

```js
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  feedback: Yup.string()
    .min(10, "Feedback must be at least 10 characters")
    .required("Feedback is required"),
});
```

---

## Redux Toolkit Slice

```js
const feedbackSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload);
    },
  },
});
```

---

## Lessons Learned

- Managing complex state using Redux Toolkit
- Implementing robust form validation with Yup
- Building maintainable and scalable React applications
- Structuring frontend projects for long-term growth
- Applying real-world React best practices

---

## Author

Zainab Rehman  
Frontend / MERN Stack Developer
- Passionate about clean code and scalable systems
- Open to internships, junior roles, and freelance work
