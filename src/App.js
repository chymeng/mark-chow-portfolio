import React, { Component } from 'react'
import Favicon from 'react-favicon'
import favicon from './images/favicon.jpg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../src/styles/App.css'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Secret from './components/Secret'

class App extends Component {
  routes = [
    {
      path: '/',
      exact: true,
      main: () => <Home />
    },
    {
      path: '/about',
      exact: true,
      header: () => <Header />,
      main: () => <About />
    },
    {
      path: '/projects',
      exact: true,
      header: () => <Header />,
      main: () => <Projects />
    },
    {
      path: '/contact',
      exact: true,
      header: () => <Header />,
      main: () => <Contact />
    },
    {
      path: '/experience',
      exact: true,
      header: () => <Header />,
      main: () => <Experience />
    },
    {
      path: '/behind-the-scenes',
      exact: true,
      header: () => <Header />,
      main: () => <Secret />
    }
  ]
  render() {
    return (
      <Router>
        <div className="app-container">
          <div className="app">
            <Favicon url={favicon} />
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.header}
              />
            ))}
            <Switch>
              {this.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
