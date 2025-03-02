document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupTabFiltering();
});

// Define all projects manually with proper categorization
const projects = [
    // Nostr Relays
    {
        name: "aegis",
        description: "Premium relay and blossom service that allows relay operators to earn income by providing relay services to the network. Built on the Khatru framework.",
        tags: ["nostr", "relay", "premium-service", "blossom", "paid-relay"],
        githubRepo: "bitvora/aegis",
        language: "Go"
    },
    {
        name: "algo-relay",
        description: "An algorithm relay for nostr - build your own feed with custom algorithmic preferences. The first algorithmic relay for the Nostr protocol.",
        tags: ["nostr", "relay", "algorithmic-feed", "content-curation", "personalization"],
        githubRepo: "bitvora/algo-relay",
        language: "Go"
    },
    {
        name: "haven",
        description: "High Availability Vault for Events on Nostr - the most sovereign personal relay for the Nostr protocol. Store your data, control your experience.",
        tags: ["nostr", "relay", "personal-relay", "data-sovereignty", "self-hosting"],
        githubRepo: "bitvora/haven", 
        language: "Go"
    },
    {
        name: "wot-relay",
        description: "A specialized Nostr relay that saves all notes from people you follow and people they follow, creating a dynamic web of trust for content discovery.",
        tags: ["nostr", "relay", "web-of-trust", "social-graph", "content-discovery"],
        githubRepo: "bitvora/wot-relay",
        language: "Go"
    },
    {
        name: "sw2",
        description: "Nostr Relay: Simple With Whitelisting - A specialized relay focused on data archiving and long-term storage of Nostr events.",
        tags: ["nostr", "relay", "data-archiving", "long-term-storage", "event-history"],
        githubRepo: "bitvora/sw2",
        language: "Go"
    },
    {
        name: "wallet-relay",
        description: "High performance relay for enabling NWC & Cashu Wallets - optimized for Lightning Network integration and payment-related events.",
        tags: ["nostr", "relay", "lightning-network", "nwc", "payments", "zaps", "cashu"],
        githubRepo: "bitvora/wallet-relay",
        language: "Go"
    },
    {
        name: "relay-discovery",
        description: "Nostr relay discovery service to help clients find the best relays for their needs.",
        tags: ["nostr", "relay", "discovery-service", "relay-finder", "infrastructure"],
        githubRepo: "bitvora/relay-discovery",
        language: "Go"
    },
    {
        name: "team-relay",
        description: "Specialized relay for team collaboration on Nostr.",
        tags: ["nostr", "relay", "team-collaboration", "workgroups", "organizational"],
        githubRepo: "bitvora/team-relay",
        language: "Go"
    },
    {
        name: "fren-relay",
        description: "A Nostr relay focused on friend connections and social networking.",
        tags: ["nostr", "relay", "social-networking", "friends-graph", "connections"],
        githubRepo: "bitvora/fren-relay",
        language: "Go"
    },

    // Nostr Bots
    {
        name: "nostr-slack",
        description: "A go application to post nostr events to your slack channels - bridging Nostr and Slack communications.",
        tags: ["nostr", "bot", "slack-integration", "cross-platform", "messaging-bridge"],
        githubRepo: "bitvora/nostr-slack",
        language: "Go"
    },
    {
        name: "Rektbot",
        description: "A Nostr bot that reports leveraged bitcoin liquidations in real-time.",
        tags: ["nostr", "bot", "bitcoin-liquidations", "trading-data", "market-monitoring"],
        githubRepo: null,
        externalUrl: "https://njump.me/rektbot@utxo.one",  
        language: "Go"
    },
    {
        name: "Newsbot",
        description: "A Nostr bot that reports news from over 50 sources.",
        tags: ["nostr", "bot", "news-aggregator", "multi-source", "feed-service"],
        githubRepo: null,
        externalUrl: "https://feedbots.utxo.one",
        language: "Go"
    },

    // Bitcoin & SDK Projects
    {
        name: "bitvora.com",
        description: "The official Bitvora website - your gateway to Bitcoin and Nostr infrastructure.",
        tags: ["bitcoin", "infrastructure", "platform", "services", "developer-tools"],
        githubRepo: null,
        externalUrl: "https://bitvora.com",
        language: "N/A"
    },
    {
        name: "bitvora-ts",
        description: "Bitvora Typescript SDK - Build Bitcoin applications with TypeScript.",
        tags: ["bitcoin", "sdk", "typescript", "developer-tools", "api-client"],
        githubRepo: "bitvora/bitvora-ts",
        language: "TypeScript"
    },
    {
        name: "go-bitvora",
        description: "Go SDK for the Bitvora API - Build Bitcoin applications with Go.",
        tags: ["bitcoin", "sdk", "golang", "developer-tools", "api-client"],
        githubRepo: "bitvora/go-bitvora",
        language: "Go"
    },
    {
        name: "bitvora-py",
        description: "Python SDK for the Bitvora API - Build Bitcoin applications with Python.",
        tags: ["bitcoin", "sdk", "python", "developer-tools", "api-client"],
        githubRepo: "bitvora/bitvora-py",
        language: "Python"
    },
    {
        name: "bitvora-php",
        description: "PHP SDK for the Bitvora API - Build Bitcoin applications with PHP.",
        tags: ["bitcoin", "sdk", "php", "developer-tools", "api-client"],
        githubRepo: "bitvora/bitvora-php",
        language: "PHP"
    },
    {
        name: "bitvora-rs",
        description: "Rust SDK for the Bitvora API - Build Bitcoin applications with Rust.",
        tags: ["bitcoin", "sdk", "rust", "developer-tools", "api-client"],
        githubRepo: "bitvora/bitvora-rs",
        language: "Rust"
    },
    {
        name: "bitvora-nestjs",
        description: "An example implementation of Bitvora SDK for NestJS",
        tags: ["bitcoin", "sdk", "typescript", "nestjs", "example-implementation", "framework-integration"],
        githubRepo: "bitvora/bitvora-nestjs-example",
        language: "TypeScript"
    },
    {
        name: "bitvora-pos",
        description: "Bitcoin point-of-sale system powered by Bitvora.",
        tags: ["bitcoin", "point-of-sale", "payment-processing", "merchant-tools", "retail"],
        githubRepo: "bitvora/bitvora-pos",
        language: "TypeScript"
    }
];

