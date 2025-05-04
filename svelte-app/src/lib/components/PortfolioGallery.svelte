<script>
    export let items = [];
    export let columns = 3;
    export let gap = '1rem';
    export let showDescription = true;
</script>

<div class="portfolio-gallery" style="--columns: {columns}; --gap: {gap};">
    {#each items as item}
        <div class="gallery-item">
            <div class="image-container" style="background-color: black;">
                <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    on:error={(e) => {
                        // If image fails to load, set a placeholder color background
                        e.target.style.backgroundColor = item.placeholderColor || '#333';
                        e.target.style.display = 'flex';
                        e.target.style.alignItems = 'center';
                        e.target.style.justifyContent = 'center';
                        // Replace the image with a placeholder text
                        e.target.outerHTML = `<div class="placeholder-img" style="background-color: black;">
                            <span>${item.title || 'Image Placeholder'}</span>
                            <span class="click-details">Click for more details</span>
                        </div>`;
                    }}
                />
                <div class="overlay">
                    <h3>{item.title}</h3>
                    <p class="click-details">Click for more details</p>
                    {#if showDescription && item.description}
                        <p>{item.description}</p>
                    {/if}
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .portfolio-gallery {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: var(--gap);
        width: 100%;
        margin: 2rem 0;
    }

    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        min-height: 300px;
        aspect-ratio: 4/3;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: black;
    }

    .image-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        min-height: 300px;
        aspect-ratio: 4/3;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        min-height: 300px;
        opacity: 0.7;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        text-align: center;
    }
    
    p {
        margin: 0;
        font-size: 0.9rem;
        opacity: 0.9;
        text-align: center;
    }
    
    .click-details {
        font-size: 1rem;
        margin: 0.5rem 0 1rem 0;
        font-weight: bold;
        color: #f5f5f5;
        text-decoration: underline;
    }

    .placeholder-img {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
        box-sizing: border-box;
        border-radius: 0.5rem;
        background-color: black;
    }

    .placeholder-img span {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Responsive adjustments */
    @media (max-width: 1024px) {
        .portfolio-gallery {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 640px) {
        .portfolio-gallery {
            grid-template-columns: 1fr;
        }
    }
</style>

