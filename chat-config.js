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
    ]
};

// Export for module use or direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chatConfig;
} else {
    window.chatConfig = chatConfig;
}