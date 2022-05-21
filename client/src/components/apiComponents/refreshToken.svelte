<script>
import { tokenStore } from '../../stores/tokenStore';
async function refreshToken(){
        
        const res = await fetch(`http://localhost:3100/api/authentification/refresh_token`, {
            method:'GET',
            headers: {
                "Accept": "*/*",
            },
        }).then(function(response) {
            return response.text();
            }).then(function(data) {
                tokenStore.set(data);
                console.log(data)
                })
    
            }
</script>