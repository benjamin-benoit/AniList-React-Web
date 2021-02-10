import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ROUTES from './constants'
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
      </Switch>
    </Router>
  )
}
