<script>
    
    let name;
    let description;
    let category;
    let price;
    let stock;
    let url;
    
    

    async function postData(){
         


        const res = await fetch(`http://localhost:3000/api/products`, {
            method:'POST',
            mode: 'cors',
            
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                
            },
            origin: 'http://localhost:3000',
            body: JSON.stringify({name:name, description:description, category:category,price:price,stock:stock,url:url}),
        });
        return res.json();
    }

</script>

<main>

    <form on:submit|preventDefault={postData}>
        <input type="text" name="name" placeholder="name" bind:value={name}>
        <input type="text" name="description" placeholder="description" bind:value={description}>
        <input type="text" name= "category" placeholder="category" bind:value={category}>
        <input type="number" name="price" placeholder="price" bind:value={price}>
        <input type="number" name="stock" placeholder="stock" bind:value={stock}>
        <input type="url" name="url" placeholder="url" bind:value={url}>
        <button type="submit"> Add Product</button>
    </form>

</main>