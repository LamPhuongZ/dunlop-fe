import * as z from 'zod';

export const schema = z.object({
  otp: z
    .string()
    .length(4, { message: 'OTP must be exactly 4 digits' })
    .regex(/^\d{4}$/, { message: 'OTP must contain only digits' }),
});
