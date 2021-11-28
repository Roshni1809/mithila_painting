import Card from './Cards'
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"
import paintings from '../db.json'

function Home() {

  const classes = {
    main: {
      padding: '0 2rem'
    }
  }
  
  return (

     <div className="App">
       <ParallaxProvider>
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: '/images/banner.jpg',
              amount: 0.5,
            },
            {
              children : <h1 style ={{
                color : 'Black',
                fontSize: '30px',
                textAlign: 'center',
                marginTop: '20rem',
              }}>This is the  Banner Children</h1>,
              amount: 0,
            },
          ]}
          style={{
            height: '50rem',
          }}
        >
        </ParallaxBanner> 

      </ParallaxProvider>
       {paintings.map(painting => {
        return (
          <div style={classes.main} >
          < Card
            id={painting.id}
            painting={painting}
          />
          </div>
        )
      })} 
    </div>
  );
}

export default Home;
