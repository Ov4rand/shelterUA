// Card data
const professions = [
    'Лікар', 'Інженер', 'Військовий', 'Вчитель', 'Кухар', 'Фермер', 'Електрик',
    'Механік', 'Програміст', 'Будівельник', 'Водій', 'Пожежний', 'Поліцейський'
];

const hobbies = [
    'Садівництво', 'Радіоаматорство', 'Бойові мистецтва', 'Знання трав',
    'Полювання', 'Риболовля', 'Кулінарія', 'Медицина', 'Електроніка',
    'Механіка', 'Будівництво', 'Музика', 'Спорт'
];

const health = [
    'Абсолютно здоровий', 'Хронічне захворювання', 'Інвалідність',
    'Алергія', 'Астма', 'Діабет', 'Гіпертонія', 'Проблеми з серцем'
];

const phobias = [
    'Боїться висоти', 'Клептоман', 'Колишній злочинець', 'Боїться темряви',
    'Боїться замкнутого простору', 'Боїться води', 'Боїться крові',
    'Боїться павуків', 'Боїться змій'
];

const items = [
    'Генератор', 'Запас ліків', 'Унікальна книга знань', 'Рація',
    'Набір інструментів', 'Запас їжі', 'Медична аптечка', 'Зброя',
    'Спальний мішок', 'Компас', 'Карта'
];

const traits = [
    'Лідерські якості', 'Емпатія', 'Винахідливість', 'Фізична сила',
    'Розум', 'Хоробрість', 'Комунікабельність', 'Організованість',
    'Креативність', 'Аналітичне мислення'
];

const disasters = [
    {
        title: 'Ядерна війна',
        description: 'Світ охоплений ядерною війною. Радіаційне зараження, ядерна зима та руйнування інфраструктури. Повітря отруєне, вода забруднена, а земля непридатна для сільського господарства. Тривалість: 5-10 років.'
    },
    {
        title: 'Епідемія',
        description: 'Смертельний вірус поширюється по всьому світу. Високий рівень заразності, відсутність вакцини. Карантинні заходи не ефективні. Тривалість: 2-3 роки.'
    },
    {
        title: 'Зомбі-апокаліпсис',
        description: 'Невідомий вірус перетворює людей на зомбі. Агресивні, невразливі до болю, поширюють інфекцію через укуси. Тривалість: невідомо.'
    },
    {
        title: 'Екологічна катастрофа',
        description: 'Глобальне забруднення навколишнього середовища. Токсичні речовини в повітрі, воді та ґрунті. Масове вимирання рослин та тварин. Тривалість: 10-15 років.'
    },
    {
        title: 'Метеоритний дощ',
        description: 'Землю бомбардують метеорити різного розміру. Масові руйнування, пожежі, цунамі. Зміна клімату через пил в атмосфері. Тривалість: 1-2 роки.'
    },
    {
        title: 'Глобальне потепління',
        description: 'Різке підвищення температури на планеті. Танення льодовиків, підвищення рівня океану, екстремальні погодні умови. Тривалість: 20-30 років.'
    },
    {
        title: 'Сонячна активність',
        description: 'Надпотужні сонячні спалахи виводять з ладу всю електроніку. Електромагнітні імпульси руйнують електричні мережі. Тривалість: 1-2 роки.'
    },
    {
        title: 'Повінь',
        description: 'Глобальна повінь через танення льодовиків. Більшість суші затоплено. Забруднення води, руйнування будівель. Тривалість: 3-5 років.'
    },
    {
        title: 'Землетрус',
        description: 'Серія потужних землетрусів по всьому світу. Руйнування міст, зміна рельєфу, цунамі. Тривалість: 1 рік.'
    },
    {
        title: 'Вулканічна активність',
        description: 'Масове виверження вулканів. Вулканічний попіл в атмосфері, кислотні дощі, зміна клімату. Тривалість: 2-3 роки.'
    }
];

