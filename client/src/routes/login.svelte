<script>
    import { goto } from '$app/navigation';
    import {tokenStore} from '../stores/tokenStore'
    let username;
    let password;

        function login() {

        const res = fetch(`http://localhost:3100/api/authentification/login`, {
            method: 'POST',
            mode: 'cors',

            headers: {
                'Content-Type': 'application/json',
                "Accept": "*/*",
            },
            origin: 'http://localhost:3100',
            body: JSON.stringify({username:username, password:password})
        }).then(function(response) {
            return response.text();
            }).then(function(data) {
                tokenStore.set(data);
                })
                goto('/') 
    }


</script>

<main>

    <form on:submit|preventDefault={login}>
    
        <input type="text" name="username" placeholder="username" bind:value={username}/>
        <input type="password" name="password" placeholder="password" bind:value={password}/>
        <button type="submit">Login</button>

    </form>


</main>