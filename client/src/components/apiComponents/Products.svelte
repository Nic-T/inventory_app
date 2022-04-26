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
    
    <main class="flex space-x-2">
        {#await products}
        <p>await</p>
    
        {:then products}
        
        {#each products as product}
        <div class="bg-blue-600 w-60 h-80 m-2 rounded p-2  relative z-0 active:-translate-y-1 transition-transform" on:click ={selectProduct(product.id)}>
            <h1 class="flex justify-center" > {product.name}</h1>
            <div class="absolute bottom-1 left-0 flex w-full justify-between">
                <p class="ml-2"> {product.price}</p>
                <p class="mr-2"> {product.stock}</p>   
            </div>
            
        </div>
            
        {/each}
        
        {:catch error}
            <p>{error.message}</p>
        {/await}
        
    </main>