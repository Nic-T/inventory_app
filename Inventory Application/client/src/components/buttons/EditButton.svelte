
<script>
import { editProductOverlay } from "../../stores/OverlayStore";
import {selected} from "../../stores/productSelectionStore"


    function editSelection() {
        editProductOverlay.set(true)
    }   

</script>




<button on:click="{editSelection}" disabled={$selected == false}>
    Edit
</button>
