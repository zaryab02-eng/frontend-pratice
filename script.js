// Get DOM elements
const birthInput = document.getElementById("birthYearInput");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("ageResult");

// Historical Events Database - Comprehensive collection organized by month and day
const historicalEvents = {
    // January
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
    "01-03": [
        { year: 1777, event: "George Washington's Continental Army defeated British forces at Princeton", category: "⚔️ War" },
        { year: 1961, event: "The United States severed diplomatic relations with Cuba", category: "🏛️ Politics" },
        { year: 1925, event: "Benito Mussolini announced he was taking dictatorial powers in Italy", category: "🏛️ Politics" },
        { year: 1959, event: "Alaska was admitted as the 49th US state", category: "🏛️ Politics" }
    ],
    "01-08": [
        { year: 1815, event: "The Congress of Vienna convened", category: "🏛️ Politics" },
        { year: 1918, event: "British women over 30 gained the right to vote", category: "⚖️ Rights" },
        { year: 1994, event: "NAFTA (North American Free Trade Agreement) was signed", category: "💰 Economy" }
    ],
    "01-15": [
        { year: 1759, event: "British Museum opened in London", category: "🏛️ Culture" },
        { year: 1929, event: "Great Depression: New York Stock Exchange crashed", category: "💰 Economy" },
        { year: 2001, event: "Wikipedia launched", category: "💻 Technology" }
    ],
    "01-20": [
        { year: 1265, event: "First English Parliament convened", category: "🏛️ Politics" },
        { year: 1942, event: "Franklin D. Roosevelt's 'Four Freedoms' speech", category: "🏛️ Politics" },
        { year: 2009, event: "Barack Obama inaugurated as 44th US President", category: "🏛️ Politics" }
    ],

    // February
    "02-02": [
        { year: 1848, event: "Gold discovered at Sutter's Mill, California", category: "🌋 Exploration" },
        { year: 1899, event: "The Philippine–American War began", category: "⚔️ War" },
        { year: 2000, event: "US Census says population reached 281 million", category: "📊 Demographics" }
    ],
    "02-04": [
        { year: 1945, event: "The Yalta Conference began with Roosevelt, Churchill, and Stalin", category: "🏛️ Politics" },
        { year: 2004, event: "Facebook was founded by Mark Zuckerberg", category: "💻 Technology" },
        { year: 1789, event: "George Washington was unanimously elected as first US President", category: "🏛️ Politics" },
        { year: 1969, event: "Yasser Arafat was appointed leader of the PLO", category: "🏛️ Politics" }
    ],
    "02-14": [
        { year: 1929, event: "The St. Valentine's Day Massacre occurred in Chicago", category: "⚖️ Crime" },
        { year: 1946, event: "ENIAC, one of the first computers, was unveiled", category: "💻 Technology" },
        { year: 1989, event: "Union Carbide agreed to pay $470 million for the Bhopal disaster", category: "🏭 Industry" },
        { year: 2005, event: "YouTube was founded by three former PayPal employees", category: "💻 Technology" }
    ],
    "02-22": [
        { year: 1879, event: "Frank Winfield Woolworth opened first 'Five-and-Dime' store", category: "💰 Economy" },
        { year: 1942, event: "Daytona Beach Road Course debut race", category: "🏁 Sports" },
        { year: 1980, event: "Miracle on Ice: US hockey defeated USSR at Winter Olympics", category: "🏒 Sports" }
    ],
    "02-28": [
        { year: 1844, event: "Joseph Smith and his brother Hyrum were killed in Carthage Jail", category: "😢 Tragedy" },
        { year: 1935, event: "The first practical television system was demonstrated by John Logie Baird", category: "💻 Technology" },
        { year: 1983, event: "The final episode of M*A*S*H aired on US television", category: "🎬 Entertainment" }
    ],

    // March
    "03-01": [
        { year: 1872, event: "Yellowstone designated first US National Park", category: "🌲 Environment" },
        { year: 1932, event: "Lindbergh kidnapping: Charles Lindbergh Jr. abducted", category: "⚖️ Crime" },
        { year: 2002, event: "Euro banknotes and coins entered circulation", category: "💰 Economy" }
    ],
    "03-02": [
        { year: 1917, event: "British women over 30 won partial suffrage", category: "⚖️ Rights" },
        { year: 1962, event: "The first Walmart store opened in Rogers, Arkansas", category: "💰 Economy" },
        { year: 1991, event: "Boris Yeltsin stood on a tank to defy a coup in Moscow", category: "🏛️ Politics" }
    ],
    "03-08": [
        { year: 1917, event: "The Russian February Revolution began", category: "🏛️ Politics" },
        { year: 1965, event: "The first US combat troops landed in Vietnam", category: "⚔️ War" },
        { year: 1911, event: "International Women's Day was first celebrated", category: "⚖️ Rights" },
        { year: 2014, event: "Malaysia Airlines Flight 370 disappeared", category: "✈️ Aviation" }
    ],
    "03-15": [
        { year: -44, event: "Julius Caesar was assassinated in Rome", category: "🏛️ Politics" },
        { year: 1917, event: "Tsar Nicholas II abdicated, ending Tsarist rule in Russia", category: "🏛️ Politics" },
        { year: 1965, event: "The first teach-in against the Vietnam War was held", category: "✊ Protest" },
        { year: 2019, event: "The Christchurch mosque shootings occurred in New Zealand", category: "😢 Tragedy" }
    ],
    "03-17": [
        { year: 1762, event: "Britain took control of Havana from Spain", category: "⚔️ War" },
        { year: 1969, event: "Golda Meir became Israel's first female Prime Minister", category: "🏛️ Politics" },
        { year: 1992, event: "Papal conclave elected Pope John Paul II to second term", category: "⛪ Religion" }
    ],

    // April
    "04-01": [
        { year: 1976, event: "Apple Computer founded", category: "💻 Technology" },
        { year: 2001, event: "Netherlands became first country to legalize same-sex marriage", category: "⚖️ Rights" },
        { year: 1946, event: "AECPAC launched first computer, ENIAC", category: "💻 Technology" }
    ],
    "04-12": [
        { year: 1961, event: "Yuri Gagarin became the first human in space", category: "🚀 Space" },
        { year: 1945, event: "President Franklin D. Roosevelt died", category: "🏛️ Politics" },
        { year: 1861, event: "The American Civil War began with the attack on Fort Sumter", category: "⚔️ War" },
        { year: 1981, event: "The first Space Shuttle mission (Columbia) launched", category: "🚀 Space" }
    ],
    "04-14": [
        { year: 1865, event: "President Abraham Lincoln was assassinated", category: "🏛️ Politics" },
        { year: 1912, event: "The RMS Titanic struck an iceberg", category: "🚢 Maritime" },
        { year: 1935, event: "Black Sunday dust storm devastated the American Great Plains", category: "🌪️ Weather" },
        { year: 1999, event: "A tornado outbreak struck the central United States", category: "🌪️ Weather" }
    ],
    "04-22": [
        { year: 1970, event: "First Earth Day celebrated", category: "🌍 Environment" },
        { year: 1529, event: "First Peace of Vienna signed", category: "🏛️ Politics" },
        { year: 1994, event: "Rwanda genocide began", category: "😢 Tragedy" }
    ],
    "04-23": [
        { year: 1564, event: "William Shakespeare was baptized in Stratford-upon-Avon", category: "📚 Literature" },
        { year: 1775, event: "Patrick Henry delivered his 'Give me liberty or give me death' speech", category: "⚖️ Rights" },
        { year: 2005, event: "The first-ever YouTube video, 'Me at the zoo', was uploaded", category: "💻 Technology" }
    ],

    // May
    "05-01": [
        { year: 1886, event: "Haymarket affair labor protest in Chicago", category: "✊ Protest" },
        { year: 1931, event: "Empire State Building opened", category: "🏢 Construction" },
        { year: 2004, event: "Google IPO raised $1.67 billion", category: "💰 Economy" }
    ],
    "05-04": [
        { year: 1970, event: "Four students were killed by National Guard at Kent State University", category: "✊ Protest" },
        { year: 1979, event: "Margaret Thatcher became Britain's first female Prime Minister", category: "🏛️ Politics" },
        { year: 1886, event: "The Haymarket affair occurred in Chicago", category: "✊ Protest" },
        { year: 1961, event: "Freedom Riders began interstate bus rides to test civil rights", category: "⚖️ Rights" }
    ],
    "05-18": [
        { year: 1980, event: "Mount St. Helens erupted in Washington state", category: "🌋 Natural Disaster" },
        { year: 1896, event: "Plessy v. Ferguson decision upheld 'separate but equal'", category: "⚖️ Law" },
        { year: 2005, event: "Israel withdrew its last troops from the Gaza Strip", category: "🏛️ Politics" }
    ],
    "05-20": [
        { year: 1862, event: "Florence Nightingale arrived at Scutari hospital", category: "🩺 Health" },
        { year: 1927, event: "Charles Lindbergh completed first solo transatlantic flight", category: "✈️ Aviation" },
        { year: 1990, event: "North and South Yemen unified", category: "🏛️ Politics" }
    ],
    "05-25": [
        { year: 1977, event: "Star Wars (A New Hope) was released", category: "🎬 Entertainment" },
        { year: 1961, event: "President Kennedy announced the goal of landing on the Moon", category: "🚀 Space" },
        { year: 1787, event: "The Constitutional Convention began in Philadelphia", category: "🏛️ Politics" },
        { year: 2020, event: "George Floyd was killed in Minneapolis, sparking worldwide protests", category: "⚖️ Rights" }
    ],

    // June
    "06-01": [
        { year: 1792, event: "St. Petersburg founded", category: "🏛️ Politics" },
        { year: 1974, event: "UPS Flight 6 crashed in Dubai", category: "✈️ Aviation" },
        { year: 1997, event: "IBM's Deep Blue beat Garry Kasparov at chess", category: "💻 Technology" }
    ],
    "06-06": [
        { year: 1944, event: "D-Day: Allied forces landed in Normandy", category: "⚔️ War" },
        { year: 1968, event: "Robert F. Kennedy was assassinated", category: "🏛️ Politics" },
        { year: 1984, event: "Indian troops stormed the Golden Temple in Amritsar", category: "🏛️ Politics" },
        { year: 2013, event: "Edward Snowden revealed NSA surveillance programs", category: "💻 Technology" }
    ],
    "06-18": [
        { year: 1815, event: "Battle of Waterloo ended Napoleon's rule", category: "⚔️ War" },
        { year: 1983, event: "Sally Ride became first American woman in space", category: "🚀 Space" },
        { year: 1994, event: "Airbus A330 prototype first flight", category: "✈️ Aviation" }
    ],
    "06-23": [
        { year: 2016, event: "The Brexit referendum resulted in UK voting to leave the EU", category: "🏛️ Politics" },
        { year: 1969, event: "Warren Burger was sworn in as Chief Justice of the US", category: "⚖️ Law" },
        { year: 1985, event: "Air India Flight 182 was bombed over the Atlantic", category: "😢 Tragedy" },
        { year: 1894, event: "The International Olympic Committee was founded", category: "🏃 Sports" }
    ],
    "06-29": [
        { year: 1613, event: "The Globe Theatre in London burned down", category: "🎭 Culture" },
        { year: 1995, event: "eBay was founded by Pierre Omidyar", category: "💻 Technology" },
        { year: 2007, event: "The Live Earth concerts to raise environmental awareness were held", category: "🎵 Music" }
    ],

    // July
    "07-01": [
        { year: 1867, event: "Canada became a self-governing dominion", category: "🏛️ Politics" },
        { year: 1963, event: "Algeria gained independence from France", category: "🏛️ Politics" },
        { year: 1997, event: "Hong Kong transferred from UK to China", category: "🏛️ Politics" }
    ],
    "07-04": [
        { year: 1776, event: "The Declaration of Independence was adopted", category: "🏛️ Politics" },
        { year: 1826, event: "John Adams and Thomas Jefferson both died on the 50th anniversary of independence", category: "🏛️ Politics" },
        { year: 1054, event: "The Great Schism split Christianity into Eastern and Western churches", category: "⛪ Religion" },
        { year: 1997, event: "NASA's Mars Pathfinder landed on Mars", category: "🚀 Space" }
    ],
    "07-07": [
        { year: 1947, event: "The Roswell UFO incident occurred in New Mexico", category: "🛸 Mystery" },
        { year: 2005, event: "London Underground and bus bombings killed over 50 people", category: "😢 Tragedy" },
        { year: 1928, event: "Sliced bread was sold for the first time", category: "🍞 Innovation" }
    ],
    "07-17": [
        { year: 1955, event: "Disneyland opened in Anaheim, California", category: "🎢 Entertainment" },
        { year: 1975, event: "Apollo–Soyuz Test Project docked in orbit", category: "🚀 Space" },
        { year: 2014, event: "Malaysia Airlines Flight 17 was shot down over Ukraine", category: "✈️ Aviation" }
    ],
    "07-20": [
        { year: 1969, event: "Apollo 11 landed on the Moon", category: "🚀 Space" },
        { year: 1944, event: "The July 20 plot to assassinate Hitler failed", category: "⚔️ War" },
        { year: 1871, event: "British Columbia joined Canadian Confederation", category: "🏛️ Politics" },
        { year: 2012, event: "The Aurora theater shooting occurred in Colorado", category: "😢 Tragedy" }
    ],

    // August
    "08-01": [
        { year: 1834, event: "Slavery abolished in British Empire", category: "⚖️ Rights" },
        { year: 1914, event: "Germany invaded Belgium, starting WWI", category: "⚔️ War" },
        { year: 1966, event: "Charles Whitman killed 16 at University of Texas", category: "😢 Tragedy" }
    ],
    "08-06": [
        { year: 1945, event: "The atomic bomb was dropped on Hiroshima", category: "⚔️ War" },
        { year: 1991, event: "The Soviet coup attempt against Mikhail Gorbachev began", category: "🏛️ Politics" },
        { year: 1890, event: "President Benjamin Harrison signed the Sherman Antitrust Act", category: "💰 Economy" }
    ],
    "08-15": [
        { year: 1945, event: "Japan announced surrender, ending World War II", category: "⚔️ War" },
        { year: 1969, event: "The Woodstock music festival began", category: "🎵 Music" },
        { year: 1947, event: "India gained independence from British rule", category: "🏛️ Politics" },
        { year: 1971, event: "President Nixon ended the convertibility of dollars to gold", category: "💰 Economy" }
    ],
    "08-24": [
        { year: 79, event: "Mount Vesuvius erupted, burying Pompeii", category: "🌋 Natural Disaster" },
        { year: 1814, event: "British burned Washington D.C.", category: "⚔️ War" },
        { year: 1968, event: "Prague Spring crushed by Warsaw Pact forces", category: "🏛️ Politics" }
    ],
    "08-28": [
        { year: 1963, event: "Martin Luther King Jr. delivered his 'I Have a Dream' speech", category: "⚖️ Rights" },
        { year: 1968, event: "The Democratic National Convention riots occurred in Chicago", category: "✊ Protest" },
        { year: 1922, event: "The first radio advertisement was broadcast", category: "📻 Media" },
        { year: 2005, event: "Hurricane Katrina made landfall in Louisiana", category: "🌪️ Weather" }
    ],

    // September
    "09-02": [
        { year: 1945, event: "Japan formally surrendered, ending World War II", category: "⚔️ War" },
        { year: 1666, event: "The Great Fire of London ended after four days", category: "🌆 Disaster" },
        { year: 1998, event: "Google was incorporated as a privately held company", category: "💻 Technology" }
    ],
    "09-05": [
        { year: 1972, event: "Munich massacre at Summer Olympics", category: "😢 Tragedy" },
        { year: 1997, event: "Mother Teresa died in Kolkata", category: "😢 Tragedy" },
        { year: 1905, event: "Albert Einstein published special theory of relativity", category: "🔬 Science" }
    ],
    "09-11": [
        { year: 2001, event: "Terrorist attacks occurred in New York and Washington D.C.", category: "😢 Tragedy" },
        { year: 1973, event: "Salvador Allende was overthrown in a Chilean military coup", category: "🏛️ Politics" },
        { year: 1922, event: "The British Mandate for Palestine began", category: "🏛️ Politics" },
        { year: 1941, event: "Ground breaking began for the Pentagon", category: "🏢 Construction" }
    ],
    "09-26": [
        { year: 1960, event: "The first televised presidential debate occurred (Kennedy vs Nixon)", category: "🏛️ Politics" },
        { year: 1983, event: "Stanislav Petrov prevented nuclear war by correctly identifying a false alarm", category: "⚔️ War" },
        { year: 1789, event: "Thomas Jefferson was appointed as the first US Secretary of State", category: "🏛️ Politics" },
        { year: 2008, event: "The Large Hadron Collider was first activated", category: "🔬 Science" }
    ],
    "09-30": [
        { year: 1938, event: "Munich Agreement signed", category: "🏛️ Politics" },
        { year: 1966, event: "Gibraltar airport runway opened", category: "✈️ Aviation" },
        { year: 2005, event: "Hurricane Stan struck Central America", category: "🌪️ Weather" }
    ],

    // October
    "10-01": [
        { year: 1949, event: "The People's Republic of China was proclaimed by Mao Zedong", category: "🏛️ Politics" },
        { year: 1971, event: "Walt Disney World opened in Florida", category: "🎢 Entertainment" },
        { year: 1884, event: "The London Convention set the Prime Meridian at Greenwich", category: "🌍 Science" }
    ],
    "10-12": [
        { year: 1492, event: "Christopher Columbus first sighted the Americas", category: "🌍 Exploration" },
        { year: 1960, event: "Nikita Khrushchev pounded his shoe at the UN", category: "🏛️ Politics" },
        { year: 1968, event: "The Mexico City Olympics began", category: "🏃 Sports" },
        { year: 2000, event: "USS Cole was bombed in Yemen", category: "⚔️ War" }
    ],
    "10-16": [
        { year: 1793, event: "Marie Antoinette executed", category: "⚔️ War" },
        { year: 1978, event: "Pope John Paul I elected", category: "⛪ Religion" },
        { year: 2002, event: "LEGOLAND California opened", category: "🎢 Entertainment" }
    ],
    "10-31": [
        { year: 1517, event: "Martin Luther posted the 95 Theses, beginning the Protestant Reformation", category: "⛪ Religion" },
        { year: 1941, event: "Mount Rushmore was completed", category: "🏛️ Monuments" },
        { year: 1968, event: "President Johnson announced a halt to bombing in North Vietnam", category: "⚔️ War" },
        { year: 2000, event: "The first crew arrived at the International Space Station", category: "🚀 Space" }
    ],

    // November
    "11-05": [
        { year: 1605, event: "The Gunpowder Plot to blow up the English Parliament was foiled", category: "⚔️ War" },
        { year: 1872, event: "The first-ever international football match was played (Scotland vs England)", category: "⚽ Sports" },
        { year: 1916, event: "Margaret Sanger opened the first birth control clinic in the U.S.", category: "⚖️ Rights" }
    ],
    "11-09": [
        { year: 1989, event: "The Berlin Wall fell", category: "🏛️ Politics" },
        { year: 1965, event: "The Great Northeast Blackout occurred", category: "⚡ Technology" },
        { year: 1938, event: "Kristallnacht occurred in Nazi Germany", category: "😢 Tragedy" },
        { year: 2016, event: "Donald Trump was elected US President", category: "🏛️ Politics" }
    ],
    "11-11": [
        { year: 1918, event: "Armistice ended WWI", category: "⚔️ War" },
        { year: 1975, event: "Angola gained independence from Portugal", category: "🏛️ Politics" },
        { year: 2004, event: "Facebook opened registration to non-college users", category: "💻 Technology" }
    ],
    "11-22": [
        { year: 1963, event: "President John F. Kennedy was assassinated in Dallas", category: "🏛️ Politics" },
        { year: 1975, event: "Juan Carlos became King of Spain", category: "🏛️ Politics" },
        { year: 1963, event: "Aldous Huxley and C.S. Lewis both died on the same day as JFK", category: "📚 Literature" },
        { year: 1995, event: "Toy Story, the first fully computer-animated film, was released", category: "🎬 Entertainment" }
    ],

    // December
    "12-01": [
        { year: 1955, event: "Rosa Parks refused to give up her seat on a Montgomery bus", category: "✊ Protest" },
        { year: 1913, event: "Grand Central Terminal opened in NYC", category: "🏢 Construction" },
        { year: 1969, event: "The first draft lottery in the US was held", category: "⚔️ War" }
    ],
    "12-07": [
        { year: 1941, event: "Pearl Harbor was attacked by Japan", category: "⚔️ War" },
        { year: 1988, event: "A major earthquake struck Armenia", category: "🌍 Natural Disaster" },
        { year: 1975, event: "Indonesia invaded East Timor", category: "⚔️ War" },
        { year: 1993, event: "The first text message was sent", category: "💻 Technology" }
    ],
    "12-10": [
        { year: 1948, event: "The United Nations adopted the Universal Declaration of Human Rights", category: "⚖️ Rights" },
        { year: 1901, event: "The first Nobel Prizes were awarded", category: "🏆 Awards" },
        { year: 1964, event: "The Tanganyika and Zanzibar union formed Tanzania", category: "🏛️ Politics" }
    ],
    "12-25": [
        { year: 0, event: "Jesus Christ was born (according to Christian tradition)", category: "⛪ Religion" },
        { year: 1776, event: "George Washington crossed the Delaware River", category: "⚔️ War" },
        { year: 1991, event: "The Soviet Union was officially dissolved", category: "🏛️ Politics" },
        { year: 1914, event: "The Christmas Truce occurred during World War I", category: "⚔️ War" }
    ],
    "12-31": [
        { year: 1879, event: "Thomas Edison demonstrated his incandescent light bulb", category: "💡 Innovation" },
        { year: 1999, event: "Y2K bug fears peaked as year ended", category: "💻 Technology" },
        { year: 2008, event: "Stock markets crashed in global financial crisis", category: "💰 Economy" }
    ]
};

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

