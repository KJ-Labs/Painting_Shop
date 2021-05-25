import React from 'react';

import Grid from '@material-ui/core'

const products = [
    {id: 1, name: 'Dragons', description: 'Dragons', price: '$100'},
    {id: 2, name: 'Characters', description: 'Characters', price: '$30'},
]

const Products = () => {
<main>

<Grid container justify="center" spacing={4}> 

{products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/> 
          </Grid>
))}

</Grid>


</main>

}

export default Products; 