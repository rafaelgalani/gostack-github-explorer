import React, { useState, FormEvent } from 'react';
import { RepositoryForm, RepositoryCard, FormErrorMessage } from '../../components';
import { Title } from '../../components/form';
import { Repository } from '../../models';
import api from '../../services/github';

const Dashboard: React.FC = () => {

  const [ targetRepository, setTargetRepository ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ repositories, setRepositories ] = useState<Repository[]>([{
    fork: true,
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/18705930?s=460&u=01684a95040a0c5c8cbf59b3275283d8f5ebe053&v=4'
    },
    full_name: 'rafaelgalani/gutenberg',
    description: "The Block Editor project for WordPress and beyond. Plugin is available from the official repository."
  },
  {
    fork: true,
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/18705930?s=460&u=01684a95040a0c5c8cbf59b3275283d8f5ebe053&v=4'
    },
    full_name: 'rafaelgalani/gutenberg',
    description: "The Block Editor project for WordPress and beyond. Plugin is available from the official repository."
  },
  {
    fork: true,
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/18705930?s=460&u=01684a95040a0c5c8cbf59b3275283d8f5ebe053&v=4'
    },
    full_name: 'rafaelgalani/gutenberg',
    description: "The Block Editor project for WordPress and beyond. Plugin is available from the official repository."
  }])

  const addSearchedRepository = async (event: FormEvent) => {
    event.preventDefault();

    if (!targetRepository){
      setErrorMessage('Digite algum repositório para buscar.')
      return;
    }

    const repository = await api.getRepository(targetRepository);

    if (!repository){
      setErrorMessage('Erro na busca pelo repositório.')
      setTargetRepository('')
      return;
    }

    setRepositories([...repositories, repository]);
    setErrorMessage('');
    setTargetRepository('');
  };

  return (
    <>
      <Title>Explore repositórios no Github.</Title>

      <RepositoryForm hasError={!!errorMessage} onSubmit={addSearchedRepository}>
        <input className="name" placeholder="Nome do repositório (autor/repositório)" value={targetRepository} onChange={e => setTargetRepository(e.target.value.toLowerCase())}/>
        <button type="submit">Pesquisar</button>
        {errorMessage && (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        )}
      </RepositoryForm>

      {repositories.map(repository => (
        <RepositoryCard className="repository">
          <a key={repository.full_name} href="next">
            <img alt={repository.full_name} src={repository.owner.avatar_url}></img>
            <div className="details">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </a>
        </RepositoryCard>
      ))}
      
    </>
  );
}

export default Dashboard;