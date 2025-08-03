const chatConfig = {
    // Site metadata
    metadata: {
        siteName: "Chat Sessions Navigator",
        version: "1.0.0",
        lastUpdated: "2025-08-03",
        description: "A navigator for browsing AI chat sessions and conversations",
        author: "Your Name"
    },

    // Navigation settings
    settings: {
        // Default view settings
        defaultView: "welcome", // "welcome" | "latest" | specific session ID
        
        // Mobile settings
        mobileOpenInNewTab: true, // Open sessions in new tab on mobile
        mobileBreakpoint: 768, // px - when to consider device "mobile"
        
        // Sidebar settings
        sidebarWidth: 320, // px
        collapseSidebarOnMobile: true,
        
        // Session loading settings
        iframeTimeout: 8000, // ms - how long to wait before showing direct link
        enableIframeFallback: true,
        
        // Search and filtering (for future expansion)
        enableSearch: false,
        enableFiltering: false,
        enableSorting: true,
        defaultSort: "date-desc" // "date-desc" | "date-asc" | "title-asc" | "title-desc" | "messages-desc"
    },

    // Categories for organizing sessions (optional)
    categories: [
        {
            id: "development",
            name: "Development",
            description: "Coding and development discussions",
            color: "#667eea"
        },
        {
            id: "security",
            name: "Security",
            description: "Security analysis and discussions",
            color: "#f093fb"
        },
        {
            id: "roleplay",
            name: "Roleplay",
            description: "Creative roleplay sessions",
            color: "#4facfe"
        },
        {
            id: "philosophy",
            name: "Philosophy",
            description: "Philosophical discussions and debates",
            color: "#43e97b"
        },
        {
            id: "technical",
            name: "Technical",
            description: "Technical implementations and solutions",
            color: "#fa709a"
        },
        {
            id: "general",
            name: "General",
            description: "General conversations and discussions",
            color: "#a8edea"
        }
    ],

    // Chat sessions data
    sessions: [
        {
            // Required fields
            id: "aletheia-dev-complete",
            title: "Complete Aletheia Project Development Chat",
            filename: "aletheia-dev.html",
            date: "2025-08-03",
            
            // Optional fields
            category: "development",
            estimatedMessages: 100,
            duration: "3h 45m", // estimated reading time
            participants: ["User", "Claude"],
            tags: ["aletheia", "development", "project", "full-stack"],
            description: "Complete development discussion for the Aletheia truth verification system, including architecture, implementation, and testing strategies.",
            featured: true, // highlight this session
            
            // Technical metadata
            fileSize: "245KB",
            lastModified: "2025-08-03T14:30:00Z",
            
            // Additional metadata for rich previews
            preview: "A comprehensive discussion about building Aletheia, a truth verification system...",
            thumbnail: null, // path to thumbnail image if available
            
            // Status indicators
            status: "complete", // "complete" | "ongoing" | "draft" | "archived"
            quality: "high", // "high" | "medium" | "low" - for filtering
            
            // Access control (for future expansion)
            public: true,
            requiresAuth: false
        },
        {
            id: "prompt-injection-prevention",
            title: "Prompt Injection Prevention Discussion",
            filename: "prompt-injection.html",
            date: "2025-08-03",
            category: "security",
            estimatedMessages: 22,
            duration: "45m",
            participants: ["User", "Claude"],
            tags: ["security", "prompt-injection", "ai-safety", "prevention"],
            description: "Deep dive into prompt injection vulnerabilities and prevention strategies for AI systems.",
            preview: "Discussion of various prompt injection attack vectors and defensive measures...",
            status: "complete",
            quality: "high",
            public: true,
            requiresAuth: false
        },
        {
            id: "red-team-security-analysis",
            title: "Red Team Security Analysis",
            filename: "red-team-security.html",
            date: "2025-08-03",
            category: "security",
            estimatedMessages: 22,
            duration: "1h 15m",
            participants: ["Gemma", "Thomas", "Claude"],
            tags: ["red-team", "security", "analysis", "collaboration"],
            description: "Collaborative red team security analysis with multiple participants discussing threat models and defense strategies.",
            preview: "Multi-participant analysis of security threats and defensive measures...",
            status: "complete",
            quality: "high",
            public: true,
            requiresAuth: false,
            featured: true
        },
        {
            id: "star-trek-roleplay",
            title: "Star Trek Roleplay Session",
            filename: "star-trek-roleplay.html",
            date: "2025-08-02",
            category: "roleplay",
            estimatedMessages: 40,
            duration: "2h 30m",
            participants: ["User", "Claude"],
            tags: ["star-trek", "roleplay", "creative", "sci-fi"],
            description: "Creative Star Trek roleplay session exploring diplomacy and space exploration scenarios.",
            preview: "Engaging roleplay set in the Star Trek universe with diplomatic missions...",
            status: "complete",
            quality: "medium",
            public: true,
            requiresAuth: false
        },
        {
            id: "hidden-function-development",
            title: "Hidden Function Development",
            filename: "hidden-function-dev.html",
            date: "2025-08-02",
            category: "development",
            estimatedMessages: 5,
            duration: "20m",
            participants: ["User", "Claude"],
            tags: ["development", "functions", "javascript", "quick"],
            description: "Brief discussion about implementing hidden functions in JavaScript applications.",
            preview: "Quick technical discussion about function visibility and encapsulation...",
            status: "complete",
            quality: "medium",
            public: true,
            requiresAuth: false
        },
        {
            id: "ai-shorthand-development",
            title: "AI Shorthand Development Discussion",
            filename: "ai-shorthand-dev.html",
            date: "2025-08-02",
            category: "development",
            estimatedMessages: 31,
            duration: "1h 45m",
            participants: ["User", "Claude"],
            tags: ["ai", "shorthand", "development", "language-processing"],
            description: "Development of an AI-powered shorthand system for rapid text input and processing.",
            preview: "Creating an intelligent shorthand system for faster communication...",
            status: "complete",
            quality: "high",
            public: true,
            requiresAuth: false
        },
        {
            id: "philosophical-discussion",
            title: "Philosophical Discussion",
            filename: "philosophical-discussion.html",
            date: "2025-08-02",
            category: "philosophy",
            estimatedMessages: 16,
            duration: "1h 20m",
            participants: ["User", "Claude"],
            tags: ["philosophy", "ethics", "consciousness", "deep-thinking"],
            description: "Deep philosophical exploration of consciousness, ethics, and the nature of intelligence.",
            preview: "Exploring fundamental questions about consciousness and artificial intelligence...",
            status: "complete",
            quality: "high",
            public: true,
            requiresAuth: false
        },
        {
            id: "dcc-technical-implementation",
            title: "DCC Technical Implementation",
            filename: "dcc-technical-implementation.html",
            date: "2025-08-02",
            category: "technical",
            estimatedMessages: 6,
            duration: "25m",
            participants: ["User", "Claude"],
            tags: ["dcc", "technical", "implementation", "brief"],
            description: "Technical implementation details for a DCC (Data Control Center) system.",
            preview: "Brief technical discussion about DCC system architecture and implementation...",
            status: "complete",
            quality: "medium",
            public: true,
            requiresAuth: false
        }
    ],

    // UI customization
    theme: {
        colors: {
            primary: "#667eea",
            secondary: "#764ba2",
            background: "#1a1a1a",
            surface: "#2d2d2d",
            text: "#e0e0e0",
            textSecondary: "#999",
            border: "#444",
            accent: "#4facfe",
            success: "#4CAF50",
            warning: "#FF9800",
            error: "#ff6b6b"
        },
        fonts: {
            primary: "'Consolas', 'Monaco', 'Courier New', monospace",
            secondary: "'Inter', 'Segoe UI', sans-serif"
        },
        borderRadius: "6px",
        shadows: {
            light: "0 2px 8px rgba(0,0,0,0.3)",
            medium: "0 4px 12px rgba(0,0,0,0.4)",
            heavy: "0 8px 24px rgba(0,0,0,0.5)"
        }
    },

    // Advanced features (for future expansion)
    features: {
        search: {
            enabled: false,
            placeholder: "Search sessions...",
            searchFields: ["title", "description", "tags", "participants"]
        },
        
        filtering: {
            enabled: false,
            filters: [
                { key: "category", label: "Category", type: "select" },
                { key: "status", label: "Status", type: "select" },
                { key: "quality", label: "Quality", type: "select" },
                { key: "featured", label: "Featured Only", type: "boolean" },
                { key: "dateRange", label: "Date Range", type: "daterange" }
            ]
        },
        
        sorting: {
            enabled: true,
            options: [
                { key: "date-desc", label: "Newest First" },
                { key: "date-asc", label: "Oldest First" },
                { key: "title-asc", label: "Title A-Z" },
                { key: "title-desc", label: "Title Z-A" },
                { key: "messages-desc", label: "Most Messages" },
                { key: "messages-asc", label: "Fewest Messages" }
            ]
        },
        
        export: {
            enabled: false,
            formats: ["json", "csv"]
        },
        
        analytics: {
            enabled: false,
            trackViews: false,
            trackDuration: false
        },
        
        bookmarks: {
            enabled: false,
            useLocalStorage: true
        },
        
        comments: {
            enabled: false,
            useLocalStorage: true
        }
    },

    // Development and debugging
    debug: {
        enabled: false, // Set to true for development
        logLevel: "info", // "debug" | "info" | "warn" | "error"
        showMetadata: false,
        showLoadTimes: false
    }
};

