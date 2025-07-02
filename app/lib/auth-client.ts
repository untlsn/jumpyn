import { createAuthClient } from 'better-auth/vue';

export const authClient = createAuthClient({

});

// Class wrapper over error returned from better-auth signUp and signIn
export class BetterAuthAuthError extends Error {
  code?: string;
  status: number;
  statusText: string;

  constructor(data: {
    code?: string | undefined;
    message?: string | undefined;
    status: number;
    statusText: string;
  }) {
    super(data.message);
    this.code = data.code;
    this.status = data.status;
    this.statusText = data.statusText;
  }
}
