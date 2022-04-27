<script>

    let username;
    let password;

    async function login() {

        const res = await fetch(`http://localhost:3100/api/authentification/login`, {
            method: 'POST',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            credentials: "include",
            origin: 'http://localhost:3100',
            body: JSON.stringify({username:username, password:password})
        });
        return res.json()

    }

    

</script>

<main>

    <form on:submit|preventDefault={login}>
    
        <input type="text" name="username" placeholder="username" bind:value={username}/>
        <input type="password" name="password" placegolder="password" bind:value={password}/>
        <button type="submit">Login</button>

    </form>

</main>