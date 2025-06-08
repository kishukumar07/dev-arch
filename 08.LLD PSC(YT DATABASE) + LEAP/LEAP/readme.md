# 🚗 JavaScript Car Class

This project demonstrates how to write a simple JavaScript class for a car with properties for `make`, `model`, and `year`, and a method to display this information in a formatted string.

---

## 🧠 Problem Statement

Write a JavaScript class for a car with:

- Properties: `make`, `model`, and `year`
- A method to display this information in a formatted string

---

## 📖 1. Read

Create a JavaScript class that represents a car. The class should have properties for make, model, and year, and a method to return these properties in a formatted string.

---

## 🧪 2. Example

If we create a new car with:

- **Make**: `Toyota`
- **Model**: `Corolla`
- **Year**: `2020`

Then the `display()` method should return:

```
"2020 Toyota Corolla"
```

---

## 🛠 3. Approach

- Define a `Car` class.
- Create a constructor to initialize the `make`, `model`, and `year`.
- Implement a method `display()` that returns the string in the format:  
  `"year make model"`

---

## 💻 4. Code

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  display() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
```

---

## 🧪 5. Test

```javascript
let myCar = new Car('Toyota', 'Corolla', 2020);
console.log(myCar.display()); 
// Output: 2020 Toyota Corolla
```

---

## ⚙️ 6. Optimisation

- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

Creating an instance of the class and calling the `display` method are both constant-time operations.  
✅ This solution is optimal for the given problem.

---

## 📁 File Structure

```
📦car-class
 ┣ 📜index.js       # JavaScript class and test
 ┗ 📜README.md      # Documentation
```

---

## ✅ Output

```
2020 Toyota Corolla
```

---

## 📌 Notes

- Great exercise for practicing OOP in JavaScript
- Enhances understanding of constructors and methods in ES6 classes
