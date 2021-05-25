import React from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Dragons', description: 'Dragons', price: '$100', image: 'https://i.etsystatic.com/22428673/r/il/210c47/3008107858/il_794xN.3008107858_o6r0.jpg' },
    { id: 2, name: 'Characters', description: 'Characters', price: '$30', image: 'https://i.etsystatic.com/22428673/r/il/894ca9/2943734845/il_794xN.2943734845_t551.jpg' },
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>


        </main>
    )
}

export default Products;