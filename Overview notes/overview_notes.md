**JavaScript Essential Data Structures & Concepts**

### 1. Core JavaScript Concepts
- **Variables and Data Types**: `let`, `const`, `var`, and different data types.
  - Example:
    ```js
    let name = "Alice"; // String
    const age = 25; // Number
    var isStudent = true; // Boolean
    let hobbies = ["Reading", "Coding", "Gaming"]; // Array
    let person = { name: "Alice", age: 25 }; // Object
    ```
- **Functions**: Function declarations, arrow functions.
  - Example:
    ```js
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Alice"));
    
    // Arrow function
    const add = (a, b) => a + b;
    console.log(add(5, 3));
    ```
- **Control Flow**: Conditionals (`if`, `else`, `switch`), loops (`for`, `while`, `forEach`).
  - Example:
    ```js
    let num = 10;
    if (num > 5) {
        console.log("Greater than 5");
    } else {
        console.log("Less than or equal to 5");
    }
    
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    ```

### 2. Object-Oriented Programming (OOP)
- **Objects and Classes**: Creating objects and defining classes with constructors.
  - Example:
    ```js
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        introduce() {
            return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
        }
    }
    let alice = new Person("Alice", 25);
    console.log(alice.introduce());
    ```
- **Prototypes and Inheritance**: Understanding prototypal inheritance and class hierarchies.
  - Example:
    ```js
    class Student extends Person {
        constructor(name, age, grade) {
            super(name, age);
            this.grade = grade;
        }
        study() {
            return `${this.name} is studying.`;
        }
    }
    let bob = new Student("Bob", 20, "A");
    console.log(bob.introduce());
    console.log(bob.study());
    ```

### 3. Document Object Model (DOM)
- **DOM Manipulation**: Selecting and modifying HTML elements using `getElementById`, `querySelector`, etc.
  - Example:
    ```js
    document.getElementById("title").innerText = "New Title";
    document.querySelector(".content").style.color = "blue";
    ```
- **Events**: Handling events like clicks, inputs, and forms.
  - Example:
    ```js
    document.getElementById("btn").addEventListener("click", () => {
        alert("Button clicked!");
    });
    ```

### 4. Arrays (`[]`)
- Ordered collections of elements.
- Common methods: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`, `.map()`, `.filter()`, `.reduce()`.
- Example:
  ```js
  let arr = [1, 2, 3];
  arr.push(4); // [1, 2, 3, 4]
  let squared = arr.map(num => num * num);
  console.log(squared); // [1, 4, 9, 16]
  ```

### 5. Objects (`{}` - HashMaps in JS)
- Key-value pairs.
- Used for structured data representation.
- Common methods: `Object.keys()`, `Object.values()`, `Object.entries()`, `hasOwnProperty()`.
- Example:
  ```js
  let obj = { name: "Alice", age: 25 };
  console.log(obj.name); // Alice
  ```

### 6. Maps (`new Map()`)
- Similar to objects but optimized for key-value storage.
- Keys can be any type (not just strings).
- Common methods: `.set()`, `.get()`, `.has()`, `.delete()`, `.size`.
- Example:
  ```js
  let map = new Map();
  map.set("name", "Alice");
  console.log(map.get("name")); // Alice
  ```

### 7. Sets (`new Set()`)
- Stores unique values (no duplicates).
- Common methods: `.add()`, `.has()`, `.delete()`, `.size`.
- Example:
  ```js
  let set = new Set([1, 2, 3, 3]);
  console.log(set.size); // 3 (no duplicates)
  ```

### 8. Linked Lists (Implemented Manually)
- Sequence of nodes, each pointing to the next.
- Not built-in; must be manually implemented.
- Example:
  ```js
  class Node {
      constructor(value) {
          this.value = value;
          this.next = null;
      }
  }
  ```

### 9. Stacks (LIFO - Last In, First Out)
- Can be implemented using an array or a class.
- Common methods: `.push()`, `.pop()`, `.peek()`.
- Example (using array):
  ```js
  let stack = [];
  stack.push(1);
  stack.pop(); // Removes last item
  ```

### 10. Queues (FIFO - First In, First Out)
- Can be implemented using an array (`.push()` & `.shift()`) or a class.
- Example:
  ```js
  let queue = [];
  queue.push(1);
  queue.shift(); // Removes first item
  ```

### 11. Graphs (Implemented Using Objects or Maps)
- Nodes connected by edges.
- Used in networking, web crawlers, shortest path algorithms.
- Example:
  ```js
  let graph = {
      A: ["B", "C"],
      B: ["A", "D"],
      C: ["A", "D"],
      D: ["B", "C"]
  };
  ```

### 12. Trees (Binary Trees, BST, etc.)
- Hierarchical structure where nodes have children.
- Used in DOM, JSON, and search algorithms.
- Example (basic binary tree node):
  ```js
  class TreeNode {
      constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
      }
  }
  ```

