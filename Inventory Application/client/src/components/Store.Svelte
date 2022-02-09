

<script>
import { onMount } from "svelte";
let products = getProducts();

    async function getProducts() {
        const res = await fetch(`http://localhost:3000/api/products`)
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
    {/each}
    
    {:catch error}
        <p>{error.message}</p>
    {/await}
    
</main>