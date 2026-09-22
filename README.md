# 🚀 My Portfolio Website

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Pydantic](https://img.shields.io/badge/Pydantic-Blue?style=for-the-badge&logo=pydantic&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📌 О проекте
Этот сайт-визитка содержит:
 - ✅ **Информацию обо мне**
 - ✅ **Навыки** (с возможностью добавления)
 - ✅ **Портфолио** (проекты, стек, ссылки)
 - ✅ **Блог** (лента новостей с постами)
 - ✅ **Форма для предложений о сотрудничестве**
 - ✅ **Контакты** (Telegram, GitHub, LinkedIn, hh.ru, рабочая почта)
 - ✅ **Три языка** (Русский, Английский, Немецкий)

## ⚡ Технологии
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** FastAPI, Pydantic, Uvicorn
- **DevOps:** Docker, Docker Compose

## Запуск через Docker

Нужен установленный Docker с поддержкой Compose.

```sh
git clone https://github.com/quwiier/my-portfolio-site.git
cd my-portfolio-site
docker compose up --build
```

После запуска:

- Сайт: http://localhost:3000
- API: http://localhost:8000
- Проверка API: http://localhost:8000/api/health
- Документация API: http://localhost:8000/docs

Остановить приложение:

```sh
docker compose down
```

После изменения кода пересобрать образы:

```sh
docker compose up --build
```

## Локальная разработка

Фронтенд:

```sh
cd frontend
npm ci
npm run dev
```

Бэкенд — в отдельном терминале:

```sh
cd backend
python -m venv .venv
```

Активируй окружение своей командой для системы, затем:

```sh
pip install -r requirements.txt
uvicorn app.main:app --reload
```

База данных и корневой `.env` для текущего состояния проекта не требуются.
