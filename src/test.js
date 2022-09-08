import React ,{useState,useEffect} from 'react'
import axios from 'axios';
import './test.css'
function Test() {
  const [persons,setPersons] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      response=>{  setPersons(response.data)}
    )
  }, [])

  return(
    <div>
    {persons?.map(person=><li>{person.name}</li>)}
    </div>
    
  );

  
}
/*
<Grid container>
    <Grid lg={3}>
             {name}
     </Grid>
     <Grid lg={3}>
             <button>
     </Grid>
     <Grid lg={3}>
            <button>
     </Grid>
</Grid>
*/ 

/*
  {
            ingredientInfo.map((ingredient, index) => (
               <>
              <Grid container className="mainContainer"  spacing={0}>
                
                <Grid  item lg={2} xs={4} md={2} sm={2}>
                  <h2>Lettuce</h2>
                </Grid>
                  
                <Grid item lg={1} xs={2} md={1} sm={1}>
                  <button>More</button>
                </Grid>
                          
                <Grid item lg={1} xs={2} md={1} sm={1}>
                  <button>Less</button>
                </Grid>
            </Grid>
            </>
            ))
        }


        const ingredientInfo = ['Lettuce','Meat','Bacon','Cheese'];
  return (
    <>
    <Grid container className="mainContainer"  spacing={0}>
      
      <Grid  item lg={2} xs={4} md={2} sm={2}>
        <h2>Lettuce</h2>
      </Grid>
        
      <Grid item lg={1} xs={2} md={1} sm={1}>
        <button>More</button>
      </Grid>
                
      <Grid item lg={1} xs={2} md={1} sm={1}>
        <button>Less</button>
      </Grid>
  </Grid>
  </>
  );
 */

export {Test}