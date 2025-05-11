import { authentication, createDirectus, rest } from '@directus/sdk';

const client = createDirectus("https://directus.appliket.com").with(rest()).with(authentication("cookie", { credentials: "include" }));

export default client;