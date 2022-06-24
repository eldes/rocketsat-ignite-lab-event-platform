import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Lesson, { LessonType } from '../../models/Lesson';

type Props = {
  lesson: Lesson
};

const LessonBox:FunctionComponent<Props> = ({lesson}) => {
  const isLessonAvailable = isPast(lesson.availableAt);
  
  return (
    <Link to={`/event/lessons/${lesson.slug}`} className='group'>
      <span className='text-gray-300'>
        {format(lesson.availableAt, "EEEE '•' d 'de' MMMM '•' k'h'mm", {locale: ptBR})}
      </span>
      <div className='rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
              <Lock size={20} />
              Em breve
            </span>
          )}
          
          <span className='text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold uppercase'>
            {lesson.lessonType === LessonType.Live ? 'ao vivo' : 'aula prática'}
          </span>
        </header>
        <strong className='block text-gray-200 mt-5'>
          {lesson.title}
        </strong>
      </div>
    </Link>
  );
};

export default LessonBox;