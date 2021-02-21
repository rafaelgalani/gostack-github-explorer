import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RepositoryForm, RepositoryCard, FormErrorMessage } from '../../components';
import { Title } from '../../components/form';
import { Repository } from '../../models';
import api from '../../services/github';

const Dashboard: React.FC = () => {

  const [ targetRepository, setTargetRepository ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ repositories, setRepositories ] = useState<Repository[]>((): Repository[] => {
    const savedRepositories = JSON.parse(
      window.localStorage.getItem('@repositories_app/repositories') || '[]'
    );
    return savedRepositories as Repository[];
  });

  useEffect(() => window.localStorage.setItem('@repositories_app/repositories', JSON.stringify(repositories)), [ repositories ]);

  const addSearchedRepository = async (event: FormEvent) => {
    event.preventDefault();

    if (!targetRepository){
      setErrorMessage('Digite algum repositório para buscar.')
      return;
    }
    
    if (repositories.find(repo => repo.full_name === targetRepository)){
      setErrorMessage('Esse repositório já foi adicionado a lista.')
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
        <RepositoryCard key={repository.full_name} className="repository">
          <Link to={`/repository/${repository.full_name}`}>
            <img alt={repository.full_name} src={repository.owner.avatar_url}></img>
            <div className="details">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </Link>
        </RepositoryCard>
      ))}
      
    </>
  );
}

export default Dashboard;