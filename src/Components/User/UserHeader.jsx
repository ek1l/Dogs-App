import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const { pathname } = useLocation();
  console.log(pathname);
  React.useEffect(() => {
    if (pathname === '/conta/postar') setTitle('Postar');
    if (pathname === '/conta/estatisticas') setTitle('Estatísticas');
    if (pathname === '/conta') setTitle('Conta');
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
