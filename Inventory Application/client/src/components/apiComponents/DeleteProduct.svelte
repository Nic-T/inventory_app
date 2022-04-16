<script>
    import {onMount} from 'svelte';
    import {dataStore} from '../../stores/dataStore'; 
    export let id;
    async function deleteProduct(){

        await fetch(`http://localhost:3100/api/products/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            origin: 'http://localhost:3100'
        });

        dataStore.update(n=> n+1);
    }

    onMount(() =>{
        deleteProduct();
    })

</script>

<button on:click="{deleteProduct}">
    Delete
</button>