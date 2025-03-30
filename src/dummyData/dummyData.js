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
      { id: 1, name: "John Doe", department: "HR", salary: 50000 },
      { id: 2, name: "Jane Smith", department: "Engineering", salary: 70000 },
      { id: 3, name: "Sam Wilson", department: "Marketing", salary: 55000 }
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
  