const bunkerConditions = [
    {
        title: 'Обмежені запаси їжі',
        description: 'Запас їжі розрахований на 6 місяців для 10 осіб. Необхідно встановити систему вирощування їжі. Обмежений доступ до свіжої води.'
    },
    {
        title: 'Недостатньо місць',
        description: 'Бункер розрахований на 8 осіб, але має 12 місць для сну. Обмежений простір для зберігання. Проблеми з вентиляцією при максимальному заповненні.'
    },
    {
        title: 'Наявність таємної кімнати',
        description: 'В бункері є прихована кімната з додатковими запасами. Містить медикаменти, зброю та інструменти. Доступ тільки через складний механізм.'
    },
    {
        title: 'Проблеми з вентиляцією',
        description: 'Система вентиляції працює на 70% потужності. Обмежений доступ свіжого повітря. Необхідно регулярно чистити фільтри.'
    },
    {
        title: 'Обмежений доступ до води',
        description: 'Водяна система забезпечує 5 літрів води на людину на день. Фільтраційна система потребує регулярного обслуговування. Запас води на 3 місяці.'
    },
    {
        title: 'Проблеми з електрикою',
        description: 'Електрична система працює від генератора. Запас палива на 4 місяці. Обмежена потужність - не всі прилади можуть працювати одночасно.'
    },
    {
        title: 'Наявність радіації',
        description: 'Підвищений рівень радіації в деяких частинах бункера. Необхідно використовувати захисні костюми. Обмежений час перебування в зоні радіації.'
    },
    {
        title: 'Обмежений доступ до медикаментів',
        description: 'Базова аптечка на 10 осіб. Обмежений запас антибіотиків та болезаспокійливих. Необхідно встановити систему вирощування лікарських рослин.'
    },
    {
        title: 'Проблеми з комунікацією',
        description: 'Радіостанція працює з перебоями. Обмежений радіус дії. Необхідно регулярно перевіряти антени та замінювати батареї.'
    }
];

const playerActions = [
    'Може лікувати інших гравців',
    'Може ремонтувати обладнання інших гравців',
    'Може навчати інших гравців',
    'Може захищати інших гравців',
    'Може досліджувати стан інших гравців',
    'Може психологічно підтримувати інших гравців',
    'Може організовувати роботу інших гравців',
    'Може контролювати ресурси інших гравців',
    'Може заміняти інших гравців на їх робочих місцях',
    'Може аналізувати поведінку інших гравців'
];

const playerConditions = [
    'Покращує систему вентиляції',
    'Збільшує запаси їжі',
    'Покращує систему фільтрації води',
    'Оптимізує використання електрики',
    'Зменшує рівень радіації',
    'Покращує систему комунікації',
    'Збільшує простір для зберігання',
    'Покращує медичне забезпечення',
    'Оптимізує використання ресурсів',
    'Покращує психологічний клімат'
];

// UI Elements
const cardsBtn = document.getElementById('cardsBtn');
const gameBtn = document.getElementById('gameBtn');
const mainMenu = document.getElementById('mainMenu');
const cardsSection = document.getElementById('cardsSection');
const gameSection = document.getElementById('gameSection');
const cardsList = document.getElementById('cardsList');
const playerCountInput = document.getElementById('playerCount');
const startGameBtn = document.getElementById('startGame');

// Game Flow Elements
const gameFlow = document.getElementById('gameFlow');
const disasterInfo = document.getElementById('disasterInfo');
const bunkerInfo = document.getElementById('bunkerInfo');
const playersList = document.getElementById('playersList');
const nextRoundBtn = document.getElementById('nextRound');
const endGameBtn = document.getElementById('endGame');

let currentGame = null;

// Navigation
cardsBtn.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    gameSection.classList.remove('active');
    cardsSection.classList.add('active');
});

gameBtn.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    cardsSection.classList.remove('active');
    gameSection.classList.add('active');
});

// Card generation and management
function generateCardCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}

function generatePlayerCard() {
    return {
        type: 'player',
        code: generateCardCode(),
        name: `Гравець ${Math.floor(Math.random() * 1000)}`,
        profession: professions[Math.floor(Math.random() * professions.length)],
        hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
        health: health[Math.floor(Math.random() * health.length)],
        phobia: phobias[Math.floor(Math.random() * phobias.length)],
        item: items[Math.floor(Math.random() * items.length)],
        trait: traits[Math.floor(Math.random() * traits.length)],
        action: playerActions[Math.floor(Math.random() * playerActions.length)],
        condition: playerConditions[Math.floor(Math.random() * playerConditions.length)]
    };
}

