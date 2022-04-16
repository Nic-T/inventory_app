<script>
    import { onMount } from "svelte";
    import { dataStore } from '../../stores/dataStore'
    import { selected, selectedId } from '../../stores/productSelectionStore'

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
        
        dataStore.subscribe(() => {
            products = getProducts();
        })
        
        onMount(() =>{
            products = getProducts();
        })

        function selectProduct(id) {

            selectedId.set(id);
            selected.set(true);
            
        }

    </script>
    
    <main>
        {#await products}
        <p>await</p>
    
        {:then products}
        
        {#each products as product}
        <div on:click ={selectProduct(product.id)}>
            <h1> {product.id}</h1>
            <h1> {product.name}</h1>
            <h3> {product.description}</h3>
            <h3> {product.category}</h3>
            <p> {product.price}</p>
            <p> {product.stock}</p>
            <p> {product.url}</p>
        </div>
            
        {/each}
        
        {:catch error}
            <p>{error.message}</p>
        {/await}
        
    </main>