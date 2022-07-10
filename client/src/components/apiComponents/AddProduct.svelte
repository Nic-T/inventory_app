<script>
    
    import {dataStore} from '../../stores/dataStore'; 
    import { tokenStore } from '../../stores/tokenStore';
    import refreshToken from './refreshToken.svelte'

    let name;
    let description;
    let category;
    let price;
    let stock;
    let url;
    let token;
    let files;

    tokenStore.subscribe(value =>{
        token = value;
    })

    let bearerToken = `Bearer ${token}`;


    async function postData(){

        var formData = new FormData();

        formData.append('name', name);
        formData.append('description',description);
        formData.append('category', category);
        formData.append('price',price);
        formData.append('stock', stock);
        formData.append('url',url)
        formData.append('file',files[0])

        try {
        const res = await fetch(`http://localhost:3100/api/products`, {
            method:'POST',
            headers: {
                "Accept": "*/*",
                "Authorization": bearerToken,
            },
            
            body:formData,
        });
        dataStore.update(n=> n+1);
        return res.json();
        } catch (err) {
            refreshToken();
            console.error(err);
            
        }
        
        
    }
</script>

<div>

    <form class="flex flex-col space-y-4 p-2" on:submit|preventDefault={postData}>
       
        <input class="rounded p-1 text-gray-900" type="text" name="name" placeholder="name" bind:value={name}>
        <input class="rounded p-1 text-gray-900" type="text" name="description" placeholder="description" bind:value={description}>
        <input class="rounded p-1 text-gray-900" type="text" name= "category" placeholder="category" bind:value={category}>
        <input class="rounded p-1 text-gray-900" type="number" name="price" placeholder="price" bind:value={price}>
        <input class="rounded p-1 text-gray-900" type="number" name="stock" placeholder="stock" bind:value={stock}>
        <input class="rounded p-1 text-gray-900" type="url" name="url" placeholder="url" bind:value={url}>
        <input id='file' type="file" bind:files>
        <button class="rounded p-2 bg-cyan-500	text-white mt-4" type="submit">Add Product</button>
    </form>

</div>