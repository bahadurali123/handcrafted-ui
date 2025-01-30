const config = {
    backendBaseUrl: String(import.meta.env.VITE_BACKEND_API_URL),
    recaptchaKey: String(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
    tinymceApiKey: String(import.meta.env.VITE_TINYMCE_API_KEY),
    paypalClientId: String(import.meta.env.VITE_PAYPAL_CLIENT_ID),
    stripePublicId: String(import.meta.env.VITE_STRIPE_PUBLISH_KEY),
    productCategoryId: String(import.meta.env.VITE_PRODUCT_ID),
    blogCategoryId: String(import.meta.env.VITE_PRODUCT_ID),
}

export default config;