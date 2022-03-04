<script>
    import { onMount } from "svelte";
    let products = getProducts();
        async function getProducts() {
            const res = await fetch(`http://localhost:3100/api/products`)
            const product = await res.json();
            
            if (res.ok){
            return product;
        } else{
            throw new Error(json)
        }
        }
        
        
        
        onMount(() =>{
            products = getProducts();
        })
    </script>
    
    <main>
        {#await products}
        <p>await</p>
    
        {:then products}
        
        {#each products as product}
            <h1> {product.name}</h1>
            <h3> {product.description}</h3>
            <h3> {product.category}</h3>
            <p> {product.price}</p>
            <p> {product.stock}</p>
            <p> {product.url}</p>
        {/each}
        
        {:catch error}
            <p>{error.message}</p>
        {/await}
        
    </main>