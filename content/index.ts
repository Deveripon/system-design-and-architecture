import { TopicData } from '../types/content';
import { capContent } from './foundations/topics/cap';
import { databasesContent } from './foundations/topics/databases';
import { networkingContent } from './foundations/topics/networking';
import { scalabilityContent } from './foundations/topics/scalability';

export const contentMap: Record<string, TopicData> = {
    scalability: scalabilityContent,
    networking: networkingContent,
    databases: databasesContent,
    'cap-theorem': capContent,
};

