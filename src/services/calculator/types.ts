import { getFDReturnsRequest, getFDReturnsResponse } from "../../models/types/Investment/fd.js"
export interface IInvestmentCalculation {
    fd: (req: getFDReturnsRequest)=> Promise<getFDReturnsResponse>
}