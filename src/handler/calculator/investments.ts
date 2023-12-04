import { FDRequest } from '../../models/schema/Investment/fd.js'
import { IInvestmentCalculation } from '../../services/calculator/types.js'
import { validate } from '../../utilities/helper.js'
import { IInvestmentHandler } from './type.js'
export class InvestmentHandler implements IInvestmentHandler{
    
	constructor(private readonly service: IInvestmentCalculation){}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getFDReturn = async (req: any): Promise<any> => {
		const queryRequest = {
			time: Number(req?.query?.time),
			amount: Number(req?.query?.amount),
			interestRate: Number(req?.query?.rate)
		}
		const getFdReturnsRequest = validate(queryRequest, FDRequest)
		return this.service.fd(getFdReturnsRequest)
	}
}