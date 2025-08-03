// Chat configuration and session metadata
const chatConfig = {
    // GitHub Pages configuration
    baseUrl: './',
    
    // Session categories (kept for potential future use)
    categories: {
        'Development': {
            color: '#667eea',
            icon: '⚡'
        },
        'Security': {
            color: '#f093fb',
            icon: '🔒'
        },
        'Technical': {
            color: '#4facfe',
            icon: '🔧'
        }
    },
    
    // Chat sessions metadata
    sessions: [
        {
            id: 'aletheia-development',
            title: 'Complete Aletheia Project Development Chat',
            description: 'Comprehensive development discussion for the Aletheia project implementation',
            category: 'Development',
            participants: ['User', 'Assistant'],
            date: new Date().toISOString().split('T')[0],
            status: 'completed',
            filename: 'aletheia-development.html',
            estimatedMessages: 100
        },
        {
            id: 'prompt-injection',
            title: 'Prompt Injection Prevention Discussion',
            description: 'Security-focused discussion on preventing prompt injection attacks',
            category: 'Security',
            participants: ['GEMMA', 'THOMAS', 'QA'],
            date: new Date().toISOString().split('T')[0],
            status: 'completed',
            filename: 'prompt-injection.html',
            estimatedMessages: 22
        },
        {
            id: 'red-team',
            title: 'Red Team Security Analysis',
            description: 'Security analysis and red team discussion',
            category: 'Security',
            participants: ['Security Team'],
            date: new Date().toISOString().split('T')[0],
            status: 'completed',
            filename: 'red-team.html',
            estimatedMessages: 22
        },
        {
            id: 'star-trek-larp',
            title: 'Star Trek Roleplay Session',
            description: 'Creative roleplay session with Star Trek characters',
            category: 'Security',
            participants: ['NOTE', 'Quark', 'Query', 'Acknowledging', 'Thomas', 'Gemma'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'star-trek-larp.html',
            estimatedMessages: 40
        },
        {
            id: 'hidden-function',
            title: 'Hidden Function Development',
            description: 'Discussion on creating hidden programming functions',
            category: 'Security',
            participants: ['User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'hidden-function.html',
            estimatedMessages: 5
        },
        {
            id: 'shorthand',
            title: 'AI Shorthand Development Discussion',
            description: 'Development of compressed AI communication methods',
            category: 'Security',
            participants: ['User2', 'USER2', 'Improvements', 'Proposed', 'Deconstruction', 'Example', 'ser1', 'User1', 'Decomposition', 'User3', 'EPITAPH', 'Tradeoff', 'USER1', 'Vote', 'Introduce'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'shorthand.html',
            estimatedMessages: 31
        },
        {
            id: 'salty-vibes',
            title: 'Philosophical Discussion',
            description: 'Casual philosophical conversation and musings',
            category: 'Development',
            participants: ['Alternatively', 'User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'salty-vibes.html',
            estimatedMessages: 16
        },
        {
            id: 'dcc',
            title: 'DCC Technical Implementation',
            description: 'Technical discussion on DCC implementation',
            category: 'Development',
            participants: ['User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'dcc.html',
            estimatedMessages: 6
        }
    ]
};

// Export for module use or direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chatConfig;
} else {
    window.chatConfig = chatConfig;
}
