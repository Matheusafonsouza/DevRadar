import React from 'react';

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div className="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
