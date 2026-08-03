# Кейс «Виртуальные машины» — контекст проекта

Одностраничный кейс-стади для портфолио (продуктовый дизайнер, Cloud.ru), собранный из Figma пиксель-в-пиксель.

- **Figma:** файл Portfolio `0JIZtejPi0sOLWM3nkNwHI`, десктоп-фрейм `2131:6446`, мобильный `2136:19274`. Доступ у аккаунта `archa / arturbalcer@yandex.ru`.
- **Стек:** Vite + React + TypeScript + Tailwind CSS 3. Структура готова под деплой на Vercel (авто-детект Vite, вывод `dist/`).

## Как запускать превью

Нет системного Node — Node 20 лежит в `~/.local/node`. Превью-сервер читает из `/tmp`, не из `~/Desktop`.

```bash
# 1. правки делаются в ~/Desktop/claude/portfolio/vm-case/
# 2. синхронизировать в /tmp:
rsync -a --delete --exclude node_modules ~/Desktop/claude/portfolio/vm-case/ /tmp/vm-case/
# 3. превью: dev-сервер "vm-case" на http://localhost:5190 (см. .claude/launch.json)
# 4. прод-сборка:
export PATH=$HOME/.local/node/bin:$PATH && cd ~/Desktop/claude/portfolio/vm-case && npm run build
```

Проверка секций — по якорям: `#hero #context #problems #search #chips #prototypes #research #insights #outcome`.

## Структура

```
src/
├── App.tsx                       # порядок секций + Navbar + TableOfContents
├── index.css                     # tailwind + импорт токенов + smooth scroll
├── styles/tokens.css             # ВСЕ дизайн-токены (CSS-переменные) + тайп-шкала .t-*
├── components/
│   ├── Navbar.tsx                # фикс. «пилюля» навбара (только десктоп)
│   └── TableOfContents.tsx       # навигация «палочки → раскрытие», как в ChatGPT
└── sections/
    ├── Hero.tsx                  # обложка (десктоп + мобилка по своим спекам)
    ├── Context.tsx               # #context — определения + 3 термин-карточки + «Процесс»
    ├── Problems.tsx              # #problems — full-width, 2 перекрывающиеся карточки
    ├── SearchSolutions.tsx       # #search — сетка конкурентов 2×2 + текст
    ├── ChipsSolution.tsx         # #chips — зелёная карточка + «плавающий» телефон
    ├── Prototypes.tsx            # #prototypes — 3 варианта + страница драфтов
    ├── Research.tsx              # #research — 4 этапа теста
    ├── Insights.tsx              # #insights — 4 карточки с CSS-барами
    └── Outcome.tsx               # #outcome — итоги (grid 2×2)
```

## Токены (`src/styles/tokens.css`)

Единый источник, зеркалит переменные Figma (коллекции Color / Radius / Spacing + текст-стили). Для будущего импорта на «настоящий» фронт — брать отсюда.

- **Цвета:** `--green-500/700/400/neon`, `--white/black/ink`, альфа-градации `--white-*`, `--black-*`, `--ink-*`.
- **Радиусы:** `--radius-sm(12) md(20) lg(32) media(36) xl(44) 2xl(64) full(200)`.
- **Отступы:** `--space-2…64`.
- **Типографика:** классы `.t-display-64`, `.t-heading-44/32/24/18`, `.t-title-64`, `.t-body-20(-tight)`, `.t-label-16`, `.t-caption-14(-relaxed)/12`, `.t-micro-10`. Шрифт Inter (Google Fonts, подключён в `index.html`).

## Адаптив

- Брейкпоинт `lg` (1024px): ниже — мобильная раскладка (по фрейму `2136:19274`), выше — десктоп 1440.
- «Обёрточные» секции (Проблемы, Чипсы, Итоги) тянутся на всю ширину, **контент внутри ≤ 1080px** по центру.
- Секция **«Проблемы» — full-bleed** на всю ширину экрана.
- Скругления карточек-обёрток: **32px на мобилке**, 64px на десктопе.
- Навбар — `position: fixed`, только десктоп (на мобилке навбара нет).

## Ассеты (`public/assets/`)

Все растровые скриншоты экспортированы из Figma через `download_assets` в **2×** (для чёткости на retina). Скругления медиа задаёт CSS (`--radius-media` = 36), а не запечены в PNG.

**Как переэкспортировать / добавить чётче:** Figma → `download_assets` с `defaultScale: 2` (или SVG для вектора). Правило: физический размер картинки ≥ 2× размера отображения.

**Карточки «Процесс»** (`proc-vcpu/ram/flavour.png`): `proc-flavour.png` пока набросок от руки — заменить финальной иллюстрацией (экспорт 2×), путь тот же.

## Навигация по кейсу (TableOfContents)

- Справа по центру, только десктоп; отступ 32px от края.
- В покое — «палочки» (по секции), зазор 12px; активная длиннее и 100%.
- Цвет адаптируется под фон активной секции: тёмный фон → белые (неактивные 12%), светлый → тёмные (неактивные 24%).
- Наведение → тёмная панель с названиями секций (как в ChatGPT). Клик → smooth scroll.
- Активная секция отслеживается через `IntersectionObserver`.

## Smooth scroll

`scroll-behavior: smooth` на `html` + `scroll-margin-top: 32px` на секциях (под фикс. навбар) + отключение при `prefers-reduced-motion`.

## Что осталось

- **«Проблемы»** — Артур хотел доработать секцию отдельно (пока как в текущем макете).
- **Финальная иллюстрация Flavour** — заменить набросок.
- **Деплой на Vercel** — структура готова; нужен аккаунт/репозиторий Артура.

## TOV для текста кейсов

Инфостиль (Ильяхов): факты, глаголы, без усилителей — но с первым лицом «я» и рассуждением в развилках. Сухо, но не холодно. Метрики Cloud.ru под NDA → усиливаем процесс/решения, цифры даём относительно. Черновик текста кейса: `~/Desktop/claude/portfolio/case-virtualnye-mashiny.md`.
