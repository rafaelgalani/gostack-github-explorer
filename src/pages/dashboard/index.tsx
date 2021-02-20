import React, { useState, FormEvent } from 'react';
import { Form, RepositoryCard } from '../../components';
import { Repository } from '../../models';
import api from '../../services/github';

const Dashboard: React.FC = () => {

  const [ targetRepository, setTargetRepository ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ repositories, setRepositories ] = useState<Repository[]>([])

  const addSearchedRepository = async (event: FormEvent) => {
    event.preventDefault();
    const repository = await api.getRepository(targetRepository);

    if (!repository){
      setErrorMessage('Erro na busca pelo repositorio.')
      return;
    }

    setRepositories([...repositories, repository]);
    setErrorMessage('');
    setTargetRepository('');
  };

  return (
    <>
      <div>Dashboard</div>

      <Form onSubmit={addSearchedRepository}>
        <input value={targetRepository} onChange={e => setTargetRepository(e.target.value)}/>
        <button type="submit"/>
      </Form>

      {repositories.map(repository => (
        <RepositoryCard>
          <a key={repository.full_name} href="next">
            <img alt={repository.full_name} src={repository.full_name}></img>
            <div>
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