function generateDisasterCard() {
    const disaster = disasters[Math.floor(Math.random() * disasters.length)];
    return {
        type: 'disaster',
        code: generateCardCode(),
        title: disaster.title,
        description: disaster.description
    };
}

function generateBunkerCard() {
    const bunker = bunkerConditions[Math.floor(Math.random() * bunkerConditions.length)];
    return {
        type: 'bunker',
        code: generateCardCode(),
        title: bunker.title,
        description: bunker.description
    };
}

// Card display
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    
    if (card.type === 'player') {
        cardDiv.innerHTML = `
            <button class="delete-card">×</button>
            <h3>Картка гравця: ${card.name}</h3>
            <p><strong>Код:</strong> ${card.code}</p>
            <button class="clipboard-btn" title="Копіювати в base64">📋</button>
            <div class="spoiler-content">
                <p><strong>Професія:</strong> <span class="spoiler">${card.profession}</span></p>
                <p><strong>Хобі:</strong> <span class="spoiler">${card.hobby}</span></p>
                <p><strong>Стан здоров'я:</strong> <span class="spoiler">${card.health}</span></p>
                <p><strong>Фобія/Секрет:</strong> <span class="spoiler">${card.phobia}</span></p>
                <p><strong>Цінний предмет:</strong> <span class="spoiler">${card.item}</span></p>
                <p><strong>Особиста якість:</strong> <span class="spoiler">${card.trait}</span></p>
                <p><strong>Дія:</strong> <span class="spoiler">${card.action}</span></p>
                <p><strong>Умова:</strong> <span class="spoiler">${card.condition}</span></p>
            </div>
        `;

        // Add click event listeners to all spoiler elements
        const spoilers = cardDiv.querySelectorAll('.spoiler');
        spoilers.forEach(spoiler => {
            spoiler.addEventListener('click', () => {
                spoiler.classList.toggle('revealed');
            });
        });

        // Add clipboard functionality
        const clipboardBtn = cardDiv.querySelector('.clipboard-btn');
        clipboardBtn.addEventListener('click', () => {
            const cardText = `
Картка гравця: ${card.name}
Професія: ${card.profession}
Хобі: ${card.hobby}
Стан здоров'я: ${card.health}
Фобія/Секрет: ${card.phobia}
Цінний предмет: ${card.item}
Особиста якість: ${card.trait}
Дія: ${card.action}
Умова: ${card.condition}
            `.trim();
            
            const base64Text = btoa(unescape(encodeURIComponent(cardText)));
            navigator.clipboard.writeText(base64Text).then(() => {
                alert('Картку скопійовано в буфер обміну у форматі base64');
            }).catch(err => {
                console.error('Помилка копіювання:', err);
                alert('Помилка копіювання');
            });
        });

        // Add delete functionality
        const deleteBtn = cardDiv.querySelector('.delete-card');
        deleteBtn.addEventListener('click', () => {
            if (confirm('Ви впевнені, що хочете видалити цю картку?')) {
                delete storedCards[card.code];
                localStorage.setItem('bunkerCards', JSON.stringify(storedCards));
                displayedCards.delete(card.code);
                cardDiv.remove();
            }
        });
    } else if (card.type === 'disaster') {
        cardDiv.innerHTML = `
            <h3>Картка Катастрофи</h3>
            <p><strong>Код:</strong> ${card.code}</p>
            <p><strong>Опис:</strong> ${card.description}</p>
        `;
    } else if (card.type === 'bunker') {
        cardDiv.innerHTML = `
            <h3>Картка Бункера</h3>
            <p><strong>Код:</strong> ${card.code}</p>
            <p><strong>Опис:</strong> ${card.description}</p>
        `;
    }
    
    return cardDiv;
}

// Card storage
let storedCards = {};
let displayedCards = new Set(); // Track which cards are currently displayed

