# Cranium Back End

Microservices using ExpressJS

| Services | Ports |
|---|:---:|
| Client | `3000` |
| API Gateway | `4000` |
| --- | --- |
| Public | `4001` |
| Home Dashboard | `4002` |
| Event Dashboard | `4003` |
| Event Homepage | `4004` |
| Admin | `4005` |
| --- | --- |
| User | `4011` |
  
## Tahap 1

Visitor = Not Login
User = Already Login

Batasan aktivitas yang perlu dikerjakan BE & FE tahap 1:

- Landing Page Deploy SSR
- Visitor bisa melihat-lihat dan mengetahui semua fitur dan kegunaan dari websites kita
- Table user using Sequelize (migration, factory, and faker)
- Visitor bisa melakukan Login dan Register hingga menuju Home Dashboard.
- Visitor Login dan bisa mengakses websites dari sudut pandang USER.
- User dapat mengakses Dashboard (belum semua fitur).
- User bisa ganti biodata melalui Profile.
- Middleware visitor tidak bisa mengakses fitur USER.

Implementasi [ Public, User, Home Dashboard ] Service.

![Microservices Scheme 01](https://user-images.githubusercontent.com/60127414/164966639-f6a10ad6-931f-4233-aaca-364017a1659b.png)
