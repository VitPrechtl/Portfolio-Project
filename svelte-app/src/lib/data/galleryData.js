// Sample gallery data for different service categories
export const galleryItems = {
    // Animation service portfolio items
    animation: [
        {
            id: 'anim1',
            title: '3D Logo Animation',
            description: '3D Logo animation for jewellery brand',
            imageUrl: '/images/portfolio/animation/LogoAnimation_preview.jpg'
        },
        {
            id: 'anim2',
            title: '깨진 Title Animation',
            description: 'Broken Title Animation',
            imageUrl: '/images/portfolio/animation/Broken_Title_Animation.jpg'
        },
        {
            id: 'anim3',
            title: 'Album Visual',
            description: 'Sample Music Album Visual',
            imageUrl: '/images/portfolio/animation/AlbumVisual.jpg'
        },
    ],

    // Modeling and Texturing service portfolio items
    modelingAndTexturing: [
        {
            id: 'model1',
            title: 'Game Ready Model',
            description: 'Detailed 3D model of a dystopian exit sign',
            imageUrl: '/images/portfolio/modeling/ExitSign_Model.jpg'
        },
        {
            id: 'model2',
            title: 'Game Ready Lanterns',
            description: '3D GameReady Japanese Lantern Models',
            imageUrl: '/images/portfolio/modeling/Lantern_Models.jpg'
        },
        {
            id: 'model3',
            title: 'Chappie Full Recreation',
            description: 'Fully Rigged Robot Character',
            imageUrl: '/images/portfolio/modeling/ChappieCharacter_Model.jpg'
        },
        {
            id: 'model4',
            title: 'Game Japanese Street Assets',
            description: 'Modeling and photorealistic texturing for a game cinematic',
            imageUrl: '/images/portfolio/modeling/LiamWongInspiredRender_Clay.jpg'
        },
        {
            id: 'model5',
            title: '3D Digital Double',
            description: 'Digital double for a movie S.T.A.L.K.E.R. Shadow of the Zone',
            imageUrl: '/images/portfolio/modeling/Stalker_Weaver_DigitalDouble.jpg'
        },
        {
            id: 'model6',
            title: 'Game Ready Prop',
            description: 'Tech Gadget model for a video game',
            imageUrl: '/images/portfolio/modeling/LittleGadget_Model.jpg'
        }
    ],

    // Product Visualization service portfolio items
    productViz: [
        {
            id: 'viz1',
            title: 'CocaCola Billboard Ad',
            description: 'Photorealistic rendering of CocaCola for a billboard advertising.',
            imageUrl: '/images/portfolio/product-viz/CocaCola_BillboardAd.png'
        },
        {
            id: 'viz2',
            title: 'Jack Daniels Visualisation',
            description: 'Jack Daniels animation and product visuals for advertising',
            imageUrl: '/images/portfolio/product-viz/JackDaniels_ProductRendering.png'
        },
        {
            id: 'viz3',
            title: 'Kyu Camera Visualisation',
            description: 'Product visualisation for Kyu Japan Camera',
            imageUrl: '/images/portfolio/product-viz/KyuJapan_Advertising.png'
        },
    ],

    // Rendering service portfolio items
    rendering: [
        {
            id: 'render1',
            title: 'Architectural Visualization',
            description: 'Exterior rendering of modern residential building',
            imageUrl: '/images/portfolio/product-viz/CocaCola_BillboardAd.png'
        },
        {
            id: 'render2',
            title: 'Interior Design',
            description: 'Photorealistic interior visualization for luxury apartment',
            imageUrl: '/images/portfolio/product-viz/CocaCola_BillboardAd.png'
        },
        {
            id: 'render3',
            title: 'Landscape Rendering',
            description: 'Urban landscape visualization for city planning project',
            imageUrl: '/images/portfolio/product-viz/CocaCola_BillboardAd.png'
        },
        {
            id: 'render4',
            title: 'Lighting Study',
            description: 'Advanced lighting visualization for architectural project',
            imageUrl: '/images/portfolio/product-viz/CocaCola_BillboardAd.png'
        }
    ],

    // VFX and CGI service portfolio items
    vfxCgi: [
        {
            id: 'vfx1',
            title: 'Toyota AE86',
            description: 'Full CGI Car Rendering',
            imageUrl: '/images/portfolio/vfx/Trueno_FullCGI.png'
        },
        {
            id: 'vfx2',
            title: 'Blade Runner shot recreation',
            description: 'Blade Runner Full CGI recreation',
            imageUrl: '/images/portfolio/vfx/BladeRunner_Shot.png'
        },
        {
            id: 'vfx3',
            title: 'Cthulhu Styleframe Design',
            description: 'Cthulhu Styleframe design for a title sequence',
            imageUrl: '/images/portfolio/vfx/Cthulhu_Styleframe.jpg'
        },
    ]
};

// Fallback colors for portfolio items when images aren't available
export const fallbackColors = [
    '#3498db', // Blue
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#f39c12', // Orange
    '#9b59b6', // Purple
    '#1abc9c'  // Teal
];

// Function to get gallery items with fallback colors if needed
export function getGalleryItems(category) {
    if (galleryItems[category]) {
        return galleryItems[category].map((item, index) => ({
            ...item,
            placeholderColor: fallbackColors[index % fallbackColors.length]
        }));
    }
    
    // Return default items if category doesn't exist
    return Array(4).fill().map((_, index) => {
        const color = fallbackColors[index % fallbackColors.length];
        return {
            id: `default-${index}`,
            title: `${category || 'Portfolio'} Item ${index + 1}`,
            description: 'Sample portfolio item',
            imageUrl: '/images/placeholder.jpg', // This will trigger the error handler
            placeholderColor: color
        };
    });
}

