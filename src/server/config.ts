export const serverConfig = {
    engage: {
        url: process.env.ENGAGE_API_URL || 'https://rest.metacommerce.app',
        apiKey: process.env.NEXT_PUBLIC_ENGAGE_JS_API_KEY!
    },
}