function storeCard(card) {
    storedCards[card.code] = card;
    localStorage.setItem('bunkerCards', JSON.stringify(storedCards));
}

function loadStoredCards() {
    const savedCards = localStorage.getItem('bunkerCards');
    if (savedCards) {
        storedCards = JSON.parse(savedCards);
    }
}

function displayStoredCards() {
    cardsList.innerHTML = '';
    displayedCards.clear();
}

// Add base64 card handling
const base64Input = document.getElementById('base64Input');
const addBase64CardBtn = document.getElementById('addBase64Card');

addBase64CardBtn.addEventListener('click', () => {
    const base64Text = base64Input.value.trim();
    if (base64Text) {
        try {
            const decodedText = decodeURIComponent(escape(atob(base64Text)));
            const lines = decodedText.split('\n').map(line => line.trim()).filter(Boolean);
            const cardType = document.querySelector('input[name="cardType"]:checked').value;

            let card;
            if (cardType === 'player') {
                card = {
                    type: 'player',
                    code: generateCardCode(),
                    name: lines[0].replace('Картка гравця:', '').trim(),
                    profession: lines[1].replace('Професія:', '').trim(),
                    hobby: lines[2].replace('Хобі:', '').trim(),
                    health: lines[3].replace('Стан здоров\'я:', '').trim(),
                    phobia: lines[4].replace('Фобія/Секрет:', '').trim(),
                    item: lines[5].replace('Цінний предмет:', '').trim(),
                    trait: lines[6].replace('Особиста якість:', '').trim(),
                    action: lines[7].replace('Дія:', '').trim(),
                    condition: lines[8].replace('Умова:', '').trim()
                };
            } else if (cardType === 'disaster') {
                card = {
                    type: 'disaster',
                    code: generateCardCode(),
                    title: lines[1].trim(),
                    description: lines[2].trim()
                };
            } else if (cardType === 'bunker') {
                card = {
                    type: 'bunker',
                    code: generateCardCode(),
                    title: lines[1].trim(),
                    description: lines[2].trim()
                };
            }

            if (!displayedCards.has(card.code)) {
                storeCard(card);
                cardsList.appendChild(createCardElement(card));
                displayedCards.add(card.code);
                base64Input.value = '';
            } else {
                alert('Ця картка вже додана');
            }
        } catch (error) {
            console.error('Помилка декодування base64:', error);
            alert('Помилка декодування base64. Перевірте правильність формату.');
        }
    }
});

// Збереження та завантаження прогресу гри
function saveGameProgress() {
    // Перетворюємо Set на масив для збереження
    const gameToSave = currentGame ? { ...currentGame, eliminatedPlayers: Array.from(currentGame.eliminatedPlayers) } : null;
    localStorage.setItem('bunkerGameProgress', JSON.stringify(gameToSave));
}

function loadGameProgress() {
    const saved = localStorage.getItem('bunkerGameProgress');
    if (saved) {
        currentGame = JSON.parse(saved);
        // Відновлюємо eliminatedPlayers як Set
        if (currentGame && currentGame.eliminatedPlayers) {
            currentGame.eliminatedPlayers = new Set(currentGame.eliminatedPlayers);
        }
        return true;
    }
    return false;
}

// Game setup
function startNewGame() {
    const playerCount = parseInt(playerCountInput.value);
    if (playerCount >= 3 && playerCount <= 16) {
        // Generate cards for the game
        currentGame = {
            players: Array(playerCount).fill().map(() => ({
                ...generatePlayerCard(),
                name: `Гравець ${Math.floor(Math.random() * 1000)}`
            })),
            disaster: generateDisasterCard(),
            bunker: generateBunkerCard(),
            currentRound: 1,
            eliminatedPlayers: new Set(),
            playerVotes: {},
            activePlayers: playerCount
        };
        
        // Initialize votes for each player
        currentGame.players.forEach((_, index) => {
            currentGame.playerVotes[index] = 0;
        });
        
        // Store all cards
        currentGame.players.forEach(card => storeCard(card));
        storeCard(currentGame.disaster);
        storeCard(currentGame.bunker);
        
        // Display game info
        displayGameInfo();
        displayPlayers();
        
        // Show game flow section
        gameFlow.style.display = 'block';
        saveGameProgress(); // Зберігаємо гру
    } else {
        alert('Кількість гравців має бути від 3 до 16');
    }
}

