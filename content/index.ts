import { TopicData } from '../types/content';
import { capContent } from './foundations/topics/cap';
import { databasesContent } from './foundations/topics/databases';
import { networkingContent } from './foundations/topics/networking';
import { scalabilityContent } from './foundations/topics/scalability';
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

export const contentMap: Record<string, TopicData> = {
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
};








