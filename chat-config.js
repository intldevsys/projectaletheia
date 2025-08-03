// Chat configuration and session metadata
const chatConfig = {
    // GitHub Pages configuration
    baseUrl: './',
    
    // Session categories
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
        }
,\n        {
            id: 'star-trek-larp',
            title: 'Star Trek Roleplay Session',
            description: 'Chat session with 6 participants',
            category: 'Security',
            participants: ['NOTE', 'Quark', 'Query', 'Acknowledging', 'Thomas', 'Gemma'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'star-trek-larp.html',
            estimatedMessages: 40
        },\n        {
            id: 'hidden-function',
            title: 'Hidden Function Development',
            description: 'Chat session with 3 participants',
            category: 'Security',
            participants: ['User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'hidden-function.html',
            estimatedMessages: 5
        },\n        {
            id: 'shorthand',
            title: 'AI Shorthand Development Discussion',
            description: 'Chat session with 15 participants',
            category: 'Security',
            participants: ['User2', 'USER2', 'Improvements', 'Proposed', 'Deconstruction', 'Example', 'ser1', 'User1', 'Decomposition', 'User3', 'EPITAPH', 'Tradeoff', 'USER1', 'Vote', 'Introduce'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'shorthand.html',
            estimatedMessages: 31
        },\n        {
            id: 'salty-vibes',
            title: 'Philosophical Discussion',
            description: 'Chat session with 4 participants',
            category: 'Development',
            participants: ['Alternatively', 'User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'salty-vibes.html',
            estimatedMessages: 16
        },\n        {
            id: 'dcc',
            title: 'DCC Technical Implementation',
            description: 'Chat session with 3 participants',
            category: 'Development',
            participants: ['User1', 'User2', 'User3'],
            date: '2025-08-02',
            status: 'completed',
            filename: 'dcc.html',
            estimatedMessages: 6
        }\n    ]
};

// Export for module use or direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chatConfig;
} else {
    window.chatConfig = chatConfig;
}
