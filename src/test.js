import React from 'react'
import {Grid} from "@mui/material";
import './test.css'
function Test() {

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
 */

export {Test}