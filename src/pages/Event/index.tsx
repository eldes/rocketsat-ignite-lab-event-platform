import { ArrowCircleRight } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Video from '../../components/Video';

type Params = {
  slug: string
};

const EventPage = () => {
  const {slug} = useParams<Params>();
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {(slug) ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className='flex-1 pt-[40vh] text-gray-300 text-xl'>
            <span className='flex flex-row items-center justify-center gap-2'>
              Escolha um conteúdo para começar
              <ArrowCircleRight size={24} weight="light" className='animate-pulse text-blue-500' />
            </span>
            
          </div>
        )}
        <Sidebar />
      </main>      
    </div>
  );
};

export default EventPage;