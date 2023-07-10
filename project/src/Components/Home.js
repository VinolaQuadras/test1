import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container mt-4">
      <h1>Home</h1>

      <div className="row">
        <div className="col-md-6">
          <h3> HappyTravelling</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in hendrerit justo. 
            Vestibulum consequat mauris eget justo volutpat, sed finibus urna fermentum.
            Fusce volutpat diam id tellus semper convallis. Sed ac ligula pretium, placerat nunc vitae,
            tristique orci. Nulla ultricies tortor eu libero tincidunt, sed lobortis est iaculis.
          </p>
          <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>
        </div>

        </div>
    </div>
    
    </>
  )
}

export default Home