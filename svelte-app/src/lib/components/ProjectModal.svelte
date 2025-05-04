<script>
    import { fade, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let open = false;
    export let onClose = () => {};

    /**
     * Close modal when Escape key is pressed
     */
    function handleKeydown(event) {
        if (event.key === 'Escape' && open) {
            onClose();
        }
    }

    onMount(() => {
        document.addEventListener('keydown', handleKeydown);
        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    });
</script>

{#if open}
    <div class="modal-backdrop" on:click={onClose} transition:fade={{ duration: 200 }}>
        <div 
            class="modal-container" 
            on:click|stopPropagation={() => {}}
            transition:scale={{ duration: 300, start: 0.95 }}
        >
            <button class="close-button" on:click={onClose}>×</button>
            
            <div class="modal-content">
                <div class="project-header">
                    <slot name="title"></slot>
                </div>
                
                <div class="project-main-image">
                    <slot name="main-image"></slot>
                </div>
                
                <div class="project-details">
                    <div class="project-info">
                        <div class="info-group">
                            <h4>Category</h4>
                            <slot name="category">-</slot>
                        </div>
                        
                        <div class="info-group">
                            <h4>Client</h4>
                            <slot name="client">-</slot>
                        </div>
                        
                        <div class="info-group">
                            <h4>Date</h4>
                            <slot name="date">-</slot>
                        </div>
                        
                        <div class="info-group">
                            <h4>Technologies</h4>
                            <slot name="technologies">-</slot>
                        </div>
                    </div>
                    
                    <div class="project-description">
                        <h4>Project Details</h4>
                        <slot name="details"></slot>
                    </div>
                </div>
                
                <div class="additional-images">
                    <h4>Gallery</h4>
                    <slot name="additional-images"></slot>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        overflow-y: auto;
        padding: 2rem 1rem;
        box-sizing: border-box;
    }
    
    .modal-container {
        position: relative;
        background-color: white;
        border-radius: 8px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    
    .close-button {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: none;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
        transition: background-color 0.2s ease;
    }
    
    .close-button:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .modal-content {
        padding: 2rem;
    }
    
    .project-header {
        margin-bottom: 1.5rem;
    }
    
    .project-main-image {
        margin-bottom: 2rem;
        border-radius: 4px;
        overflow: hidden;
    }
    
    .project-details {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .project-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .info-group h4 {
        margin: 0 0 0.5rem 0;
        font-weight: 600;
        color: #333;
    }
    
    .project-description h4 {
        margin: 0 0 1rem 0;
        font-weight: 600;
        color: #333;
    }
    
    .additional-images h4 {
        margin: 0 0 1rem 0;
        font-weight: 600;
        color: #333;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .project-details {
            grid-template-columns: 1fr;
        }
        
        .modal-container {
            max-height: 80vh;
        }
    }
</style>

