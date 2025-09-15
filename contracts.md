# API Contracts - Finanční Market

## Mock Data který je třeba nahradit backend API

### 1. Uživatelské údaje (mockUser)
```javascript
mockUser: {
  id, name, email, phone, isLoggedIn, avatar
}
```

### 2. Produkty (mockProducts) 
```javascript
mockProducts: {
  pojisteni: [...], uvery: [...], investice: [...]
}
```

### 3. Mock API volání (mockAPI)
```javascript
mockAPI: {
  login(email, password),
  register(userData),
  sendContactForm(formData),
  requestProduct(productData)
}
```

## Backend API Endpoints potřeba implementovat

### Authentication
- `POST /api/auth/login` - přihlášení
- `POST /api/auth/register` - registrace
- `POST /api/auth/logout` - odhlášení
- `GET /api/auth/me` - aktuální uživatel

### Products
- `GET /api/products` - všechny produkty
- `GET /api/products/:category` - produkty podle kategorie
- `GET /api/products/:category/:id` - detail produktu

### Contact & Requests
- `POST /api/contact` - kontaktní formulář
- `POST /api/requests/product` - žádost o produkt

### User Dashboard
- `GET /api/user/contracts` - smlouvy uživatele
- `GET /api/user/investments` - investice uživatele
- `GET /api/user/notifications` - oznámení
- `GET /api/user/documents` - dokumenty

## MongoDB Modely

### User
```
{
  _id, email, password (hashed), name, phone, 
  avatar, createdAt, updatedAt
}
```

### Product
```
{
  _id, category, productId, name, icon, description, 
  features[], price, provider
}
```

### ProductRequest
```
{
  _id, userId, productId, name, email, phone, 
  message, status, createdAt
}
```

### Contact
```
{
  _id, name, email, phone, subject, message, 
  status, createdAt
}
```

### UserContract
```
{
  _id, userId, contractNumber, type, provider,
  status, validFrom, validTo, premium/amount,
  createdAt
}
```

## Frontend Integration Changes

1. Nahradit mock volání skutečnými API calls
2. Implementovat error handling
3. Přidat loading states
4. Implementovat autentifikaci pomocí JWT
5. Přidat axios interceptory pro token handling

## Security & Validation

- JWT tokeny pro autentifikaci
- Bcrypt pro hash hesel
- Input validation na backend
- CORS pro frontend komunikaci
- Rate limiting na API