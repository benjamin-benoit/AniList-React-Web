import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import ROUTES from './constants'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Router>
  )
}
