// import React from 'react'

import Card from '../../Ui/StatusCard/StatusCard'

export default function Status() {
  return (
    <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                   <Card counter="120" title="Projects" icon="fa-building"/>          
                </div>
                <div className="col-12 col-md-3">
                   <Card counter="150" title="Users" icon="fa-users"/>          
                </div>
                <div className="col-12 col-md-3">
                   <Card counter="200" title="Developers" icon="fa-code"/>           
                </div>
                <div className="col-12 col-md-3">
                   <Card counter="50" title="Blogs" icon="fa-blog"/>           
                </div>
            </div>
        </div>
    </section>
  )
}
