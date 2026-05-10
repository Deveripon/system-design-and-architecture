import { TopicData } from '../types/content';
import { capContent } from './foundations/topics/cap';
import { databasesContent } from './foundations/topics/databases';
import { networkingContent } from './foundations/topics/networking';
import { scalabilityContent } from './foundations/topics/scalability';
import { introductionContent } from './foundations/topics/introduction';
import { cachingContent } from './core-components/topics/caching';
import { loadBalancingContent } from './core-components/topics/load-balancing';
import { messageQueuesContent } from './core-components/topics/message-queues';
import { apiDesignContent } from './core-components/topics/api-design';
import { dbShardingContent } from './core-components/topics/db-sharding';
import { cdnStorageContent } from './core-components/topics/cdn-storage';
import { microservicesContent } from './distributed-systems/topics/microservices';
import { consensusContent } from './distributed-systems/topics/consensus';
import { resilienceContent } from './distributed-systems/topics/resilience';
import { throttlingContent } from './distributed-systems/topics/throttling';
import { serviceDiscoveryContent } from './distributed-systems/topics/service-discovery';
import { sagaPatternContent } from './distributed-systems/topics/saga-pattern';
import { tinyurlContent } from './real-world-systems/topics/tinyurl';
import { twitterContent } from './real-world-systems/topics/twitter';
import { youtubeContent } from './real-world-systems/topics/youtube';
import { whatsappContent } from './real-world-systems/topics/whatsapp';
import { amazonContent } from './real-world-systems/topics/amazon';
import { searchEngineContent } from './real-world-systems/topics/search-engine';
import { uberContent } from './real-world-systems/topics/uber';
import { securityContent } from './advanced-topics/topics/security';
import { observabilityContent } from './advanced-topics/topics/observability';
import { cloudArchContent } from './advanced-topics/topics/cloud-arch';
import { advancedDsContent } from './advanced-topics/topics/advanced-ds';
import { cqrsEventSourcingContent } from './advanced-topics/topics/cqrs-event-sourcing';
import { deploymentPatternsContent } from './advanced-topics/topics/deployment-patterns';

export const contentMap: Record<string, TopicData> = {
    introduction: introductionContent,
    scalability: scalabilityContent,
    networking: networkingContent,
    databases: databasesContent,
    'cap-theorem': capContent,
    caching: cachingContent,
    'load-balancing': loadBalancingContent,
    'message-queues': messageQueuesContent,
    'api-design': apiDesignContent,
    'db-sharding': dbShardingContent,
    'cdn-storage': cdnStorageContent,
    microservices: microservicesContent,
    consensus: consensusContent,
    resilience: resilienceContent,
    throttling: throttlingContent,
    'service-discovery': serviceDiscoveryContent,
    'saga-pattern': sagaPatternContent,
    tinyurl: tinyurlContent,
    twitter: twitterContent,
    youtube: youtubeContent,
    whatsapp: whatsappContent,
    amazon: amazonContent,
    'search-engine': searchEngineContent,
    uber: uberContent,
    security: securityContent,
    observability: observabilityContent,
    'cloud-arch': cloudArchContent,
    'cqrs-event-sourcing': cqrsEventSourcingContent,
    'deployment-patterns': deploymentPatternsContent,
    'advanced-ds': advancedDsContent,
};




