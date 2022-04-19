
<script>
import { viewProductOverlay } from "../../stores/OverlayStore";
import {selected} from "../../stores/productSelectionStore"

    function viewSelection() {
        viewProductOverlay.set(true)
    }   

</script>




<button on:click="{viewSelection}" disabled={$selected == false}>
    View
</button>
