import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header } from '../../components/molecules'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = () => {
   return (
      <div className="bg-gray-100">
         
         <Header />
         
         {/* Content */}
         <div className="mx-auto w-screen">
            <Router >
               <Switch>
                  <Route path="/create-blog">
                     <CreateBlog />
                  </Route>
                  <Route path="/detail-blog">
                     <DetailBlog />
                  </Route>
                  <Route path="/">
                     <Home />
                  </Route>
               </Switch>
            </Router>
         </div>
         {/* EndContent */}
         
         <Footer />
      </div>
   )
}

export default MainApp
