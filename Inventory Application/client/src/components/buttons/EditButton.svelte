
<script>
import { editProductOverlay } from "../../stores/OverlayStore";



    function editSelection() {
        editProductOverlay.set(true)
    }   

</script>




<button on:click="{editSelection}">
    Edit
</button>
