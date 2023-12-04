import { getFDReturnsRequest, getFDReturnsResponse } from "../../models/types/Investment/fd.js";
import { IInvestmentCalculation } from "./types.js";

export class InvestmentCalculation implements IInvestmentCalculation{
    
   fd = async (request: getFDReturnsRequest): Promise<getFDReturnsResponse> => {
    // quarterly compunding 
    const calculateInterest = request.amount * Math.pow( (1 + request.interestRate/400), 4*request.time) - request.amount
    const compundinterestGain = Math.round((calculateInterest + Number.EPSILON) * 100) / 100
    return {
        interestGain: compundinterestGain,
        maturityAmount: Math.round((request.amount +compundinterestGain + Number.EPSILON) * 100) / 100
    }
   }
}