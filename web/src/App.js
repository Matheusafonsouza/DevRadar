import React, { useEffect, useState } from 'react';
import api from './services/api';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs',{
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data);
  }

  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit} >
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required 
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42722634?s=460&u=4c1088c0c5e646a2f32e49e0e8d5c1649398377b&v=4" alt="Matheus Afonso"/>
              <div className="user-info">
                <strong>Matheus Afonso</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia maneira para ficar de teste</p>
            <a href="https://github.com/Matheusafonsouza">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42722634?s=460&u=4c1088c0c5e646a2f32e49e0e8d5c1649398377b&v=4" alt="Matheus Afonso"/>
              <div className="user-info">
                <strong>Matheus Afonso</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia maneira para ficar de teste</p>
            <a href="https://github.com/Matheusafonsouza">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/42722634?s=460&u=4c1088c0c5e646a2f32e49e0e8d5c1649398377b&v=4" alt="Matheus Afonso"/>
              <div className="user-info">
                <strong>Matheus Afonso</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia maneira para ficar de teste</p>
            <a href="https://github.com/Matheusafonsouza">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
