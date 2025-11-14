# Grey-Box Project

A dual-environment TypeScript project running on:

- **Google Apps Script (GAS)**
- **Node.js with TypeScript**
- **Vitest automated tests**
- **GitHub Actions CI pipeline**

---

## 🚀 Features

- GAS Web API using esbuild bundling
- Node runtime logic
- Shared TypeScript types
- Vitest testing
- GitHub CI pipeline
- Postman API testing collection

---

# 📁 Folder Structure

```
Grey-Box/
│
├── src/
│   ├── gas/
│   │   ├── main.ts
│   │   └── doGet.ts
│   ├── node/
│   │   ├── index.ts
│   │   └── add.ts
│   ├── shared/
│   │   └── types.ts
│
├── build/              ← GAS final output
├── dist/               ← Node final output
│
├── tests/
│   └── main.test.ts
│
├── .clasp.json
├── esbuild.gas.mjs
├── postman_collection.json
├── package.json
└── README.md
```

---

# 🛠 Installation

```
npm install
```

---

# 🏗 Build Commands

### GAS build
```
npm run build:gas
```

### Node build
```
npm run build
```

---

# ☁ Deploy to Google Apps Script

### 1. Login
```
clasp login
```

### 2. Push files
```
clasp push
```

### 3. Deploy Web App
Inside Apps Script:

> Deploy → New Deployment → Web app

Copy your deployment URL.

---

# 📡 API Endpoints

### Default
```
GET /exec
```

### JSON mode
```
GET /exec?mode=json
```

### Add numbers
```
GET /exec?a=4&b=7
```

---

# 🧪 Tests

```
npm run test
```

---

# 👨‍💻 GitHub CI

Automatically runs:

- Install deps  
- Tests  
- Build Node  
- Build GAS  

On every push to `main`.

---

# 📬 Postman Collection

Located at:

```
postman_collection.json
```

---

# 🤝 Contributing

Pull requests welcome!

