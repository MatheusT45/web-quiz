import { DataSource } from 'typeorm';
import { Question } from './question.entity';

export const QuestionProvider = [
  {
    provide: 'QUESTION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Question),
    inject: ['DATA_SOURCE'],
  },
];
