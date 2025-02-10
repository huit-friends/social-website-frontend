# Social Frontend

Đây là frontend của ứng dụng mạng xã hội, được xây dựng với **Next.js**, **TypeScript**, và **Tailwind CSS**.

## Tính năng

- Hiển thị bài viết, bình luận, lượt thích
- Chat, group chat
- Hỗ trợ xác thực người dùng (JWT & Firebase)
- Giao diện responsive
- Tích hợp API AI
- Websocket để cập nhật nội dung theo thời gian thực

## Công nghệ sử dụng

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **SCSS**
- **ShadCN UI**
- **MUI (Material UI)**
- **Ant Design**
- **Firebase Authentication**
- **Websocket**
- **Axios & SWR** (gọi API RESTful)

## Hướng dẫn cài đặt

### Yêu cầu

- Node.js
- npm 
- Next.js (cài đặt qua npm)

### Cài đặt

1. Clone dự án:

   ```bash
   git clone https://github.com/huit-friends/social-website-frontend.git
   cd social-website-frontend
   ```

2. Cài đặt dependencies:

   ```bash
   npm install -f
   ```

3. Sao chép file `.env.example` thành `.env.local` và cập nhật các giá trị phù hợp.

4. Chạy project ở chế độ development:

   ```bash
   npm run dev
   ```

   Server sẽ chạy tại `http://localhost:3000`

### Build production

```bash
npm run build
npm start
```

## Kiểm tra lỗi (sửa lỗi và các cảnh báo trước khi push code)

```bash
npm run lint
```

## Quy ước đặt tên

- Biến, hàm: `camelCase`
- Component: `PascalCase`
- Thư mục, file: `kebab-case`
- Hằng số: `UPPER_CASE`

## Cấu trúc thư mục

```text
Directory structure:
└── huit-friends-social-website-frontend/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── api-client/
    │   ├── axios-client.ts
    │   └── index.ts
    ├── models/
    │   ├── common.ts
    │   └── index.ts
    ├── public/
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── routes.ts
        │   ├── (auth)/
        │   │   ├── layout.tsx
        │   │   ├── login/
        │   │   │   └── page.tsx
        │   │   └── register/
        │   │       └── page.tsx
        │   ├── (main)/
        │   │   ├── layout.tsx
        │   │   ├── about/
        │   │   │   ├── index.tsx
        │   │   │   └── page.tsx
        │   │   └── home/
        │   │       ├── index.tsx
        │   │       └── page.tsx
        │   └── admin/
        │       ├── layout.tsx
        │       └── dashboard/
        │           ├── index.tsx
        │           └── page.tsx
        ├── components/
        │   ├── theme-provider.tsx
        │   ├── toggle-theme.tsx
        │   └── ui/
        │       ├── button.tsx
        │       └── dropdown-menu.tsx
        ├── lib/
        │   └── utils.ts
        └── shared/
            └── layouts/
                ├── index.tsx
                ├── admin/
                │   ├── footer.tsx
                │   ├── header.tsx
                │   ├── index.tsx
                │   └── sidebar.tsx
                ├── auth/
                │   └── index.tsx
                ├── empty/
                │   └── index.tsx
                └── main/
                    ├── footer.tsx
                    ├── header.tsx
                    └── index.tsx

```
## Quy trình làm việc

### 1. Tạo branch mới từ `develop`

```bash
git checkout -b branch-name
```

### 2. Thêm file vào staged

```bash
git add file-name
```

hoặc thêm tất cả file:

```bash
git add .
```

### 3. Commit thay đổi

```bash
git commit -m "feat(component): thêm tính năng mới"
```

### 4. Push code lên remote

```bash
git push origin branch-name
```

