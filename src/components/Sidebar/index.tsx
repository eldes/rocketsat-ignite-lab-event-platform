import { gql, useQuery } from '@apollo/client';
import Lesson, { GCMSLesson, LessonType } from '../../models/Lesson';
import LessonBox from '../LessonBox';

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      title
      slug
      id
      lessonType
      availableAt
    }
  }
`;

type GetLessonsQueryResponse = {
  lessons: GCMSLesson[] 
};

const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  
  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons?.map(gcmsLesson =>
          <LessonBox key={gcmsLesson.id} lesson={new Lesson(gcmsLesson)}/>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;