import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario}) => {

    const [repos, setRepos] = useState([]);
    const [estacarregando, setEstacarregando] = useState(true);

    useEffect(() => {
        setEstacarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resp => resp.json())
            .then(respJson => {
                setTimeout(() => {
                    setEstacarregando(false);
                    setRepos(respJson);
                }, 3000);
            })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estacarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguagem:</b> {language}
                            </div>                            
                            <a target="_blank" className={styles.itemLink} href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );

}


export default ReposList;