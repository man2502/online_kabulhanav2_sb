import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import { Loading } from 'src/App'




const TheContent = () => {

  return (
    <main className="c-main" style={{backgroundColor:'#fff'}}>
      <CContainer fluid>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/select" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}



export default React.memo(TheContent)
