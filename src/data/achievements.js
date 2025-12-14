export const ACHIEVEMENTS = {
            history: {
                name: "История",
                subfilters: {
                    trust: { name: "Доверие агентов", version: "v1.0" },
                    phaethon: { name: "Хроника Фаэтона", version: "v1.0" },
                    agent_stories: { name: "Истории агентов", version: "v1.1" },
                    specials: { name: "Специальные выпуски", version: "v1.1" },
                    randomness: { name: "Время случайностей", version: "v1.2" },
                    melt_keys: { name: "Пусть клавиши плавятся", version: "v1.2" }
                },
                data: {
                    trust: [
                        { id: "t1", title: "Первое впечатление", desc: "Повысьте доверие любого агента до 3 уровня.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "t2", title: "Истинное доверие", desc: "Повысьте доверие 3 агентов до 5 уровня.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "t3", title: "Доверие на всю жизнь", desc: "Повысьте доверие 5 агентов до максимального уровня.", tier: "gold", version: "v1.0", reward: 20 }
                    ],
                    phaethon: [
                        { id: "p1", title: "Хроники начинаются", desc: "Завершите первую главу Хроники Фаэтона.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "p2", title: "Середина пути", desc: "Завершите главу 5.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "p3", title: "Финал эпохи", desc: "Завершите последнюю главу Хроники Фаэтона.", tier: "gold", version: "v1.2", reward: 20 }
                    ],
                    agent_stories: [
                        { id: "as1", title: "Личный разговор", desc: "Прочитайте историю агента Беллы.", tier: "bronze", version: "v1.1", reward: 5 },
                        { id: "as2", title: "Больше историй", desc: "Прочитайте истории 4 агентов.", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "as3", title: "Связи и судьбы", desc: "Прочитайте истории 8 агентов.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    specials: [
                        { id: "sp1", title: "Праздничный выпуск", desc: "Завершите праздничное событие «Новогодний шторм».", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "sp2", title: "Особое издание", desc: "Соберите все коллекционные карточки события.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    randomness: [
                        { id: "r1", title: "Шанс на удачу", desc: "Выполните 5 случайных заданий.", tier: "bronze", version: "v1.2", reward: 5 },
                        { id: "r2", title: "Системный сбой", desc: "Выполните 15 случайных заданий.", tier: "silver", version: "v1.2", reward: 10 },
                        { id: "r3", title: "Хаос под контролем", desc: "Завершите 20 случайных событий.", tier: "gold", version: "v1.2", reward: 20 }
                    ],
                    melt_keys: [
                        { id: "mk1", title: "Первый геймплей", desc: "Сыграйте в мини-игру «Клавиатурный хаос».", tier: "bronze", version: "v1.2", reward: 5 },
                        { id: "mk2", title: "Мастер клавиатуры", desc: "Достигните 90% точности в мини-игре.", tier: "silver", version: "v1.2", reward: 10 }
                    ]
                }
            },
            city: {
                name: "Город",
                subfilters: {
                    proxy: { name: "Бизнес прокси", version: "v1.0" },
                    yanus: { name: "Район Януса", version: "v1.0" },
                    waifey: { name: "Вайфей", version: "v1.1" },
                    bypass: { name: "Район Объездной", version: "v1.1" },
                    throne: { name: "Тронный район", version: "v1.2" }
                },
                data: {
                    proxy: [
                        { id: "pr1", title: "Первый контракт", desc: "Завершите первый контракт прокси.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "pr2", title: "Надёжный агент", desc: "Выполните 20 контрактов.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "pr3", title: "Легенда Нью-Эрры", desc: "Выполните 50 контрактов.", tier: "gold", version: "v1.0", reward: 20 }
                    ],
                    yanus: [
                        { id: "y1", title: "Киоск Хаула", desc: "Разблокируйте газетный киоск.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "y2", title: "Видеоархив", desc: "Разблокируйте видеопрокат.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "y3", title: "Да здравствует Янус!", desc: "Откройте все объекты в районе Януса.", tier: "silver", version: "v1.0", reward: 10 }
                    ],
                    waifey: [
                        { id: "w1", title: "Танец с AI", desc: "Победите босса «ДискоБОТ».", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "w2", title: "Вайфей-легенда", desc: "Завершите все задания Вайфея на 5★.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    bypass: [
                        { id: "b1", title: "Обходной путь", desc: "Пройдите все локации района Объездной.", tier: "bronze", version: "v1.1", reward: 5 },
                        { id: "b2", title: "Подпольный король", desc: "Победите всех боссов района Объездной.", tier: "silver", version: "v1.1", reward: 10 }
                    ],
                    throne: [
                        { id: "th1", title: "Восхождение", desc: "Достигните вершины Тронного района.", tier: "gold", version: "v1.2", reward: 20 }
                    ]
                }
            },
            tactics: {
                name: "Тактика",
                subfilters: {
                    combat: { name: "Боевое мастерство", version: "v1.0" },
                    decay: { name: "Город увядания", version: "v1.0" },
                    enemies: { name: "Враждебные цели", version: "v1.1" },
                    merits: { name: "Боевые заслуги", version: "v1.1" },
                    abyss: { name: "Затерянная бездна", version: "v1.2" }
                },
                data: {
                    combat: [
                        { id: "c1", title: "Первый шаг", desc: "Используйте комбо из 3 атак без промаха.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "c2", title: "Боец-профессионал", desc: "Выполните 50 комбо без промаха.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "c3", title: "Абсолютный контроль", desc: "Завершите 10 боёв без потерь HP.", tier: "gold", version: "v1.0", reward: 20 }
                    ],
                    decay: [
                        { id: "d1", title: "Следы прошлого", desc: "Исследуйте все зоны Города увядания.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "d2", title: "Память города", desc: "Соберите все артефакты увядания.", tier: "gold", version: "v1.0", reward: 20 }
                    ],
                    enemies: [
                        { id: "e1", title: "Сбор образцов", desc: "Победите 50 врагов типа «Хтон».", tier: "bronze", version: "v1.1", reward: 5 },
                        { id: "e2", title: "Охотник", desc: "Победите 200 врагов типа «Эхо».", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "e3", title: "Истребитель", desc: "Победите 500 врагов любого типа.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    merits: [
                        { id: "m1", title: "Рекрут", desc: "Достигните 5-го ранга в рейтинговом режиме.", tier: "bronze", version: "v1.1", reward: 5 },
                        { id: "m2", title: "Ветеран", desc: "Достигните 10-го ранга.", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "m3", title: "За честь и славу", desc: "Достигните 15-го ранга в рейтинговом режиме.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    abyss: [
                        { id: "a1", title: "Первый спуск", desc: "Пройдите уровень 5 Затерянной бездны.", tier: "bronze", version: "v1.2", reward: 5 },
                        { id: "a2", title: "Глубже, чем страх", desc: "Пройдите уровень 10 Затерянной бездны.", tier: "silver", version: "v1.2", reward: 10 },
                        { id: "a3", title: "Покоритель Бездны", desc: "Пройдите уровень 30 Затерянной бездны.", tier: "gold", version: "v1.2", reward: 20 }
                    ]
                }
            },
            exploration: {
                name: "Исследование",
                subfilters: {
                    caves: { name: "Путеводитель по кавернам", version: "v1.0" },
                    zero_key: { name: "Клавиша «Ноль»", version: "v1.1" },
                    recon: { name: "Исследования в режиме разведки", version: "v1.2" }
                },
                data: {
                    caves: [
                        { id: "cv1", title: "Одна каверна", desc: "Пройдите любую каверну.", tier: "bronze", version: "v1.0", reward: 5 },
                        { id: "cv2", title: "Множество тайн", desc: "Пройдите 10 каверн.", tier: "silver", version: "v1.0", reward: 10 },
                        { id: "cv3", title: "Коллекционер", desc: "Откройте все каверны.", tier: "gold", version: "v1.0", reward: 20 }
                    ],
                    zero_key: [
                        { id: "z1", title: "Клавиша найдена", desc: "Найдите первую «Клавишу Ноль».", tier: "bronze", version: "v1.1", reward: 5 },
                        { id: "z2", title: "Ещё одна", desc: "Найдите 5 Ключей Ноль.", tier: "silver", version: "v1.1", reward: 10 },
                        { id: "z3", title: "Хранитель секретов", desc: "Соберите все Ключи Ноль.", tier: "gold", version: "v1.1", reward: 20 }
                    ],
                    recon: [
                        { id: "rc1", title: "Тайный агент", desc: "Соберите 20 данных в режиме разведки.", tier: "bronze", version: "v1.2", reward: 5 },
                        { id: "rc2", title: "Глаз города", desc: "Соберите 100 данных.", tier: "silver", version: "v1.2", reward: 10 },
                        { id: "rc3", title: "Глаз и ухо города", desc: "Завершите все разведзадания.", tier: "gold", version: "v1.2", reward: 20 }
                    ]
                }
            }
        };
