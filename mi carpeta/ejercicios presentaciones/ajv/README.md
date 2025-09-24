# DOCUMENTATION
En POSTMAN
## 1. Usuarios

### URL
`POST http://localhost:3000/ajv/usuarios`

### Request Body (raw, JSON)
```json
{
    "name": "Álvaro Sanz",
    "email": "alvaro.sanzcortes@usp.ceu.es",
    "password": "root1234",
    "money": 1000
}
```

## 2. Productos

### URL
`POST http://localhost:3000/ajv/productos`

### Request Body (raw, JSON)
```json
{
    "title": "Sudadera",
    "price": 25.0,
    "size": "XL",
    "stock": 10
}
```

