import React, { useEffect } from 'react'

import Search from '../components/search/search'
import Login from '../login'
import { setUserToken } from '../store/user'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { redirect } from '../spotifyendpoint'

function Navigation () {
  const dispatch = useDispatch()
  const userToken = useSelector(state => state.user.userToken)

  useEffect(() => {
    const hash = window.location.hash
    window.location.hash = ''

    if (!userToken && hash) {
      const _token = hash.split('&')[0].split('=')[1]
      window.localStorage.setItem('token', _token)
      dispatch(setUserToken(_token))
    }
  }, [userToken, dispatch]
  )

  // console.log(token)

  return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    {userToken
                      ? <Redirect to="/create-playlist" />
                      : <div id="app">
                            <header className="App-header-2">
                                <Login/>
                            </header>
                        </div>
                    }
                </Route>
                <Route path="/create-playlist" exact={true}>
                    {userToken
                      ? <div id="app">
                            <div className='container-button'>
                                <a className="sp_button" href={redirect}>
                                    <div className="logout-btn">Logout</div>
                                </a>
                                <a className="sp_button" href={redirect}>
                                    <div className="profile-btn">Profile</div>
                                </a>
                            </div>
                            <header className="App-header">
                                <Search/>
                            </header>
                        </div>
                      : <Redirect to="/" />}
                </Route>
            </Switch>
        </Router>
  )
}

export default Navigation
