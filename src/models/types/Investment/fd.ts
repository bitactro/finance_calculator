import { z } from "zod";
import { FDRequest, FDReturnsResponse } from "../../schema/Investment/fd.js";

export type getFDReturnsRequest =  z.infer<typeof FDRequest>
export type getFDReturnsResponse =  z.infer<typeof FDReturnsResponse>