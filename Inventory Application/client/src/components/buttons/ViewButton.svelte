
<script>
import { viewProductOverlay } from "../../stores/OverlayStore";


    function viewSelection() {
        viewProductOverlay.set(true)
    }   

</script>




<button on:click="{viewSelection}">
    View
</button>
