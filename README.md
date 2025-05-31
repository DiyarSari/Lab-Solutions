# User Management System

## Gereksinimler

Projeyi çalıştırmak için aşağıdaki teknolojilere ihtiyacınız var:

- Node.js (v14 veya üzeri)
- Go (v1.16 veya üzeri)
- SQLite

## Proje Yapısı

user-management/
├── backend/
│   ├── main.go
│   └── go.mod
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── UserList.tsx
    │   │   └── UserForm.tsx
    │   └── App.tsx
    ├── package.json
    └── vite.config.ts

## Projeyi Çalıştırma

### Backend

1. backend klasörüne geçin:
   cd backend

2. Gerekli Go bağımlılıklarını yükleyin:
   go mod tidy

3. Sunucuyu başlatın:
   go run main.go

Sunucu şu adreste çalışır: http://localhost:8080

### Frontend

1. frontend klasörüne geçin:
   cd frontend

2. Node modüllerini yükleyin:
   npm install

3. Geliştirme sunucusunu başlatın:
   npm start

Uygulama şu adreste çalışır: http://localhost:3000

## API adresleri

- GET /api/users → Tüm kullanıcıları getirir
- GET /api/users/:id → Belirli bir kullanıcıyı getirir
- POST /api/users → Yeni kullanıcı oluşturur
- PUT /api/users/:id → Kullanıcıyı günceller
- DELETE /api/users/:id → Kullanıcıyı siler

## Özellikler

- Kullanıcıları tablo halinde listeleme
- Yeni kullanıcı ekleme
- Var olan kullanıcıyı düzenleme
- Kullanıcı silme
