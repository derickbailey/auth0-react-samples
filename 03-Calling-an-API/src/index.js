import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import checkAuth0Config from './checkConfig';

const routes = checkAuth0Config(makeMainRoutes);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
