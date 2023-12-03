import { z } from "zod"
export function validate<T extends z.ZodTypeAny>(request:any, schema:T){
    return schema.parse(request)
}