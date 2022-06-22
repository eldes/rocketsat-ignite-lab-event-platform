import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import './styles.css';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
      }
    }
  }
`;

type Teacher = {
  name: string
};

type Lesson = {
  id: number
  title: string
  teacher: Teacher
};

const App = () => {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <main className='App'>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </main>
  );
};

export default App;