// Helper functions for working with the config
const ChatConfigHelpers = {
    /**
     * Get all sessions sorted by the specified criteria
     */
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
            case "messages-desc":
                return sessions.sort((a, b) => (b.estimatedMessages || 0) - (a.estimatedMessages || 0));
            case "messages-asc":
                return sessions.sort((a, b) => (a.estimatedMessages || 0) - (b.estimatedMessages || 0));
            default:
                return sessions;
        }
    },

    /**
     * Get sessions by category
     */
    getSessionsByCategory(categoryId) {
        return chatConfig.sessions.filter(session => session.category === categoryId);
    },

    /**
     * Get featured sessions
     */
    getFeaturedSessions() {
        return chatConfig.sessions.filter(session => session.featured === true);
    },

    /**
     * Search sessions by query
     */
    searchSessions(query) {
        const searchTerm = query.toLowerCase();
        return chatConfig.sessions.filter(session => {
            return session.title.toLowerCase().includes(searchTerm) ||
                   (session.description && session.description.toLowerCase().includes(searchTerm)) ||
                   (session.tags && session.tags.some(tag => tag.toLowerCase().includes(searchTerm))) ||
                   (session.participants && session.participants.some(p => p.toLowerCase().includes(searchTerm)));
        });
    },

    /**
     * Get session by ID
     */
    getSessionById(id) {
        return chatConfig.sessions.find(session => session.id === id);
    },

    /**
     * Get category by ID
     */
    getCategoryById(id) {
        return chatConfig.categories.find(category => category.id === id);
    },

    /**
     * Get sessions statistics
     */
    getStats() {
        const sessions = chatConfig.sessions;
        return {
            totalSessions: sessions.length,
            totalMessages: sessions.reduce((sum, s) => sum + (s.estimatedMessages || 0), 0),
            categoryCounts: chatConfig.categories.map(cat => ({
                category: cat.name,
                count: sessions.filter(s => s.category === cat.id).length
            })),
            featuredCount: sessions.filter(s => s.featured).length,
            latestDate: sessions.length > 0 ? Math.max(...sessions.map(s => new Date(s.date))) : null
        };
    }
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chatConfig, ChatConfigHelpers };
}

// Make available globally
window.chatConfig = chatConfig;
window.ChatConfigHelpers = ChatConfigHelpers;