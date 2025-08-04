       const historicalEvents = {
            "01-01": [
                { year: 1901, event: "The Commonwealth of Australia was formed", category: "🏛️ Politics" },
                { year: 1959, event: "Fidel Castro's forces captured Havana, Cuba", category: "🏛️ Politics" },
                { year: 1863, event: "The Emancipation Proclamation was issued by Abraham Lincoln", category: "⚖️ Rights" },
                { year: 1999, event: "The Euro currency was introduced in 11 European countries", category: "💰 Economy" },
                { year: 1990, event: "David Dinkins became the first African American mayor of New York City", category: "🏛️ Politics" }
            ],
            "01-02": [
                { year: 1492, event: "The last Muslim stronghold in Spain, Granada, was conquered", category: "⚔️ War" },
                { year: 1788, event: "Georgia became the 4th state to ratify the US Constitution", category: "🏛️ Politics" },
                { year: 1959, event: "Luna 1 became the first spacecraft to reach the vicinity of the Moon", category: "🚀 Space" },
                { year: 1935, event: "Bruno Hauptmann went on trial for the kidnapping of the Lindbergh baby", category: "⚖️ Crime" }
            ],
            "04-12": [
                { year: 1961, event: "Yuri Gagarin became the first human in space", category: "🚀 Space" },
                { year: 1945, event: "President Franklin D. Roosevelt died", category: "🏛️ Politics" },
                { year: 1861, event: "The American Civil War began with the attack on Fort Sumter", category: "⚔️ War" },
                { year: 1981, event: "The first Space Shuttle mission (Columbia) launched", category: "🚀 Space" }
            ],
            "07-20": [
                { year: 1969, event: "Apollo 11 landed on the Moon", category: "🚀 Space" },
                { year: 1944, event: "The July 20 plot to assassinate Hitler failed", category: "⚔️ War" },
                { year: 1871, event: "British Columbia joined Canadian Confederation", category: "🏛️ Politics" },
                { year: 2012, event: "The Aurora theater shooting occurred in Colorado", category: "😢 Tragedy" }
            ],
            "09-11": [
                { year: 2001, event: "Terrorist attacks occurred in New York and Washington D.C.", category: "😢 Tragedy" },
                { year: 1973, event: "Salvador Allende was overthrown in a Chilean military coup", category: "🏛️ Politics" },
                { year: 1922, event: "The British Mandate for Palestine began", category: "🏛️ Politics" },
                { year: 1941, event: "Ground breaking began for the Pentagon", category: "🏢 Construction" }
            ],
            "12-25": [
                { year: 0, event: "Jesus Christ was born (according to Christian tradition)", category: "⛪ Religion" },
                { year: 1776, event: "George Washington crossed the Delaware River", category: "⚔️ War" },
                { year: 1991, event: "The Soviet Union was officially dissolved", category: "🏛️ Politics" },
                { year: 1914, event: "The Christmas Truce occurred during World War I", category: "⚔️ War" }
            ]
        };

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
                
                daySelect.innerHTML = '<option value="">Day</option>';
                
                if (month) {
                    const daysInMonth = new Date(year, month, 0).getDate();
                    for (let day = 1; day <= daysInMonth; day++) {
                        const option = document.createElement('option');
                        option.value = day;
                        option.textContent = day;
                        daySelect.appendChild(option);
                    }
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

        // Function to get random historical events for a specific date
        function getHistoricalEvents(month, day) {
            const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const events = historicalEvents[dateKey] || [];
            
            if (events.length === 0) {
                const nearbyEvents = [];
                for (let i = -2; i <= 2; i++) {
                    const nearbyDay = day + i;
                    if (nearbyDay >= 1 && nearbyDay <= 31) {
                        const nearbyKey = `${month.toString().padStart(2, '0')}-${nearbyDay.toString().padStart(2, '0')}`;
                        if (historicalEvents[nearbyKey]) {
                            nearbyEvents.push(...historicalEvents[nearbyKey]);
                        }
                    }
                }
                return shuffleArray(nearbyEvents).slice(0, 3);
            }
            
            return shuffleArray(events).slice(0, Math.min(3, events.length));
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
        function displayHistoricalEvents(month, day) {
            const events = getHistoricalEvents(month, day);
            const container = document.getElementById('historicalEventsContainer');
            const historicalEventsSection = document.getElementById('historicalEvents');
            
            if (!container || !historicalEventsSection) return;
            
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
            ageDisplay.className = "animate-slideUp";
            ageDisplay.innerHTML = `
                <div class="text-4xl mb-3">🎉</div>
                <div class="text-2xl font-bold text-white mb-2">You are ${years} years, ${months} months, and ${days} days old.</div>
            `;
            result.appendChild(ageDisplay);

            // Add age-based comments
            const commentLine = document.createElement("div");
            commentLine.className = "text-blue-300 mt-3";

            if (years < 0) {
                commentLine.textContent = "Are you from the future? 🤖";
            } else if (years === 0) {
                commentLine.textContent = "Bro... you aren't even born yet. 💀";
            } else if (years > 0 && years <= 4) {
                commentLine.textContent = "Who gave you phone access, little one? 📱🍼";
            } else if (years > 4 && years <= 12) {
                commentLine.textContent = "Cartoons > Homework. We all know that. 📺✏️";
            } else if (years > 12 && years <= 17) {
                commentLine.textContent = "Ah, the teenage phase: drama, crushes & mood swings 🎭💔";
            } else if (years > 17 && years <= 24) {
                commentLine.textContent = "Start struggling to understand yourself. ~Zaryab";
            } else if (years > 24 && years <= 34) {
                commentLine.textContent = "Bills are now your most loyal friends.💸";
            } else if (years > 34 && years <= 49) {
                commentLine.textContent = "You've officially unlocked 'I miss the 90s' mode.📼";
            } else if (years > 49 && years <= 64) {
                commentLine.textContent = "Time to yell at kids playing near your gate.👴";
            } else if (years > 64 && years <= 99) {
                commentLine.textContent = "Age is just a number… but wow, that is a big number.😅";
            } else if (years >= 100) {
                commentLine.textContent = "You deserve your own Wikipedia page!📜";
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