import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { history } from '../history'

import register from '../pages/register'
import home from '../pages/home'

//informar uma Route, sendo o path o "link" e o component o import da sua pagina
const root = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/register" exact component={register} />
            <Route exact path="/" exact component={home} />
        </Switch>
    </Router>
)

export default root
