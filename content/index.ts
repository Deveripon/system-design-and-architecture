import { TopicData } from '../types/content';

// Phase 0: Introduction
import { introductionContent } from './introduction/topics/01-introduction';

// Phase 1: Foundations
import { scalabilityContent } from './foundations/topics/01-scalability';
import { loadBalancingContent } from './foundations/topics/02-load-balancing';
import { networkingContent } from './foundations/topics/03-networking';
import { cdnStorageContent } from './foundations/topics/04-cdn-storage';

// Phase 2: Databases & Storage
import { databasesContent } from './databases-storage/topics/01-databases';
import { cachingContent } from './databases-storage/topics/02-caching';
import { dbShardingContent } from './databases-storage/topics/03-db-sharding';
import { capContent } from './databases-storage/topics/04-cap-theorem';

// Phase 3: Distributed Systems
import { messageQueuesContent } from './distributed-systems/topics/01-message-queues';
import { apiDesignContent } from './distributed-systems/topics/02-api-design';
import { microservicesContent } from './distributed-systems/topics/03-microservices';
import { consensusContent } from './distributed-systems/topics/04-consensus';
import { resilienceContent } from './distributed-systems/topics/05-resilience';
import { throttlingContent } from './distributed-systems/topics/06-throttling';
import { serviceDiscoveryContent } from './distributed-systems/topics/07-service-discovery';
import { sagaPatternContent } from './distributed-systems/topics/08-saga-pattern';

// Phase 4: Real-World Systems
import { twitterContent } from './real-world-systems/topics/01-twitter';
import { youtubeContent } from './real-world-systems/topics/02-youtube';
import { tinyurlContent } from './real-world-systems/topics/03-tinyurl';
import { whatsappContent } from './real-world-systems/topics/04-whatsapp';
import { amazonContent } from './real-world-systems/topics/05-amazon';
import { searchEngineContent } from './real-world-systems/topics/06-search-engine';
import { uberContent } from './real-world-systems/topics/07-uber';

// Phase 5: Advanced Topics
import { securityContent } from './advanced-topics/topics/01-security';
import { observabilityContent } from './advanced-topics/topics/02-observability';
import { cloudArchContent } from './advanced-topics/topics/03-cloud-arch';
import { cqrsEventSourcingContent } from './advanced-topics/topics/04-cqrs-event-sourcing';
import { deploymentPatternsContent } from './advanced-topics/topics/05-deployment-patterns';
import { advancedDsContent } from './advanced-topics/topics/06-advanced-ds';

export const contentMap: Record<string, TopicData> = {
    // Phase 0
    introduction: introductionContent,

    // Phase 1
    scalability: scalabilityContent,
    'load-balancing': loadBalancingContent,
    networking: networkingContent,
    'cdn-storage': cdnStorageContent,

    // Phase 2
    databases: databasesContent,
    caching: cachingContent,
    'db-sharding': dbShardingContent,
    'cap-theorem': capContent,

    // Phase 3
    'message-queues': messageQueuesContent,
    'api-design': apiDesignContent,
    microservices: microservicesContent,
    consensus: consensusContent,
    resilience: resilienceContent,
    throttling: throttlingContent,
    'service-discovery': serviceDiscoveryContent,
    'saga-pattern': sagaPatternContent,

    // Phase 4
    twitter: twitterContent,
    youtube: youtubeContent,
    tinyurl: tinyurlContent,
    whatsapp: whatsappContent,
    amazon: amazonContent,
    'search-engine': searchEngineContent,
    uber: uberContent,

    // Phase 5
    security: securityContent,
    observability: observabilityContent,
    'cloud-arch': cloudArchContent,
    'cqrs-event-sourcing': cqrsEventSourcingContent,
    'deployment-patterns': deploymentPatternsContent,
    'advanced-ds': advancedDsContent,
};




