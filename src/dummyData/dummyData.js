const dummyData = {
    users: [
      { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 25 },
      { id: 2, name: "Bob Smith", email: "bob@example.com", age: 30 },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 28 }
    ],
    products: [
      { id: 1, name: "Laptop", price: 800, category: "Electronics" },
      { id: 2, name: "Smartphone", price: 600, category: "Electronics" },
      { id: 3, name: "Table", price: 150, category: "Furniture" }
    ],
    orders: [
      { id: 1, user_id: 1, product_id: 2, quantity: 1, total_price: 600 },
      { id: 2, user_id: 3, product_id: 1, quantity: 2, total_price: 1600 },
      { id: 3, user_id: 2, product_id: 3, quantity: 1, total_price: 150 }
    ],
    employees: [
            { "id": 1, "name": "John Doe", "department": "HR", "salary": 50000 },
            { "id": 2, "name": "Jane Smith", "department": "Engineering", "salary": 70000 },
            { "id": 3, "name": "Sam Wilson", "department": "Marketing", "salary": 55000 },
            { "id": 4, "name": "Emily Johnson", "department": "Finance", "salary": 60000 },
            { "id": 5, "name": "Michael Brown", "department": "IT", "salary": 75000 },
            { "id": 6, "name": "David Clark", "department": "HR", "salary": 52000 },
            { "id": 7, "name": "Sophia Davis", "department": "Engineering", "salary": 72000 },
            { "id": 8, "name": "Liam Harris", "department": "Marketing", "salary": 58000 },
            { "id": 9, "name": "Olivia Lewis", "department": "Finance", "salary": 62000 },
            { "id": 10, "name": "Noah Walker", "department": "IT", "salary": 78000 },
            { "id": 11, "name": "Ava Hall", "department": "HR", "salary": 53000 },
            { "id": 12, "name": "Ethan Young", "department": "Engineering", "salary": 73000 },
            { "id": 13, "name": "Isabella Allen", "department": "Marketing", "salary": 59000 },
            { "id": 14, "name": "Mason King", "department": "Finance", "salary": 63000 },
            { "id": 15, "name": "Charlotte Wright", "department": "IT", "salary": 79000 },
            { "id": 16, "name": "James Scott", "department": "HR", "salary": 54000 },
            { "id": 17, "name": "Amelia Green", "department": "Engineering", "salary": 74000 },
            { "id": 18, "name": "Benjamin Adams", "department": "Marketing", "salary": 60000 },
            { "id": 19, "name": "Mia Baker", "department": "Finance", "salary": 64000 },
            { "id": 20, "name": "Elijah Carter", "department": "IT", "salary": 80000 },
            { "id": 21, "name": "Harper Nelson", "department": "HR", "salary": 55000 },
            { "id": 22, "name": "Daniel Mitchell", "department": "Engineering", "salary": 75000 },
            { "id": 23, "name": "Evelyn Perez", "department": "Marketing", "salary": 61000 },
            { "id": 24, "name": "Henry Roberts", "department": "Finance", "salary": 65000 },
            { "id": 25, "name": "Abigail Sanchez", "department": "IT", "salary": 81000 },
            { "id": 26, "name": "Lucas Turner", "department": "HR", "salary": 56000 },
            { "id": 27, "name": "Ella Phillips", "department": "Engineering", "salary": 76000 },
            { "id": 28, "name": "Sebastian Campbell", "department": "Marketing", "salary": 62000 },
            { "id": 29, "name": "Scarlett Parker", "department": "Finance", "salary": 66000 },
            { "id": 30, "name": "Jack Evans", "department": "IT", "salary": 82000 },
            { "id": 31, "name": "Madison Edwards", "department": "HR", "salary": 57000 },
            { "id": 32, "name": "Alexander Collins", "department": "Engineering", "salary": 77000 },
            { "id": 33, "name": "Grace Stewart", "department": "Marketing", "salary": 63000 },
            { "id": 34, "name": "Oliver Morris", "department": "Finance", "salary": 67000 },
            { "id": 35, "name": "Chloe Rogers", "department": "IT", "salary": 83000 },
            { "id": 36, "name": "William Reed", "department": "HR", "salary": 58000 },
            { "id": 37, "name": "Lily Cook", "department": "Engineering", "salary": 78000 },
            { "id": 38, "name": "Samuel Morgan", "department": "Marketing", "salary": 64000 },
            { "id": 39, "name": "Sofia Bell", "department": "Finance", "salary": 68000 },
            { "id": 40, "name": "Henry Cooper", "department": "IT", "salary": 84000 },
            { "id": 41, "name": "Zoe Bailey", "department": "HR", "salary": 59000 },
            { "id": 42, "name": "Levi Rivera", "department": "Engineering", "salary": 79000 },
            { "id": 43, "name": "Victoria Peterson", "department": "Marketing", "salary": 65000 },
            { "id": 44, "name": "Gabriel Gray", "department": "Finance", "salary": 69000 },
            { "id": 45, "name": "Penelope James", "department": "IT", "salary": 85000 },
            { "id": 46, "name": "Eliana Watson", "department": "HR", "salary": 60000 },
            { "id": 47, "name": "Isaac Brooks", "department": "Engineering", "salary": 80000 },
            { "id": 48, "name": "Luna Kelly", "department": "Marketing", "salary": 66000 },
            { "id": 49, "name": "Hudson Foster", "department": "Finance", "salary": 70000 },
            { "id": 50, "name": "Avery Gonzalez", "department": "IT", "salary": 86000 }          
    ],
    transactions: [
      { id: 1, user_id: 1, amount: 200, transaction_type: "Deposit", status: "Completed" },
      { id: 2, user_id: 2, amount: 500, transaction_type: "Withdrawal", status: "Pending" },
      { id: 3, user_id: 3, amount: 100, transaction_type: "Deposit", status: "Completed" }
    ],
    inventory: [
      { id: 1, item: "Mouse", stock: 50, warehouse: "A" },
      { id: 2, item: "Keyboard", stock: 30, warehouse: "B" },
      { id: 3, item: "Monitor", stock: 20, warehouse: "C" }
    ],
    shipments: [
      { id: 1, order_id: 2, status: "Shipped", carrier: "DHL" },
      { id: 2, order_id: 3, status: "Processing", carrier: "FedEx" },
      { id: 3, order_id: 1, status: "Delivered", carrier: "UPS" }
    ],
    feedback: [
      { id: 1, user_id: 2, rating: 5, comment: "Great service!" },
      { id: 2, user_id: 1, rating: 4, comment: "Fast delivery." },
      { id: 3, user_id: 3, rating: 3, comment: "Could be better." }
    ]
  };
  
  export default dummyData;
  