function displayGameInfo() {
    disasterInfo.innerHTML = `
        <button class="clipboard-btn" title="Копіювати в base64">📋</button>
        <h4>Катастрофа: <span style="color:#ffd700">${currentGame.disaster.title}</span></h4>
        <p><strong>Код:</strong> ${currentGame.disaster.code}</p>
        <p><strong>Опис:</strong> ${currentGame.disaster.description}</p>
    `;
    
    bunkerInfo.innerHTML = `
        <button class="clipboard-btn" title="Копіювати в base64">📋</button>
        <h4>Умови бункера: <span style="color:#ffd700">${currentGame.bunker.title}</span></h4>
        <p><strong>Код:</strong> ${currentGame.bunker.code}</p>
        <p><strong>Опис:</strong> ${currentGame.bunker.description}</p>
    `;

    // Add clipboard functionality to disaster card
    const disasterClipboardBtn = disasterInfo.querySelector('.clipboard-btn');
    disasterClipboardBtn.addEventListener('click', () => {
        const cardText = `Картка Катастрофи\n${currentGame.disaster.title}\n${currentGame.disaster.description}`;
        const base64Text = btoa(unescape(encodeURIComponent(cardText)));
        navigator.clipboard.writeText(base64Text).then(() => {
            alert('Картку скопійовано в буфер обміну у форматі base64');
        }).catch(err => {
            console.error('Помилка копіювання:', err);
            alert('Помилка копіювання');
        });
    });

    // Add clipboard functionality to bunker card
    const bunkerClipboardBtn = bunkerInfo.querySelector('.clipboard-btn');
    bunkerClipboardBtn.addEventListener('click', () => {
        const cardText = `Умови Бункера\n${currentGame.bunker.title}\n${currentGame.bunker.description}`;
        const base64Text = btoa(unescape(encodeURIComponent(cardText)));
        navigator.clipboard.writeText(base64Text).then(() => {
            alert('Картку скопійовано в буфер обміну у форматі base64');
        }).catch(err => {
            console.error('Помилка копіювання:', err);
            alert('Помилка копіювання');
        });
    });
}

