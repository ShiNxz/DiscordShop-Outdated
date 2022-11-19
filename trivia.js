/*
    @title = השם של העבודה
    @options = האפשרויות להצגה
    @correct = מספר תשובה נכונה
    @coins = מספר מטבעות לתשובה נכונה
    @difficulty = רמת קושי
    @category = נושא
*/
let questions = [
    {
        title: "מהו המשחק הוותיק ביותר מבין הבאים?",
        options: [
            "Five Nights at Freddy's",
            "Minecraft",
            "Happy Wheels",
            "COD: Modern Warfare 3"
        ],
        correct: 3,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "מהו המשחק הנמכר ביותר עד היום?",
        options: [
            "COD: Modern Warfare 3",
            "Happy Wheels",
            "Minecraft",
            "Tetris"
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה 'נינטנדו' הוקמה?",
        options: [
            "1945",
            "1889",
            "1858",
            "1920"
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה משקפי הוירטואל ריאלטי נוצרו לראשונה?",
        options: [
            "1995",
            "1983",
            "1992",
            "1920"
        ],
        correct: 1,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'מי היה הרמטכ"ל הרביעי של צה"ל?',
        options: [
            "מרדכי מקלף",
            "משה דיין",
            "יגאל ידין",
            "יעקב דורי"
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'צה"ל'
    },
    {
        title: 'מי היה הזוכה בעונה השנייה של האח הגדול?',
        options: [
            "ג'קי מנחם",
            "אלירז שדה",
            "שפרה קורנפלד",
            "קותי סבג"
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'ריאלטי'
    },
    {
        title: 'כמה פעמים בחייו התחתן בנימין נתניהו?',
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'ראשי ממשלות'
    },
    {
        title: 'מי מהבאים לא היה שופט בדה ווייס?',
        options: [
            "אסף אמדורסקי",
            "שרית חדד", 
            "מוש בן ארי", 
            "יובל בנאי ושלומי ברכה"
        ],
        correct: 1,
        coins: 100,
        difficulty: 'קשה',
        category: 'ריאלטי'
    },
    {
        title: 'איך קוראים למפה המקורית של PUBG?',
        options: [
            "מירמר",
            "בית אלעזרי", 
            "ארנגל", 
            "היירול"
        ],
        correct: 3,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: 'מה הדבר היחיד שלא תלמדו ב-CS:GO?',
        options: [
            "לתפעל מעצור",
            "לשחוט תרנוגולות", 
            "לקלל ברוסית", 
            "לרסס גרפיטי"
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'מה היה המשחק וידאו המסחרי המוצלח הראשון?',
        options: [
            "סופר מריו",
            "פונג", 
            "טטריס", 
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'מהי הקונסולה הנמכרת ביותר בכל הזמנים?',
        options: [
            "סוני 2",
            "גיימבוי", 
            "סוני 4", 
            "Wii", 
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'מה היה המוצר הראשון של נינטנדו כשנכנסה לעולם הגיימינג',
        options: [
            "המשחק פונג",
            "קלפי משחק", 
            "המשחק האחים מריו", 
            "משחק קופסא דומה למונופול", 
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'במיינקראפט – איך קוראים לקבוצה של Enderman',
        options: [
            "אין לזה שם",
            "A haunting of Endermen", 
            "A group of Endermen", 
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'איזה משחק זכה לסך כולל של תביעות של יותר ממיליארד דולר',
        options: [
            "CS:GO",
            "GTA V",
            "Fortnite", 
            "FIFA", 
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'מה הבעייה הגדולה של 40% משחקני ה VR',
        options: [
            "חוסר במשחקים",
            "בהירות גבוהה מידי",
            "בחילה מהתנועה", 
            "המחיר", 
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'באיזה משחק הוצג לראשונה סוניק',
        options: [
            "בסופר מריו",
            "במשחק הראשון של סוניק", 
            "פונג", 
            "Red Mobile",
        ],
        correct: 4,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'כמה זמרים שרים את שיר הפתיחה של Skyrim',
        options: [
            "8 זמרים",
            "127 זמרים", 
            "30 זמרים", 
            "90 זמרים",
        ],
        correct: 3,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'במשחק Bioshock, מה היה השם המקורי של בנק הגנים',
        options: [
            "Plasmi-Quick",
            "Gene Place", 
            "Gene bank", 
            "Gene store",
        ],
        correct: 1,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'איזה משחק נלקח כל כך ברצינות בדרום קוריאה, שהוא הוכרז כ eSport במדינה',
        options: [
            "FIFA",
            "StarCraft", 
            "CS:GO", 
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'בקמפיין הבחירות של אובמה, הם פרסמו בתשלום באיזה משחק',
        options: [
            "2KNBA",
            "Sims", 
            "President Care", 
            "Burnout Paradise", 
        ],
        correct: 4,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'מה היה הייעוד המקורי של המשחק Sims',
        options: [
            "סימולטור אדריכלות",
            "משחק ללימוד ניהול כספי", 
            "משחק לטיפול זוגי", 
            "משחק פרסומי לאיקאה", 
        ],
        correct: 1,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'באיזה משחק אם מחברים שני שחקנים בעלי אלמנטים מקבילים יכולים להתחבר לדמות אחת חזקה יותר?',
        options: [
            "Little Fighter",
            "Scrap Mechanic", 
            "COD", 
            "Minecraft", 
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'כמה שרתי ריטייקים קיימים בקהילה?',
        options: [
            "1",
            "4", 
            "6", 
            "8", 
        ],
        correct: 4,
        coins: 25,
        difficulty: 'קל',
        category: 'קהילה'
    },
    {
        title: 'כמה שרתים תחרותיים קיימים בקהילה (לא כולל ריטייקים)?',
        options: [
            "1",
            "3", 
            "5", 
            "7", 
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'קהילה'
    },
    {
        title: 'כמה שרתי קלאבים קיימים בקהילה (סארף, פאן, וכו)?',
        options: [
            "1",
            "3", 
            "5", 
            "7", 
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'קהילה'
    },
    {
        title: 'באיזו שנה הושק המשחק הראשון של GTA?',
        options: [
            "2000",
            "1997", 
            "2003", 
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'איך קראו למשחק ה־FIFA הראשון?',
        options: [
            "FIFA 93",
            "FIFA 1", 
            "FIFA International Soccer", 
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'באיזו שנה יצא משחק ה־NBA הראשון?',
        options: [
            "1995",
            "2000", 
            "1999", 
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'כמה שנים אלן אייברסון כיכב על עטיפת ה־NBA?',
        options: [
            "5 שנים",
            "3 שנים", 
            "7 שנים", 
        ],
        correct: 1,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'מאיזו שנה התחילו לשים על עטיפות משחקי FIFA כדורגלנים?',
        options: [
            "2000",
            "2005", 
            "2003", 
        ],
        correct: 3,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: 'כיצד נקראת תערוכת הגיימינג המתרחשת מדי שנה בחודש אוגוסט?',
        options: [
            "Gamescom",
            "E3", 
            "Comic-Con", 
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'איזה משחק זכה בתואר Game of The Year לשנת 2018?',
        options: [
            "Red Dead Redemption",
            "Monster Hunter: World",
            "God of War",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'איזה משחק מבית חברת Blizzard עובד לסרט?',
        options: [
            "Warcraft",
            "Diablo",
            "Overwatch",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה כותר Assassin's Creed מתרחש במהלך המהפכה הצרפתית?",
        options: [
            "Brotherhood",
            "Black Flag",
            "Unity",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באמצעות איזו סדרת משחקים הפכה חברת CD Projekt Red למוכרת?",
        options: [
            "The witcher",
            "Saints Row 2",
            "Cyberpunk 2077",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזו חברה אחראית על פיתוח המשחק Destiny 2?",
        options: [
            "EA",
            "Ubisoft",
            "Bungie",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק מבית חברת Ubisoft מתרחש במדינת בולוביה?",
        options: [
            "Splinter Cell",
            "Ghost Recon Wildlands",
            "Watch Dogs",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזה שנה עתיד להיות מושק כותר הנוקמים מבית Square Enix?",
        options: [
            "2021",
            "2022",
            "2020",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקרא כותר ה־Wolfenstein שיצא לאור בשנת 2017?",
        options: [
            "Youngblood",
            "The Old Blood",
            "The New Colossus",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקראת הדמות הראשית בסדרת משחקי Tomb Raider?",
        options: [
            "Tracer",
            "Ellie Williams",
            "Lara Croft",
        ],
        correct: 3,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה יצא כותר ה־Assassin's Creed הראשון?",
        options: [
            "2005",
            "2010",
            "2007",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה יצא המשחק The Witcher 3?",
        options: [
            "2015",
            "2012",
            "2018",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקרא כותר הבאטל־רויאל מבית חברת Respawn Entertainment?",
        options: [
            "PUBG",
            "Fortnite",
            "Apex Legends",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק ייצא לאור בתאריך 16 באפריל 2020?",
        options: [
            "Dying Light 2",
            "Cyberpunk 2077",
            "COD: Modern Warfare",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק פופולרי של חברה מפתחת הממוקמת בשוודיה יצא בשנת 2011 ומשוחק עד היום?",
        options: [
            "Garry's Mod",
            "Half-Life",
            "Minecraft",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקרא כותר הזומבים מבית חברת Techland שיצא בשנת 2015?",
        options: [
            "Dead Island",
            "Dead Island Riptide",
            "Dying Light",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כמה שערי יציאה יש בכל משחק ב־Dead by Daylight?",
        options: [
            "1",
            "2",
            "3",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כמה מכוניות אקסלוסיביות ל־Nintendo Switch יש ב־Rocket League?",
        options: [
            "1",
            "3",
            "5",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "מה שמה של המפתחת משחקים שאחראית על המשחקים Half-Life, Dota 2, CS:GO?",
        options: [
            "EA",
            "Valve",
            "Facepunch Studios",
        ],
        correct: 2,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה שוחרר המשחק Fortnite?",
        options: [
            "2018",
            "2015",
            "2017",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: 'כמה משחקי GTA יש בסה"כ?',
        options: [
            "10",
            "12",
            "16",
        ],
        correct: 3,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: 'כיצד נקרא מצב הבאטל־רויאל של המשחק CS:GO?',
        options: [
            "CS:GO: Battle Royale",
            "Danger Zone",
            "CS:GO BR",
        ],
        correct: 2,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: 'איזה שחקן קולנוע יככב במשחק Cyberpunk 2077?',
        options: [
            "רוברט דאוני ג'וניור",
            "בראד פיט",
            "קיאנו ריבס",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "מי הדיג'יי שלכבודו Epic Games הכינו סקין במשחק Fortnite?",
        options: [
            "Skrillex",
            "Marshmello",
            "David Guetta",
        ],
        correct: 2,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "כמה קלאסים יש בכותר World of Warcraft?",
        options: [
            "10",
            "12",
            "15",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה הושק הכותר World of Warcraft הראשון?",
        options: [
            "2000",
            "1999",
            "2004",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "לאיזה ז'אנר משתייך המשחק Ring of Elysium?",
        options: [
            "באטל רויאל",
            "הרפתקאות",
            "אימה",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזה משחק אתם משחקים אדם קירח שתפקידו להתנקש באנשים ספציפיים?",
        options: [
            "Hitman",
            "GTA",
            "Splinter Cell",
        ],
        correct: 1,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקרא משחק היריות הפופולרי שהפך לחינמי בסוף שנת 2018?",
        options: [
            "COD: Modern Warfare 2",
            "Battlefield 1",
            "CS:GO",
        ],
        correct: 3,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "מהו המשחק האחרון שהוציאה Ubisoft בסדרת Anno?",
        options: [
            "Anno 2070",
            "Anno 1800",
            "Anno 2205",
        ],
        correct: 2,
        coins: 100,
        difficulty: 'קשה',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק Battle Royale יצא בחודש מרץ 2017?",
        options: [
            "Fortnite",
            "PUBG",
            "Apex Legends",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקראת החללית שלכם ב-Mass Effect Andromeda?",
        options: [
            "Normandy",
            "Tempest",
            "Nexus",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "את מי Geralt בסדרת משחקי The Witcher רואה בתור הבת שלו?",
        options: [
            "Yennefer",
            "Triss",
            "Ciri",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "מהו שם הקוד של כותר Ghost Recon שיצא בחודש אוקטובר?",
        options: [
            "Breakpoint",
            "Wildlands",
            "Future Soldier",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזו חברה אחראית על פיתוח Red Dead Redemption 2?",
        options: [
            "Rockstar Games",
            "CD Projekt Red",
            "Blizzard",
        ],
        correct: 1,
        coins: 25,
        difficulty: 'קל',
        category: 'גיימינג'
    },
    {
        title: "איזה כותר Resident Evil זכה לקבל רימייק בתחילת השנה?",
        options: [
            "RE2",
            "RE3",
            "RE5",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "באיזו שנה יצא המשחק Uncharted: A Thief's End?",
        options: [
            "2015",
            "2016",
            "2017",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "כיצד נקראת הדמות ב-Apex Legends שיכולה לרפא דמויות אחרות?",
        options: [
            "Gibraltar",
            "Octane",
            "Lifeline",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "מהו המשחק האחרון שפיתחה Avalanche Studios?",
        options: [
            "Generation Zero",
            "Rage 2",
            "Just Cause 4",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק שיצא השנה מתרחש בעולם פתוח ועוסק בזומבים?",
        options: [
            "Rage 2",
            "World War Z",
            "Days Gone",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק לשחקן יחיד יצא בחודש ספטמבר מבית Focus Home?",
        options: [
            "Greedfall",
            "The Surge 2",
            "Vampyr",
        ],
        correct: 1,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה משחק עתיד להיות מכובד לסדרת טלוויזיה מבית Netflix?",
        options: [
            "The Division",
            "The Witcher",
            "Gears of War",
        ],
        correct: 2,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
    {
        title: "איזה כותר מבית חברת EA עוסק ביצור העשוי מחוטים?",
        options: [
            "Anthem",
            "Sea of Solitude",
            "Unravel Two",
        ],
        correct: 3,
        coins: 50,
        difficulty: 'בינוני',
        category: 'גיימינג'
    },
];

module.exports = questions;