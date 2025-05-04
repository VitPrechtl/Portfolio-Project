<script>

</script>


<footer>
    <p>always learning</p>
    <img src="/brand_img/Brand_SmileyDeadFace_straightOn.png" alt="Dead Smiley Face Icon" class="icon">
    <p>always growing.</p>
</footer>


<style>

main {
    padding: 2rem;
    text-align: center;
}

footer {
    display: flex;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    align-items: center;
    justify-content: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    gap: 2px;
}

.icon {
    width: 50px;
    display: block;
    margin-top: -5px;
}



/* Mobile: Reduce padding for a more compact look */
@media (max-width: 768px) {
    footer {
        padding: 0.75rem;
        position: fixed;
        font-size: 0.9rem;
    }
    .icon {
    width: 40px;
    margin-top: -5px;
    }
}
</style>