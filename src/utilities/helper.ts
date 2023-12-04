import { z } from 'zod'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validate<T extends z.ZodTypeAny>(request:any, schema:T){
	return schema.parse(request)
}