// Main age calculation function with your custom comments
function exactAge() {
    if (birthInput.value === "") {
        result.innerHTML = '<span class="text-red-300">Please enter your Date of birth first</span>';
        return;
    } 

    const birthDate = new Date(birthInput.value);
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

    result.innerHTML = ''; // Clear previous result

    if (years === 0) {
        result.innerHTML = '<span class="text-red-300">Bro... you aren\'t even born yet. 💀</span>';
        return;
    }

    // Create age display with animation
    const ageDisplay = document.createElement("div");
    ageDisplay.className = "animate-slideUp";
    ageDisplay.innerHTML = `
        <div class="text-4xl mb-3">🎉</div>
        <div class="text-2xl font-bold text-white mb-2">You are ${years} years, ${months} months, and ${days} days old.</div>
    `;
    result.appendChild(ageDisplay);

    // Add your custom age-based comments
    const commentLine = document.createElement("div");
    commentLine.className = "text-blue-300 mt-3";
    
    if (years > 0 && years <= 4) {
        commentLine.textContent = "Who gave you phone access, little one? 📱🍼";
    } else if (years > 4 && years <= 12) {
        commentLine.textContent = "Cartoons > Homework. We all know that. 📺✏️";
    } else if (years > 12 && years <= 17) {
        commentLine.textContent = "Ah, the teenage phase: drama, crushes & mood swings 🎭💔";
    } else if (years > 17 && years <= 24) {
        commentLine.textContent = "Start struggling to understand yourself. ~Zaryab";
    } else {
        commentLine.textContent = "Life is a beautiful journey! Keep exploring! ✨";
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

// Dark Mode Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;
    
    // Theme toggle icons
    const lightIcons = document.querySelectorAll('#theme-toggle-light-icon, #mobile-theme-toggle-light-icon');
    const darkIcons = document.querySelectorAll('#theme-toggle-dark-icon, #mobile-theme-toggle-dark-icon');
    
    // Check for saved theme preference or default to dark mode
    let savedTheme = 'dark';
    try {
        savedTheme = localStorage.getItem('theme') || 'dark';
    } catch (e) {
        // Fallback if localStorage is not available
        savedTheme = 'dark';
    }
    
    // Apply saved theme on page load
    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-mode');
            lightIcons.forEach(icon => icon.classList.remove('hidden'));
            darkIcons.forEach(icon => icon.classList.add('hidden'));
        } else {
            body.classList.remove('light-mode');
            lightIcons.forEach(icon => icon.classList.add('hidden'));
            darkIcons.forEach(icon => icon.classList.remove('hidden'));
        }
    }
    
    // Apply theme on page load
    applyTheme(savedTheme);
    
    // Toggle theme function
    function toggleTheme() {
        const isLightMode = body.classList.contains('light-mode');
        
        if (isLightMode) {
            // Switch to dark mode
            body.classList.remove('light-mode');
            lightIcons.forEach(icon => icon.classList.add('hidden'));
            darkIcons.forEach(icon => icon.classList.remove('hidden'));
            try {
                localStorage.setItem('theme', 'dark');
            } catch (e) {
                // Continue without localStorage if not available
            }
        } else {
            // Switch to light mode
            body.classList.add('light-mode');
            lightIcons.forEach(icon => icon.classList.remove('hidden'));
            darkIcons.forEach(icon => icon.classList.add('hidden'));
            try {
                localStorage.setItem('theme', 'light');
            } catch (e) {
                // Continue without localStorage if not available
            }
        }
    }
    
    // Add event listeners for theme toggle buttons
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
    
    // Toggle mobile menu
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on navigation links
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
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Refresh history button functionality
    const refreshHistoryBtn = document.getElementById('refreshHistoryBtn');
    if (refreshHistoryBtn) {
        refreshHistoryBtn.addEventListener('click', function() {
            if (birthInput.value) {
                const birthDate = new Date(birthInput.value);
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