function loadProjects() {
    // Clear containers
    document.getElementById('repo-container-nostr').innerHTML = '';
    document.getElementById('repo-container-bots').innerHTML = '';
    document.getElementById('repo-container-bitcoin').innerHTML = '';
    
    // Filter projects by category
    const nostrRelays = projects.filter(project => 
        project.tags.includes("nostr") && project.tags.includes("relay")
    );
    
    const nostrBots = projects.filter(project => 
        project.tags.includes("nostr") && project.tags.includes("bot")
    );
    
    const bitcoinProjects = projects.filter(project => 
        (project.tags.includes("bitcoin") || project.tags.includes("sdk")) && 
        !project.tags.includes("nostr")
    );
    
    // Populate containers
    nostrRelays.forEach(project => {
        const card = createProjectCard(project);
        document.getElementById('repo-container-nostr').appendChild(card);
    });
    
    nostrBots.forEach(project => {
        const card = createProjectCard(project);
        document.getElementById('repo-container-bots').appendChild(card);
    });
    
    bitcoinProjects.forEach(project => {
        const card = createProjectCard(project);
        document.getElementById('repo-container-bitcoin').appendChild(card);
    });
}

function createProjectCard(project) {
    // Create card element
    const card = document.createElement('div');
    card.className = 'repo-card';
    card.dataset.tags = project.tags.join(' ');
    
    if (project.githubRepo) {
        card.dataset.repo = project.githubRepo;
    }
    
    // Language class
    let langClass = 'lang-other';
    if (project.language) {
        langClass = `lang-${project.language.toLowerCase()}`;
    }
    
    // Determine URL and button text
    let projectUrl = project.externalUrl || '';
    let buttonText = 'View Project';
    
    if (project.githubRepo) {
        projectUrl = `https://github.com/${project.githubRepo}`;
        buttonText = 'View Repository';
    }
    
    // Build card HTML without stats
    card.innerHTML = `
        <div class="repo-header">
            <h3 class="repo-title">${project.name}</h3>
            <a href="#" class="repo-lang ${langClass}">${project.language || 'n/a'}</a>
        </div>
        
        <div class="repo-description">
            ${project.description || 'No description available'}
        </div>
        
        <div class="tags-container">
            ${project.tags.map(tag => {
                let className = 'cyber-badge';
                if (tag === 'nostr') className += ' tag-nostr';
                if (tag === 'bitcoin') className += ' tag-bitcoin';
                return `<span class="${className}">${tag}</span>`;
            }).join('')}
        </div>
        
        <a href="${projectUrl}" class="btn btn-sm utxo-btn" target="_blank">${buttonText}</a>
    `;
    
    return card;
}

function setupTabFiltering() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter projects
            const filter = tab.dataset.filter;
            const cards = document.querySelectorAll('.repo-card');
            
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (card.dataset.tags && card.dataset.tags.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Remove or comment out these functions as they're redundant with the modifications above
/*
function updateStatistics(repositories) {
    // This functionality has been incorporated into fetchGitHubData
    // ...
}

async function fetchRepositories() {
    // This functionality has been incorporated into fetchGitHubData
    // ...
}
*/ 