import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Team } from './Team';

export const Leadership: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about/team', { replace: true });
  }, [navigate]);

  return <Team />;
};
