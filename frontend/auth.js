import { createAuthClient } from '@neon/neon-js';

export const authClient = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);
