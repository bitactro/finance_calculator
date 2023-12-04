import { z } from 'zod'
export const FDRequest = z.object({
	time: z.number(),
	amount: z.number(),
	interestRate: z.number()
})

export const FDReturnsResponse = z.object({
	interestGain: z.number(),
	maturityAmount: z.number()
})