function displayPlayers(spoilerState = {}) {
    playersList.innerHTML = '';
    currentGame.players.forEach((player, index) => {
        if (!currentGame.eliminatedPlayers.has(index)) {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            
            // Get current votes for this player
            const votes = currentGame.playerVotes?.[index] || 0;
            
            playerCard.innerHTML = `
                <button class="delete-player">×</button>
                <button class="clipboard-btn" title="Копіювати в base64">📋</button>
                <h4 class="player-name" data-player-index="${index}">${player.name}</h4>
                <p><strong>Код картки:</strong> ${player.code}</p>
                <p><strong>Раунд:</strong> ${currentGame.currentRound}</p>
                <div class="spoiler-content">
                    <p><strong>Професія:</strong> <span class="spoiler">${player.profession}</span></p>
                    <p><strong>Хобі:</strong> <span class="spoiler">${player.hobby}</span></p>
                    <p><strong>Стан здоров'я:</strong> <span class="spoiler">${player.health}</span></p>
                    <p><strong>Фобія/Секрет:</strong> <span class="spoiler">${player.phobia}</span></p>
                    <p><strong>Цінний предмет:</strong> <span class="spoiler">${player.item}</span></p>
                    <p><strong>Особиста якість:</strong> <span class="spoiler">${player.trait}</span></p>
                    <p><strong>Дія:</strong> <span class="spoiler">${player.action}</span></p>
                    <p><strong>Умова:</strong> <span class="spoiler">${player.condition}</span></p>
                </div>
                <div class="voting-controls">
                    <button class="vote-btn minus">-</button>
                    <span class="vote-count">${votes}</span>
                    <button class="vote-btn plus">+</button>
                </div>
            `;
            
            // Add click event listeners to all spoiler elements
            const spoilers = playerCard.querySelectorAll('.spoiler');
            spoilers.forEach((spoiler, sidx) => {
                // Restore state if available
                if (spoilerState[index] && spoilerState[index][sidx]) {
                    spoiler.classList.add('revealed');
                }
                spoiler.addEventListener('click', () => {
                    spoiler.classList.toggle('revealed');
                    saveGameProgress(); // Зберігаємо при зміні спойлера
                });
            });

            // Add clipboard functionality
            const clipboardBtn = playerCard.querySelector('.clipboard-btn');
            clipboardBtn.addEventListener('click', () => {
                const cardText = `
Картка гравця: ${player.name}
Професія: ${player.profession}
Хобі: ${player.hobby}
Стан здоров'я: ${player.health}
Фобія/Секрет: ${player.phobia}
Цінний предмет: ${player.item}
Особиста якість: ${player.trait}
Дія: ${player.action}
Умова: ${player.condition}
                `.trim();
                
                const base64Text = btoa(unescape(encodeURIComponent(cardText)));
                navigator.clipboard.writeText(base64Text).then(() => {
                    alert('Картку скопійовано в буфер обміну у форматі base64');
                }).catch(err => {
                    console.error('Помилка копіювання:', err);
                    alert('Помилка копіювання');
                });
            });

            // Add event listeners for voting
            const minusBtn = playerCard.querySelector('.minus');
            const plusBtn = playerCard.querySelector('.plus');
            
            minusBtn.addEventListener('click', () => {
                currentGame.playerVotes[index]--;
                displayPlayers(spoilerState);
                saveGameProgress();
            });
            
            plusBtn.addEventListener('click', () => {
                currentGame.playerVotes[index]++;
                displayPlayers(spoilerState);
                saveGameProgress();
            });
            
            // Add event listener for delete button
            const deleteBtn = playerCard.querySelector('.delete-player');
            deleteBtn.addEventListener('click', () => {
                if (confirm('Ви впевнені, що хочете видалити цього гравця?')) {
                    currentGame.eliminatedPlayers.add(index);
                    currentGame.activePlayers--;
                    displayPlayers(spoilerState);
                    saveGameProgress();
                }
            });

            // Add event listener for player name editing
            const playerName = playerCard.querySelector('.player-name');
            playerName.addEventListener('dblclick', () => {
                const currentName = playerName.textContent;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentName;
                input.className = 'player-name-edit';
                
                playerName.replaceWith(input);
                input.focus();
                
                const finishEditing = () => {
                    const newName = input.value.trim() || currentName;
                    currentGame.players[index].name = newName;
                    displayPlayers();
                };
                
                input.addEventListener('blur', finishEditing);
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        finishEditing();
                    }
                });
            });
            
            playersList.appendChild(playerCard);
        }
    });
}

function nextRound() {
    // Store spoiler state
    const spoilerState = {};
    document.querySelectorAll('.player-card').forEach((card, idx) => {
        spoilerState[idx] = {};
        card.querySelectorAll('.spoiler').forEach((el, sidx) => {
            spoilerState[idx][sidx] = el.classList.contains('revealed');
        });
    });

    currentGame.currentRound++;
    // Reset votes for all players
    Object.keys(currentGame.playerVotes).forEach(index => {
        if (currentGame.playerVotes[index] !== 0) {
            currentGame.playerVotes[index] = 0;
        }
    });
    displayPlayers(spoilerState);
    saveGameProgress();
}

function endGame() {
    if (confirm('Ви впевнені, що хочете завершити гру?')) {
        currentGame = null;
        localStorage.removeItem('bunkerGameProgress');
        gameFlow.style.display = 'none';
        playerCountInput.value = '3';
    }
}

// Event Listeners
startGameBtn.addEventListener('click', startNewGame);
nextRoundBtn.addEventListener('click', nextRound);
endGameBtn.addEventListener('click', endGame);

// Відновлення прогресу при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
    loadStoredCards();
    if (loadGameProgress()) {
        mainMenu.classList.remove('active');
        cardsSection.classList.remove('active');
        gameSection.classList.add('active');
        displayGameInfo();
        displayPlayers();
        gameFlow.style.display = 'block';
    }
}); 
