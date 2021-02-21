import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { RepositoryDetail, RepositoryIssue } from '../../components';
import { Issue, Repository } from '../../models';
import api from '../../services/github';

type RepositoryDetailedInfo = Repository & {
  stargazers_count: number
  forks_count: number
  open_issues: number
}

const RepositoryDetailPage: React.FC = () => {
  const { params } = useRouteMatch<{ repository: string }>();
  
  const [ repository, setRepository ] = useState<RepositoryDetailedInfo | null>(null);
  const [ issues, setIssues ] = useState<Issue[]>([]);
  
  useEffect(() => {
    (async () => {
        setRepository(
          await api.getRepository(params.repository) as RepositoryDetailedInfo
        );

        setIssues(
          await api.getIssues(params.repository) as Issue[]
        );
    })()
  }, [ params.repository ]);

  return (
    <>
      <RepositoryDetail className="repository">
        <img alt={repository?.full_name} src={repository?.owner?.avatar_url}></img>
        <div className="details">
          <strong>{repository?.full_name}</strong>
          <p>{repository?.description}</p>
        </div>
        <div className="numbers">
          <ul>
            <li>
              <b>{repository?.stargazers_count ?? 0}</b>
              <p>Stars</p>
            </li>
            <li>
              <b>{repository?.forks_count ?? 0}</b>
              <p>Forks</p>
            </li>
            <li>
              <b>{repository?.open_issues ?? 0}</b>
              <p>Issues</p>
            </li>
          </ul>
        </div>
      </RepositoryDetail>
      
      {issues.map(issue => (
        <RepositoryIssue key={issue.number} className="issue">
          <a href={issue.html_url} className="details">
            <strong>{issue.title} - #{issue.number}</strong>
            <p>Aberta por {issue.user.login}</p>
          </a>
        </RepositoryIssue>
      ))}
      
    </>
  );
}

export default RepositoryDetailPage;