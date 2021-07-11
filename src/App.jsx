import { BrowserRouter as Router, Route } from "react-router-dom"
import { HomeSreen } from './screens/HomeSreen'

const App = () => {
    return (
        <Router>
            <Route path='/' component={HomeSreen} exact />
        </Router>
    )
}

export default App;