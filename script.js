// Get DOM elements
        const birthInput = document.getElementById("birthYearInput");
        const monthSelect = document.getElementById("monthSelect");
        const daySelect = document.getElementById("daySelect");
        const yearSelect = document.getElementById("yearSelect");
        const button = document.getElementById("calculateBtn");
        const result = document.getElementById("ageResult");

        // Initialize mobile date selectors
        function initializeDateSelectors() {
            // Populate years (1900 to current year)
            const currentYear = new Date().getFullYear();
            for (let year = currentYear; year >= 1900; year--) {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }

            // Populate days based on selected month and year
function updateDays() {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value) || currentYear;
    
    // Store currently selected day to preserve it if possible
    const currentDay = daySelect.value;
    
    daySelect.innerHTML = '<option value="">Day</option>';
    
    if (month) {
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            daySelect.appendChild(option);
        }
        
        // Restore previously selected day if it's still valid
        if (currentDay && currentDay <= daysInMonth) {
            daySelect.value = currentDay;
        }
        
        // Enable day selector
        daySelect.disabled = false;
    } else {
        daySelect.disabled = true;
    }
}

            monthSelect.addEventListener('change', updateDays);
            yearSelect.addEventListener('change', updateDays);

            // Sync mobile selectors with desktop input
            function syncFromMobile() {
                const month = monthSelect.value;
                const day = daySelect.value;
                const year = yearSelect.value;
                
                if (month && day && year) {
                    const dateString = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                    birthInput.value = dateString;
                }
            }

            // Sync desktop input with mobile selectors
            function syncFromDesktop() {
                if (birthInput.value) {
                    const date = new Date(birthInput.value);
                    monthSelect.value = date.getMonth() + 1;
                    yearSelect.value = date.getFullYear();
                    updateDays();
                    setTimeout(() => {
                        daySelect.value = date.getDate();
                    }, 50);
                }
            }

            monthSelect.addEventListener('change', syncFromMobile);
            daySelect.addEventListener('change', syncFromMobile);
            yearSelect.addEventListener('change', syncFromMobile);
            birthInput.addEventListener('change', syncFromDesktop);
        }

        // Function to fetch historical events using a different reliable API
        async function getHistoricalEvents(month, day) {
            try {
                // Try Today in History API first
                const todayApiUrl = `https://history.muffinlabs.com/date/${month}/${day}`;
                const response = await fetch(todayApiUrl);
                const data = await response.json();
                
                if (data.data && data.data.Events && data.data.Events.length > 0) {
                    const events = data.data.Events;
                    const shuffledEvents = shuffleArray(events);
                    return shuffledEvents.slice(0, Math.min(4, shuffledEvents.length)).map(event => {
                        return {
                            year: parseInt(event.year),
                            event: event.text,
                            category: getCategoryFromEvent(event.text)
                        };
                    });
                } else {
                    return await getWikipediaEvents(month, day);
                }
            } catch (error) {
                console.log('Error fetching from Today API:', error);
                return await getWikipediaEvents(month, day);
            }
        }

        // Wikipedia API fallback
        async function getWikipediaEvents(month, day) {
            try {
                const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
                
                const response = await fetch(url);
                const data = await response.json();
                
                if (data.events && data.events.length > 0) {
                    const shuffledEvents = shuffleArray(data.events);
                    return shuffledEvents.slice(0, Math.min(4, shuffledEvents.length)).map(event => {
                        return {
                            year: event.year,
                            event: event.text,
                            category: getCategoryFromEvent(event.text)
                        };
                    });
                } else {
                    return getSpecialDateEvents(month, day);
                }
            } catch (error) {
                console.log('Error fetching from Wikipedia API:', error);
                return getSpecialDateEvents(month, day);
            }
        }

        // Enhanced backup with specific dates including 9/11
        function getSpecialDateEvents(month, day) {
            const specialDates = {
                "09-11": [
                    { year: 2001, event: "Terrorist attacks occurred in New York City and Washington D.C., killing nearly 3,000 people", category: "😢 Tragedy" },
                    { year: 1973, event: "Chilean President Salvador Allende was overthrown in a military coup led by Augusto Pinochet", category: "🏛️ Politics" },
                    { year: 1922, event: "The British Mandate for Palestine officially began", category: "📜 Treaty" },
                    { year: 1941, event: "Ground was broken for the construction of the Pentagon in Arlington, Virginia", category: "🏢 Construction" }
                ],
                "07-20": [
                    { year: 1969, event: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to land on the Moon", category: "🚀 Space" },
                    { year: 1944, event: "The July 20 plot to assassinate Adolf Hitler failed", category: "⚔️ War" },
                    { year: 1871, event: "British Columbia joined the Canadian Confederation", category: "🏛️ Politics" }
                ],
                "12-25": [
                    { year: 0, event: "Jesus Christ was born according to Christian tradition", category: "⛪ Religion" },
                    { year: 1776, event: "George Washington crossed the Delaware River during the American Revolutionary War", category: "⚔️ War" },
                    { year: 1991, event: "The Soviet Union was officially dissolved", category: "🏛️ Politics" }
                ],
                "01-01": [
                    { year: 2000, event: "The Y2K millennium bug failed to cause major computer disruptions worldwide", category: "💻 Technology" },
                    { year: 1863, event: "Abraham Lincoln issued the Emancipation Proclamation", category: "⚖️ Rights" },
                    { year: 1959, event: "Fidel Castro's revolutionary forces captured Havana, Cuba", category: "🏛️ Politics" }
                ]
            };
            
            const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            
            if (specialDates[dateKey]) {
                return specialDates[dateKey];
            }
            
            return getGenericBackupEvents();
        }

        // Generic backup events for any date
        function getGenericBackupEvents() {
            const backupEvents = [
                { year: 1969, event: "Apollo 11 successfully landed on the Moon", category: "🚀 Space" },
                { year: 1989, event: "The Berlin Wall fell, reuniting East and West Germany", category: "🏛️ Politics" },
                { year: 1776, event: "The United States Declaration of Independence was signed", category: "📜 Treaty" },
                { year: 1945, event: "World War II ended with Japan's surrender", category: "⚔️ War" },
                { year: 1955, event: "Rosa Parks refused to give up her bus seat, sparking the Montgomery Bus Boycott", category: "⚖️ Rights" }
            ];
            
            return shuffleArray(backupEvents).slice(0, 3);
        }

        // Get category based on event text
        function getCategoryFromEvent(eventText) {
            const text = eventText.toLowerCase();
            
            if (text.includes('war') || text.includes('battle') || text.includes('fought')) return '⚔️ War';
            if (text.includes('born') || text.includes('birth')) return '👶 Birth';
            if (text.includes('died') || text.includes('death')) return '⚰️ Death';
            if (text.includes('invention') || text.includes('discovered')) return '🔬 Science';
            if (text.includes('elected') || text.includes('president') || text.includes('government')) return '🏛️ Politics';
            if (text.includes('launched') || text.includes('space') || text.includes('moon')) return '🚀 Space';
            if (text.includes('earthquake') || text.includes('disaster')) return '🌍 Natural';
            if (text.includes('independence') || text.includes('treaty')) return '📜 Treaty';
            if (text.includes('founded') || text.includes('established')) return '🏗️ Founded';
            if (text.includes('art') || text.includes('music') || text.includes('film')) return '🎨 Arts';
            
            return '📚 History';
        }

        // Backup events in case APIs fail
        function getBackupEvents() {
            return getGenericBackupEvents();
        }

        // Utility function to shuffle array
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        // Function to display historical events
        async function displayHistoricalEvents(month, day) {
            const container = document.getElementById('historicalEventsContainer');
            const historicalEventsSection = document.getElementById('historicalEvents');
            
            if (!container || !historicalEventsSection) return;
            
            // Show loading state
            container.innerHTML = `
                <div class="text-center text-blue-100">
                    <div class="text-4xl mb-2 animate-spin">⚡</div>
                    <p>Fetching historical events for your special day...</p>
                </div>
            `;
            
            try {
                const events = await getHistoricalEvents(month, day);
                
                if (events.length === 0) {
                    container.innerHTML = `
                        <div class="text-center text-blue-100">
                            <div class="text-4xl mb-2">🔍</div>
                            <p>No specific historical events found for this date, but every day is special in its own way!</p>
                        </div>
                    `;
                    return;
                }
                
                container.innerHTML = events.map((event, index) => `
                    <div class="history-card glass-effect p-4 rounded-xl border border-amber-200/20 animate-slideInLeft" style="animation-delay: ${index * 0.1}s;">
                        <div class="flex items-start space-x-3">
                            <div class="text-2xl flex-shrink-0">${event.category.split(' ')[0]}</div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-amber-300 font-bold text-lg">${event.year > 0 ? event.year + ' AD' : Math.abs(event.year) + ' BC'}</span>
                                    <span class="text-blue-300 text-sm font-medium">${event.category}</span>
                                </div>
                                <p class="text-white text-sm leading-relaxed">${event.event}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            } catch (error) {
                console.error('Error displaying historical events:', error);
                container.innerHTML = `
                    <div class="text-center text-blue-100">
                        <div class="text-4xl mb-2">⚠️</div>
                        <p>Unable to load historical events right now. Please try again later!</p>
                    </div>
                `;
            }
        }

        // Main age calculation function
        function exactAge() {
            let birthDate;
            
            // Get birth date from either desktop or mobile inputs
            if (window.innerWidth >= 768 && birthInput.value) {
                birthDate = new Date(birthInput.value);
            } else if (monthSelect.value && daySelect.value && yearSelect.value) {
                birthDate = new Date(yearSelect.value, monthSelect.value - 1, daySelect.value);
            } else {
                result.innerHTML = '<span class="text-red-300">Please select your birth date first</span>';
                return;
            }

            const today = new Date();

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();
            
            if (days < 0) {
                months -= 1;
                const prevMonthLastDay = new Date(
                    today.getFullYear(),
                    today.getMonth(),
                    0
                ).getDate();
                days += prevMonthLastDay;
            }

            if (months < 0) {
                years -= 1;
                months += 12;
            }

result.innerHTML = '';
const ageDisplay = document.createElement("div");
ageDisplay.className = "animate-slideUp space-y-4";
ageDisplay.innerHTML = `
    <div class="text-center">
        <div class="text-5xl mb-4 animate-bounce">🎉</div>
        
        <!-- Main Age Display -->
        <div class="glass-effect p-4 rounded-xl border-2 border-blue-300/30 mb-4">
            <div class="text-white text-lg font-semibold mb-2">Your Age</div>
            <div class="grid grid-cols-3 gap-3 text-center">
                <div class="bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-lg p-3">
                    <div class="text-2xl font-bold text-blue-300">${years}</div>
                    <div class="text-xs text-blue-100">Years</div>
                </div>
                <div class="bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-lg p-3">
                    <div class="text-2xl font-bold text-purple-300">${months}</div>
                    <div class="text-xs text-purple-100">Months</div>
                </div>
                <div class="bg-gradient-to-b from-pink-500/20 to-red-500/20 rounded-lg p-3">
                    <div class="text-2xl font-bold text-pink-300">${days}</div>
                    <div class="text-xs text-pink-100">Days</div>
                </div>
            </div>
        </div>
        
        <!-- Fun Comment Section -->
        <div class="glass-effect p-4 rounded-xl border-2 border-yellow-300/30">
            <div class="text-yellow-300 text-sm font-semibold mb-2">🎭 Fun Fact</div>
            <div class="text-white text-sm leading-relaxed" id="ageComment"></div>
        </div>
    </div>
`;
result.appendChild(ageDisplay);

            // Add age-based comments
            const commentLine = document.createElement("div");
            commentLine.className = "text-blue-300 mt-3";

if (years < 0) {
    commentLine.textContent = "Whoah, Marty McFly? Time travel detected! 🤖⏰";
} else if (years === 0) {
    commentLine.textContent = "Bro… you haven't even taken your first breath. 💀";
} else if (years >= 1 && years <= 2) {
    commentLine.textContent = "Toddler mode: drool, tantrums, and mystery stains. 🍼🧩";
} else if (years >= 3 && years <= 4) {
    commentLine.textContent = "You think everything is 'yours'—including my phone. 😅📱";
} else if (years >= 5 && years <= 6) {
    commentLine.textContent = "Crayon Picasso in the making. 🖍️🎨";
} else if (years >= 7 && years <= 8) {
    commentLine.textContent = "'Why?' is your favorite question. 🤔❓";
} else if (years >= 9 && years <= 10) {
    commentLine.textContent = "You believe you're invincible—until homework says otherwise. 📚⚡";
} else if (years >= 11 && years <= 12) {
    commentLine.textContent = "Secretly googling how to ask your crush out. 🕵️‍♂️💕";
} else if (years >= 13 && years <= 14) {
    commentLine.textContent = "Hormones raging—welcome to the mood swing rollercoaster. 🎢😭";
} else if (years >= 15 && years <= 16) {
    commentLine.textContent = "Driver's permit dreams & pizza-stained selfies. 🚗🍕";
} else if (years >= 17 && years <= 18) {
    commentLine.textContent = "Late-night study sessions fueled by regret and energy drinks. 📖⚡";
} else if (years >= 19 && years <= 20) {
    commentLine.textContent = "Ramen gourmet or broke college legend? 🍜🏆";
} else if (years >= 21 && years <= 22) {
    commentLine.textContent = "Legal adult… still living on instant noodles and memes. 😂";
} else if (years >= 23 && years <= 24) {
    commentLine.textContent = "'What do I want to do with my life?' starter pack engaged. 🤷‍♂️🎯";
} else if (years >= 25 && years <= 26) {
    commentLine.textContent = "Quarter-life crisis with a side of avocado toast. 🥑🍞";
} else if (years >= 27 && years <= 28) {
    commentLine.textContent = "Job title sounds fancy; paycheck says 'LOL'. 💼💸";
} else if (years >= 29 && years <= 30) {
    commentLine.textContent = "Happy 30th! Time to start using anti-aging cream… or not. 🎂🧴";
} else if (years >= 31 && years <= 32) {
    commentLine.textContent = "Back pain & midweek naps coming in hot. 🛌🔥";
} else if (years >= 33 && years <= 34) {
    commentLine.textContent = "'When I was your age…' about to become your catchphrase. 📖👴";
} else if (years >= 35 && years <= 36) {
    commentLine.textContent = "Birthday cake with kale frosting? Adulting hurts. 🥬🎂";
} else if (years >= 37 && years <= 38) {
    commentLine.textContent = "Weekend plans: laundry, taxes, existential dread. 🧺📜";
} else if (years >= 39 && years <= 40) {
    commentLine.textContent = "40's club: creaky knees & wisdom teeth regrets. 🦴🦷";
} else if (years >= 41 && years <= 42) {
    commentLine.textContent = "Your phone autocorrects 'vibe' to 'tribe'—it's watching you. 📱👀";
} else if (years >= 43 && years <= 44) {
    commentLine.textContent = "You've seen fashion trends come back… and go back again. 👖🔄";
} else if (years >= 45 && years <= 46) {
    commentLine.textContent = "'Kids these days' lectures incoming. 📣🛑";
} else if (years >= 47 && years <= 48) {
    commentLine.textContent = "You laugh at jokes before they finish telling them. 😂⏳";
} else if (years >= 49 && years <= 50) {
    commentLine.textContent = "Half-century hype! 🎉 But also… back pain. 🤕";
} else if (years >= 51 && years <= 52) {
    commentLine.textContent = "Senior discount ninja—always on the hunt. 🛍️🥋";
} else if (years >= 53 && years <= 54) {
    commentLine.textContent = "Your playlist is 50% golden oldies, 50% 'what is this?' 🎶❓";
} else if (years >= 55 && years <= 56) {
    commentLine.textContent = "Naps are now your favorite sport. 🏅😴";
} else if (years >= 57 && years <= 58) {
    commentLine.textContent = "Grandkids think you're a living legend. 👶🏆";
} else if (years >= 59 && years <= 60) {
    commentLine.textContent = "Celebrating six decades of epic life hacks. 🎂🛠️";
} else if (years >= 61 && years <= 62) {
    commentLine.textContent = "You've unlocked 'wisdom of the ages' status. 🧙‍♂️✨";
} else if (years >= 63 && years <= 64) {
    commentLine.textContent = "Still here? Must be some crazy good genes. 🧬💪";
} else if (years >= 65 && years <= 66) {
    commentLine.textContent = "Retirement phase: golf clubs & dad jokes. ⛳️🤣";
} else if (years >= 67 && years <= 68) {
    commentLine.textContent = "Memory's a bit fuzzy, but the stories are gold. 📖🥇";
} else if (years >= 69 && years <= 70) {
    commentLine.textContent = "70 years young—still schooling us all. 🎓💥";
} else if (years >= 71 && years <= 72) {
    commentLine.textContent = "Legend status: activate mythical tale mode. 🐉📜";
} else if (years >= 73 && years <= 74) {
    commentLine.textContent = "Your cake needs its own cake. 🎂²";
} else if (years >= 75 && years <= 76) {
    commentLine.textContent = "75 and still sharper than cheddar. 🧀🔪";
} else if (years >= 77 && years <= 78) {
    commentLine.textContent = "Time-traveler vibes: you've lived more lives. ⏳🌌";
} else if (years >= 79 && years <= 80) {
    commentLine.textContent = "80 candles? We need a flamethrower. 🔥🕯️";
} else if (years >= 81 && years <= 82) {
    commentLine.textContent = "You're like a fine wine—improving with age. 🍷✨";
} else if (years >= 83 && years <= 84) {
    commentLine.textContent = "Still viral-worthy—got any TikTok moves? 🎥🕺";
} else if (years >= 85 && years <= 86) {
    commentLine.textContent = "85 trips around the sun: NASA called, they're impressed. 🚀🌞";
} else if (years >= 87 && years <= 88) {
    commentLine.textContent = "Your jokes are vintage classics now. 😂🏆";
} else if (years >= 89 && years <= 90) {
    commentLine.textContent = "Ninety and knockout—you're a champion! 🥊🏅";
} else if (years >= 91 && years <= 92) {
    commentLine.textContent = "Century countdown: 8 to go! 🎉🔢";
} else if (years >= 93 && years <= 94) {
    commentLine.textContent = "Living legend vibes at max level. 🌟👑";
} else if (years >= 95 && years <= 96) {
    commentLine.textContent = "You've seen eras change—got wisdom to spare. 🕰️💡";
} else if (years >= 97 && years <= 98) {
    commentLine.textContent = "Legendary elder: stories sell out stadiums. 🎤🏟️";
} else if (years >= 99 && years <= 100) {
    commentLine.textContent = "Centennial boss—100 years and still slaying! 💯👊";
} else {
    commentLine.textContent = "Over 100? You're basically a mythic deity now. 🏰⚡";
}

            
            ageDisplay.appendChild(commentLine);

            // Historical Events Integration
            const month = birthDate.getMonth() + 1;
            const day = birthDate.getDate();
            
            setTimeout(() => {
                const historicalEventsSection = document.getElementById('historicalEvents');
                if (historicalEventsSection) {
                    historicalEventsSection.classList.remove('hidden');
                    historicalEventsSection.classList.add('animate-slideUp');
                    displayHistoricalEvents(month, day);
                    setTimeout(() => {
                        historicalEventsSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest'
                        });
                    }, 500);
                }
            }, 1000);
        }

        // Theme Toggle Functionality
        function initializeThemeToggle() {
            const themeToggle = document.getElementById('theme-toggle');
            const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
            const body = document.body;
            
            const lightIcons = document.querySelectorAll('#theme-toggle-light-icon, #mobile-theme-toggle-light-icon');
            const darkIcons = document.querySelectorAll('#theme-toggle-dark-icon, #mobile-theme-toggle-dark-icon');
            
            let savedTheme = 'dark';
            
            function applyTheme(theme) {
                if (theme === 'light') {
                    body.classList.remove('dark-theme');
                    body.classList.add('light-theme');
                    lightIcons.forEach(icon => icon.classList.remove('hidden'));
                    darkIcons.forEach(icon => icon.classList.add('hidden'));
                } else {
                    body.classList.remove('light-theme');
                    body.classList.add('dark-theme');
                    lightIcons.forEach(icon => icon.classList.add('hidden'));
                    darkIcons.forEach(icon => icon.classList.remove('hidden'));
                }
            }
            
            applyTheme(savedTheme);
            
            function toggleTheme() {
                const isLightMode = body.classList.contains('light-theme');
                applyTheme(isLightMode ? 'dark' : 'light');
            }
            
            if (themeToggle) {
                themeToggle.addEventListener('click', toggleTheme);
            }
            if (mobileThemeToggle) {
                mobileThemeToggle.addEventListener('click', toggleTheme);
            }
        }

        // Mobile menu functionality
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            if (mobileMenu) {
                const mobileLinks = mobileMenu.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }
        }

        // Smooth scrolling for navigation links
        function initializeSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Event listeners
        button.addEventListener("click", exactAge);

        // Initialize all functionality when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            initializeDateSelectors();
            initializeThemeToggle();
            initializeMobileMenu();
            initializeSmoothScrolling();
            
            const refreshHistoryBtn = document.getElementById('refreshHistoryBtn');
            if (refreshHistoryBtn) {
                refreshHistoryBtn.addEventListener('click', function() {
                    let birthDate;
                    
                    if (window.innerWidth >= 768 && birthInput.value) {
                        birthDate = new Date(birthInput.value);
                    } else if (monthSelect.value && daySelect.value && yearSelect.value) {
                        birthDate = new Date(yearSelect.value, monthSelect.value - 1, daySelect.value);
                    }
                    
                    if (birthDate) {
                        const month = birthDate.getMonth() + 1;
                        const day = birthDate.getDate();
                        
                        const container = document.getElementById('historicalEventsContainer');
                        if (container) {
                            container.innerHTML = '<div class="text-center text-white"><div class="text-2xl animate-spin">⚡</div><p class="mt-2">Finding more historical events...</p></div>';
                            setTimeout(() => {
                                displayHistoricalEvents(month, day);
                            }, 800);
                        }
                    }
                });
            }
        });