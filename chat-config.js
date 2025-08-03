/**
 * Chat Sessions Configuration - Updated to match actual files
 * Based on your chats/ directory contents
 */

const chatConfig = {
    settings: {
        mobileOpenInNewTab: true,
        mobileBreakpoint: 768,
        sidebarWidth: 320,
        iframeTimeout: 5000,
        enableIframeFallback: true
    },

    sessions: [
        {
            id: "aletheia-development",
            title: "Complete Aletheia Project Development Chat",
            filename: "aletheia-development.html", // ✓
            date: "2025-08-03",
            estimatedMessages: 100,
            description: "Complete development discussion for the Aletheia truth verification system"
        },
        {
            id: "dcc",
            title: "DCC Technical Implementation",
            filename: "dcc.html", // ✓ Matches your file
            date: "2025-08-02",
            estimatedMessages: 6,
            description: "Technical implementation details for a DCC (Data Control Center) system"
        },
        {
            id: "hidden-function",
            title: "Hidden Function Development",
            filename: "hidden-function.html", // ✓ Matches your file
            date: "2025-08-02",
            estimatedMessages: 5,
            description: "Brief discussion about implementing hidden functions in JavaScript applications"
        },
        {
            id: "prompt-injection",
            title: "Prompt Injection Prevention Discussion",
            filename: "prompt-injection.html", // ✓ 
            date: "2025-08-03",
            estimatedMessages: 22,
            description: "Deep dive into prompt injection vulnerabilities and prevention strategies"
        },
        {
            id: "red-team",
            title: "Red Team Security Analysis",
            filename: "red-team.html", // ✓ 
            date: "2025-08-03",
            estimatedMessages: 22,
            description: "Collaborative red team security analysis with multiple participants"
        },
        {
            id: "salty-vibes",
            title: "Salty Vibes Discussion",
            filename: "salty-vibes.html", // ✓ 
            date: "2025-08-02",
            estimatedMessages: 15,
            description: "Creative discussion session with interesting perspectives"
        },
        {
            id: "shorthand",
            title: "AI Shorthand Development Discussion",
            filename: "shorthand.html", // ✓
            date: "2025-08-02",
            estimatedMessages: 31,
            description: "Development of an AI-powered shorthand system for rapid text input"
        },
        {
            id: "star-trek-larp",
            title: "Star Trek LARP Session",
            filename: "star-trek-larp.html", // ✓ 
            date: "2025-08-02",
            estimatedMessages: 40,
            description: "Creative Star Trek live-action roleplay session exploring sci-fi scenarios"
        }
    ]
};

// Helper functions
const ChatConfigHelpers = {
    getSortedSessions(sortBy = "date-desc") {
        const sessions = [...chatConfig.sessions];
        
        switch (sortBy) {
            case "date-desc":
                return sessions.sort((a, b) => new Date(b.date) - new Date(a.date));
            case "date-asc":
                return sessions.sort((a, b) => new Date(a.date) - new Date(b.date));
            case "title-asc":
                return sessions.sort((a, b) => a.title.localeCompare(b.title));
            case "title-desc":
                return sessions.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return sessions;
        }
    },

    getSessionById(id) {
        return chatConfig.sessions.find(session => session.id === id);
    },

    validateFileNames() {
        console.log('Expected files in chats/ directory:');
        chatConfig.sessions.forEach(session => {
            console.log(`- ${session.filename}`);
        });
    }
};

// Export for browser
window.chatConfig = chatConfig;
window.ChatConfigHelpers = ChatConfigHelpers;

// Auto-run validation in console
//console.log('Chat Navigator Config Loaded');
//console.log(`Found ${chatConfig.sessions.length} sessions configured`);
//ChatConfigHelpers.validateFileNames();