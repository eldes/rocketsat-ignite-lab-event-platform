import { Warning } from 'phosphor-react';
import { FormEventHandler, FunctionComponent, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import codeMockupImage from '../../assets/code-mockup.png';
import Logo from '../../components/Logo';
import { useCreateSubscriberMutation, usePublishSubscriberMutation } from '../../graphql/generated';

const SubscribePage: FunctionComponent = function () {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [ createSubscriber, { loading: loadingCreateSubscriber, error: errorCreateSubscriber, data } ] = useCreateSubscriberMutation();
  const [ publishSubscriber, { loading: loadingPublishSubscriber, error: errorPublishSubscriber } ] = usePublishSubscriberMutation();

  const handleSubscribe:FormEventHandler<HTMLFormElement> = function (event) {
    event.preventDefault();
    toast('Processando sua inscrição', {
      style: { backgroundColor: 'rgb(0, 135, 95)' }
    })
    createSubscriber({
      variables: {
        name,
        email,
      }
    })
    .then(function (response) {
      const id = response.data?.createSubscriber?.id
      if (id) {
        publishSubscriber({
          variables: {
            id
          }
        })
        .then(function () {
          toast('Inscrição realizada!', { style: { backgroundColor: 'rgb(129, 216, 247)' } });
          navigate('/event');
        })
        .catch(() => {
          toast('Ocorreu um erro ao processar sua inscrição', {
            style: { backgroundColor: 'rgb(234, 179, 8)' }
          })
        });
      } else {
        toast('Ocorreu um erro ao processar sua inscrição', {
          style: { backgroundColor: 'rgb(234, 179, 8)' }
        })
      }
    })
    .catch(() => {
      toast('Ocorreu um erro ao processar sua inscrição', {
        style: { backgroundColor: 'rgb(234, 179, 8)' }
      })
    });
  };

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className='p-8 bg-gray-700 border border-gray-500, rounded'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>
          {(errorCreateSubscriber || errorPublishSubscriber) && (
            <p className='text-sm text-yellow-500 px-4 pb-8 flex items-center gap-2'>
              <Warning size={24} /> Opa! Tente outro e-mail.
            </p>
          )}
         
          <form className='flex flex-col gap-2 w-full' onSubmit={handleSubscribe}>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='text'
              placeholder='Seu nome completo'
              onChange={e => setName(e.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type='email'
              placeholder='Digite seu e-mail'
              onChange={e => setEmail(e.target.value)}
            />
            {(loadingCreateSubscriber || loadingPublishSubscriber) ? (
              <button className='mt-4 bg-green-900 uppercase py-4 rounded font-bold text-sm flex justify-center' disabled>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processando...
              </button>
            ) : (
              <button className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors'>Garantir minha vaga</button>
            )}
          </form>
        </div>
      </div>
      <img src={codeMockupImage} alt='Code mockup' className='mt-10' />
    </div>
  );
};


export default SubscribePage;